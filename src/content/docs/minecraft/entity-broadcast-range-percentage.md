---
title: entity-broadcast-range-percentage
---

To change the distance at which entities are sent to players (using the vanilla,
`server.properties` option), change this line in `server.properties`:

```properties
entity-broadcast-range-percentage=100
```

## Recommended starting values

If you have a server with many players and/or many entities (mobs, items,
etc), you can lower this value to `75` in order to reduce the amount of data
sent to players, to reduce CPU lag and network usage:

```properties
entity-broadcast-range-percentage=75
```

If you have a small server with few players and entities, you can leave it at
the default value of `100`:

```properties
entity-broadcast-range-percentage=100
```

If you're really trying to squeeze out every bit of performance and don't mind
players not seeing entities that are far away, you can lower it even further to
`50`:

```properties
entity-broadcast-range-percentage=50
```

## What is `entity-broadcast-range-percentage`?

This config option basically says "how far away should entities be sent to
players, compared to the default distance".

For example, if you set this to `50`, entities will only be sent to players if
they are within half the normal distance.

## Benefits of lowering this value

- Less network usage, possibly less network lag and latency (ping)
- Less CPU usage, as the server has to track and send fewer entities to players

## Downsides of lowering this value

- Pretty obvious really, players can't see entities that are far away.

