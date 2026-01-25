---
title: simulation-distance
---

You can change the `simulation-distance` of your server by going to
`server.properties` and changing:

```properties
simulation-distance=10
```

To a different number, for example:

```properties
simulation-distance=5
```

> Default value: `10`

## What is simulation distance?

20 times every second (every 'tick'), the Minecraft server updates the game
world. This includes things like:
- moving entities (mobs, items, players, etc)
- growing crops
- processing redstone
- spawning mobs
- ...and much more

All of this processing takes CPU power. The more chunks the server has to
process, the more CPU power it needs.

The `simulation-distance` setting controls how many chunks around each player
the server will *tick* (i.e. update) every tick.

For example, if the `simulation-distance` is set to `5`, the server will tick
all chunks within a radius of 5 chunks around each player. Anything outside
that radius won't be updated until a player gets closer.

## Recommended starting value

```properties
simulation-distance=5
```

The simulation distance you choose entirely depends on:
- your server's hardware (mainly CPU)
- how many players are online at peak times
- what kind of world your server has (flat minigame/event world vs open-world
  SMP, for example)
- how much lag you are experiencing (or any crashes due to CPU overload)
- how important having a high simulation distance is to your players (e.g. do
  they build a lot of farms that stretch out to the default sim distance?)

I'd recommend starting with a value of `5`, and then increasing it if your
server can handle it or your players complain.

## Number of chunks ticked per player

The `simulation-distance` is the *radius* of chunks around a player which are
*ticked*. Ticked just means that the server *does stuff* in those chunks - like
updating entities, processing redstone, growing crops, etc.

If you have it set to 10, it will tick the chunks in a square, going 10 chunks
outwards in each direction (north, south, east, west) from the player. That
means that there will be *20* chunks in each direction (10 chunks in one
direction, and 10 chunks in the opposite direction), plus the chunk the player
is standing in. That means a total of 21 chunks in each direction.  
In this case, the total number of chunks ticked would be $21 \times 21 = 441$
chunks.

> You can calculate this as follows:  
> $$
> \text{number of chunks ticked} = (2 \times \text{simulation-distance} + 1)^2
> $$

### Exponential growth

From this, you can probably see that doubling the simulation distance doesn't
double the number of chunks ticked for each player, it actually **quadruples**
it.

You need to be careful when increasing the simulation distance, because even a
small increase can have a big impact on performance - especially CPU usage, as
I'll explain.

## CPU effect

The simulation distance is pretty much *the main* setting that affects CPU
usage on a Minecraft server. The more chunks the server has to tick, the more
CPU power it needs.

If your server is lagging, or even crashing due to CPU overload, lowering the
simulation distance is one of the best ways to reduce CPU usage. It's not the
*only* way, though, There can be much better optimisations depending on your
server setup.

## RAM effect

The simulation distance does have a big effect on RAM usage, but the main thing
to think about with RAM usage is the [view distance](/minecraft/view-distance).

When the server ticks chunks, it needs to keep them loaded in RAM. The more
chunks it has to tick, the more RAM it needs. But the actual chunk data (that
the view distance controls) has a much bigger effect on RAM usage.

## Network effect

The simulation distance is mainly all server-side. While some things are sent
to the client, so it might have a small effect on network usage, it's not as
significant as the [view distance](/minecraft/view-distance).

## An alternative: adaptive simulation distance

Some plugins, such as [View Distance Tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/),
claim to adjust the simulation distance dynamically based on server performance.

> Don't be fooled by the name - despite being called "View Distance Tweaks", it
> can also adjust the simulation distance.

If the server starts to lag, it lowers the simulation and view distance, and
when the server is performing well, it increases it so that players can see
further.



