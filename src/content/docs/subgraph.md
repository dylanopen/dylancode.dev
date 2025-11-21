---
title: Subgraph
---

A *subgraph* is *part* of a larger [graph](/graph) that includes a subset of its
[vertices](/graph-vertex) and [edges](/graph-edge).

In other words, if you take a bigger graph and select some of its vertices and
the edges that connect them, you get a subgraph.

## Rules for subgraphs

- You *are* allowed to have **isolated vertices** - vertices which have no edges
  connecting them to other vertices in the subgraph (so aren't connected to the
  rest of the subgraph).  
  In other words, the graph does not have to be [connected](/connected-graph).
- However, *if* an **edge** is included in the subgraph, **both** of the
  vertices it connects must also be included (because an edge has to connect two
  vertices).

## Example

Consider the following graph:

```
A --- B
| \   |
|   \ |
C --- D
```

A possible subgraph could be:

```
A --- B
|
|
C
```

This is a subgraph, because it includes *only* vertices and edges from the
original graph and does **not** have any 'loose edges'.

