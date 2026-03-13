---
title: Parallel transmission
---

Parallel transmission is when we have multiple wires which we send data down,
all at the same time.

For example, if we have 8 wires, we can send 8 different bits at the same time.

## Advantages of parallel transmission

Compared to [serial transmission](/serial-transmission), parallel transmission
*can* be faster, because it can send multiple bits at the same time. However,
this isn't always the case, as you'll see.

## Disadvantages of parallel transmission

The main disadvantages of parallel transmission compared to [serial
transmission](/serial-transmission) are that:
- It's more expensive to implement as it requires multiple wires (and
  connectors, etc).
- It's less reliable as there is more chance of interference between the wires
  (called [crosstalk](/crosstalk)).
- It can only be used over short distances as the signal is more likely to degrade
  over multiple wires.
- It can be slower than serial transmission, as the wires can only be run at a
  lower frequency without interference.
- There can be [skew](/data-skew) issues, where the bits can get out of sync, because they are sent at the same time, but can take different amounts of time to arrive at the destination.
- It's harder to implement error detection and correction, as the bits are sent at the same time, so it's harder to detect if a bit is missing or corrupted.
- (Among lots of other disadvantages)

## Examples of parallel transmission

The main examples are the internal data buses in a computer.

For example, modern computers are *64 bit*, which means that each data bus can
carry 64 bits at a time.

That means that there are actually 64 tiny wires on the motherboard, which can
carry signals of 64 bits (or 8 bytes) at a time from/to the CPU and the
different components.

Outside of internal buses, parallel transmission is almost never used in the
modern world because it's just not worth the many disadvantages. You'll see
it a lot in older connections, because back then they thought that parallel
was the future... turns out it wasn't :)

