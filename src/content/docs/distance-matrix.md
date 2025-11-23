---
title: Distance matrix
---

A *distance matrix* is somewhat like an [adjacency matrix](/adjacency-matrix),
but instead of simply showing whether two nodes in a network are connected,
it provides information about the *weight* (e.g. distance) between them.

It's a way of representing a [network](/network) in a table, where both the
rows and columns correspond to the nodes in the network.

## Structure of a distance matrix

An adjacency matrix looks like this:

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


