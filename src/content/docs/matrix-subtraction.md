---
title: Matrix subtraction
---

> We can only subtract matrices with the **same order**.

## Subtracting matrices

To subtract matrices, simply subtract the corresponding elements from each matrix.

### Find $\mathbf{A} - \mathbf{B}$ where $A=\begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}$ and $B=\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$

- We subtract the corresponding elements:
  - Top-left: $5 - 1 = 4$
  - Top-right: $6 - 2 = 4$
  - Bottom-left: $7 - 3 = 4$
  - Bottom-right: $8 - 4 = 4$
- So, $\mathbf{A} - \mathbf{B} = \begin{bmatrix} 4 & 4 \\ 4 & 4 \end{bmatrix}$
- **Answer**: $\begin{bmatrix} 4 & 4 \\ 4 & 4 \end{bmatrix}$

### Find the value of $\mathbf{C} - \mathbf{D}$ where $C=\begin{bmatrix} 10 & 20 \\ 30 & 40 \end{bmatrix}$ and $D=\begin{bmatrix} 5 & 15 \\ 25 & 35 \end{bmatrix}$

- We subtract the corresponding elements:
  - Top-left: $10 - 5 = 5$
  - Top-right: $20 - 15 = 5$
  - Bottom-left: $30 - 25 = 5$
  - Bottom-right: $40 - 35 = 5$
- So, $\mathbf{C} - \mathbf{D} = \begin{bmatrix} 5 & 5 \\ 5 & 5 \end{bmatrix}$
- **Answer**: $\begin{bmatrix} 5 & 5 \\ 5 & 5 \end{bmatrix}$

### Find the value of $\mathbf{E} - \mathbf{F} - \mathbf{G}$ where $E=\begin{bmatrix} 15 & 25 \\ 35 & 45 \end{bmatrix}$, $F=\begin{bmatrix} 5 & 10 \\ 15 & 20 \end{bmatrix}$ and $G=\begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix}$

- First, we find $\mathbf{E} - \mathbf{F}$:
  - Top-left: $15 - 5 = 10$
  - Top-right: $25 - 10 = 15$
  - Bottom-left: $35 - 15 = 20$
  - Bottom-right: $45 - 20 = 25$
- So $\mathbf{E} - \mathbf{F} = \begin{bmatrix} 10 & 15 \\ 20 & 25 \end{bmatrix}$
- Then we do that value minus $\mathbf{G}$:
  - Top-left: $10 - 2 = 8$
  - Top-right: $15 - 4 = 11$
  - Bottom-left: $20 - 6 = 14$
  - Bottom-right: $25 - 8 = 17$
- So, $\mathbf{E} - \mathbf{F} - \mathbf{G} = \begin{bmatrix} 8 & 11 \\ 14 & 17 \end{bmatrix}$
- **Answer**: $\begin{bmatrix} 8 & 11 \\ 14 & 17 \end{bmatrix}$

## Commutative

- Matrix subtraction is **not** commutative, which means that
  $\mathbf{A} - \mathbf{B} \neq \mathbf{B} - \mathbf{A}$ (in
  general).
- FOr example, if $A=\begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}$ and $B=\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$, then
  - $\mathbf{A} - \mathbf{B} = \begin{bmatrix} 4 & 4 \\ 4 & 4 \end{bmatrix}$
  - $\mathbf{B} - \mathbf{A} = \begin{bmatrix} -4 & -4 \\ -4 & -4 \end{bmatrix}$
- The results will always be the *negative variant* of each
  other.

## Associative

- Matrix subtraction is also **not** associative, which means
  that $\mathbf{A} - (\mathbf{B} - \mathbf{C}) \neq (\mathbf{A} -
  \mathbf{B}) - \mathbf{C}$ (in general).
- For example, if $A=\begin{bmatrix} 15 & 25 \\ 35 & 45 \end{bmatrix}$, $B=\begin{bmatrix} 5 & 10 \\ 15 & 20 \end{bmatrix}$ and $C=\begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix}$, then
  - $\mathbf{A} - (\mathbf{B} - \mathbf{C}) = \begin{bmatrix} 12 & 19 \\ 28 & 37 \end{bmatrix}$
  - $(\mathbf{A} - \mathbf{B}) - \mathbf{C} = \begin{bmatrix} 8 & 11 \\ 14 & 17 \end{bmatrix}$
- The results are different, so it's not associative.

## Distributive

- Matrix subtraction is **distributive** over matrix addition, which means that $\mathbf{A} - (\mathbf{B} + \mathbf{C}) = (\mathbf{A} - \mathbf{B}) - \mathbf{C}$.
- For example, if $A=\begin{bmatrix} 15 & 25 \\ 35 & 45 \end{bmatrix}$, $B=\begin{bmatrix} 5 & 10 \\ 15 & 20 \end{bmatrix}$ and $C=\begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix}$, then
  - $\mathbf{A} - (\mathbf{B} + \mathbf{C}) = \begin{bmatrix} 8 & 11 \\ 14 & 17 \end{bmatrix}$
  - $(\mathbf{A} - \mathbf{B}) - \mathbf{C} = \begin{bmatrix} 8 & 11 \\ 14 & 17 \end{bmatrix}$
- The results are the same, so it's distributive.

