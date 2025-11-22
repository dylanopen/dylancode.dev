---
title: Minimum spanning tree
---

A *minimum spanning tree* (MST) is a special type of [subgraph](/subgraph) on
a [network](/network) that connects all the [nodes](/network-node) together
with the minimum possible total [weight](/network-arc) for the connections.

A minimum spanning tree is a type of [tree](/graph-tree). It does **not*
contain any [cycles](/graph-cycle), and there is exactly one path between any
two nodes in the tree.

Finding the minimum spanning tree is also known as the *minimum connector
problem*.

## Properties of a minimum spanning tree

Some important properties of a minimum spanning tree are:
- It includes all the nodes in the original network.
- It has exactly `N-1` edges, where `N` is the number of
  [nodes](/network-node) in the network.
- The total weight of the edges in the MST is the lowest possible.
- There are no cycles in the MST.

## Finding the minimum spanning tree: Prim's algorithm

One common algorithm for finding the minimum spanning tree is *Prim's
algorithm*. It works like this:
1. Start with any node in the network and add it to the MST.
2. Find the edge with the smallest weight that connects a node in the MST to a
   node outside the MST (i.e. connects to a node that is yet included).
3. Add that edge and the connected node to the MST.
4. Repeat steps 2 and 3 until all nodes are included in the MST.

You'll notice that, if you follow the constraint in step 2, you will never
create a cycle in the MST. A [tree](/graph-tree) by definition cannot contain
cycles.

## Example

Consider this network:

```
         2
    A ------- B
    |  \      | 
  4 |   3\    | 3
    |      \  |
    D ------- C
         5
```

To find the minimum spanning tree using Prim's algorithm:
1. Start with node A, for example.
2. The smallest edge connected to A is AB with weight 2. Add it to the MST.
3. The smallest edge connected to the MST (nodes A and B) is BC with weight 3.
   Add it to the MST (it could have also been AD - either is fine)
4. The smallest edge connected to the MST (nodes A, B, and C) is AC with
   weight 3, but adding it would create a cycle (A-B-C-A). So skip it. The next
   smallest edge is AD with weight 4. Add it to the MST.
5. We now have our MST!

The resulting minimum spanning tree is:

```
         2
    A ------- B
    |         | 
  3 |         | 3
    |         |
    D         C
                 
```

We could also have had a slightly different MST, if we chose AC instead of BC.

