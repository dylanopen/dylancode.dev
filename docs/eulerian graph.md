# Eulerian graph

A graph can be either of:
- Eulerian
- Semi-Eulerian
- Non-Eulerian

## Eulerian graphs

An *Eulerian graph* is a type of [[graph]] which contains **only**
vertices of **even** [[graph vertex|degrees]]. 

If a graph is Eulerian, it means there exists a closed trail (route that starts
and ends at the same vertex) that visits every edge exactly once - called an
**Eulerian cycle**.

> **Eulerian graph**: a graph where all vertices have even degrees.

## Semi-Eulerian graphs

A *semi-Eulerian graph* is a type of [[graph]] which contains exactly two
vertices of **odd** [[graph vertex|degrees]] (and all other vertices have even
degrees).

If a graph is semi-Eulerian, it means there exists a trail (route that does not
start and end at the same vertex) that visits every edge exactly once - called
an **Eulerian trail**.

> **Semi-Eulerian graph**: a graph where exactly two vertices have odd degrees.

## Non-Eulerian graphs

A *non-Eulerian graph* is a type of [[graph]] which contains more than two
vertices of **odd** [[graph vertex|degrees]].

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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Graph type | Definition and property |
| Eulerian graph | A graph where **all** vertices have **even** degrees; it contains an **Eulerian cycle** (a closed trail visiting every edge exactly once). |
| Semi-Eulerian graph | A graph where **exactly two** vertices have **odd** degrees (and all others even); it contains an **Eulerian trail** (an open trail visiting every edge exactly once). |
| Non-Eulerian graph | A graph where **more than two** vertices have **odd** degrees; it contains **no** trail or cycle that visits every edge exactly once. |
| Eulerian cycle | A closed trail that starts and ends at the same vertex and visits every edge exactly once; exists only in Eulerian graphs. |
| Eulerian trail | An open trail that visits every edge exactly once but does **not** start and end at the same vertex; exists only in semi-Eulerian graphs. |
| Why must a vertex have even degree for an Eulerian cycle? | Every time you enter the vertex via one edge, you can leave it via another edge. With an even number of edges, you never get stuck at that vertex. |
| What is the summary of graph types by vertex degrees? | Eulerian: all even — cycle exists, returns to start.<br/>Semi-Eulerian: exactly two odd — trail exists, does not return to start.<br/>Non-Eulerian: more than two odd — no trail exists. |

