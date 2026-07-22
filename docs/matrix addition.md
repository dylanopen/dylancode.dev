---
title: Matrix addition
---

> We can only add together matrices with the **same order**.

## Adding matrices

To add matrices, simply add up the corresponding elements from each matrix.

### Find $\mathbf{A} + \mathbf{B}$ where $A=\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and $B=\begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}$

- We add the corresponding elements:
  - Top-left: $1 + 5 = 6$
  - Top-right: $2 + 6 = 8$
  - Bottom-left: $3 + 7 = 10$
  - Bottom-right: $4 + 8 = 12$
- So, $\mathbf{A} + \mathbf{B} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}$
- **Answer**: $\begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}$

### Find $\mathbf{C} + \mathbf{D}$ where $C=\begin{bmatrix} 2 & 4 & 6 \\ 8 & 10 & 12 \end{bmatrix}$ and $D=\begin{bmatrix} 1 & 3 & 5 \\ 7 & 9 & 11 \end{bmatrix}$

- We add the corresponding elements:
  - Top-left: $2 + 1 = 3$
  - Top-middle: $4 + 3 = 7$
  - Top-right: $6 + 5 = 11$
  - Bottom-left: $8 + 7 = 15$
  - Bottom-middle: $10 + 9 = 19$
  - Bottom-right: $12 + 11 = 23$
- So, $\mathbf{C} + \mathbf{D} = \begin{bmatrix} 3 & 7 & 11 \\ 15 & 19 & 23 \end{bmatrix}$
- **Answer**: $\begin{bmatrix} 3 & 7 & 11 \\ 15 & 19 & 23 \end{bmatrix}$

## Commutative

- Matrix addition is **commutative**.
- We can add matrices in any order:
  - $\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$

## Associative

- Matrix addition is **associative**.
- We can group matrices in any way when adding:
  - $(\mathbf{A} + \mathbf{B}) + \mathbf{C} = \mathbf{A} + (\mathbf{B} + \mathbf{C})$

