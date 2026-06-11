# Discrete random median

The **[[median]]** of a dataset is the value that separates the higher half from the
lower half.

In terms of probability, the [[median]] of a [[random variable]] is the value that
divides the probability distribution into two equal halves.

In other words, it's the value such that the probability of the numbers
below it is equal to the probability of the numbers above it.

For a discrete [[random variable]], the [[median]] can be found by sorting the
possible values and their corresponding probabilities, and then finding the
value at which the cumulative probability reaches 0.5 (think: cumulative
frequency graphs, but in probability).

Here's the good thing! Because they are **discrete**, we don't have to find out
how far into a category the [[median]] is. We can just find the category that
contains the [[median]], and that's our answer.

## Expressing the median with inequalities

We can write this relationship mathematically as:

> $$
> P(X \leq M) \geq 0.5 \quad \text{and} \quad P(X \geq M) \geq 0.5
> $$

Where:
- $X$ is the [[random variable]].
- $M$ is the [[median]].

In reality, this just makes things more complicated than they need to be.  
We can just find the [[median]] using the cumulative probabilities method I
explained at the top.

## Two possible values

Just like with normal [[median]] questions, sometimes, there might be two possible
values for the [[median]], if it lies directly in between two categories.

If so, just find the [[mean]] (midpoint) of those two values, and that will be your
answer.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the definition of the median of a dataset? | The value that separates the higher half from the lower half. |
| How is the median of a random variable defined in terms of probability? | The value that divides the probability distribution into two equal halves. |
| What condition must the median $M$ satisfy regarding probabilities? | $P(X \leq M) \geq 0.5$ and $P(X \geq M) \geq 0.5$ |
| For a discrete random variable, what method is used to find the median? | Sort the possible values and their probabilities, then find the value where the cumulative probability reaches 0.5. |
| Do you need to interpolate between categories to find the median of a discrete random variable? | No, you just find the category containing the median. |
| What is the rule for the discrete median regarding probabilities below and above? | The probability of numbers below it equals the probability of numbers above it. |
| What should you do if the median lies directly between two categories? | Find the mean (midpoint) of those two values. |
| How is finding the median of a discrete random variable similar to working with data? | It is like using cumulative frequency graphs, but in probability. |

