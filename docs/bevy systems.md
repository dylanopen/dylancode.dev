---
title: Bevy systems
---

## What are systems?

A *system* in Bevy is essentially a function.

We can put these systems into lists, called **schedules**.

### Schedules

Schedules run at different times during our app lifecycle.

Some examples of schedules are:
- `Startup`, for running **once** when the app first starts.
- `Update`, for running **every tick/frame** *after* the app has started.

We can also prefix the `Startup` and `Update` schedules, with `Pre` (to run just before the schedule) or `Post` (to run just after the schedule).

For example, `PreUpdate` systems will always run before `Update` systems, and `PostStartup` systems will always run after `Startup` systems.

## Creating a system

In Bevy, a system is just a function.

We can create a system like this:

```rust
fn say_hello() {
    println!("Hello Bevy!");
}
```

## Registering a system

We can add a system to a schedule with the `add_systems` method on an `App`.

To add our `say_hello` system to the `Update` schedule

```rust
app.add_systems(Update, say_hello);
```

Our full code would look like:

```rust
use bevy::prelude::*;

fn say_hello() {
    println!("Hello Bevy!");
}

fn main() {
    let mut app = App::new();
    app.add_plugins(MinimalPlugins);
    app.add_systems(Update, say_hello);
    app.run();
}
```

When we run this program, we will get `Hello Bevy!` printed repeatedly in our terminal.

You've written your first Bevy system!

## Multiple systems

If we had three different systems we want to run on `Startup`, we *could* just do something like:

```rust
// Function definitions ommited here for brevity.
// They are included in the project source code below.

app.add_systems(Update, system_1);
app.add_systems(Update, system_2);
app.add_systems(Update, system_3);
```

But, if our systems are the same, there's actually a shorthand way to do it, using **tuples**:



Both give identical results, which may look like this:

```
Running system 2
Running system 1
Running system 3
Hello Bevy!
Hello Bevy!
...
```

## A note on system ordering

We will come back to [[bevy system ordering]] later on, but it's worth understanding now that Bevy runs systems in *parallel*.

That means that, even though we registered `system_1` before `system_2`, it's entirely possible (like happened above) that `system_2` actually runs first.

If this isn't what you want (e.g. because one system changes a resource that's later used in a new system), you can specifically tell Bevy to run one system before another. This will be covered in detail in the [[bevy system ordering]] chapter.

## Source code

You can find the full project at <https://github.com/dylanopen/bevy_tutorial/blob/systems/src/main.rs>
