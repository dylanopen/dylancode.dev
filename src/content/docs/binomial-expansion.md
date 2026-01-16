---
title: Binomial expansion
---

## Expansion of common powers

- $(a+b)^0=1$
- $(a+b)^1=a+b$
- $(a+b)^2=a^2+2ab+b^2$
- $(a+b)^3=a^3+3a^2b+3ab^2+b^3$
- $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b$
- $(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5$
- $(a+b)^6=a^6+6a^5b+15a^4b^2+20a^3b^3+15a^2b^4+6ab^5+b^6$
- ...

## Pascal's triangle

The coefficients in the expansions above correspond to the *rows* of Pascal's
triangle:

```
row |
  0 |              1
  1 |            1   1
  2 |          1   2   1
  3 |        1   3   3   1
  4 |      1   4   6   4   1
  5 |    1   5  10  10   5   1
  6 |  1   6  15  20  15   6   1
       ^                   ^
       |_ column 0         |_ column 5
```

We can write the the coefficient at row $r$ and column $c$ as $^rC_c$.

## Finding specific terms using a calculator

If we want to find the coefficient of the $b^3$ term of the expansion of
$(a+b)^6$, we can solve:

$$
^6C_3=20
$$

## Finding a specific term using factorials

If we want to find $^nC_r$, we can also use this formula:

$$
^nC_r = \frac{n!}{r!(n-r)!}
$$

## Finding all the coefficients

$$
(a+b)^n = {^nC_0 a^n b^0} + {^nC_1 a^{n-1} b^1} + {^nC_2 a^{n-2} b^2} + ... + {^nC_n a^0 b^n}
$$

### Expand $(2+x)^4$

- $(2+x)^4 = {^4C_0 (2)^4 (x)^0} + {^4C_1 (2)^3 (x)^1} + {^4C_2 (2)^2 (x)^2} + {^4C_3 (2)^1 (x)^3} + {^4C_4 (2)^0 (x)^4}$
- $= 1 \times 16 \times 1 + 4 \times 8 \times x + 6 \times 4 \times x^2 + 4 \times 2 \times x^3 + 1 \times 1 \times x^4$
- $= 16 + 32x + 24x^2 + 8x^3 + x^4$

### Expand $(1+2x)^6$

- $=1^6$  
  $+^6C_1(1)^5(2x)^1$  
  $+ ^6C_2(1)^4(2x)^2$  
  $+^6C_3(1)^3(2x)^3$  
  $+ ^6C_4(1)^2(2x)^4$  
  $+ ^6C_5(1)^1(2x)^5$  
  $+ ^6C_6(1)^0(2x)^6$  
- $=1 + 6 \times 1 \times 2x + 15 \times 1 \times 4x^2 + 20 \times 1 \times 8x^3 + 15 \times 1 \times 16x^4 + 6 \times 1 \times 32x^5 + 1 \times 1 \times 64x^6$
- $=1 + 12x + 60x^2 + 160x^3 + 240x^4 + 192x^5 + 64x^6$
- **Answer:** $1 + 12x + 60x^2 + 160x^3 + 240x^4 + 192x^5 + 64x^6$

## Representing the number of combinations

We can write the number of combinations of choosing $r$ items from a list of $n$
items as either $^nC_r$ or $\pmatrix{n\\r}$.

## Common combinations

$$
\pmatrix{n\\0}=\pmatrix{n\\n}=1
$$

$$
\pmatrix{n\\1}=\pmatrix{n\\n-1}=n
$$

