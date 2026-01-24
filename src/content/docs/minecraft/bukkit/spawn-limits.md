---
title: spawn-limits
---

Spawn limits can be configured in the `bukkit.yml` file. By default, it looks
like this:

```yaml
spawn-limits:
  monsters: 70
  animals: 10
  water-animals: 5
  water-ambient: 20
  water-underground-creature: 5
  axolotls: 5
  ambient: 15
```

## Recommended starting values

If you run a small server with just a few friends, these values should work
fine and still give a fairly vanilla experience (these are similar to the
default Bukkit values):

```yaml
spawn-limits:
  monsters: 60
  animals: 12
  water-animals: 5
  water-ambient: 12
  water-underground-creature: 4
  axolotls: 4
  ambient: 4
```

For medium-sized servers (10-30 players), you can try these values:

```yaml
spawn-limits:
  monsters: 35
  animals: 7
  water-animals: 3
  water-ambient: 5
  water-underground-creature: 2
  axolotls: 2
  ambient: 2
```

And for larger servers, try these values:

```yaml
spawn-limits:
  monsters: 20
  animals: 4
  water-animals: 2
  water-ambient: 2
  water-underground-creature: 1
  axolotls: 1
  ambient: 1
```

## Mob spawn range

Because lowering the spawn rate causes fewer mobs to spawn, you may want to
make the mobs that do spawn closer to the players.

Please see the [mob-spawn-range page](/minecraft/spigot/mob-spawn-range) for
help on doing this. As a general rule: if you **lower** the spawn limits, you
should **lower** the mob spawn range as well.

## A note on `per-player-mob-spawns`

This page relies on the `per-player-mob-spawns` option being set to `true` in
your `paper-world-defaults.yml` file. This is highly recommended, and the guide
does not support this option being set to `false`.

Please see [this page](/minecraft/paper-world/per-player-mob-spawns) for more
info on what this option does and why you should enable it.

## What are spawn limits?

Spawn limits are probably *the most* important configuration option for
optimisation, perhaps with the exception of [simulation-distance](
/minecraft/properties/simulation-distance).

> Spawn limits are sometimes also referred to as "mob caps". For the sake of
> this guide, they're effectively the same thing.

It effectively controls *how many mobs* (animals, monsters, etc) can be
present in the world at any given time.

With `per-player-mob-spawns` enabled, this limit is calculated *per player* in
the world, meaning that each player gets their own "quota" of mobs.

When the number of mobs around a player goes above this limit, no new mobs will
be able to spawn until the number of mobs drops back below the limit.

Basically, a monster mob cap of 70 means that up to 70 monster mobs can be
present around each player at any given time, for example.

## The different mob types

> Thanks to <https://paper-chan.moe/paper-optimization/#mob-categories>, we have
> a detailed list of what mobs fall into each category.

Feel free to search for specific mobs using your browser's search function
(ctrl+f) if you're not sure which category they fall into!

### Monsters

- Warden
- Evoker
- Wither
- Hoglin
- Cave Spider
- Camel
- Husk
- Zoglin
- Slime
- Bogged
- Zombified Piglin
- Pillager
- Wither Skeleton
- Zombie
- Nautilus
- Stray
- Blaze
- Witch
- Piglin Brute
- Spider
- Drowned
- Phantom
- Illusioner
- Ravager
- Vindicator
- Creeper
- Parched
- Elder Guardian
- Giant
- Breeze
- Zombie Horse
- Zombie Villager
- Endermite
- Silverfish
- Shulker
- Ghast
- Vex
- Piglin
- Guardian
- Enderman
- Magma Cube
- Ender Dragon
- Skeleton
- Creaking

### Animals / creatures

- Wolf
- Bee
- Horse
- Chicken
- Frog
- Allay
- Pig
- Skeleton Horse
- Llama
- Polar Bear
- Mule
- Armadillo
- Donkey
- Parrot
- Rabbit
- Fox
- Happy Ghast
- Goat
- Mooshroom
- Cow
- Strider
- Cat
- Sniffer
- Ocelot
- Trader Llama
- Tadpole
- Wandering Trader
- Panda
- Turtle
- Camel
- Sheep

### Ambient

- Bat

Yep, that's it... you can probably lower this one quite a bit, if not completely
to 0. I've seen some servers' spark reports showing thousands of bats where
optimisation has gone horribly wrong...

### Water animals / water creature

- Nautilus
- Dolphin
- Squid

### Water ambient

- Cod
- Pufferfish
- Salmon
- Tropical fish

### Water underground creature

- Glow squid

### Axolotl

Pretty obviously... axolotls. They're so cute they get their own category.

### Misc

Everthing else:

- Bamboo Raft with Chest
- Cherry Boat with Chest
- Eye of Ender
- Marker
- Jungle Boat with Chest
- Interaction
- Spectral Arrow
- Wind Charge
- Item Display
- Mangrove Boat with Chest
- Minecart with Chest
- Snowball
- Item Frame
- Mannequin
- Firework Rocket
- Evoker Fangs
- Area Effect Cloud
- Minecart with Command Block
- Dark Oak Boat
- Oak Boat
- Lingering Potion
- Shulker Bullet
- Acacia Boat with Chest
- Spruce Boat
- Acacia Boat
- Birch Boat with Chest
- Glow Item Frame
- Spruce Boat with Chest
- Bamboo Raft
- Jungle Boat
- Player
- Thrown Bottle o’ Enchanting
- Leash Knot
- Cherry Boat
- Primed TNT
- Wither Skull
- Villager
- Text Display
- Minecart with Furnace
- Item
- Ominous Item Spawner
- Trident
- Mangrove Boat
- Thrown Ender Pearl
- Snow Golem
- Arrow
- Pale Oak Boat with Chest
- Experience Orb
- Splash Potion
- Minecart
- Painting
- Block Display
- Copper Golem
- Iron Golem
- Falling Block
- Armor Stand
- Pale Oak Boat
- Dragon Fireball
- Minecart with TNT
- Dark Oak Boat with Chest
- Oak Boat with Chest
- Llama Spit
- Thrown Egg
- Small Fireball
- Fishing Bobber
- End Crystal
- Birch Boat
- Fireball
- Minecart with Monster Spawner
- Lightning Bolt
- Minecart with Hopper

