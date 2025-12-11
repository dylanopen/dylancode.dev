---
title: Inverse matrix
---

## What is the inverse matrix?

Every matrix that *isn't* [singular](/singular-matrix) has an *inverse matrix*.
Whenever we multiply a matrix by its inverse matrix, we get the *identity 
matrix*, $I$.

## Representing the inverse matrix

- The inverse matrix of $M$ can be written as $M^{-1}$.
- This then makes sense why they multiply to the identity matrix: $MM^{-1} = I$
  - anything multiplied by its inverse is equal to the identity, or $1$ if we're
    working with regular scalars.

## Finding the inverse matrix

### Find the inverse matrix of $\begin{bmatrix} 4 & 2 \\ 5 & 3 \end{bmatrix}$

- $\pmatrix{4 & 2 \\ 5 & 3}\pmatrix{a & b \\ c & d} = \pmatrix{1 & 0 \\ 0 & 1}$
- $4a + 2c = 1$
- $4b + 2d = 0$
- $5a + 3c = 0$
- $5b + 3d = 1$
- Solve the equations with $a$ and $c$ simultaneously:
  - $4a+2c=1$ (1)
  - $5a+3c=0$ (2)
  - Multiply (1) by $3$: $12a + 6c = 3$ (3)
  - Multiply (2) by $-2$: $-10a - 6c = 0$ (4)
  - Solve using elimination: 
    - (3) + (4): $2a = 3 \Rightarrow a = \frac{3}{2}$
  - Substitute $a$ into (1): $4(\frac{3}{2}) + 2c = 1 \Rightarrow 6 + 2c = 1 \Rightarrow 2c = -5 \Rightarrow c = -\frac{5}{2}$
  - $a = \frac{3}{2}$, $c = -\frac{5}{2}$

## General form of the inverse matrix

- Let $M=\pmatrix{a&b\\c&d}$
- Find the [determinant](/matrix-determinant):
  - $ad-bc$

$$
M^{-1}=\frac1{ad-bc}\pmatrix{d&-b\\-c&a}
$$

## Find the inverse of matrix product $AB$

- Let the inverse function be $X$
- $ABX=I$ (because matrix multiplication is associative)
- $A^{-1}ABX=A^{-1}I$ (pre-multiply both sides by $A^{-1})
- $BX=A^{-1}I$
- $IBX=A^{-1}I$
- $BX=A^{-1}$
- $B^{-1}BX=B^{-1}A^{-1}$
- $IX=B^{-1}A^{-1}$
- $X=B^{-1}A{-1}$
- **Answer: $X+B^{-1}A^{-1}$

> Remember this. THe inverse of $AB=B^{-1}A^{-1}$.

