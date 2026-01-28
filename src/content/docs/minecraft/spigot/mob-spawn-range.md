---
title: mob-spawn-range
---

The mob-spawn-range is the radius (in chunks) around each player in which mobs
can spawn.

You can change it in `spigot.yml`, under `world-settings` -> `default`. Its
default value is:

```yaml
mob-spawn-range: 8
```

## Recommended starting value

The recommended starting value depends entirely on your server's spawn limits.

This helpful table from [Paper chan](https://paper-chan.moe/paper-optimization/#spawn-limits) provides some great guidance. The below table is moderately
adapted from it:

| Mob spawn limit | Recommended mob-spawn-range |
|-----------------|-----------------------------|
| 70+             | 8                           |
| 63-69           | 8                           |
| 56-62           | 7                           |
| 56 	          | 6                           |
| 49 	          | 6                           |
| 42 	          | 5                           |
| 35 	          | 5                           |
| 28 	          | 4                           |
| 21 	          | 3                           |
| 14 	          | 3                           |
| 7 	          | 2                           |

> You should generally use the *monsters* spawn limit to determine your
> mob-spawn-range.

## What does `mob-spawn-range` do?

It's the distance in chunks from each player in which mobs can spawn. For
example, if the `mob-spawn-range` is set to `8`, mobs can spawn in a radius of
8 chunks (128 blocks) around each player.

Or, if it's set to `4`, mobs can spawn in a radius of 4 chunks (64 blocks)
around each player.

It doesn't really improve performance on its own, **but** it's necessary if you
have lower spawn limits. That's because you want the few mobs which *do* spawn
to be concentrated around players, to give the illusion of more mobs spawning.

For example, if you have a spawn limit of `21` monsters, and a
`mob-spawn-range` of `8`, those `21` monsters will be spread out over a large
area, meaning players may not see many mobs around them. But if you set the
`mob-spawn-range` to `3`, those `21` monsters will be concentrated in a smaller
area, meaning players will see more mobs around them.

## Simulation distance notes

You should *never* set the `mob-spawn-range` higher than your server's
`simulation-distance` (set in `server.properties`) or it just won't do anything
useful. There's no point spawning mobs outside of the area which can be ticked.

You also shouldn't set the `mob-spawn-range` to anything above `8`.

