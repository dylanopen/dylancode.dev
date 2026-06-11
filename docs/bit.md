# Bit

A *bit* is the *fundamental unit of information* in computers. It represents a choice between two values: usually written as 0 and 1.

In computers, a bit represents an on-off state, and we can combine multiple bits to make larger units of information, such as a [[nibble]] or [[byte]].

> A bit is a [[binary]] digit.

## Number of values represented by bits

> $n$ bits can represent $2^n$ different values.

For example:

- 1 bit can represent 2 values: 0 or 1.
- 2 bits can represent 4 values: 00, 01, 10, or 11.
- 3 bits can represent 8 values: 000, 001, 010, 011, 100, 101, 110, or 111.
- 4 bits can represent 16 values: 0000 to 1111.
- And so on.

This is because each bit can be in one of two states, and the total number of
combinations is $2^n$.

## Number of bits needed for values

We can also go in reverse (assuming we know how to calculate [[logarithm]]s):
- To represent $m$ different values, we need at least $\log_2 m$ bits.
- For example:
  - To represent 32 values, we need at least $\log_2 32 = 5$ bits.
  - To represent a full RGB color (16,777,216 values), we need at least
    $\log_2 16777216 = 24$ bits. (that's why it's called "24-bit color").

## Common multiples of bits

- Most systems use a `64-bit` [[instruction set architecture]] nowadays, meaning they process data in chunks of 64 bits at a time.
- Another common size is `32-bit`, which was widely used in older systems and in windows programs which are still using ancient technology - typical
  windows ;)

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a bit? | The fundamental unit of information in computers, representing a choice between two values (usually 0 and 1), corresponding to an on-off state. |
| How many different values can $n$ bits represent? | $n$ bits can represent $2^n$ different values. |
| How many values can 1 bit, 2 bits, 3 bits, and 4 bits represent? | 1 bit can represent 2 values, 2 bits can represent 4 values, 3 bits can represent 8 values, and 4 bits can represent 16 values. |
| How do you calculate the minimum number of bits needed to represent $m$ different values? | To represent $m$ different values, you need at least $\log_2 m$ bits. |
| How many bits are needed to represent 32 values, and what is the calculation? | To represent 32 values, you need at least $\log_2 32 = 5$ bits. |
| Why is "24-bit color" called that, and how many values does it represent? | It covers 16,777,216 values (e.g., full RGB color) which requires at least $\log_2 16777216 = 24$ bits. |
| What is a common instruction set architecture size for modern systems? | Most systems use a `64-bit` [[instruction set architecture]], processing data in chunks of 64 bits at a time. |
| What was a common size for older systems and old Windows programs? | `32-bit` was widely used in older systems and in old Windows programs. |

