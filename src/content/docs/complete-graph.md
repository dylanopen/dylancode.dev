---
title: Complete graph
---

A *complete graph* is a type of [graph](/graph) where every pair of vertices has
a direct [edge](/graph-edge) connecting them. In other words, in a complete
graph, you can get from any vertex to any other vertex in just one step.

> **Complete graph**: a graph where every pair of vertices is directly
> connected by an edge.

## Notation

A complete graph with *n* vertices is often written as $K_n$. For example:

- $K_3$ is a complete graph with 3 vertices, where each vertex is connected to
  the other two vertices.
- $K_4$ is a complete graph with 4 vertices, where each vertex is connected to
  the other three vertices.

## Number of edges

In a complete graph with $n$ vertices:

$$
\text{Number of edges} = \frac{n(n-1)}{2}
$$

This assumes the graph is undirected.

## Number of hamiltonian cycles

For a complete graph with $n$ vertices:

$$
\text{Number of Hamiltonian cycles} = \frac{(n-1)!}{2}
$$

