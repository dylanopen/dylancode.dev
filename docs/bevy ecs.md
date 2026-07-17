# Bevy ECS

> There's no programming in this chapter. It's all about understanding how Bevy works, by looking at its main feature: the **entity component system**.

## What is an ECS?

There are two main ways to build games:
- Using an **entity component system**, like Bevy. This is the 'new' way, it has various advantages that we'll go through.
- Using **object-oriented** programming, things like inheriting from game-objects. This is the 'old' way of doing it, and it has lots of issues (that Bevy's ECS solves!)

ECS stands for 'Entity Component System' because, well, that's what it is.

There are 3 main concepts to understand before starting programming in Bevy:
- [[bevy components|Components]] - structs of data that usually represent a *property* of an *entity*.
- [[bevy entities|Entities]] - a 'bundle' of *components*, representing 