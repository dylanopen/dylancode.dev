# Network route inspection

The route inspection problem is when we have a network and we want to find the
shortest path that will visit every [[network arc|arc]] at least once.

To do that, we need to find whether the network is:
- Eulerian
- Semi-Eulerian
- Non-Eulerian

See [[eulerian graph|Eulerian graph]] for how to determine this.

## Eulerian network

If the network is eulerian, we can find a route that visits every [[arc]] *exactly
once*.

Importantly, we can start and end at the same vertex.

## Semi-Eulerian network

If the network is semi-eulerian, we can find a route that visits every [[arc]]
*exactly once*.

However, we need to start at one of the vertices with odd degree, and end at the
other vertex with odd degree. We can't start and end at the same vertex.

We can also add an [[arc]] between the two odd-degree vertices, to make it eulerian, if we'd like to start and end at the same vertex.  
We make this [[arc]]'s length the smallest possible way to get between the two vertices.

## Non-Eulerian network

If the network is non-eulerian (more than two vertices with odd degree), we need
- to add arcs to the network to make it eulerian or semi-eulerian.

Once we've added the arcs (keep in mind, make sure you're adding the arcs so
that the smallest extra [[distance]] is added as possible) we can find a route that visits every [[arc]] exactly once, using the rules for eulerian or semi-eulerian networks above!

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Network route inspection | The route inspection problem: finding the shortest path that visits every arc at least once. |
| What three categories can a network fall into for route inspection? | Eulerian, Semi-Eulerian, or Non-Eulerian. |
| Eulerian network route rule | We can find a route visiting every arc exactly once, and start and end at the same vertex. |
| Semi-Eulerian network route rule | We can find a route visiting every arc exactly once, but must start at one odd-degree vertex and end at the other odd-degree vertex. |
| How to make a semi-Eulerian network Eulerian? | Add an arc between the two odd-degree vertices, using the smallest possible distance between them. |
| Non-Eulerian network solution | Add arcs to the network to make it Eulerian or semi-Eulerian, adding the smallest extra distance possible. Then find a route visiting every arc exactly once using the appropriate rules. |

