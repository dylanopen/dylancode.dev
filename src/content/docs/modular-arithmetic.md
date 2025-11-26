---
title: Modular arithmetic
---

## Finding the modulus

The modulus is the remainder when one number is divided by another.

It's using represented using the modulus operator, often written as $\%$ or
$mod$.

### Evaluate $7 \mod 4$

To find $7 \mod 4$, we divide 7 by 4:
- $7 \div 4 = 1$ with a remainder of $3$.
- **Answer**: $7 \mod 4 = 3$.

## Expressing modular binary operators

- We can write the modular arithmetic form of a binary operator using a
  subscript.
- For example, mod-5 addition would look like this:
  - $a +_5 b$

## Modular addition

To find the modular addition of two numbers:
1. Add the two numbers together.
2. Find the modulus of the sum with respect to a given modulus.

### Evaluate $(5 + 9) \mod 6$

- $5 + 9 = 14$.
- $14 \mod 6 = 2$ (since $14 \div 6 = 2$ with a remainder of $2$).
- **Answer**: $2$

### Evaluate $(12 + 8) \mod 7$

- $12 + 8 = 20$.
- $20 \mod 7 = 6$ (since $20 \div 7 = 2$ with a remainder of $6$).
- **Answer**: $6$

### Evaluate $15 +_4 10$

- $15 + 10 = 25$.
- $25 \mod 4 = 1$ (since $25 \div 4 = 6$ with a remainder of $1$).
- **Answer**: $1$

