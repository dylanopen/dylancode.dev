---
title: Proof by induction
---

## The typical method

1. Make a *conjecture*
1. Show it is true for $n=1$
1. Assume it's true for $n=k$
1. Show it must also be true for $n=k+1$
1. Conclude it's true for all *natural* numbers $n$ (where $n \ge 1$)

## Prove that the series $\frac1{1\times2}+\frac1{2\times3}+\frac1{3\times4}+\cdots+\frac1{n(n+1)}=\frac n{n+1}$

- Test when $n=1$:
  - LHS: $\frac1{1\times2}=\frac12$
  - RHS: $\frac1{1+1}=\frac12$
  - LHS = RHS
  - So it's true for $n=1$
- Assume that the statement is true for $n=k$:
  - $\frac1{1\times2}+\frac1{2\times3}+\frac1{3\times4}+\cdots+\frac1{k(k+1)}=\frac k{k+1}$
- Test for $n=k+1$:
  - LHS: $\frac1{1\times2}+\frac1{2\times3}+\frac1{3\times4}+\cdots+\frac1{k(k+1)}+\frac1{(k+1)(k+2)}$
  - Check if we can make the new sum of end terms equal our expected result
    ($\frac{k+1}{k+1+1}=\frac{k+1}{k+2}$):
    - $\frac k{k+1}+\frac1{(k+1)(k+2)}$
    - $=\frac{k(k+2)+1}{(k+1)(k+2)}$
    - $=\frac{k^2+2k+1}{(k+1)(k+2)}$
    - $=\frac{(k+1)^2}{(k+1)(k+2)}$
    - $=\frac{k+1}{k+2}$
  - So LHS: $\frac{k+1}{k+2}$
  - RHS: $\frac{k+1}{(k+1)+1}=\frac{k+1}{k+2}$
  - LHS = RHS
  - So it's true for $n=k+1$
- In conclusion:
  - It's true for $n=1$
  - **IF** it's true for $n=k$, then it's also true for $n=k+1
  - Since it is true for $n=1$, by induction, it's true for all integers $n$
    (where $n \ge 1$)

## How do we know that all integers $n$ are covered?

You might be a bit confused as to how we can get from knowing that $n=1$ is
true, to knowing that *all* integers are true.

**If** $n=k$ is true for a specific value of $k$, then the next integer must
also be true. So:
- We know that $n=1$
- let $k=n=1$
- Because the value of $k$ is satisfied, the value of $k+1$ also is:
  - $k+1=1+1=2$
- Now let $k=n=2$
  - We can do exactly the same as above to find that $n=3$ is also true
- ...and so on, for *all* positive integers.

## Proving using [standard summation results](/standard-summation-results)

### Prove $1^2+2^2+3^2+\cdots+n^2=\frac16n(n+1)(2n+1)$

- Check when $n=1$:
  - LHS: $1^2=1$
  - RHS: $\frac16(1)(1+1)(2(1)+1)=1$
  - So $n=1$ is satisfied as it holds true!
- We now *assume* that $n=k$ also holds true.
- Find RHS when $n=k$:
  - $=\frac16k(k+1)(2k+1)$
  - $=\frac16(2k^2+3k+1)$
  - $=\frac13k^2-
- Check if $n=k+1$ holds true:
  - LHS:
    - $1^2+2^2+3^2+\cdots+k^2+(k+1)^2$
    - ...which is $(k+1)^2$ more than when $n=k$, or $k^2+2k+1$ more.
  - RHS:
    - $\frac16(k+1)((k+1)+1)(2(k+1)+1)$
    - $=\frac16(k+1)(k+2)(2k+3)$
    - $=\frac16(k+1)(2k^2+7k+6)$
    - $=\frac16(2k^3+9k^2+13k+6)$
    - $=\frac13k^3+\frac32k^2+\frac{13}6k+1$

