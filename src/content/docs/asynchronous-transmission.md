---
title: Asynchronous transmission
---

Asynchronous transmission is when we send data without a clock signal, and
instead we send extra signals to indicate when data is being sent.

For example, we might send a *start bit* to indicate that we're about to send
data, and then we send the data bits, and then we send a *stop bit* to indicate
that we're done sending data.

The advantage of asynchronous transmission is that the sender and receiver don't
need to be synchronised to the same clock signal, and they don't need to always
be listening to a clock signal, which can save power.

The disadvantage is that it can be slower than synchronous transmission, because
there's overhead of sending extra signals like start and stop bits, and the
sender and receiver need to wait for each other to be ready before sending data.

## Start and stop bits

We send a start bit when we're about to send data, to indicate to the receiver
that data is coming.

Then, after we send the data bits, we send a stop bit to indicate that we're
done sending data.

The start signal may be a 0 or a 1 depending on the protocol. The key thing
is that it is **different** from the **stop bit**.

## Synchronization

In asynchronous transmission, the sender and receiver are not synchronised to
the same clock signal, so they need to use the start and stop bits to indicate
when data is being sent. They *are* synchronised to each other, after the
start bit. So they know when to read the next bit, but they don't have to stay
constantly synchronised to a clock signal, which can save power.

## Examples of asynchronous transmission

- UART (Universal Asynchronous Receiver Transmitter)
- RS-232 (a standard for serial communication)
- MIDI (Musical Instrument Digital Interface)

