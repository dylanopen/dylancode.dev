# Graph complement

The **complement** of a [[graph]] is a new graph that contains all the
[[graph vertex|vertices]] of the original graph, but only the
[[graph edge|edges]] that are **not** present in the original graph.

## Finding the complement

To find the complement of a graph:
1. Add all the edges that are missing between pairs of vertices, in order to
   make every possible connection (a [[complete graph]]).
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

The [[complete graph]] would be:

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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| graph complement | The complement of a graph is a new graph with all the same vertices, but only the edges that are NOT present in the original graph. |
| How do you find the complement of a graph? | 1. Add all missing edges to make a complete graph.<br/>2. Remove all edges that were in the original graph.<br/>3. The remaining edges form the complement. |
| What is the relationship between a graph, its complement, and a complete graph? | The original graph plus its complement equals the complete graph on the same vertices. |
| Example: Find the complement of a graph with vertices A, B, C, D and edges A-B and A-C. | Start with the complete graph on four vertices (with all six edges: A-B, A-C, A-D, B-C, B-D, C-D). Remove the original edges A-B and A-C. The complement has edges A-D, B-C, B-D, and C-D. |

