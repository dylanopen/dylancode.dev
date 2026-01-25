---
title: wake-up-inactive
---

```yaml
wake-up-inactive:
  animals-max-per-tick: 4
  animals-every: 1200
  animals-for: 100
  monsters-max-per-tick: 8
  monsters-every: 400
  monsters-for: 100
  villagers-max-per-tick: 4
  villagers-every: 600
  villagers-for: 100
  flying-monsters-max-per-tick: 8
  flying-monsters-every: 200
  flying-monsters-for: 100
villagers-work-immunity-after: 100
villagers-work-immunity-for: 20
villagers-active-for-panic: true
tick-inactive-villagers: true
```

## Recommended starting value

The default settings are good enough for most servers, so you can start with
these:

```yaml
wake-up-inactive:
  animals-max-per-tick: 4
  animals-every: 1200
  animals-for: 100
  monsters-max-per-tick: 8
  monsters-every: 400
  monsters-for: 100
  villagers-max-per-tick: 4
  villagers-every: 600
  villagers-for: 100
  flying-monsters-max-per-tick: 8
  flying-monsters-every: 200
  flying-monsters-for: 100
villagers-work-immunity-after: 100
villagers-work-immunity-for: 20
villagers-active-for-panic: true
tick-inactive-villagers: true
```

If villagers are a particular problem for lag:

```yaml
wake-up-inactive:
  animals-max-per-tick: 4
  animals-every: 1200
  animals-for: 100
  monsters-max-per-tick: 8
  monsters-every: 400
  monsters-for: 100
  villagers-max-per-tick: 1
  villagers-every: 900
  villagers-for: 100
  flying-monsters-max-per-tick: 8
  flying-monsters-every: 200
  flying-monsters-for: 100
villagers-work-immunity-after: 100
villagers-work-immunity-for: 20
villagers-active-for-panic: true
tick-inactive-villagers: false
```

If you're trying to greatly reduce entity-related lag **spikes** on your server,
try these:

```yaml
wake-up-inactive:
  animals-max-per-tick: 2
  animals-every: 1200
  animals-for: 100
  monsters-max-per-tick: 2
  monsters-every: 400
  monsters-for: 100
  villagers-max-per-tick: 1
  villagers-every: 2000
  villagers-for: 400
  flying-monsters-max-per-tick: 2
  flying-monsters-every: 200
  flying-monsters-for: 100
villagers-work-immunity-after: 120
villagers-work-immunity-for: 20
villagers-active-for-panic: true
tick-inactive-villagers: false
```


## What is an inactive entity?

An inactive entity is just an entity that is outside of its activation range,
meaning it won't tick (i.e., it won't perform any actions, AI, or movement)
until it is 'woken up'.

## What does `wake-up-inactive` do?

Inside the main `wake-up-inactive` section, we have three main types of options:
- `*-max-per-tick`
- `*-every`
- `*-for`

## `*-max-per-tick`

The `max-per-tick` option for each entity type (animals, monsters, villagers,
flying-monsters) tells the server the maximum number of inactive entities of
that type that can be woken up in a single server tick.

For example, if `animals-max-per-tick` is set to `4`, the server will wake up
up to 4 inactive animals per tick.

## `*-every`

The `every` option for each entity type specifies the interval (in ticks)
between each wake-up attempt for that entity type.

For example, if `monsters-every` is set to `400`, the server will attempt to
wake up inactive monsters once every 400 ticks (20 seconds).

## `*-for`

This option specified the amount of time (ticks) that the entity will be woken
up for before 'going back to sleep'.

For example, if `villagers-for` is set to `100`, the server will wake up
inactive villagers for 100 ticks (5 seconds) before putting them back to sleep.

