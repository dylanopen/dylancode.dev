# Discrete random variance

The [variance](/variance) is, in short, a measure of how much the values of a
random variable differ from the mean. It's the square of the
[standard deviation](/standard-deviation).

## Notation

We write the variance of a list of values $X$ as $Var(X)$.

## Formula

Suppose we have a list of possible discrete values and their probabilities.  
The value at position $n$ is $x_n$ and the associated probability is $p_n$.

The **variance** of the list is calculated by:

> $$
> Var(X) = E(X^2) - (E(X))^2
> $$

We can substitute the formula for expectation into this - $E(X) = \sum x_n p_n$
\- to get:

> $$
> Var(X) = \sum x_n^2 p_n - \left( \sum x_n p_n \right)^2
> $$
