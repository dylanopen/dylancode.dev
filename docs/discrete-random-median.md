# Discrete random median

The **median** of a dataset is the value that separates the higher half from the
lower half.

In terms of probability, the median of a random variable is the value that
divides the probability distribution into two equal halves.

In other words, it's the value such that the probability of the numbers
below it is equal to the probability of the numbers above it.

For a discrete random variable, the median can be found by sorting the
possible values and their corresponding probabilities, and then finding the
value at which the cumulative probability reaches 0.5 (think: cumulative
frequency graphs, but in probability).

Here's the good thing! Because they are **discrete**, we don't have to find out
how far into a category the median is. We can just find the category that
contains the median, and that's our answer.

## Expressing the median with inequalities

We can write this relationship mathematically as:

> $$
> P(X \leq M) \geq 0.5 \quad \text{and} \quad P(X \geq M) \geq 0.5
> $$

Where:
- $X$ is the random variable.
- $M$ is the median.

In reality, this just makes things more complicated than they need to be.  
We can just find the median using the cumulative probabilities method I
explained at the top.

## Two possible values

Just like with normal median questions, sometimes, there might be two possible
values for the median, if it lies directly in between two categories.

If so, just find the mean (midpoint) of those two values, and that will be your
answer.
