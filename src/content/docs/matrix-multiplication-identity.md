---
title: Matrix multiplication identity
---

For multiplication of any matrix, the [identity matrix](/identity-matrix) is:

$$
\mathbf{I_n} =
\begin{bmatrix}
1 & 0 & 0 & \cdots & 0 \\
0 & 1 & 0 & \cdots & 0 \\
0 & 0 & 1 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & 1
\end{bmatrix}
$$

For a 2x2 identity matrix, it is:

$$
\mathbf{I_2}=
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

### Proof for a 2x2 identity matrix

Let $\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ and $\mathbf{I_2} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$, then:
- $\mathbf{A} \times \mathbf{I_2} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \times \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} a\times 1 + b\times 0 & a\times 0 + b\times 1 \\ c\times 1 + d\times 0 & c\times 0 + d\times 1 \end{bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \mathbf{A}$
- Similarly, going the other way round:
- $\mathbf{I_2} \times \mathbf{A} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \times \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} 1\times a + 0\times c & 1\times b + 0\times d \\ 0\times a + 1\times c & 0\times b + 1\times d \end{bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \mathbf{A}$

## Proof for a 3x3 identity matrix

This is the same thing, but not quite so neat to write out...

Let $\mathbf{A} = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}$ and $\mathbf{I_3} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$, then:
- $\mathbf{A} \times \mathbf{I_3}$
  - $= \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix} \times \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
  - $=\begin{bmatrix} a\times 1 + b\times 0 + c\times 0 & a\times 0 + b\times 1 + c\times 0 & a\times 0 + b\times 0 + c\times 1 \\ d\times 1 + e\times 0 + f\times 0 & d\times 0 + e\times 1 + f\times 0 & d\times 0 + e\times 0 + f\times 1 \\ g\times 1 + h\times 0 + i\times 0 & g\times 0 + h\times 1 + i\times 0 & g\times 0 + h\times 0 + i\times 1 \end{bmatrix}$
  - $= \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix} = \mathbf{A}$
- Similarly, going the other way round:
- $\mathbf{I_3} \times \mathbf{A}$
  - $= \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \times \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}$
  - $= \begin{bmatrix} 1\times a + 0\times d + 0\times g & 1\times b + 0\times e + 0\times h & 1\times c + 0\times f + 0\times i \\ 0\times a + 1\times d + 0\times g & 0\times b + 1\times e + 0\times h & 0\times c + 1\times f + 0\times i \\ 0\times a + 0\times d + 1\times g & 0\times b + 0\times e + 1\times h & 0\times c + 0\times f + 1\times i \end{bmatrix}$
  - $= \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix} = \mathbf{A}$
