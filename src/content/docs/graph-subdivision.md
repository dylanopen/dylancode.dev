---
title: Graph subdivision
---

A **subdivision** of a [graph](/graph) is created by adding new
[vertices](/graph-vertex) along the existing [edges](/graph-edge) of the graph.

This basically breaks the original edges into smaller segments, joined by the
new vertices.

We *cannot* add any edges, or any vertices that are not on existing edges. We
can only add vertices such that they split up existing edges.

## Example

Consider this graph:

```
A ----- B
 \     /
   \ /  
    C 
```

A subdivision of this graph could be:

```
A - D - B
 \     /
   \ /  
    C
```

As you can see, we added a new vertex D along the edge between A and B,
splitting what was one edge (A-B) into two edges (A-D and D-B).

