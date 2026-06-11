# Subgraph

A *subgraph* is *part* of a larger [[graph]] that includes a subset of its
[[graph vertex|vertices]] and [[graph edge|edges]].

In other words, if you take a bigger graph and select some of its vertices and
the edges that connect them, you get a subgraph.

## Rules for subgraphs

- You *are* allowed to have **isolated vertices** - vertices which have no edges
  connecting them to other vertices in the subgraph (so aren't connected to the
  rest of the subgraph).  
  In other words, the graph does not have to be [[connected graph|connected]].
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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a subgraph? | A subgraph is part of a larger [[graph]] that includes a subset of its vertices and edges. |
| What are the two rules for forming a subgraph? | 1. Isolated vertices are allowed (graph does not need to be connected). <br/> 2. If an edge is included in the subgraph, both vertices it connects must also be included. |
| In the subgraph rule "no loose edges", what does "loose edge" specifically mean? | An edge included in the subgraph where one of its two end vertices is not also included in the subgraph. |
| Given the original graph: A---B, |\  |, |  \|, C---D <br/> Is the following a valid subgraph: A---B, |, |, C? | Yes, it is a valid subgraph. It includes only vertices and edges from the original graph and has no 'loose edges'. |
| What happens if you try to include an edge $\{A, D\}$ in a subgraph but only include vertex A? | This is invalid. If the edge is included, both vertices A and D must be included. The subgraph would have a 'loose edge'. |

