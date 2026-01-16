---
title: Binomial expansion by factorial
---

While we can use either Pascal's triangle or the $^nC_r$ notation to find the
coefficients in a binomial expansion, we can also use factorials directly.

This is useful if we have unknowns in the expression for $n$ or $r$.

## Finding a specific term using factorials

If we want to find $^nC_r$, we can use this formula:

$$
^nC_r = \frac{n!}{r!(n-r)!}
$$

### Prove that $^5C_2 = 10$ using factorials.

- $^5C_2 = \frac{5!}{2!(5-2)!}$
- $= \frac{5!}{2! \times 3!}$
- $= \frac{5 \times 4 \times 3!}{2 \times 1 \times 3!}$
- $= \frac{5 \times 4}{2 \times 1}$
- $= \frac{20}{2}$
- $= 10$

## Finding multiple coefficients

### Expand $(1+x)^4$ using factorials to find the coefficients

- $(1+x)^4 = {^4C_0 (1)^4 (x)^0} + {^4C_1 (1)^3 (x)^1} + {^4C_2 (1)^2 (x)^2} + {^4C_3 (1)^1 (x)^3} + {^4C_4 (1)^0 (x)^4}$
- $= \frac{4!}{0!(4-0)!} \times 1 + \frac{4!}{1!(4-1)!} \times x + \frac{4!}{2!(4-2)!} \times x^2 + \frac{4!}{3!(4-3)!} \times x^3 + \frac{4!}{4!(4-4)!} \times x^4$
- $= 1 + 4x + 6x^2 + 4x^3 + 1x^4$
- $= 1 + 4x + 6x^2 + 4x^3 + x^4$

### Find the first 3 terms of the expansion of $(2+x)^5$ using factorials to find the coefficients

- $(2+x)^5 = {^5C_0 (2)^5 (x)^0} + {^5C_1 (2)^4 (x)^1} + {^5C_2 (2)^3 (x)^2} + ...$
- $= \frac{5!}{0!(5-0)!} \times (2)^5 + \frac{5!}{1!(5-1)!} \times (2)^4 \times x + \frac{5!}{2!(5-2)!} \times (2)^3 \times x^2 + ...$
- $= 1 \times 32 + 5 \times 16 \times x + 10 \times 8 \times x^2 + ...$
- $= 32 + 80x + 80x^2 + ...$

