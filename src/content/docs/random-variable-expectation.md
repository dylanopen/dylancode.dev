---
title: Random variable expectation
---

> The *expectation* of a random variable is the **mean** of the results we can
> expect to get if we measure the [random variable](/random-variable) 'infinite'
> times.

It's basically the mean value of the list of possible values multiplied by their
individual probabilities.

## Notation

We can write the expected value of a list of values $X$ as $E(X)$.

## Formula

Suppose we have a list of possible discrete values and their associated
probabilities. The value at position $n$ is $x_n$ and the associated probability
is $p_n$.

That means we can write the **expectation** of a list of discrete values and
their probabilities ($X$) as:

> $$
> E(X) = \sum x_n p_n
> $$

A reminder that the $n$ in the formula just means the position of the value. You
don't need to think about it: it's just the way we write the formula.

## Calculating the expectation

Given that formula, it tells us that we can calculate the *expectation* of a
list of values and their probabilities by multiplying each value by its
probability (chance of it happening) and then adding all those products
together.

This effectively calculates the mean of the values, weighted by their
probabilities. We *don't* need to divide by the sum of probabilities, because
their sum is always 1 (since they represent all possible outcomes).

### Example: Calculating the expectation of a fair die roll

Let's say we have a standard six-sided die, and we want to calculate the
expectation of what we'll get when we roll it.

The possible values are 1, 2, 3, 4, 5, and 6. Each value has an equal
probability of $\frac{1}{6}$ - because it's a fair dice.

Given that, we can then calculate the expectation using our formula:
- $E(X)=\sum x_n p_n$
- $E(X) = 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{6} + 3 \cdot \frac{1}{6} + 4 \cdot \frac{1}{6} + 5 \cdot \frac{1}{6} + 6 \cdot \frac{1}{6}$
- $E(X) = \frac{1}{6} + \frac{2}{6} + \frac{3}{6} + \frac{4}{6} + \frac{5}{6} + \frac{6}{6}$
- $E(X) = \frac{21}{6}$
- $E(X) = 3.5$

So the expectation of rolling a fair die is 3.5. This means that if we were to
roll the die an infinite number of times, the **average** (mean) value we would
get would be 3.5.

