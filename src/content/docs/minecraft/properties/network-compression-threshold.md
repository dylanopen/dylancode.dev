---
title: network-compression-threshold
---

You can change the server's network compression threshold in `server.properties`
\- it has a default value of `256`:

```properties
network-compression-threshold=256
```

## Recommended starting values

If you have a good internet connection and a good bandwidth:

```properties
network-compression-threshold=512
```

If you have a poor internet connection or limited bandwidth:

```propertiesproperties
network-compression-threshold=256
```

If you are playing on a LAN or all players have a good, unlimited internet
connection, you can disable compression altogether:

```properties
network-compression-threshold=-1
```

## What is `network-compression-threshold`?

The network compression threshold is the size in **bytes** beyond which packets
start to be *compressed* by the minecraft server.

So, if you set it to `512`, any packet larger than 512 bytes will be compressed
before being sent to the client over the internet.

## The benefits of compression

Just like if you've ever had to send a large file over email, for example,
compressing a file means less data sent over the network. That means:
- reducing the network usage (so network speed is less of an issue)
- reducing bandwidth costs (if your hosting provider charges you for data
  transfer)
- potentially even reducing latency (so players experience less lag)

Also, if you have any players on poor internet connections, compression will
mean that you can send them larger packets without overwhelming their
connection.

## The downsides of compression

The main downside is that it uses *CPU power* to compress and decompress
packets. This means that if the value is *lower* (more packets get compressed),
it will use *more* CPU power.

In most cases, this is not a problem, as modern CPUs are very good at
compression. However, if your server is already CPU-bound (by that, I mean the
cpu is the main bottleneck for performance), then lowering this value too much
could make performance worse.

Another downside is that compressing very small packets can actually make
them larger, due to the overhead of the compression algorithm. This is why
setting the threshold too low can be counterproductive - I'd never recommend
going any lower than `128` bytes.

