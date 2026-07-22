---
title: Transposing matrices
---

*Transposing* a matrix just means we make the rows into columns and the columns
into rows. Or, in other words, we somewhat *flip* the matrix across its
diagonal.

For example, if we have the matrix:

$$
\mathbf{A} = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}
$$

The *transpose* of $\mathbf{A}$, which we write as $\mathbf{A}^T$, is:

$$
\mathbf{A}^T = \begin{bmatrix}
1 & 4 \\
2 & 5 \\
3 & 6
\end{bmatrix}
$$

That's because the first row, $[1 \quad 2 \quad 3]$, becomes the first column,
and the second row, $[4 \quad 5 \quad 6]$, becomes the second column.

## Example transpositions

### Find the transpose of $\mathbf{B} = \begin{bmatrix} 7 & 8 \\ 9 & 10 \\ 11 & 12 \end{bmatrix}$

- The first row is $[7 \quad 8]$, which becomes the first column, so the matrix
  will look like this so far:
  - $\begin{bmatrix} 7 & ? \\ 8 & ? \\ ? & ? \end{bmatrix}$
- The second row is $[9 \quad 10]$, which becomes the second column, so we can
  fill in the second column:
  - $\begin{bmatrix} 7 & 9 \\ 8 & 10 \\ ? & ? \end{bmatrix}$
- The third row is $[11 \quad 12]$, which becomes the third column, so we can
  also fill in the third column:
  - $\begin{bmatrix} 7 & 9 & 11 \\ 8 & 10 & 12 \end{bmatrix}$
- **Answer**: $\mathbf{B}^T = \begin{bmatrix} 7 & 9 & 11 \\ 8 & 10 & 12 \end{bmatrix}$

### Find the transpose of $\mathbf{C} = \begin{bmatrix} 13 & 14 & 15 \\ 16 & 17 & 18 \end{bmatrix}$

- The first row is $[13 \quad 14 \quad 15]$, which becomes the first column, so the
  matrix will look like this so far:
  - $\begin{bmatrix} 13 & ? \\ 14 & ? \\ 15 & ? \end{bmatrix}$
- The second row is $[16 \quad 17 \quad 18]$, which becomes the second column, so we can fill in the second column:
  - $\begin{bmatrix} 13 & 16 \\ 14 & 17 \\ 15 & 18 \end{bmatrix}$
- **Answer**: $\mathbf{C}^T = \begin{bmatrix} 13 & 16 \\ 14 & 17 \\ 15 & 18 \end{bmatrix}$

### Find the transpose of $\mathbf{D} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$

- The first row is $[a \quad b]$, which becomes the first column, so the matrix
  will look like this so far:
  - $\begin{bmatrix} a & ? \\ b & ? \end{bmatrix}$
- The second row is $[c \quad d]$, which becomes the second column, so we can fill in the second column:
  - $\begin{bmatrix} a & c \\ b & d \end{bmatrix}$
- **Answer**: $\mathbf{D}^T = \begin{bmatrix} a & c \\ b & d \end{bmatrix}$

### Find the transpose of $\mathbf{E} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{bmatrix}$

- The first row is $[1 \quad 2]$, which becomes the first column, so the matrix
  will look like this so far:
  - $\begin{bmatrix} 1 & ? \\ 2 & ? \\ ? & ? \end{bmatrix}$
- The second row is $[3 \quad 4]$, which becomes the second column, so we can fill in the second column:
  - $\begin{bmatrix} 1 & 3 \\ 2 & 4 \\ ? & ? \end{bmatrix}$
- The third row is $[5 \quad 6]$, which becomes the third column, so we can fill in the third column:
  - $\begin{bmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{bmatrix}$
- **Answer**: $\mathbf{E}^T = \begin{bmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{bmatrix}$

