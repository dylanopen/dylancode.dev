---
title: max-tnt-per-tick
---

This one's pretty self-explanatory. It tells the server the maximum number of
TNT that can explode every tick (1/20th of a second).

You can change it in the `spigot.yml` file, where its default value is:

```yaml
max-tnt-per-tick: 100
```

## Recommended starting value

```yaml
max-tnt-per-tick: 50
```

The only time I'd recommend increasing it is if one of your players needs to
build a TNT cannon that requires more than 100 TNT to explode at once.

Even then, that could crash your server if too many TNT explode at once, so be
careful. THe limit is there for a reason!

## Optimise explosions

Paper has a setting called [optimize-explosions](/minecraft/paper-world/optimize-explosions).

It basically replaces Minecraft's slow explosion algorithm with a faster one
that can handle more explosions at once.

