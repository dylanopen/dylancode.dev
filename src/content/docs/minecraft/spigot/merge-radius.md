---
title: merge-radius
---

We can configure the distance at which items and experience orbs combine - for
example, when you mine two blocks and they combine into one.

The default values in `spigot.yml` are:

```yaml
merge-radius:
    item: 0.5
    exp: -1.0
```

## Recommended starting values

I'd generally recommend either just sticking to the default values, or
increasing the item merge radius slightly, like this:

```yaml
merge-radius:
    item: 0.75
    exp: -1.0
```

## What does each value mean?

The number represents the radius (in blocks) around an item or xp orb for which
it will combine with other items or xp orbs.

For example, if you set the item merge radius to `2.0`, then items within 2
blocks of each other will combine.

> A value of `-1.0` means that the vanilla value is used.

## What's best for performance?

Most options in this guide have a very clear impact on performance - i.e. it's 
clear that \[increasing/decreasing\] the value will \[increase/decrease\] server
load, so cause more/fewer lag \[spikes\].

This isn't one of them. A **higher** merge radius means both:
- Fewer entities in the world (which is good for performance) because more items
  combine to form fewer individual items.
- BUT more CPU usage to check for nearby items to combine with (which is bad
  for performance).

The performance impact entirely depends on the situation of your server, and
it's impossble to give a definitive answer to what the best value is.

## What's best for gameplay?

Usually, the *vanilla* behaviour is best for gameplay - so setting both values
to `-1.0`.

