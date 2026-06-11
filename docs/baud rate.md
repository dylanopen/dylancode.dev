# Baud rate

The baud rate is the number of signal changes that occur per second.

For example, if we have a baud rate of 9600, that means that there are 9600
signal changes per second (the number of times that the signal changes its state
/ value per second).

This isn't always the same as the [[bit rate]], because a single signal change can
sometimes represent multiple [[bit]]s of data, depending on the way we encode the
data. For example, if we use a [[modulation scheme]] that allows us to encode 4 bits
per signal change, then a baud rate of 9600 would correspond to a [[bit rate]] of
38400 bits per second (9600 signal changes per second * 4 bits per signal change
= 38400 bits per second).

## Calculating baud rate

If we know the [[bit rate]] and the number of [[bits per signal change]], we can
calculate the baud rate using the formula:

$$
\text{Baud rate} = \frac{\text{bit rate}}{\text{Bits per signal change}}
$$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Baud rate definition | The number of signal changes that occur per second. |
| Example of a 9600 baud rate | There are 9600 signal changes per second. |
| Is baud rate always the same as bit rate? | No, because a single signal change can sometimes represent multiple bits of data, depending on the encoding scheme. |
| If a modulation scheme encodes 4 bits per signal change, what bit rate does a 9600 baud rate give? | Bit rate of 38400 bits per second (9600 signal changes/second * 4 bits per signal change). |
| Formula to calculate baud rate given bit rate and bits per signal change | $$\text{Baud rate} = \frac{\text{bit rate}}{\text{Bits per signal change}}$$ |
| How do you calculate bit rate from baud rate? | Multiply baud rate by bits per signal change e.g., $9600 \times 4 = 38400$ bits per second. |

