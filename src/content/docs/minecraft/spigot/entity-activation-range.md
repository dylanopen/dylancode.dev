---
title: entity-activation-range
---

The `entity-activation-range` is the radius (in blocks) around each player that
mobs will start to 'tick' (become active).

See [wake-up-inactive](/minecraft/spigot/wake-up-inactive) for more information
on that specific setting.

You can change it in `spigot.yml`, under `world-settings` -> `default`. Its
default value is:

```yaml
entity-activation-range:
    animals: 32
    monsters: 32
    raiders: 64
    misc: 16
    water: 16
    villagers: 32
    flying-monsters: 32
    wake-up-inactive:
        ...
````

## Recommended starting value

For a small SMP server with just some friends, these values should be fine and
provide a slightly *better* range at which entities become active:

```yaml
entity-activation-range:
    animals: 44
    monsters: 36
    raiders: 64
    misc: 20
    water: 20
    villagers: 24
    flying-monsters: 40
    wake-up-inactive:
        ...
```

If you have a larger server or run into some lag issues, you can lower the
activation ranges to:

```yaml
entity-activation-range:
    animals: 18
    monsters: 20
    raiders: 48
    misc: 12
    water: 12
    villagers: 12
    flying-monsters: 28
    wake-up-inactive:
        ...
```

If you really have lag issues caused by entities ticking:

```yaml
entity-activation-range:
    animals: 12
    monsters: 16
    raiders: 28
    misc: 8
    water: 8
    villagers: 3
    flying-monsters: 20
    wake-up-inactive:
        ...
```

## What does `entity-activation-range` do?

It's the distance in blocks from each player at which entities will start to
tick (become active). For example, if the `entity-activation-range` for
`monsters` is set to `32`, monsters within 32 blocks of a player will
become active and start doing their AI tasks, such as moving, attacking,
etc.

If it's set to `16`, monsters will only become active when they are within
16 blocks of a player.

## Lower values

Lower activation ranges will:
- Reduce server lag, as fewer entities will be active at any given time
- Cause entities to 'freeze' or 'stop moving' when players are not nearby
- Break a *lot* of farms that rely on entities being active, such as
  mob farms, villager crop farms, iron farms, etc.

## Higher values

Higher activation ranges will:
- Increase server lag, as more entities will be active at any given time
- Make entities behave more naturally, as they will be active from further away
- Improve the functionality of farms that rely on entities being active, but
  may still not work perfectly if the activation range is not high enough.

## Should you change this or the spawn limits?

The [spawn-limits](/minecraft/bukkit/spawn-limits) tells the server *how many
mobs to spawn*.

YOu can compromsise either by:
- spawning loads of mobs, but having them only active when players are nearby
- spawning fewer mobs, but having them active from further away

Generally, it's better to lower the spawn limits and have a higher activation
range. Your players will complain less about mobs 'freezing' when they are
not nearby.

However, lowering the activation range is one of the best ways to reduce server
lag caused by entities. I'd recommend trying lowering the activation ranges
significantly if you are having lag issues, and wait and see if your players
complain about it - they may not even notice, or they may threaten to leave your
server unless you change it back...

> This is a common theme in server optimisation - optimising just enough so
> that the server runs smoothly, but not so much that it negatively impacts
> the player experience.  
> If you're running at `2 MSPT` because you have a very optimised server, but
> no vanilla mechanics work, your server won't be that much fun to play on. But
> if you provide completely vanilla mechanics at `80 MSPT`, no one will want to 
> play on your server because of the lag. There is a balance.

## A special note on villagers

Villagers... so laggy in fact there's an entire page dedicated to them:

> [Villagers, oh villagers, oh villagers](/minecraft/villager-optimisation)

They're extremely laggy mobs. If you lower their activation range, you can cut
down on a tonne of server lag.

Personally, I think the trade-off is worth it. There are some issues with
lowering it though:
- Villager trading halls might not restock as often
- Villager crop farms almost definitely will not work properly
- Villagers may not be able to pathfind to certain locations when needed
  (e.g. to their workstations, beds, etc.)
- Iron farms may not work properly, as villagers won't detect zombie aggrevation
  as the server is not ticking the villager.

