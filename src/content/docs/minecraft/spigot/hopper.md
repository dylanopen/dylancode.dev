---
title: hopper
---

You can configure a lot of things about hoppers in the `spigot.yml` file, under
the `world-settings` -> `default` section.

The default values for the main options are:

```yaml
ticks-per:
  hopper-transfer: 8
  hopper-check: 1
hopper-amount: 1
hopper-can-load-chunks: false
```

## Recommended starting value

If you care about redstone contraptions working as expected like in vanilla
minecraft:

```yaml
ticks-per:
  hopper-transfer: 8
  hopper-check: 1
hopper-amount: 1
hopper-can-load-chunks: true
```

These values should work fine for *almost* all contraptions, with the exception
of very few sorting systems which may require a lower `hopper-check` value as
the items only travel over the hoppers for a single tick. Use these for most
servers:

```yaml
ticks-per:
  hopper-transfer: 8
  hopper-check: 2
hopper-amount: 1
hopper-can-load-chunks: false
```

If you'd like to ultra-optimise hoppers, you can set the `hopper-check` to a
higher value (with the highest I'd recommend going being `4`) but this may
cause quite a lot of contraptions to break.  
You can also increase the `hopper-transfer` value to slow down item transfer
even more:

```yaml
ticks-per:
  hopper-transfer: 16
  hopper-check: 4
hopper-amount: 2
hopper-can-load-chunks: false
```

## `ticks-per/hopper-transfer`

This basically says 'how many ticks should a hopper wait before it transfers
items to the container it connects to'?

The default value of 8 means that a hopper will transfer items every 8 ticks,
or every 0.4 seconds.

- **Increasing** this value makes hoppers transfer items out of a hopper more
  **slowly**.
  - This reduces lag
  - ...but it can break redstone contraptions that rely on hoppers
    transferring items quickly.
- **Decreasing** this value makes hoppers transfer items out of a hopper more
  **quickly**.
  - This increases lag
  - ...but it makes redstone contraptions that rely on hoppers transferring
    items quickly work better.

## `ticks-per/hopper-check`

This basically says 'how many ticks should a hopper wait before it checks for
items to pull into itself from above'?

When you drop an item on top of a hopper, or it travels over a hopper in a
water stream, the hopper checks whether there's items above them.

## `hopper-amount`

This says 'how many items should a hopper transfer at once'?

The normal value is `1`. But if, for example, you have your `ticks-per/hopper-transfer`
value set to twice the normal rate, `16`, you may want 2 items to be transferred
at once so that hopper transfers aren't 2x slower.

## `hopper-can-load-chunks`

If you turn this option to `true`, then hoppers will be able to load chunks
when they try to pull items from containers in unloaded chunks, or push items
to containers in unloaded chunks.

For example, you could have long hopper lines that go through unloaded chunks,
and the hoppers would still work.

Because this essentially acts as a mini chunk loader, it can cause a lot of
extra lag, so I'd recommend to keep this option set to `false` unless you
really need it.

## Manual hopper optimisation

You may know that putting a composter on top of a hopper can make a hopper
cause a lot less lag. That's because the hopper doesn't have to check for items
to pull in from above every tick - it only has to check when the composter
outputs an item.

Encourage your players to use composters on top of hoppers where possible, to
reduce lag!

