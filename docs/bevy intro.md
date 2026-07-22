---
title: Learn Bevy: the Rust game engine of the future
---

Bevy is a relatively new game engine, at least, compared to some of the major engines like Unity and Unreal.

It's written in Rust, which is a great language for game development, because it has great performance and makes it difficult to write some types of bugs.

## Getting started

If you don't already have Rust installed, you can install it by going to [rustup.rs](https://rustup.rs/) and following the instructions for your platform.

Once you've installed Rust, create a new project, like this:

```bash
cargo new bevy_tutorial
cd bevy_tutorial
```

Then, we're going to edit the `Cargo.toml` file to add Bevy as a dependency (as well as making everything compile quickly & optimised):

```toml
[package]
name = "bevy_tutorial"
version = "0.1.0"
edition = "2024"

[dependencies.bevy]
version = "0.17.0"
features = ["dynamic_linking"]

[profile.dev]
opt-level = 1

[profile.dev.package."*"]
opt-level = 3
```

- `dynamic_linking` is a Bevy feature which massively reduces the time it takes to recompile your project (for me, it reduces it from 3 seconds to 0.5 seconds).
- We set the optimisation level to `1` (not very optimised) for *our own* code, while in development. Because this is the code we are changing, so it's the thing that gets recompiled all the time, we don't want to spend much time compiling it for the best optimisation (we can do that for the release).
- However, as we'll probably only build the Bevy engine itself once \[until we need to update it\], we can set the optimisation level to `3` (fully optimised) for all dependencies (including Bevy itself). This will make our app run much faster, and won't add compile time after the first (slow!) compilation.

## Running your first app

Type `cargo run` into the terminal, and after a while of compiling (the speed depends entirely on your computer - my desktop computer takes about 35 seconds, my old laptop takes about 35 *minutes*...) you should see... "Hello World"???

We haven't actually written any code yet, so we're not using Bevy. But at least we know our program can run OK.

## An empty Bevy app

The absolute minimum code to get a Bevy app running is this:

```rust
use bevy::prelude::*;

fn main() {
    let mut app = App::new();
    app.run();
}
```

- `use bevy::prelude::*;` imports all the common Bevy types and functions.
- `App::new()` creates a new Bevy application, the `App` struct stores all sorts of information about the app/game, e.g. the list of systems, entities, resources, loaded assets, etc.
- We `run()` the `App`, which lets Bevy take complete control of our control flow: you'll notice that any code after the `run` code won't actually execute until the app is closed. We should do this *after* we add all the plugins and systems.

## Minimal plugins

For now, we're going to be working with Bevy purely as an engine, and we won't touch any graphics until later.

The `MinimalPlugins` plugin group is perfect for this - it just adds the bare minimum to get an event loop set up, without any graphics or windowing.

We can add a plugin \[group\] using:

```rust
app.add_plugins(PluginGroup);
```

We'll add it to our app like this:

```rust
use bevy::prelude::*;

fn main() {
    let mut app = App::new();
    app.add_plugins(MinimalPlugins); // new line
    app.run();
}
```

> This code will be the basis for all future Bevy code we write, so make sure you have it in your project before moving on.

You'll now notice that our app doesn't immediately quit - that's because the `MinimalPlugins` group runs a game loop, so that we can run systems on repeat until we quit the app.

We have our first Bevy app - though admittedly, it's not particularly exciting. Let's [[bevy systems|make it do something]]!

## Source code

You can find the full project at <https://github.com/dylanopen/bevy_tutorial/blob/intro/src/main.rs>