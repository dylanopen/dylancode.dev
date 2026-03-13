---
title: Serial transmission
---

Serial transmission is when we have a single wire which we send data down,
one bit at a time in a *sequence* (specific order).

Most [peripherals](/peripheral) use serial transmission, primarily the 
Universal Serial Bus (or whta you probably know as USB) which is used to connect
loads of different devices to a computer.

## Advantages of serial transmission

Compared to [parallel transmission](/parallel-transmission), serial transmission
has a few advantages:
- It's cheaper to implement as it only requires one wire (or a few wires for
  power and ground, and maybe one each direction).
- It's more reliable as there is less chance of interference between the wires
  (called [crosstalk](/crosstalk)).
- It can be used over longer distances as the signal is less likely to degrade
  over a single wire.
- Sometimes, it can actually be faster than parallel transmission, as the wires
  can be run at a higher frequency without interference.
- There's no [skew](/data-skew) issues, because the bits are sent one after
  another in order, so don't get out of sync.
- It's easier to implement error detection and correction, as the bits are sent
  in a known order, so it's easier to detect if a bit is missing or corrupted.
- (Among a vast number of other benefits)

## Disadvantages of serial transmission

The main disadvantage of serial transmission compared to [parallel
transmission](/parallel-transmission) is that it can be slower than parallel
in some cases, as it sends bits one at a time, whereas parallel can send
multiple bits at once. However, as mentioned above, this isn't always the case,
because parallel can be slowed down by various different things.

## Examples of serial transmission

- USB (Universal Serial Bus)
- UART (Universal Asynchronous Receiver Transmitter)
- SPI (Serial Peripheral Interface)
- Ethernet (wired networking)
- Wi-Fi (wireless networking) is *usually* serial

#

