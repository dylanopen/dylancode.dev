---
title: Standard summation results
---

There are a set of results of $\sum$ which you need to learn.

They are:
- $\sum^n_{r=1} 1$
- $\sum^n_{r=1} r$
- $\sum^n_{r=1} r^2$
- $\sum^n_{r=1} r^3$

## $\sum^n_{r=1} 1$

- This means that we are adding $1$ a total of $n$ times.
- So the result is $n$.

$$
\sum^n_{r=1} 1 = n
$$

## $\sum^n_{r=1} r$

- This means that we are adding all the integers from $1$ to $n$.
- The result is the triangular number $n$!
- The formula for finding triangle numbers is $\frac{n(n+1)}{2}$.

$$
\sum^n_{r=1} r = \frac{n(n+1)}{2}
$$

## $\sum^n_{r=1} r^2$

- This means that we are adding the squares of all the integers from $1$ to $n$.
- The formula for finding this is $\frac{n(n+1)(2n+1)}{6}$.

$$
\sum^n_{r=1} r^2 = \frac{n(n+1)(2n+1)}{6}
$$

## $\sum^n_{r=1} r^3$

- This means that we are adding the cubes of all the integers from $1$ to $n$.
- The formula for finding this is $\left(\frac{n(n+1)}{2}\right)^2$.

$$
\sum^n_{r=1} r^3 = \left(\frac{n(n+1)}{2}\right)^2
$$

## Deducing results

### Using standard results, deduce the value of $\sum^n_r=1(2r-3)$

- We can rewrite the above as $\sum^n_{r=1} 2r - \sum^n_{r=1} 3$
- Which we can use the distributive law on:
  - $2\sum^n_{r=1} r - 3\sum^n_{r=1} 1$
- We can substitute in our standard results:
  - $2(\frac{n(n+1)}{2}) - 3(n)$
- Which simplifies to:
  - $n(n+1) - 3n$
  - $n^2 + n - 3n$
  - $n^2 - 2n$
- **Answer**: $\sum^n_{r=1} (2r-3) = n^2 - 2n$

### Using standard results, deduce the value of $\sum^{23}_{18} r^2$

- The values in the range of $18-23$ will add up to the same as the values from   $1-23$ minus the values from $1-17$:
  - $\sum^{23}_{r=18} r^2 = \sum^{23}_{r=1} r^2 - \sum^{17}_{r=1} r^2$
- We can substitute in our standard results:
  - $\frac{23(23+1)(2\times23+1)}{6} - \frac{17(17+1)(2\times17+1)}6$
- Which simplifies to:
  - $\frac{23\times24\times47}{6} - \frac{17\times18\times35}{6}$
  - $4324 - 1785$
  - $2539$
- **Answer**: $\sum^{23}_{r=18} r^2 = 2539$

### Using standard results, deduce the value of $\sum^8_1(2r^3-3r^2)$

- $=\sum^8_1(2r^3)-\sum^8_1(3r^2)$
- $=2\sum^8_1(r^3)-3\sum^8_1(r^2)$
- TODO

