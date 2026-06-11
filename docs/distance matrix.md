# Distance matrix

A *[[distance]] matrix* is somewhat like an [[adjacency matrix]],
but instead of simply showing whether two nodes in a network are connected,
it provides information about the *[[weight]]* (e.g. [[distance]]) between them.

It's a way of representing a [[network]] in a table, where both the
rows and columns correspond to the nodes in the network.

## Structure of a distance matrix

An [[adjacency matrix]] looks like this:

|        | V1 | V2 | V3 |
|--------|----|----|----|
| **V1** | -  | A  | B  |
| **V2** | A  | -  | C  |
| **V3** | B  | C  | -  |

Where:
- The rows and columns represent the nodes (or vertices) in the network.
- The letters $A$, $B$ and $C in the matrix represent the *weight* (e.g.
  distance) between the nodes. These could also be dashes.
- A dash (`-`) indicates that there is no direct connection between the nodes
  (or that the verices are the same).

The dashes in the graph above could also be replaced with $0$s to indicate that
the distance from a node to itself is zero.

## Example

A distance matrix looks like this, for example:

|       | A | B | C | D |
|-------|---|---|---|---|
| **A** | 0 | 5 | 2 | - |
| **B** | 5 | 0 | - | 1 |
| **C** | 2 | - | 0 | 7 |
| **D** | - | 1 | 7 | 0 |

This would represent this network:

```
       2     
    A --- C  
  5 |     | 7
    B --- D  
       1     
```


## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a distance matrix in a network? | A table where rows and columns correspond to nodes, and entries show the weight (e.g., distance) between them, rather than just whether they are connected. |
| How does a distance matrix differ from an adjacency matrix? | An adjacency matrix shows only whether nodes are connected, while a distance matrix provides the weight (e.g., distance) of the connections. |
| What do the rows and columns represent in a distance matrix? | They represent the nodes (vertices) in the network. |
| What does a dash (`-`) represent in a distance matrix? | It indicates that there is no direct connection between the nodes, or that the vertices are the same (although same-node entries may sometimes be $0$). |
| What might replace a dash for the distance from a node to itself? | $0$, indicating the distance from a node to itself is zero. |
| In the given example distance matrix, what is the distance between node A and node B? | $5$ |
| In the given example distance matrix, what is the distance between node A and node C? | $2$ |
| In the given example distance matrix, what is the distance between node C and node D? | $7$ |
| In the given example network, how many edges are directly represented? | There are 4 edges: A-B ($5$), A-C ($2$), B-D ($1$), and C-D ($7$). |

