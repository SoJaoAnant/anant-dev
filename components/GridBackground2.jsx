"use client";

import { useEffect, useRef, useCallback } from "react";

const TILE_SIZE = 20;
const FADE_DURATION = 800;   // ms per tile fade
const MAX_TRAIL = 24;        // max tiles kept in the snake trail

// Bresenham's line algorithm — returns all grid cells between two points
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
  const containerRef  = useRef(null);
  const colsRef       = useRef(0);
  const rowsRef       = useRef(0);
  // tileMap[row][col] = DOM element
  const tileMapRef    = useRef([]);
  // trail: array of { row, col } in order oldest → newest
  const trailRef      = useRef([]);
  // per-tile fade RAF ids: key = "row,col"
  const fadeRAFs      = useRef({});
  // last grid position of the cursor
  const lastPosRef    = useRef(null);

  // ─── fade a single tile out from its current opacity ───────────────────────
  const fadeTile = useCallback((row, col) => {
    const tile = tileMapRef.current[row]?.[col];
    if (!tile) return;

    const key = `${row},${col}`;
    if (fadeRAFs.current[key]) cancelAnimationFrame(fadeRAFs.current[key]);

    const startOpacity = parseFloat(tile.style.getPropertyValue("--glow-opacity")) || 0;
    if (startOpacity <= 0) return;

    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / FADE_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
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

  // ─── light a tile immediately ───────────────────────────────────────────────
  const lightTile = useCallback((row, col) => {
    const tile = tileMapRef.current[row]?.[col];
    if (!tile) return;
    const key = `${row},${col}`;
    if (fadeRAFs.current[key]) {
      cancelAnimationFrame(fadeRAFs.current[key]);
      delete fadeRAFs.current[key];
    }
    tile.style.setProperty("--glow-opacity", 1);
  }, []);

  // ─── handle mouse move on the container ────────────────────────────────────
  const handleMouseMove = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const col = Math.floor((e.clientX - rect.left) / TILE_SIZE);
    const row = Math.floor((e.clientY - rect.top)  / TILE_SIZE);

    // clamp to grid bounds
    if (col < 0 || col >= colsRef.current || row < 0 || row >= rowsRef.current) return;

    const last = lastPosRef.current;
    lastPosRef.current = { row, col };

    // get cells to light up (Bresenham from last pos, or just current tile)
    const newCells = last
      ? bresenham(last.col, last.row, col, row)
      : [[col, row]];

    // light all new cells and append to trail
    for (const [c, r] of newCells) {
      lightTile(r, c);
      trailRef.current.push({ row: r, col: c });
    }

    // trim trail to MAX_TRAIL — fade out evicted tiles
    while (trailRef.current.length > MAX_TRAIL) {
      const evicted = trailRef.current.shift();
      fadeTile(evicted.row, evicted.col);
    }
  }, [lightTile, fadeTile]);

  // ─── when cursor leaves the grid, fade everything out snake-style ──────────
  const handleMouseLeave = useCallback(() => {
    lastPosRef.current = null;
    const trail = [...trailRef.current];
    trail.forEach(({ row, col }, i) => {
      // stagger: oldest fades first, newest last
      setTimeout(() => fadeTile(row, col), i * 30);
    });
    trailRef.current = [];
  }, [fadeTile]);

  // ─── build the DOM grid ────────────────────────────────────────────────────
  const buildGrid = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    Object.values(fadeRAFs.current).forEach(cancelAnimationFrame);
    fadeRAFs.current = {};
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
    container.addEventListener("mousemove",  handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const observer = new ResizeObserver(buildGrid);
    observer.observe(container);

    return () => {
      observer.disconnect();
      container.removeEventListener("mousemove",  handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      Object.values(fadeRAFs.current).forEach(cancelAnimationFrame);
    };
  }, [buildGrid, handleMouseMove, handleMouseLeave]);

  return (
    <>
      <style>{`
        .grid-background {
          position: fixed;
          inset: 0;
          background: #000;
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
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(59, 130, 246, calc(var(--glow-opacity) * 0.5));
          box-shadow: inset 0 0 0 1px rgba(96, 165, 250, calc(var(--glow-opacity) * 0.6));
          cursor: default;
          pointer-events: none;
        }

        .grid-content {
          position: relative;
          z-index: 10;
        }
      `}</style>

      <div className="grid-background">
        <div className="grid-container" ref={containerRef} />
      </div>

      <div className="grid-content">{children}</div>
    </>
  );
}