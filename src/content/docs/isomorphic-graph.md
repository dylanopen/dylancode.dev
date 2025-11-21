---
title: Isomorphic graph
---

Two graphs are *isomorphic* if they have the same *structure*.

In other words, we can redraw the graph to make them look identical, even if the
vertices and edges are labeled differently.

## Example

These two graphs are isomorphic:

```
Graph 1:        Graph 2:
 A --- B        1 --- 2
 |     |        |     |
 C --- D        3 --- 4
```

Even though the vertices are labeled differently (A, B, C, D vs. 1, 2, 3, 4),
the connections between them are the same. We can map A to 1, B to 2, C to 3,
and D to 4.

## Checking for isomorphism

To check if two graphs are isomorphic, we can look at:
- The number of vertices and edges in each graph.
- The degree of each vertex (how many edges connect to it).
- The overall structure and connections between vertices.
If all these aspects match, the graphs are isomorphic!

