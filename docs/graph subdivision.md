# Graph subdivision

A **subdivision** of a [[graph]] is created by adding new
[[graph vertex|vertices]] along the existing [[graph edge|edges]] of the graph.

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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Graph subdivision | Subdivision is created by adding new vertices along existing edges, breaking original edges into smaller segments.<br/>Cannot add edges or vertices not on existing edges. |
| What restriction exists when subdividing a graph? | We cannot add any edges, or any vertices that are not on existing edges.<br/>We can only add vertices such that they split up existing edges. |
| In the example graph A-B-C where edge A-B exists, what does adding vertex D along A-B do? | It splits edge A-B into two edges: A-D and D-B. |

