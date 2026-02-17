---
title: Sum of two squares
---

You're probably familiar with writing the *difference* of two squares:
$a^2 - b^2$, as $(a - b)(a + b)$.

But what about the *sum* of two squares, $a^2 + b^2$? Can we factorise that?

With normal numbers: no. But if we use *complex numbers*, we *can* factorise
it.

We can use this identity:

> $$
> (a + bi)(a - bi) = a^2 + b^2
> $$

## Proof

If we expand the left-hand side of $(a + bi)(a - bi)$, we get:
- $a^2 - abi + abi - b^2i^2$
- $=a^2 - b^2i^2$
- $=a^2 + b^2(-1)$
- $=a^2 + b^2$

Therefore, we've proven that $(a + bi)(a - bi) = a^2 + b^2$!

## Examples

### Factorise $x^2 + 4$.

- $a^2 + b^2 = (a + bi)(a - bi)$
- $a = x$
- $b = 2$
- $x^2 + 4 = (x + 2i)(x - 2i)$
- Answer: $(x + 2i)(x - 2i)$

### Factorise $9x^2 + 16$.

- $a^2 + b^2 = (a + bi)(a - bi)$
- $a = 3x$
- $b = 4$
- $9x^2 + 16 = (3x + 4i)(3x - 4i)$
- Answer: $(3x + 4i)(3x - 4i)$

### Expand $(x + 2i)(x - 2i)$.

- $(x + 2i)(x - 2i) = x^2 - 2ix + 2ix - 4i^2$
- $= x^2 - 4(-1)$
- $= x^2 + 4$
- Answer: $x^2 + 4$

### Expand $(3x + 4i)(3x - 4i)$.

- $(3x + 4i)(3x - 4i) = 9x^2 - 12ix + 12ix - 16i^2$
- $= 9x^2 - 16(-1)$
- $= 9x^2 + 16$
- Answer: $9x^2 + 16$

