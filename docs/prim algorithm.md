# Prim's algorithm

One common algorithm for finding the
[[minimum spanning tree]] is *Prim's algorithm*. It
works like this:
1. Start with any node in the network and add it to the MST.
2. Find the edge with the smallest [[weight]] that connects a node in the MST to a
   node outside the MST (i.e. connects to a node that is yet included).
3. Add that edge and the connected node to the MST.
4. Repeat steps 2 and 3 until all nodes are included in the MST.

You'll notice that, if you follow the constraint in step 2, you will never
create a cycle in the MST. A [[graph tree|tree]] by definition cannot contain
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

To find the [[minimum spanning tree]] using Prim's algorithm:
1. Start with node A, for example.
2. The smallest edge connected to A is AB with [[weight]] 2. Add it to the MST.
3. The smallest edge connected to the MST (nodes A and B) is BC with [[weight]] 3.
   Add it to the MST (it could have also been AD - either is fine)
4. The smallest edge connected to the MST (nodes A, B, and C) is AC with
   [[weight]] 3, but adding it would create a cycle (A-B-C-A). So skip it. The next
   smallest edge is AD with [[weight]] 4. Add it to the MST.
5. We now have our MST!

The resulting [[minimum spanning tree]] is:

```
         2
    A ------- B
    |         | 
  3 |         | 3
    |         |
    D         C
                 
```

We could also have had a slightly different MST, if we chose AC instead of BC.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is Prim's algorithm used for? | Finding the minimum spanning tree in a network. |
| What is the first step of Prim's algorithm? | Start with any node in the network and add it to the MST. |
| What is the second step of Prim's algorithm? | Find the edge with the smallest weight that connects a node in the MST to a node outside the MST. |
| What is the third step of Prim's algorithm? | Add that edge and the connected node to the MST. |
| When does Prim's algorithm stop? | When all nodes are included in the MST. |
| Why does following Prim's algorithm's step 2 never create a cycle? | Because a tree by definition cannot contain cycles. |
| In the given 4-node network (A, B, C, D with edges AB=2, AD=4, AC=3, BC=3, CD=5), if you start at A, what is the first edge added? | AB with weight 2. |
| In the given network, after adding A and B, what is the smallest edge connecting the MST to an outside node? | BC with weight 3 (or AD with weight 4, but BC is smallest). |
| During Prim's algorithm on the example, why is edge AC skipped after adding A, B, and C? | Adding AC would create a cycle (A-B-C-A). |
| What is the total weight of the minimum spanning tree found in the example? | $2 + 3 + 4 = 9$ (edges AB, BC, AD). |

