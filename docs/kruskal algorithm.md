# Kruskal's algorithm


One common algorithm for finding the
[[minimum spanning tree]] is *Kruskal's algorithm*. It
works like this:
1. Sort all the edges in the network in order of increasing [[weight]].
2. Start with an empty MST (no edges).
3. Go through the sorted list of edges, and for each edge:
   - If adding the edge to the MST would not create a cycle, add it.
   - If adding the edge would create a cycle, skip it.
4. Repeat step 3 until the MST contains `N-1` edges, where `N` is the number of
   [[network node|nodes]] in the network.

If the network has lots of edges with the same [[weight]], there may be multiple
valid minimum spanning trees. Both Prim's and Kruskal's algorithms will find
one of them, but not necessarily the same one each time. But they are
guaranteed to find *a* [[minimum spanning tree]] - i.e. the tree with the least
[[weight]].

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is Kruskal's algorithm used to find? | The minimum spanning tree (MST) of a network. |
| Step 1: How do you prepare the edges in Kruskal’s algorithm? | Sort all edges in the network in order of increasing weight. |
| Step 2: What is the initial state of the MST in Kruskal’s algorithm? | Start with an empty MST (no edges). |
| Step 3: For each edge in sorted order, what condition determines whether it is added? | If adding the edge would not create a cycle, add it; if it would create a cycle, skip it. |
| When does Kruskal’s algorithm terminate? | When the MST contains $N-1$ edges, where $N$ is the number of nodes. |
| If the network has many edges with the same weight, can there be multiple valid MSTs? | Yes, there may be multiple valid minimum spanning trees. |
| Are both Prim's and Kruskal's algorithms guaranteed to find the same MST? | No, they find one valid MST, but not necessarily the same one each time. |
| What guarantee does Kruskal’s algorithm provide about the tree it finds? | It is guaranteed to find a minimum spanning tree – the tree with the least total weight. |

