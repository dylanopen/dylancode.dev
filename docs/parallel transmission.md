# Parallel transmission

Parallel transmission is when we have multiple wires which we send data down,
all at the same time.

For example, if we have 8 wires, we can send 8 different bits at the same time.

## Advantages of parallel transmission

Compared to [[serial transmission]], parallel transmission
*can* be faster, because it can send multiple bits at the same time. However,
this isn't always the case, as you'll see.

## Disadvantages of parallel transmission

The main disadvantages of parallel transmission compared to [[serial transmission]] are that:
- It's more expensive to implement as it requires multiple wires (and
  connectors, etc).
- It's less reliable as there is more chance of interference between the wires
  (called [[crosstalk]]).
- It can only be used over short distances as the signal is more likely to degrade
  over multiple wires.
- It can be slower than [[serial transmission]], as the wires can only be run at a
  lower frequency without interference.
- There can be [[data skew|skew]] issues, where the bits can get out of sync, because they are sent at the same time, but can take different amounts of time to arrive at the destination.
- It's harder to implement error detection and correction, as the bits are sent at the same time, so it's harder to detect if a [[bit]] is missing or corrupted.
- (Among lots of other disadvantages)

## Examples of parallel transmission

The main examples are the internal data [[computer bus|buses]] in a computer.

For example, modern computers are *64 [[bit]]*, which means that each [[data bus]] can
carry 64 bits at a time.
- Technically there is a difference between the bus size and the 

That means that there are actually 64 tiny wires on the motherboard, which can
carry signals of 64 bits (or 8 bytes) at a time from/to the CPU and the
different components.

Outside of internal buses, parallel transmission is almost never used in the
modern world because it's just not worth the many disadvantages. You'll see
it a lot in older connections, because back then they thought that parallel
was the future... turns out it wasn't :)

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Parallel transmission definition | When we have multiple wires which we send data down, all at the same time. |
| How many bits can 8 wires send simultaneously? | 8 different bits at the same time. |
| Advantage of parallel transmission over serial transmission | It *can* be faster, because it can send multiple bits at the same time. |
| Disadvantage 1 of parallel transmission (cost) | It's more expensive to implement as it requires multiple wires (and connectors, etc). |
| Disadvantage 2 of parallel transmission (reliability) | It's less reliable as there is more chance of interference between the wires (called crosstalk). |
| Disadvantage 3 of parallel transmission (distance) | It can only be used over short distances as the signal is more likely to degrade over multiple wires. |
| Disadvantage 4 of parallel transmission (speed compared to serial) | It can be slower than serial transmission, as the wires can only be run at a lower frequency without interference. |
| What are skew issues in parallel transmission? | The bits can get out of sync, because they are sent at the same time but can take different amounts of time to arrive at the destination. |
| Disadvantage of parallel transmission for error detection | It's harder to implement error detection and correction, as the bits are sent at the same time, so it's harder to detect if a bit is missing or corrupted. |
| Main modern example of parallel transmission | The internal data buses in a computer. |
| What does a 64-bit data bus imply physically? | There are actually 64 tiny wires on the motherboard, which can carry signals of 64 bits (or 8 bytes) at a time from/to the CPU and different components. |
| Where is parallel transmission used in the modern world? | Almost never used outside of internal buses because it's just not worth the many disadvantages. |

