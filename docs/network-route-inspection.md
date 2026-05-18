# Network route inspection

The route inspection problem is when we have a network and we want to find the
shortest path that will visit every [arc](/network-arc) at least once.

To do that, we need to find whether the network is:
- Eulerian
- Semi-Eulerian
- Non-Eulerian

See [Eulerian graph](/eulerian-graph) for how to determine this.

## Eulerian network

If the network is eulerian, we can find a route that visits every arc *exactly
once*.

Importantly, we can start and end at the same vertex.

## Semi-Eulerian network

If the network is semi-eulerian, we can find a route that visits every arc
*exactly once*.

However, we need to start at one of the vertices with odd degree, and end at the
other vertex with odd degree. We can't start and end at the same vertex.

We can also add an arc between the two odd-degree vertices, to make it eulerian, if we'd like to start and end at the same vertex.  
We make this arc's length the smallest possible way to get between the two vertices.

## Non-Eulerian network

If the network is non-eulerian (more than two vertices with odd degree), we need
- to add arcs to the network to make it eulerian or semi-eulerian.

Once we've added the arcs (keep in mind, make sure you're adding the arcs so
that the smallest extra distance is added as possible) we can find a route that visits every arc exactly once, using the rules for eulerian or semi-eulerian networks above!
