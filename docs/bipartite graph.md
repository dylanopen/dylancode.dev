# Bipartite graph

A *bipartite graph* is a type of [[graph]] where the
[[graph vertex|vertices]] can be divided into two groups.

No two vertices within the same group are connected by an
[[graph edge|edge]]. Instead, edges only connect vertices from one group to
vertices in the other group.

> **Bipartite graph**: a graph where vertices can be divided into two groups,
> and edges only connect vertices from different groups.

## Complete bipartite graph

A *complete bipartite graph* is a special type of bipartite graph where
every vertex in one group is connected to every vertex in the other group.

### Notation

A complete bipartite graph with groups of sizes *m* and *n* is often written as
$K_{m,n}$.

### Number of edges

A complete bipartite graph $K_{m,n}$ has $m \times n$ edges, since each of the
*m* vertices in one group is connected to all *n* vertices in the other group.

$$
\text{Number of edges} = m \times n
$$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Bipartite graph | Definition: vertices can be divided into two groups; no edge connects two vertices within the same group; edges only connect vertices from different groups. |
| How do edges behave in a bipartite graph? | Edges only connect vertices from one group to vertices in the other group; no two vertices within the same group are connected. |
| Complete bipartite graph | Every vertex in one group is connected to every vertex in the other group. |
| Notation $K_{m,n}$ | Represents a complete bipartite graph with groups of sizes $m$ and $n$. |
| Number of edges in $K_{m,n}$ | $m \times n$ edges, because each of the $m$ vertices in one group connects to all $n$ vertices in the other group. |

