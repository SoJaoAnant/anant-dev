"use client";

import { useEffect, useRef, useCallback } from "react";

export default function GridBackground({ children }) {
  const containerRef = useRef(null);
  const tilesRef = useRef([]);
  const animationFrames = useRef({});

  const TILE_SIZE = 20; // px, matches Tailwind's 12 (3rem)
  const FADE_DURATION = 1200; // ms

  const fadeOut = useCallback((tile, startOpacity) => {
    const id = tile.dataset.id;
    if (animationFrames.current[id]) {
      cancelAnimationFrame(animationFrames.current[id]);
    }

    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / FADE_DURATION, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const opacity = startOpacity * (1 - eased);
      tile.style.setProperty("--glow-opacity", opacity);

      if (progress < 1) {
        animationFrames.current[id] = requestAnimationFrame(step);
      } else {
        tile.style.setProperty("--glow-opacity", 0);
        delete animationFrames.current[id];
      }
    };

    animationFrames.current[id] = requestAnimationFrame(step);
  }, []);

  const buildGrid = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Cancel all pending animations
    Object.values(animationFrames.current).forEach(cancelAnimationFrame);
    animationFrames.current = {};

    const { offsetWidth: w, offsetHeight: h } = container;
    const cols = Math.ceil(w / TILE_SIZE) + 1;
    const rows = Math.ceil(h / TILE_SIZE) + 1;

    container.style.setProperty("--cols", cols);
    container.style.setProperty("--rows", rows);

    // Remove old tiles
    const existing = container.querySelectorAll(".grid-tile");
    existing.forEach((t) => t.remove());

    const fragment = document.createDocumentFragment();
    let id = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const tile = document.createElement("div");
        tile.className = "grid-tile";
        tile.dataset.id = id++;
        tile.style.setProperty("--glow-opacity", 0);

        tile.addEventListener("mouseenter", () => {
          const tileId = tile.dataset.id;
          if (animationFrames.current[tileId]) {
            cancelAnimationFrame(animationFrames.current[tileId]);
            delete animationFrames.current[tileId];
          }
          tile.style.setProperty("--glow-opacity", 1);
        });

        tile.addEventListener("mouseleave", () => {
          fadeOut(tile, 1);
        });

        fragment.appendChild(tile);
        tilesRef.current.push(tile);
      }
    }

    container.appendChild(fragment);
  }, [fadeOut]);

  useEffect(() => {
    buildGrid();

    const observer = new ResizeObserver(() => {
      tilesRef.current = [];
      buildGrid();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      Object.values(animationFrames.current).forEach(cancelAnimationFrame);
    };
  }, [buildGrid]);

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
          transition: border-color 0.15s ease;
          cursor: default;
        }

        .grid-tile:hover {
          border-color: rgba(96, 165, 250, 0.4);
          z-index: 1;
        }

        .grid-content {
          position: relative;
          z-index: 10;
          /* Let mouse events reach tiles even when content (hero) sits on top */
          pointer-events: none;
        }
      `}</style>

      <div className="grid-background">
        <div className="grid-container" ref={containerRef} />
      </div>

      <div className="grid-content">{children}</div>
    </>
  );
}