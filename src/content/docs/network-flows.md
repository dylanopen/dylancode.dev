---
title: Network flows
---

> Incomplete

## Terminology

## Capacity

- The capacity of an edge is the *weight* of the edge.
- It can be thought of as the *maximum flow* that can pass through that edge.

## Cut

A **cut** is the is a line which divides the source(s) from the sink(s).
The **capacity of a cut** is the sum of the capacities of the edges crossing the cut from source side to sink side.

## Minimum cut theorem

The minimum cut theorem is able to tell us the maximum flow in a flow network.

How to use it:
- Find all possible cuts in the network
- Calculate the capacity of each cut
- Find the cut which gives the *minimum* capacity
- This capacity is the *maximum flow* in the network

### Analogy: water tap

## Supersources

A supersource is a single source node which has an infinite capacity edge to
each of the original sources.

## Supersinks

A supersink is a single sink node which has an infinite capacity edge from
each of the original sinks.

