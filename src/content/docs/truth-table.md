---
title: Truth table
---

A *truth table* is just a way of us showing all the possible outputs of a
logical operation (or [logic gate](/logic-gates)) based on all the possible
combinations of its inputs.

## An example: `AND`

For example, let's consider a simple logical operation called "AND". The AND
operation takes two inputs and produces an output that is "true" (or "1") only
if *both* inputs are "true" (or "1"). If either input is "false" (or "0"), the 
output is also "false" (or "0").

If we list out all the possible combinations of inputs and their corresponding
outputs, we get the following truth table for the AND operation:

| Input A | Input B | Output (A AND B) |
|---------|---------|------------------|
|    0    |    0    |      **0**       |
|    0    |    1    |      **0**       |
|    1    |    0    |      **0**       |
|    1    |    1    |      **1**       |

In this table:
- The first column represents the first input (Input A).
- The second column represents the second input (Input B).
- The third column shows the output of the AND operation based on the values of
  Input A and Input B.

## Interpreting truth tables

Let's take the example from above:

| Input A | Input B | Output (A AND B) |
|---------|---------|------------------|
|    0    |    0    |      **0**       |
|    0    |    1    |      **0**       |
|    1    |    0    |      **0**       |
|    1    |    1    |      **1**       |

- In the first row, both inputs are 0, so the output is 0 (because A AND B is
  false).
- In the second row, Input A is 0 and Input B is 1, so the output is still 0 (because A
  AND B is false).
- In the third row, Input A is 1 and Input B is 0, so the output is again 0 (because A AND B is
  false).
- In the fourth row, both inputs are 1, so the output is 1 (because A AND B is true).

So we can see that, for an AND gate to output a 1, both of its inputs must be 1.

## Truth tables with only one input

Here's an example of a truth table for a logical operation called "NOT", which
takes a single input and produces an output that is the opposite of the input.

It works in exactly the same way:

| Input A | Output (NOT A) |
|---------|----------------|
|    0    |      **1**     |
|    1    |      **0**     |

## How about 3 inputs?

Here's a truth table for a logical operation which outputs a `1` if *at least
two* of its three inputs are `1`:

| Input A | Input B | Input C | Output |
|---------|---------|---------|--------|
|    0    |    0    |    0    |  **0** |
|    0    |    0    |    1    |  **0** |
|    0    |    1    |    0    |  **0** |
|    0    |    1    |    1    |  **1** |
|    1    |    0    |    0    |  **0** |
|    1    |    0    |    1    |  **1** |
|    1    |    1    |    0    |  **1** |
|    1    |    1    |    1    |  **1** |

In this table, the output is `1` in the rows where at least two of the inputs
are `1`.

That's all there is to truth tables! They're just a simple way of showing how
logical operations work based on their inputs.

