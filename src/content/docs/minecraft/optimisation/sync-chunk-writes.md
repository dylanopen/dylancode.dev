---
title: sync-chunk-writes
---

To turn on synchronous chunk writes, go to server.properties and change the line
to:

```properties
sync-chunk-writes=true
```

Or, to turn it off:

```properties
sync-chunk-writes=false
```

> Default value: `true`

## Recommended starting value

```properties
sync-chunk-writes=false
```

> ONLY do this if you take frequent backups of your server! Data corruption is
> possible with this setting set to false.

## What is `sync-chunk-writes`?

When a chunk's data is modified, the server needs to save that data to disk so
that it can load it back again later. We'll refer to that as a "chunk write".

We have two options for when we can perform chunk writes:
- **Synchronous chunk writes**: the server will pause and wait for the chunk
  write to finish before continuing with other tasks.
- **Asynchronous (non-sync) chunk writes**: the server will continue with other
  tasks while the chunk write happens in the background.

## The benefits of asynchronous chunk writes

Async chunk writes (i.e. `sync-chunk-writes=false`) have the benefit of not
pausing the server while waiting for chunk writes to finish.

When the server auto-saves or loads/unloads chunks, this option is great for
performance, because it lets the server continue what it's doing and write the
chunk to the disk in the background.

This helps avoid lag spikes when chunks are loaded/unloaded or during saves.

> Short answer: `sync-chunk-writes=false` is generally better for performance.

## The benefits of synchronous chunk writes

*Sync* chunk writes (`sync-chunk-writes=true`) are *much* safer.

With the option set to false, if the server crashes or is force stopped
while chunk writes are happening in the background, those chunk writes may not
finish properly. This can lead to world corruption, missing blocks, and other
issues.

If you set it to true, though, the server will always wait for chunk writes to
finish before the server can do anything else. This reduces the risk of world
corruption.

> So in short, `sync-chunk-writes=true` is generally safer.

## Which should you choose?

**If you take frequent backups of your server**:
- You can safely set `sync-chunk-writes=false` for better performance, just
  restore a backup in the rare case that something goes wrong.

**If you don't take frequent backups of your server**:
- It's safer to set `sync-chunk-writes=true` to reduce the risk of world
  corruption. The performance impact is usually minimal unless you have a very
  slow disk.

