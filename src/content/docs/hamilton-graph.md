---
title: Hamilton graph
---

A *Hamilton/Hamiltonian graph*, or sometimes called a **tour** is a type of
[graph](/graph) that contains a *Hamiltonian cycle*.

A Hamiltonian cycle is a path that visits each [vertex](/graph-vertex) exactly
once and returns to the starting vertex, forming a closed [cycle](/graph-cycle).

> **Hamiltonian graph**: a graph that contains a Hamiltonian cycle, visiting
> each vertex exactly once and returning to the starting vertex.

## Rules for Hamilton graphs

- You cannot repeat a vertex (except for the starting/ending vertex).
- You must visit every vertex in the graph exactly once.
- The cycle must return to the starting vertex.
- You **can't** repeat edges because that would require revisiting vertices.

> Remember that not all graphs contain a Hamiltonian cycle.

## Uses of Hamilton graphs

The main use of the Hamiltonian graph concept is in solving routing problems -
the common one is called the *Traveling Salesman Problem*.

## Example

Consider the following graph:

```
    A
  /   \
 B --- C
 |     |
 D --- E
```

A Hamiltonian cycle in this graph could be: A -> B -> D -> E -> C -> A, because
that cycle visits each vertex exactly once and returns to the starting vertex A.

Note that we didn't use the edge B -> C in this cycle. We don't need to use all
edges in a Hamiltonian cycle; we just need to visit all vertices exactly once!

