---
title: Matrix multiplication
---

## Compatibility

- You can **only** multiply two matrices together if the number of **columns** in the
  *first* matrix is equal to the number of **rows** in the *second* matrix.
- If **A** is an `m x n` matrix and **B** is a `p x q` matrix, then **A** and
  **B** can be multiplied together **IF** `n = p`.
- The resulting matrix will have an order of `m x q`.

## Commutitive

- Matrix multiplication is **not commutative**.
- The order in which we multiply matrices matters:
  - $\mathbf{A} \times \mathbf{B} \neq \mathbf{B} \times \mathbf{A}$

## Associative

- **IF** multiple matrices ***can*** be multiplied together (i.e. their orders are
  compatible), matrix multiplication is **associative**.
- We can group matrices in any way when multiplying:
  - $(\mathbf{A} \times \mathbf{B}) \times \mathbf{C} = \mathbf{A} \times (\mathbf{B} \times \mathbf{C})$

## Multiplying matrices

### Evaluate $\mathbf{A} \times \mathbf{B}$ where $A=\begin{bmatrix} 2 & 5 & 3 \\ -1 & 3 & 2 \end{bmatrix}$ and $B=\begin{bmatrix} 2 \\ 1 \\ -1 \end{bmatrix}$

- Multiply each element of the first *row* of **A** by the corresponding element
  of the *column* of **B**:
  - $2\times 2 = 4$
  - $5\times 1 = 5$
  - $3\times -1 = -3$
- Add them up:
  - $4 + 5 + -3 = 6$
  - The *top* element of the resulting matrix will be $6$.
- Now, multiply each element of the second *row* of **A** by the corresponding
  element of the *column* of **B**:
  - $-1\times 2 = -2$
  - $3\times 1 = 3$
  - $2\times -1 = -2$
- Add them up:
  - $-2 + 3 + -2 = -1$
  - The *bottom* element of the resulting matrix will be $-1$.
- So, $\mathbf{A} \times \mathbf{B} = \begin{bmatrix} 6 \\ -1 \end{bmatrix}$
- **Answer**: $\begin{bmatrix} 6 \\ -1 \end{bmatrix}$

### Evaluate $\begin{bmatrix} 5 & 3 \\ 3 & 2 \end{bmatrix}\begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix}$

- Multiply each element of the first *row* of the first matrix by the corresponding
  element of the *column* of the second matrix:
  - $5\times 2 = 10$
  - $3\times 1 = 3$
- Add them up:
  - $10 + 3 = 13$
  - The *top-left* element of the resulting matrix will be $13$.
- Now, multiply each element of the first *row* of the first matrix by the
  corresponding element of the *second column* of the second matrix:
  - $5\times 1 = 5$
  - $3\times 3 = 9$
- Add them up:
  - $5 + 9 = 14$
  - The *top-right* element of the resulting matrix will be $14$.
- Next, multiply each element of the *second row* of the first matrix by the
  corresponding element of the *first column* of the second matrix:
  - $3\times 2 = 6$
  - $2\times 1 = 2$
- Add them up:
  - $6 + 2 = 8$
  - The *bottom-left* element of the resulting matrix will be $8$.
- Finally, multiply each element of the *second row* of the first matrix by the
  corresponding element of the *second column* of the second matrix:
  - $3\times 1 = 3$
  - $2\times 3 = 6$
- Add them up:
  - $3 + 6 = 9$
  - The *bottom-right* element of the resulting matrix will be $9$.
- So, $\begin{bmatrix} 5 & 3 \\ 3 & 2 \end{bmatrix}\begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix} =
\begin{bmatrix} 13 & 14 \\ 8 & 9 \end{bmatrix}$
- **Answer**: $\begin{bmatrix} 13 & 14 \\ 8 & 9 \end{bmatrix}$

