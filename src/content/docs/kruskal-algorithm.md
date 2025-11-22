---
title: Kruskal's algorithm
---


One common algorithm for finding the
[minimum spanning tree](/minimum-spanning-tree) is *Kruskal's algorithm*. It
works like this:
1. Sort all the edges in the network in order of increasing weight.
2. Start with an empty MST (no edges).
3. Go through the sorted list of edges, and for each edge:
   - If adding the edge to the MST would not create a cycle, add it.
   - If adding the edge would create a cycle, skip it.
4. Repeat step 3 until the MST contains `N-1` edges, where `N` is the number of
   [nodes](/network-node) in the network.

If the network has lots of edges with the same weight, there may be multiple
valid minimum spanning trees. Both Prim's and Kruskal's algorithms will find
one of them, but not necessarily the same one each time. But they are
guaranteed to find *a* minimum spanning tree - i.e. the tree with the least
weight.

