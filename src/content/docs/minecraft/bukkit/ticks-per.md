---
title: ticks-per
---

The default `ticks-per` settings are found in the `bukkit.yml` file and look
like this:

```yaml
ticks-per:
  animal-spawns: 400
  monster-spawns: 1
  water-spawns: 1
  water-ambient-spawns: 1
  water-underground-creature-spawns: 1
  axolotl-spawns: 1
  ambient-spawns: 1
  autosave: 6000
```

## Recommended starting values

If you run a small server with just a few friends, thes values should
work fine for a vanilla-like experience:

```yaml
ticks-per:
  animal-spawns: 400
  monster-spawns: 1
  water-spawns: 30
  water-ambient-spawns: 30
  water-underground-creature-spawns: 30
  axolotl-spawns: 30
  ambient-spawns: 30
  autosave: 6000
```

If you start to notice any lag issues at all, these should be good for
performance without sacrificing too much gameplay:

```yaml
ticks-per:
  animal-spawns: 600
  monster-spawns: 4
  water-spawns: 50
  water-ambient-spawns: 50
  water-underground-creature-spawns: 50
  axolotl-spawns: 50
  ambient-spawns: 100
  autosave: 6000
```

For medium to large servers, these values should help keep your TPS at 20:

```yaml
ticks-per:
  animal-spawns: 500
  monster-spawns: 10
  water-spawns: 125
  water-ambient-spawns: 100
  water-underground-creature-spawns: 100
  axolotl-spawns: 100
  ambient-spawns: 200
  autosave: 6000
```

Of course, this comes with the issue of far slower mob farm rates. Adapt it to
your specific server needs.

## What is the ticks-per setting?

One Minecraft tick is 1/20th of a second. So 20 ticks happens every second.

The `ticks-per` settings determine how often the server will attempt to spawn
mobs of each type. For example, if `axolotl-spawns` is set to 40, the server
will attempt to spawn axolotls every 40 ticks, or every 2 seconds.

- A **lower** `ticks-per` value means the server will try to spawn mobs **more
  often** (so faster spawns, more lag).
- A **higher** `ticks-per` value means the server will try to spawn mobs **less
  often** (so slower spawns, less lag).

## The autosave setting

The default autosave of `6000` ticks (5 minutes) is usually fine for most
servers.

You may want to **increase it** (make autosaves happen *less* frequently) if:
- You have a large world with many players, and autosaves are causing TPS drops.

You may want to **decrease it** (make autosaves happen *more* frequently) if:
- You have an unstable server that crashes often, and you want to minimize data
  loss.
- You have a small world with few players, and autosaves are not causing any
  performance issues.
- You have a fast drive, so autosaves are quick and do not impact performance
  much.

> I would never recommend going above `10` minutes, and *definitely* not above
> `15` minutes, as that increases the risk of data loss significantly.  
> Even just a 15 minute loss of data can be very frustrating for players.

## World-specific settings

YOu can change all of the settings for *mob* spawning per-world in the
`paper-world.yml` config for each world, under the
`entities>spawning>ticks-per-spawn` section. By default, everything is set to
`-1`, which means it uses the global `bukkit.yml` settings.

