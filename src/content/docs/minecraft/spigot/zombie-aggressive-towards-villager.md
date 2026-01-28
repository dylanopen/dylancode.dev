---
title: zombie-aggressive-towards-villager
---

If this config option is `true`, zombies will 'aggro' villagers.

You can change it in `spigot.yml`, under `world-settings` -> `default`. Its
default value is:

```yaml
zombie-aggressive-towards-villager: true
```

## Recommended starting value

It mostly depends on whether you need iron farms to work or not.

A value of `true` means:
- all villager-based farms will work (e.g. iron farms)
- villagers are at risk of being killed by zombies
- can lead to wayyy more server lag

A value of `false` means:
- iron farms probably won't work
- villagers are safe from zombies
- can cut down a lot of server lag

Please try starting with the default value of `true`, and if you notice a lot of
lag caused by zombies pathfinding to villagers and villagers' AI responding,
consider switching it to `fals`.

## What does `zombie-aggressive-towards-villager` do?

When set to `true`, zombies will actively seek out villagers to attack them.  
If a villager is within the [activation-range](/minecraft/spigot/entity-activation-range),
the zombie will start pathfinding towards the villager to attack it.  
This can cause a lot of server lag, especially if there are many villagers and
zombies in the same area, as the server has to calculate the pathfinding for
each zombie towards the nearest villager, and the villagers have lots of complex
tasks they run when being attacked.

When set to `false`, zombies will ignore villagers completely, which can
reduce a lot of server lag. Keyword: **can**.

