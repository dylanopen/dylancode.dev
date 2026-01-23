---
title: view-distance
---

You can change the `view-distance` of your server by going to
`server.properties` and changing:

```properties
view-distance=10
```

To a different number, for example:

```properties
view-distance=6
```

> Default value: `10`

## Recommended starting value

```properties
view-distance=6
```

The render distance you choose entirely depends on:
- your server's hardware (mainly RAM)
- how many players are online at peak times
- what kind of world your server has (flat minigame/event world vs open-world
  SMP, for example)
- how much lag you are experiencing
- whether your server crashes due to out-of-memory errors

I'd recommend startin with a value of `6`, and then increasing it if your server
can handle it or your players complain!

Players can always use mods like Bobby and Distant Horizons to increase their
client-side render distance, without any load on the server.

## View distance vs render distance

One of the first things you probably think of when talking about server lag is
the **render distance**. There's an important distinction to be made between
**view distance** and **render distance**.

## View distance

The **view distance** is a **server-side** setting that decides what the
*absolute maximum* distance (in chunks) that the server will send to each
player.

If this setting is set to 10, for example, the server will send chunks up to 10
chunks away from each player. Even if the player's client has a render distance
of, say, 16, the server will only send chunks up to 10 chunks away, and the
player will only see chunks up to 10 chunks away.

From a server admin point of view, instead of thinking of view distance as "how
far players can see", think of it as "how many chunks the server has to load and
send to each player".

## Render distance

Render distance is the client-side setting. It doesn't decide what the max
number of chunks the server will send, but rather how many chunks the client
will actually render.

The client render distance won't do anything if it's above the server's view
distance, because the server simply won't send those chunks to the client.

## What range of chunks will be sent?

The number of chunks sent to the player is **either** the view-distance **or**)
the player's render distance, whichever is **lower**.

For example, if the server's view distance is set to 8, and the player's render
distance is set to 12, the server will only send chunks up to 8 chunks away. Or,
if the server's view distance is set to 10, and the player's render distance is
set to 6, the server will only send chunks up to 6 chunks away.

## Number of chunks sent per player

The `view-distance` is the *radius* of chunks sent to each player.

If you have it set to 10, it will send the chunks in a square, going 10 chunks
outwards in each direction (north, south, east, west) from the player. That
means that there will be *20* chunks in each direction (10 chunks in one
direction, and 10 chunks in the opposite direction), plus the chunk the player
is standing in. That means a total of 21 chunks in each direction.  
In this case, the total number of chunks sent would be $21 \times 21 = 441$
chunks.

> You can calculate this as follows:  
> $$
> \text{number of chunks} = (2 \times \text{view-distance} + 1)^2
> $$

### Exponential growth

From this, you can probably see that doubling the view distance doesn't double
the number of chunks sent to each player, it actually **quadruples** it.

You need to be careful when increasing the view distance, because even a small
increase can have a big impact on performance - especially RAM usage, as I'll
explain.

## CPU effect

The view-distance doesn't affect CPU usage too much - sending more chunks does
require more CPU power, but it's not as significant as the RAM usage impact.

If you see `ServerChunkCache` on Spark taking up a lot of tick time, though, it
may be worth lowering the view-distance to see if it helps.

## RAM effect

The view-distance has a **huge** effect on RAM usage. Each chunk uses up a
certain amount of RAM, and the more chunks you have to load and send to each
player, the more RAM you will need.

If you've got a lot of RAM and not too many players, you can probably get away
with a higher view-distance. However, if you're running low on RAM or have a lot
of players, you may need to lower the view-distance to prevent crashes.

## Network effect

If you're using a hosting provider, either from a datacenter or a specialised
Minecraft host, you probably don't need to worry about network usage too much.

If you're self-hosting, however, you may want to consider lowering the
view-distance if you have a limited upload bandwidth, or your network speed
isn't very good.

Sending more chunks to each player means a lot more data sent over the network.

If your server can't keep up with network usage, you can see lag spikes.

## Some example RAM values

> Note: these were taken from a new Purpur 1.21.10 server with no plugins and
> a standard world, with one player online. These are likely not accurate.

- With a view distance of `10`, a player joining added about `150MB` of RAM.
- With a view distance of `30`, a player joining added about `600MB` of RAM.

The view distance massively affects the RAM usage. Be careful when increasing
it.

## An alternative: adaptive view distance

Some plugins, such as [View Distance Tweaks](https://www.spigotmc.org/resources/view-distance-tweaks.75164/),
claim to adjust the view distance dynamically based on server performance.

If the server starts to lag, it lowers the view distance, and when the server is
performing well, it increases it so that players cna see further.

