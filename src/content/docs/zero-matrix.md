---
title: Zero matrix
---

As the name suggests, a 'zero' matrix is just a matrix where all the elements
are zero.

## Order of a zero matrix

We can have zero matrices of any order (dimensions), for example:
- A $2 \times 3$ zero matrix:
  - $\begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$
- A $3 \times 2$ zero matrix:
  - $\begin{bmatrix} 0 & 0 \\ 0 & 0 \\ 0 & 0 \end{bmatrix}$
- A $4 \times 4$ zero matrix:
  - $\begin{bmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$
- A $1 \times 5$ zero matrix:
  - $\begin{bmatrix} 0 & 0 & 0 & 0 & 0 \end{bmatrix}$
- A $5 \times 1$ zero matrix:
  - $\begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}$
- A $2 \times 2$ zero matrix:
  - $\begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$

## [Identity matrix](/identity-matrix)

A zero matrix is the identity matrix for *addition*. That's because, if we add a
zero matrix to any other matrix of the same order, we get that same matrix back.

For example, if we have the matrix $\mathbf{A} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ and the zero matrix $\mathbf{0} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$, then:
- $\mathbf{A} + \mathbf{0} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$
- $\mathbf{0} + \mathbf{A} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} + \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$

If you want some algebraic proof:
- Let $\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ and $\mathbf{0} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$, then:
- $\mathbf{A} + \mathbf{0} = \begin{bmatrix} a + 0 & b + 0 \\ c + 0 & d + 0 \end{bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \mathbf{A}$
- $\mathbf{0} + \mathbf{A} = \begin{bmatrix} 0 + a & 0 + b \\ 0 + c & 0 + d \end{bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \mathbf{A}$

### Multiplication with a zero matrix

If we multiply any matrix by a zero matrix of compatible dimensions, we get a
zero matrix as the result.

The proof of this for some $2 \times 2$ matrices is as follows:
- Let $\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ and $\mathbf{0} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$, then:
- $\mathbf{A} \times \mathbf{0} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \times \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} a\times 0 + b\times 0 & a\times 0 + b\times 0 \\ c\times 0 + d\times 0 & c\times 0 + d\times 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = \mathbf{0}$
- $\mathbf{0} \times \mathbf{A} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} \times \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} 0\times a + 0\times c & 0\times b + 0\times d \\ 0\times a + 0\times c & 0\times b + 0\times d \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} = \mathbf{0}$


