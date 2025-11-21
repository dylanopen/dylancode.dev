---
title: Eulerian graph
---

A graph can be either of:
- Eulerian
- Semi-Eulerian
- Non-Eulerian

## Eulerian graphs

An *Eulerian graph* is a type of [graph](/graph) which contains **only**
vertices of **even** [degrees](/graph-vertex). 

If a graph is Eulerian, it means there exists a closed trail (route that starts
and ends at the same vertex) that visits every edge exactly once - called an
**Eulerian cycle**.

> **Eulerian graph**: a graph where all vertices have even degrees.

## Semi-Eulerian graphs

A *semi-Eulerian graph* is a type of [graph](/graph) which contains exactly two
vertices of **odd** [degrees](/graph-vertex) (and all other vertices have even
degrees).

If a graph is semi-Eulerian, it means there exists a trail (route that does not
start and end at the same vertex) that visits every edge exactly once - called
an **Eulerian trail**.

> **Semi-Eulerian graph**: a graph where exactly two vertices have odd degrees.

## Non-Eulerian graphs

A *non-Eulerian graph* is a type of [graph](/graph) which contains more than two
vertices of **odd** [degrees](/graph-vertex).

There isn't any trail or cycle that visits every edge exactly once in a
non-Eulerian graph.

> **Non-Eulerian graph**: a graph where more than two vertices have odd degrees.

## How does this work?

If a vertex has an even number of edges connected to it, every time you enter
the vertex via one edge, you can leave it via another edge.

This means you can
traverse all edges without getting stuck at a vertex (you'd be stuck if you had
already used all edges connected to that vertex, for example).

## Summary

| Graph type    | Vertex degrees             | Trail exists?       | Gets back to start? |
|---------------|----------------------------|---------------------|---------------------|
| Eulerian      | All even                   | Yes (Eulerian cycle)| Yes                 |
| Semi-Eulerian | Exactly two odd, rest even | Yes (Eulerian trail)| No                  |
| Non-Eulerian  | More than two odd          | No                  | No                  |

