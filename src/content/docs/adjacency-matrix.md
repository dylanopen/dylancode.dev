---
title: Adjacency matrix
---

An *adjacency matrix* is a way to represent a [graph](/graph) using a square
matrix.

This is especially useful for representing graphs in computers.

## Structure of an adjacency matrix

An adjacency matrix looks like this:

|   | V1 | V2 | V3 |
|---|----|----|----|
| V1| A  | B  | C  |
| V2| D  | E  | F  |
| V3| G  | H  | I  |

Where:
- The rows and columns represent the [vertices](/graph-vertex) of the graph,
  $V1$, $V2$, $V3$, etc.
- The *entries* in the matrix (A, B, C, etc.) indicate the number of
  [edges](/graph-edge) attaching a node to another node.

## Symmetry

In an *undirected graph*, the adjacency matrix is *symmetric* along the main
diagonal (from the top-left to the bottom-right).

That's because an edge from vertex $V1$ to vertex $V2$ is the same as an edge
from $V2$ to $V1$ in an undirected graph.

## Example 1

For the following undirected graph:

```
    A
   / \
  B---C
```

The adjacency matrix for this graph would be:

|   | A | B | C |
|---|---|---|---|
| A | 0 | 1 | 1 |
| B | 1 | 0 | 1 |
| C | 1 | 1 | 0 |

## Example 2

For this undirected graph:

```
    A
   / \
  B===C
   \
    D
```

The adjacency matrix for this graph would be:

|   | A | B | C | D |
|---|---|---|---|---|
| A | 0 | 1 | 1 | 0 |
| B | 1 | 0 | 2 | 1 |
| C | 1 | 2 | 0 | 0 |
| D | 0 | 1 | 0 | 0 |

