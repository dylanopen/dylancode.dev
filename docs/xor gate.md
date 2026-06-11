# XOR gate

An *XOR* [[logic gate]] ([[short]] for 'exclusive [[or gate]]') takes two input signals and
produces an output signal that is `1` if **exactly one** of the input signals is
`1`.

In other words, the output will be `1` if the input signals are different from
each other; if both input signals are the same (both `0` or both `1`), the
output will be `0`.

## Truth table

The [[truth table]] for it looks like:

| Input A | Input B | Output (A XOR B) |
|---------|---------|------------------|
|    0    |    0    |      **0**       |
|    0    |    1    |      **1**       |
|    1    |    0    |      **1**       |
|    1    |    1    |      **0**       |

## Making an XOR gate

An XOR gate can also be said to be 'A OR B AND NOT (A AND B)'.

This means that you can create an XOR gate by combining OR, AND, and NOT gates
together.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is an XOR (exclusive OR) gate? | A logic gate that takes two input signals and produces an output of `1` if **exactly one** of the input signals is `1`. |
| When does an XOR gate output `1`? | An XOR gate outputs `1` if the input signals are different from each other. |
| When does an XOR gate output `0`? | An XOR gate outputs `0` if both input signals are the same (both `0` or both `1`). |
| What is the output of an XOR gate when Input A=0 and Input B=0? | `0` |
| What is the output of an XOR gate when Input A=0 and Input B=1? | `1` |
| What is the output of an XOR gate when Input A=1 and Input B=0? | `1` |
| What is the output of an XOR gate when Input A=1 and Input B=1? | `0` |
| How can the function of an XOR gate be expressed in terms of other gates? | An XOR gate can be said to be 'A OR B AND NOT (A AND B)'. |
| Which three types of logic gates can be combined to create an XOR gate? | OR, AND, and NOT gates. |

