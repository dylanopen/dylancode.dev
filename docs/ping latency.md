# Ping latency

You may have heard of 'ping' when playing games, for example. It's very similar
to checking the [[latency]] of a network connection.

When you 'ping' a [[server]], you are sending a small packet of data to the [[server]] and then waiting for the [[server]] to send a response back to you. The time it takes
for the packet to go from your computer to the [[server]] and back is called the 
'ping [[latency]]' or just 'ping'.

> Ping is the time between sending a request and receiving a response from the
> [[server]].

## Why is it used?

When you're playing a game, or visiting a website, you want things to feel
*responsive*. Things should happen quickly when you click on something, and
websites should, ideally, load instantly when you click on a link.

When either of those happen, what needs to happen is:
- Your computer - the [[client]] - sends a *request* to the
  [[server]]. That has one 'load' of
  [[latency]] attached to it, which is the time it takes for the request to go from
  your computer to the [[server]].
- The [[server]] processes the request and sends a *response* back to
  your computer. That also has a 'load' of [[latency]] attached to it, which is the
  time it takes for the response to get back to the [[client]].

The *total* time it takes for the request to go from the [[client]] to the [[server]]
and back is the **ping**!

## How to check your ping

Open up a terminal (or a command prompt) and type this command:

```
ping dylancode.dev
```

You'll get something back like this:

```
PING dylancode.dev (172.67.152.137) 56(84) bytes of data.
64 bytes from 172.67.152.137: icmp_seq=1 ttl=58 time=9.22 ms
64 bytes from 172.67.152.137: icmp_seq=6 ttl=58 time=8.77 ms
64 bytes from 172.67.152.137: icmp_seq=7 ttl=58 time=8.35 ms
64 bytes from 172.67.152.137: icmp_seq=8 ttl=58 time=8.66 ms
...
```

This gives us the time it took for each packet to go from our computer to the
[[server]] and back, which is the ping [[latency]]. In my case, it's about 9ms, which is
pretty good.

## Why measure ping?

We usually measure the ping instead of the [[latency]] of *just* the request or
*just* the response, because the ping gives us a better idea of how responsive
the connection is. If the ping is high, it means that either the request or the
response is taking a long time, which can make things feel slow and
unresponsive. You might have a good connection to the [[server]], but if the [[server]]
is slow to process requests, then the ping will be high, and things will feel
slow.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Ping latency | Ping latency, also known simply as 'ping', is the time between sending a request and receiving a response from a server. It is measured by sending a small packet of data to the server and waiting for the server to send a response back, calculating the round-trip time. |
| How is ping measured? | Ping is measured by sending a packet of data from your computer (the client) to a server, waiting for the server to send a response back, and measuring the total time this round trip takes. |
| What contributes to the total time of a client-server interaction? | 1. The client sends a request to the server (one 'load' of latency).<br/>2. The server processes the request and sends a response back to the client (another 'load' of latency). The total time for both is the ping. |
| Why is ping used in gaming and web browsing? | To measure the responsiveness of a connection. A low ping means actions feel quick and responsive, while a high ping can make things feel slow and unresponsive. |
| What command is used to check your ping in a terminal? | `ping dylancode.dev` |
| What does the output of the `ping dylancode.dev` command show? | It shows the time it took for each packet to go from your computer to the server and back. For example: `time=9.22 ms` means a ping latency of 9.22 milliseconds. |
| Why is the total round-trip time (ping) measured instead of just the one-way latency of the request or response? | The ping gives a better idea of how responsive the whole connection is. If the ping is high, it indicates either the request or the response is slow, which can make things feel unresponsive, as the server may be slow to process requests even if the client's connection is good. |

