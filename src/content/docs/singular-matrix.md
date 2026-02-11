---
title: Singular matrix
---

A matrix is called *singular* if its determinant is equal to zero. For example,
the matrix $N=\begin{matrix} 2 & 4 \\ 1 & 2 \end{matrix}$ is singular, because
its determinant is $2\cdot 2 - 4 \cdot 1 = 0$.

This is useful when:
- finding inverse matrices
- finding transformations

### Is the matrix $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ singular?

- Determinant = $ad-bc$
- $a=1$, $b=2$, $c=3$ and $d=4$.
- Determinant = $1\times 4 - 2\times 3 = 4 - 6 = -2$
- **Answer**: No, because the determinant is not zero.

### Is the matrix $\begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}$ singular?

- Determinant = $ad-bc$
- $a=1$, $b=2$, $c=2$ and $d=4$.
- Determinant = $1\times 4 - 2\times 2 = 4 - 4 = 0$
- **Answer**: Yes, because the determinant is zero.

### Find $p$ for the singular matrix $\begin{bmatrix} 4 & p+2 \\ -1 & 3-p \end{bmatrix}$

- Singular matrices have a determinant of $0$.
- Determinant = $ad-bc$
- $a=4$, $b=p+2$, $c=-1$ and $d=3-p$.
- $0 = 4(3-p) - (p+2)(-1)$
- $0 = 12 - 4p + p + 2$
- $0 = 14 - 3p$
- $3p = 14$
- $p = \frac{14}{3}$

### Given that $\begin{bmatrix} 1 & 2 \\ k & 4 \end{bmatrix}$ is singular, find $k$.

- Singular matrices have a determinant of $0$.
- Determinant = $ad-bc$
- $a=1$, $b=2$, $c=k$ and $d=4$.
- $0 = 1\times 4 - 2\times k$
- $0 = 4 - 2k$
- $2k = 4$
- $k = 2$

### Find $p$ for the singular matrix $\begin{bmatrix} 2 & p-1 \\ 3 & 5 \end{bmatrix}$

- Singular matrices have a determinant of $0$.
- Determinant = $ad-bc$
- $a=2$, $b=p-1$, $c=3$ and $d=5$.
- $0 = 2\times 5 - (p-1)\times 3$
- $0 = 10 - 3p + 3$
- $0 = 13 - 3p$
- $3p = 13$
- $p = \frac{13}{3}$

## Inverse matrix

> A singular matrix does not have an inverse matrix.

### Does the matrix $\begin{bmatrix} 1 & 2 \\ 3 & 6 \end{bmatrix}$ have an inverse?

- A matrix has an inverse if its determinant is not zero.
- Determinant = $ad-bc$
- $a=1$, $b=2$, $c=3$ and $d=6$.
- Determinant = $1\times 6 - 2\times 3 = 6 - 6 = 0$
- **Answer**: No, because the determinant is zero, so the matrix is singular and
  doesn't have an inverse.

### Does the matrix $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ have an inverse?

- A matrix has an inverse if its determinant is not zero.
- Determinant = $ad-bc$
- $a=1$, $b=2$, $c=3$ and $d=4$.
- Determinant = $1\times 4 - 2\times 3 = 4 - 6 = -2$
- **Answer**: Yes, because the determinant is not zero, so the matrix is not
  singular and has an inverse.

### Does the matrix $\begin{bmatrix} 2 & 4 \\ 1 & 2 \end{bmatrix}$ have an inverse?

- A matrix has an inverse if its determinant is not zero.
- Determinant = $ad-bc$
- $a=2$, $b=4$, $c=1$ and $d=2$.
- Determinant = $2\times 2 - 4\times 1 = 4 - 4 = 0$
- **Answer**: No, because the determinant is zero, so the matrix is singular and
  doesn't have an inverse.

