---
title: Network node
---

A *node* on a network is the equivalent of a [vertex](/graph-vertex) in a
[graph](/graph).

A node can represent lots of different things, depending on the context.

Nodes are often connected by [arcs](/network-arc) to form a
[network](/network).

## Degree of a node

The *degree* of a node is the number of connections (or arcs) it has to other
nodes in the network.

For example, in the following network, the degree of node A is 3, because it is
connected to three other nodes (B, C, and D):

```
     A
   / | \ 
 B   C   D
```

In a directed network, we distinguish between:

- *in-degree*: the number of incoming connections to a node.
- *out-degree*: the number of outgoing connections from a node.

