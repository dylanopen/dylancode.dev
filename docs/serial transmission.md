# Serial transmission

Serial transmission is when we have a single wire which we send data down, one [[bit]] at a time in a *sequence* (specific order).

Most [[peripheral|peripherals]] use serial transmission, primarily the  [[universal serial bus]] (or what you probably know as USB) which is used to connect loads of different devices to a computer.
## Advantages of serial transmission

Compared to [[parallel transmission]], serial transmission
has a few advantages:
- It's cheaper to implement as it only requires one wire (or a few wires for [[power]] and ground, and maybe one each direction).
- It's more reliable as there is less chance of interference between the wires (called [[crosstalk]]).
- It can be used over longer distances as the signal is less likely to degrade over a single wire.
- Sometimes, it can actually be faster than [[parallel transmission]], as the wires can be run at a higher frequency without interference.
- There's no [[data skew|skew]] issues, because the bits are sent one after another in order, so don't get out of sync.
- It's easier to implement error detection and correction, as the bits are sent in a known order, so it's easier to detect if a [[bit]] is missing or corrupted.
- (Among a vast number of other benefits)

## Disadvantages of serial transmission

The main disadvantage of serial transmission compared to [[parallel transmission]] is that it can be slower than parallel in some cases, as it sends bits one at a time, whereas parallel can send multiple bits at once.

However, as mentioned above, this isn't always the case, because parallel can also be slowed down by various different things.

## Examples of serial transmission

- USB ([[universal serial bus]])
- UART (Universal Asynchronous Receiver Transmitter)
- SPI (Serial Peripheral Interface)
- Ethernet (wired networking)
- Wi-Fi (wireless networking) is *usually* serial

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Serial transmission | Data sent one bit at a time over a single wire in a sequence. |
| What is the primary cable used for serial transmission connecting peripherals to a computer? | Universal Serial Bus (USB). |
| Why is serial transmission cheaper to implement than parallel? | It requires only one wire (or a few for power/ground). |
| What problem is reduced in serial transmission because fewer wires are used? | Crosstalk (interference between wires). |
| Why can serial transmission work over longer distances than parallel? | The signal is less likely to degrade over a single wire. |
| How can serial transmission sometimes be faster than parallel? | Wires can be run at a higher frequency without interference. |
| Why does serial transmission have no data skew issues? | Bits are sent one after another in order, so they don't get out of sync. |
| Why is error detection and correction easier in serial transmission? | Bits are sent in a known order, making it easier to detect a missing or corrupted bit. |
| What is the main disadvantage of serial transmission? | It can be slower than parallel in some cases because it sends bits one at a time. |
| Give three examples of serial transmission technologies. | USB, UART, SPI, Ethernet, or Wi-Fi. |

