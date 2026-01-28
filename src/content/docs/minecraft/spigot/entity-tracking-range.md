---
title: entity-tracking-range
---

The *entity tracking range* basically tells the server how close a player has to
be to an entity (mob, other player, etc) before the player can see the entity.

You can change it in `spigot.yml`, under `world-settings` -> `default`. Its
default value is:

```yaml
entity-tracking-range:
  players: 128
  animals: 96
  monsters: 96
  misc: 96
  display: 128
  other: 64
```

## Recommended starting value

The default settings are good enough for most servers, so you can start with
these:

```yaml
entity-tracking-range:
  players: 128
  animals: 96
  monsters: 96
  misc: 96
  display: 128
  other: 64
```

If you're running a larger server and want to reduce the number of entities
being sent to a player, you can lower the values to:

```yaml
entity-tracking-range:
  players: 128
  animals: 40
  monsters: 80
  misc: 48
  display: 48
  other: 32
```

> I'd recommend always keeping `players` at `128`, as lowering it can cause look
> a bit strange.

## What does `entity-tracking-range` do?

As mentioned above, any entity which is *outside* of the tracking range (in
blocks) from a player won't be sent to the player. The player simply won't see
the entity.

