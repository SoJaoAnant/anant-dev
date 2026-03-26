"use client";

import { useEffect, useRef, useCallback } from "react";

const TILE_SIZE      = 20;
const FADE_DURATION  = 400;   // ms — trail tile fade
const MAX_TRAIL      = 2;    // snake trail length

// Firework config
const FIREWORK_ARMS    = 8;                          // 8 directions
const FIREWORK_LENGTH  = 5;                          // tiles per arm
const FIREWORK_DELAY   = 50;                         // ms stagger between tiles along each arm
const FIREWORK_HOLD    = 10;                        // ms a tile stays fully lit before fading
const FIREWORK_FADE    = 600;                        // ms fade duration per firework tile
// 8 evenly-spaced directions: N, NE, E, SE, S, SW, W, NW
const DIRECTIONS = Array.from({ length: FIREWORK_ARMS }, (_, i) => {
  const angle = (i * Math.PI * 2) / FIREWORK_ARMS;
  return { dc: Math.round(Math.cos(angle)), dr: Math.round(Math.sin(angle)) };
});

// Bresenham's line — returns [x,y] grid cells from (x0,y0) to (x1,y1)
function bresenham(x0, y0, x1, y1) {
  const cells = [];
  let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
  let dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
  let err = dx + dy;
  while (true) {
    cells.push([x0, y0]);
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 >= dy) { err += dy; x0 += sx; }
    if (e2 <= dx) { err += dx; y0 += sy; }
  }
  return cells;
}

export default function GridBackground({ children }) {
  const containerRef = useRef(null);
  const colsRef      = useRef(0);
  const rowsRef      = useRef(0);
  const tileMapRef   = useRef([]);       // tileMap[row][col] = DOM el
  const trailRef     = useRef([]);       // snake trail queue
  const fadeRAFs     = useRef({});       // key="row,col" → RAF id
  const lastPosRef   = useRef(null);
  const timeoutsRef  = useRef([]);       // firework setTimeout ids

  // ─── generic: fade a tile from its current opacity ──────────────────────────
  const fadeTile = useCallback((row, col, duration = FADE_DURATION) => {
    const tile = tileMapRef.current[row]?.[col];
    if (!tile) return;
    const key = `${row},${col}`;
    if (fadeRAFs.current[key]) cancelAnimationFrame(fadeRAFs.current[key]);

    const startOpacity = parseFloat(tile.style.getPropertyValue("--glow-opacity")) || 0;
    if (startOpacity <= 0) return;

    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      tile.style.setProperty("--glow-opacity", startOpacity * (1 - eased));
      if (progress < 1) {
        fadeRAFs.current[key] = requestAnimationFrame(step);
      } else {
        tile.style.setProperty("--glow-opacity", 0);
        delete fadeRAFs.current[key];
      }
    };
    fadeRAFs.current[key] = requestAnimationFrame(step);
  }, []);

  // ─── light a tile instantly ──────────────────────────────────────────────────
  const lightTile = useCallback((row, col) => {
    const tile = tileMapRef.current[row]?.[col];
    if (!tile) return;
    const key = `${row},${col}`;
    if (fadeRAFs.current[key]) { cancelAnimationFrame(fadeRAFs.current[key]); delete fadeRAFs.current[key]; }
    tile.style.setProperty("--glow-opacity", 1);
  }, []);

  // ─── firework: 8 arms shoot outward, ripple-fade (origin first, tip last) ───
  const triggerFirework = useCallback((originRow, originCol) => {
    DIRECTIONS.forEach(({ dr, dc }) => {
      for (let step = 1; step <= FIREWORK_LENGTH; step++) {
        const r = originRow + dr * step;
        const c = originCol + dc * step;
        if (r < 0 || r >= rowsRef.current || c < 0 || c >= colsRef.current) continue;

        // light up with stagger along arm
        const lightDelay = step * FIREWORK_DELAY;
        // ripple fade: origin tiles (low step) fade first → subtract from max delay
        const fadeDelay  = lightDelay + FIREWORK_HOLD + (FIREWORK_LENGTH - step) * FIREWORK_DELAY;

        const t1 = setTimeout(() => lightTile(r, c), lightDelay);
        const t2 = setTimeout(() => fadeTile(r, c, FIREWORK_FADE), fadeDelay);
        timeoutsRef.current.push(t1, t2);
      }
    });
  }, [lightTile, fadeTile]);

  // ─── mouse move → snake trail ────────────────────────────────────────────────
  const handleMouseMove = useCallback((e) => {
    // Use viewport/client coords so the effect still works when other
    // fixed UI layers (like the MusicPlayer) sit on top.
    const col = Math.floor(e.clientX / TILE_SIZE);
    const row = Math.floor(e.clientY / TILE_SIZE);
    if (col < 0 || col >= colsRef.current || row < 0 || row >= rowsRef.current) return;

    const last = lastPosRef.current;
    lastPosRef.current = { row, col };

    const newCells = last ? bresenham(last.col, last.row, col, row) : [[col, row]];
    for (const [c, r] of newCells) {
      lightTile(r, c);
      trailRef.current.push({ row: r, col: c });
    }
    while (trailRef.current.length > MAX_TRAIL) {
      const evicted = trailRef.current.shift();
      fadeTile(evicted.row, evicted.col);
    }
  }, [lightTile, fadeTile]);

  // ─── click → firework ────────────────────────────────────────────────────────
  const handleClick = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const col = Math.floor((e.clientX - rect.left) / TILE_SIZE);
    const row = Math.floor((e.clientY - rect.top)  / TILE_SIZE);
    if (col < 0 || col >= colsRef.current || row < 0 || row >= rowsRef.current) return;
    triggerFirework(row, col);
  }, [triggerFirework]);

  // ─── mouse leave → drain trail snake-style ───────────────────────────────────
  const handleMouseLeave = useCallback(() => {
    lastPosRef.current = null;
    const trail = [...trailRef.current];
    trail.forEach(({ row, col }, i) => {
      setTimeout(() => fadeTile(row, col), i * 30);
    });
    trailRef.current = [];
  }, [fadeTile]);

  // ─── build DOM grid ───────────────────────────────────────────────────────────
  const buildGrid = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    Object.values(fadeRAFs.current).forEach(cancelAnimationFrame);
    fadeRAFs.current = {};
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    trailRef.current = [];
    lastPosRef.current = null;

    const { offsetWidth: w, offsetHeight: h } = container;
    const cols = Math.ceil(w / TILE_SIZE) + 1;
    const rows = Math.ceil(h / TILE_SIZE) + 1;
    colsRef.current = cols;
    rowsRef.current = rows;

    container.style.setProperty("--cols", cols);
    container.style.setProperty("--rows", rows);
    container.querySelectorAll(".grid-tile").forEach((t) => t.remove());

    const map = [];
    const fragment = document.createDocumentFragment();
    for (let r = 0; r < rows; r++) {
      map[r] = [];
      for (let c = 0; c < cols; c++) {
        const tile = document.createElement("div");
        tile.className = "grid-tile";
        tile.style.setProperty("--glow-opacity", 0);
        map[r][c] = tile;
        fragment.appendChild(tile);
      }
    }
    tileMapRef.current = map;
    container.appendChild(fragment);
  }, []);

  useEffect(() => {
    buildGrid();
    const container = containerRef.current;
    window.addEventListener("mousemove",  handleMouseMove);
    window.addEventListener("blur", handleMouseLeave);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click",      handleClick);

    const observer = new ResizeObserver(buildGrid);
    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove",  handleMouseMove);
      window.removeEventListener("blur", handleMouseLeave);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click",      handleClick);
      Object.values(fadeRAFs.current).forEach(cancelAnimationFrame);
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [buildGrid, handleMouseMove, handleMouseLeave, handleClick]);

  return (
    <>
      <style>{`
        .grid-background {
          position: fixed;
          inset: 0;
          background: #101010;
          overflow: hidden;
          z-index: 0;
        }
        .grid-container {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(var(--cols), ${TILE_SIZE}px);
          grid-template-rows: repeat(var(--rows), ${TILE_SIZE}px);
        }
        .grid-tile {
          width: ${TILE_SIZE}px;
          height: ${TILE_SIZE}px;
          border: 1px solid rgba(255, 255, 255, 0.01);
          background: rgba(9, 130, 246, calc(var(--glow-opacity) * 0.5));
          box-shadow: inset 0 0 2px 1px rgba(96, 165, 250, calc(var(--glow-opacity) * 0.5)), 0 0 8px rgba(96, 165, 250, calc(var(--glow-opacity) * 0.6));
          pointer-events: none;
        }
        .grid-content {
          position: relative;
          z-index: 10;
          pointer-events: auto;
        }
      `}</style>

      <div className="grid-background">
        <div className="grid-container" ref={containerRef} />
      </div>
      <div className="grid-content">{children}</div>
    </>
  );
}