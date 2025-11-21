---
title: Graph complement
---

The **complement** of a [graph](/graph) is a new graph that contains all the
[vertices](/graph-vertex) of the original graph, but only the
[edges](/graph-edge) that are **not** present in the original graph.

## Finding the complement

To find the complement of a graph:
1. Add all the edges that are missing between pairs of vertices, in order to
   make every possible connection (a [complete graph](/complete-graph)).
2. Remove all the edges that were in the original graph (so you are left with
   only the edges you added in step 1).
3. This is the complement graph.

## Example

Find the complement of this graph:

```
A     B
| \ 
|   \
C     D
```

The complete graph would be:

```
A --- B
| \ / |
| / \ |
C --- D
```

Now, remove the edges that were in the original graph (A-B and A-C):

```
A --- B
    / |
  /   |
C --- D
```

That's the *complement* of the original graph!

