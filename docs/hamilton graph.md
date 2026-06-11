# Hamilton graph

A *Hamilton/Hamiltonian graph*, or sometimes called a **tour** is a type of
[[graph]] that contains a *Hamiltonian cycle*.

A Hamiltonian cycle is a path that visits each [[graph vertex|vertex]] exactly
once and returns to the starting vertex, forming a closed [[graph cycle|cycle]].

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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a Hamiltonian graph? | A Hamiltonian (or Hamiltonian) graph, also called a tour, is a graph that contains a Hamiltonian cycle. |
| What is a Hamiltonian cycle? | A Hamiltonian cycle is a path that visits each vertex exactly once and returns to the starting vertex, forming a closed cycle. |
| What are the rules for a Hamilton graph cycle? | You cannot repeat a vertex (except the starting/ending vertex); you must visit every vertex exactly once; the cycle must return to the starting vertex; you cannot repeat edges because that would require revisiting vertices. |
| What is the main application of Hamiltonian graphs? | The main use is in solving routing problems, commonly called the Traveling Salesman Problem. |
| Given a graph with vertices A, B, C, D, E connected as A-B, A-C, B-C, B-D, D-E, and E-C, give an example of a Hamiltonian cycle. | One Hamiltonian cycle is A -> B -> D -> E -> C -> A. |
| In a Hamiltonian cycle, do you need to use all the edges of the graph? | No, you don't need to use all edges; you just need to visit all vertices exactly once. |

