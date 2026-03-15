# Discrete random uniform distribution

## Standard series results

It's important to remember our [standard series results](
/standard-series-results) when working with discrete random uniform
distributions. The main two are these ones:

- $\sum_{r=1}^n r = \frac12n(n+1)$
- $\sum_{r=1}^n r^2 = \frac16n(n+1)(2n+1)$

## Transformations

Another reminder of how we [transform discrete random probabilities](
/transforming-discrete-random-probabilities).

If $Y=aX+b$ is a transformation of the DRV $X$:
- $E(Y)=aE(X)+b$
- $Var(Y)=a^2Var(X)$

## Rectangular distribution

If we have something that *looks* like a uniform distribution, but it's a 
rectangle instead of vertical lines of the same height, then it's not a
uniform distribution, but instead a rectangular distribution.

You should be able to tell: the graphs of rectangular distributions are,
well, rectangles.

## Notation for distributions

We can represent a probability distribution using a notation like this:
- $X \sim A(b, c, ...)$

That means that $X$ is an *A* distribution (whatever A may be) and we need to
know the parameters: $b$, $c$, etc. to be able to work with it.

## Uniform distribution notation

> $$
> X \sim U(n)
> $$

This means that $X$ is a discrete random variable which follows a uniform
distribution, from $1$ to $n$.

## Example: rolling a die

For a normal, fair, 6-sided die, our distribution is:

$$
X \sim U(6)
$$

Let's say we were to write a table of our probabilities for this distribution.
It would look like this:

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 | $\sum$ |
|---|---|---|---|---|---|---|---|
| $p$ | $\frac16$ | $\frac16$ | $\frac16$ | $\frac16$ | $\frac16$ | $\frac16$ | | 1 |
| $xp$ | $\frac16$ | $\frac26$ | $\frac36$ | $\frac46$ | $\frac56$ | $\frac66$ | $\frac{21}{6}$ |
| $x^2p$ | $\frac16$ | $\frac46$ | $\frac{9}{6}$ | $\frac{16}{6}$ | $\frac{25}{6}$ | $\frac{36}{6}$ | $\frac{91}{6}$ |

Let's calculate our expected value and variance for the distribution:
- $E(X)=\sum xp = \frac{21}{6} = 3.5$
- $E(X^2)=\sum x^2p = \frac{91}{6}$
- $E(X)^2 = \left(\frac{21}{6}\right)^2$
- $Var(X)=E(X^2)-E(X)^2 = \frac{91}{6} - \left(\frac{21}{6}\right)^2 = \frac{35}{12}$

## General formula

We've calculated the expected value and variance for a specific example, but we
can do it more generally. Let's say that $P(X=r)=\frac1n$ for $r=1, 2, ..., n$.

We can put this into a table to visualise it:

| $x$ | 1 | 2 | 3 | ... | $n$ | $\sum$ |
|---|---|---|---|---|---|---|
| $p$ | $\frac1n$ | $\frac1n$ | $\frac1n$ | ... | $\frac1n$ | 1 |
| $xp$ | $\frac1n$ | $\frac2n$ | $\frac3n$ | ... | $\frac{n}{n}$ | $\frac{n(n+1)}{2n}$ |
| $x^2p$ | $\frac1n$ | $\frac4n$ | $\frac9n$ | ... | $\frac{n^2}{n}$ | $\frac{n(n+1)(2n+1)}{6n}$ |

To calculate our expected value:
- $E(X)=\sum xp=\frac1n+\frac2n+\frac3n+...+\frac nn$
- $E(X)=\frac{\sum_{r=1}^n r}n$
- $E(X)=\frac{n(n+1)}{2n}$
- $E(X)=\frac{n+1}{2}$
- So the expected value of a discrete random variable which follows a uniform
  distribution from $1$ to $n$ is $\frac{n+1}{2}$.

Now, our variance. This one's a little more complicated:
- $E(X^2)=\sum x^2p$
- $E(X)^2 = \left(\sum xp\right)^2$
- $Var(X)=E(X^2)-E(X)^2$
- $Var(X)=\sum x^2p-(\sum xp)^2$
- $Var(X)=\frac{\frac16n(n+1)(2n+1)}n-\frac14(n+1)^2$
- $Var(X)=\frac{(n+1)(2n+1)}{6}-\frac{(n+1)^2}{4}$
- $Var(X)=\frac1{12}(n+1)(2(2n+1)-3(n+1))$
- $Var(X)=\frac1{12}(n+1)(4n+2-3n-3)$
- $Var(x)=\frac1{12}(n+1)(n-1)$
- $Var(X)=\frac1{12}(n^2-1)$

> For a discrete random variable $X$ which follows a uniform distribution from
  $1$ to $n$:
> $$
> E(X)=\frac{n+1}{2}
> Var(X)=\frac1{12}(n^2-1)
> $$

## 
