# Maze Generator & Pathfinding Simulator

---

## Overview

- A maze generation and solving simulation built using **Unity** and **C#**, with pixel art assets designed in **Aseprite**
- Generates mazes of arbitrary dimensions, giving full control over maze size and complexity
- Simulates and visualizes multiple pathfinding algorithms — **DFS**, **BFS**, and **A\*** — stepping through each one so the traversal logic is clearly observable
- Designed as a learning project to deeply understand both procedural generation and graph traversal algorithms through hands-on implementation

---

## Tech Stack

- **Unity** — game engine used for rendering, simulation loop, and grid management
- **C#** — core language for all logic including maze generation, pathfinding algorithms, and UI interaction
- **Aseprite** — pixel art tool used to design the visual assets for the maze tiles, walls, and algorithm state indicators

---

## Maze Generation

- The maze is represented internally as a **grid graph**, where each cell is a node and open passages are edges between nodes
- Generation uses **Recursive Backtracking (DFS-based)**, which carves passages through the grid by visiting unvisited neighbors recursively and backtracking when stuck
- The algorithm guarantees a **perfect maze** — every cell is reachable and there is exactly one unique path between any two cells, meaning no loops and no isolated regions
- Maze dimensions are configurable, allowing generation from tiny grids to large complex mazes
- The generation process can be visualized step-by-step or completed instantly depending on the chosen mode

---

## Pathfinding Algorithms

## Depth First Search (DFS)

- Explores as far as possible down a single path before backtracking
- Uses a **stack** (or recursion) to track the current traversal path
- Does **not** guarantee the shortest path — it finds *a* path, not necessarily the *best* one
- Tends to produce long winding paths that hug walls and explore deep into the maze before correcting course
- Useful for demonstrating how blind exploration works without any heuristic guidance

## Breadth First Search (BFS)

- Explores all neighbors at the current depth before moving to the next level, radiating outward from the start
- Uses a **queue** to manage the frontier of nodes to visit
- Guarantees the **shortest path** in an unweighted graph, making it optimal for uniform-cost mazes
- Visits significantly more nodes than A\* before reaching the goal, clearly visible in the simulation
- Useful for demonstrating how exhaustive level-order search works and why it guarantees optimality

## A\* (A-Star)

- Combines the cost to reach the current node (g) with a heuristic estimate of the cost to reach the goal (h), prioritizing nodes with the lowest f = g + h
- Uses a **priority queue (min-heap)** to always expand the most promising node first
- Uses **Manhattan distance** as the heuristic, appropriate for grid-based movement without diagonal support
- Guarantees the **shortest path** while visiting far fewer nodes than BFS, making it significantly more efficient
- Clearly demonstrates the power of informed search over uninformed approaches like BFS and DFS

---

## Visualization

- Each algorithm runs as a **step-by-step simulation**, coloring cells to represent different states
- Visited nodes, the current frontier, the active path, and the final solution are each shown in distinct colors
- The speed of simulation is adjustable, allowing slow inspection of each traversal decision or fast playback
- Assets designed in Aseprite give the maze a clean pixel art aesthetic with clear visual distinction between walls, passages, and algorithm states

---

## Key Learnings

- Implemented graph traversal from scratch in a real-time visual environment, reinforcing how DFS, BFS, and A\* differ in strategy and performance
- Understood the practical impact of heuristics — how A\* dramatically reduces unnecessary exploration compared to uninformed search
- Gained experience with procedural generation, specifically how recursive backtracking produces solvable, well-structured mazes
- Practiced working with Unity's grid system, coroutines for step-by-step simulation, and clean separation of generation logic from rendering logic
- Built intuition for algorithm trade-offs: completeness, optimality, and time/space complexity — observed visually rather than just theoretically