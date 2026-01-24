---
title: nerf-spawner-mobs
---

> This setting is in `spigot.yml`.

The default value is:

```yaml
nerf-spawner-mobs: false
```

## Recommended starting values

If your server has lots of mob spawners, or if you find that dungeon mobs are
causing lag, you can set this to `true`:

```yaml
nerf-spawner-mobs: true
```

If you *don't* think that mob spawners are a big issue for your server, just
don't change it from the default `false`. There's no point in optimising
something that doesn't cause any lag anyway - it will just annoy your players.
The default value of false:

```yaml
nerf-spawner-mobs: false
```

## What does it do?

If you set it to `true`, mobs that are spawned from mob spawners (like in
dungeons) will have their AI completely disabled.

That means they won't be able to:

- move
- attack you
- interact with the environment in any way
- *they won't even know you are there...*

## Why set it to `true`?

The main thing that causes lag with mobs is their AI - pathfinding, attacking,
looking for targets, etc. If you have lots of mobs from spawners, they can
cause quite a bit of lag.

Disabling a mob's AI means they won't cause really any lag at all. Because
spawner mobs usually don't need AI anyway (they are just there to be killed :P)
you can generally safely set this to true.

## Why *not* set this to `true`?

It can break farms which rely on mob spawners (e.g. those early game mob
grinders people build).

