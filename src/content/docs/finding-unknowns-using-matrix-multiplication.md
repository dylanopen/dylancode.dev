---
title: Finding unknowns using matrix multiplication
---

### Solve for $a$: $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\begin{bmatrix} a \\ 5 \end{bmatrix} = \begin{bmatrix} 11 \\ 23 \end{bmatrix}$

- Expand the left-hand side:
  - $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\begin{bmatrix} a \\ 5 \end{bmatrix}$
  - $= \begin{bmatrix} 1\times a + 2\times 5 \\ 3\times a + 4\times 5 \end{bmatrix}$
  - $= \begin{bmatrix} a + 10 \\ 3a + 20 \end{bmatrix}$
- Set the resulting matrix equal to the right-hand side:
  - $\begin{bmatrix} a + 10 \\ 3a + 20 \end{bmatrix} = \begin{bmatrix} 11 \\ 23 \end{bmatrix}$
- Now, we can literally just equate the *top* elements of the left and
  right-hand matrices, and the *bottom* elements of the matrices, separately:
  - $a + 10 = 11$
  - $3a + 20 = 23$
- Solving the first equation for $a$:
  - $a = 11 - 10$
  - $a = 1$
- Solving the second equation for $a$:
  - $3a = 23 - 20$
  - $3a = 3$
  - $a = 1$
- Both equations give us the same value for $a$, so we can be pretty sure our
  answer is correct.
- **Answer**: $a = 1$

### Solve for $x$ and $y$: $\begin{bmatrix} 2 & 3 \\ 4 & 5 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 16 \\ 36 \end{bmatrix}$

- Expand the left-hand side:
  - $\begin{bmatrix} 2 & 3 \\ 4 & 5 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix}$
  - $= \begin{bmatrix} 2\times x + 3\times y \\ 4\times x + 5\times y \end{bmatrix}$
  - $= \begin{bmatrix} 2x + 3y \\ 4x + 5y \end{bmatrix}$
- Set the resulting matrix equal to the right-hand side:
  - $\begin{bmatrix} 2x + 3y \\ 4x + 5y \end{bmatrix} = \begin{bmatrix} 16 \\ 36 \end{bmatrix}$
- Now, we can equate the *top* elements of the left and right-hand matrices, and the *bottom* elements of the matrices, separately:
  - $2x + 3y = 16$
  - $4x + 5y = 36$
- Ah, they're simultaneous equations! We can solve them using whatever method
  you like. Here's *substitution*, as we know it always works no matter the
  numbers:
  - Rearrange $2x + 3y = 16$:
    - $2x = 16 - 3y$
    - $x = \frac{16 - 3y}{2}$
  - Substitute that value for $x$ into the second equation:
    - $4\left(\frac{16 - 3y}{2}\right) + 5y = 36$
    - $2(16 - 3y) + 5y = 36$
    - $32 - 6y + 5y = 36$
    - $32 - y = 36$
    - $-y = 36 - 32$
    - $-y = 4$
    - $y = -4$
  - Substitute that value for $y$ back into the rearranged first equation:
    - $x = \frac{16 - 3(-4)}{2}$
    - $x = \frac{16 + 12}{2}$
    - $x = \frac{28}{2}$
    - $x = 14$
- **Answer**: $x = 14$ and $y = -4$

### Solve for $k$ and $c$: $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\begin{bmatrix} 2k & 3k \\ 4c & 5c \end{bmatrix} = \begin{bmatrix} 40 & 54 \\ 96 & 132 \end{bmatrix}$

- Expand the left-hand side:
  - $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\begin{bmatrix} 2k & 3k \\ 4c & 5c \end{bmatrix}$
  - $= \begin{bmatrix} 1\times 2k + 2\times 4c & 1\times 3k + 2\times 5c \\ 3\times 2k + 4\times 4c & 3\times 3k + 4\times 5c \end{bmatrix}$
  - $= \begin{bmatrix} 2k + 8c & 3k + 10c \\ 6k + 16c & 9k + 20c \end{bmatrix}$
- Set the resulting matrix equal to the right-hand side:
  - $\begin{bmatrix} 2k + 8c & 3k + 10c \\ 6k + 16c & 9k + 20c \end{bmatrix} = \begin{bmatrix} 40 & 54 \\ 96 & 132 \end{bmatrix}$
- Now, we can equate the *top-left* elements of the left and right-hand matrices, the *top-right* elements of the matrices, the *bottom-left* elements of the matrices, and the *bottom-right* elements of the matrices, separately:
  - $2k + 8c = 40$
  - $3k + 10c = 54$
  - $6k + 16c = 96$
  - $9k + 20c = 132$
- We can rearrange the first two equations to express $k$ in terms of $c$:
  - $2k = 40 - 8c$
  - $k = \frac{40 - 8c}{2}$
  - $3k = 54 - 10c$
  - $k = \frac{54 - 10c}{3}$
- Set those two expressions for $k$ equal to each other:
  - $\frac{40 - 8c}{2} = \frac{54 - 10c}{3}$
  - $3(40 - 8c) = 2(54 - 10c)$
  - $120 - 24c = 108 - 20c$
  - $120 - 108 = -20c + 24c$
  - $12 = 4c$
  - $c = \frac{12}{4}$
  - $c = 3$
- Substitute that value for $c$ back into one of the rearranged equations to find $k$:
  - $k = \frac{40 - 8(3)}{2}$
  - $k = \frac{40 - 24}{2}$
  - $k = \frac{16}{2}$
  - $k = 8$
- **Answer**: $k = 8$ and $c = 3$

### Solve for $a$, $b$ and $c$: $\begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \\ 4 & 5 & 6 \end{bmatrix}\begin{bmatrix} a \\ b \\ c \end{bmatrix} = \begin{bmatrix} 14 \\ 21 \\ 76 \end{bmatrix}$

- Expand the left-hand side:
  - $\begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \\ 4 & 5 & 6 \end{bmatrix}\begin{bmatrix} a \\ b \\ c \end{bmatrix}$
  - $= \begin{bmatrix} 1\times a + 0\times b + 2\times c \\ 0\times a + 1\times b + 3\times c \\ 4\times a + 5\times b + 6\times c \end{bmatrix}$
  - $= \begin{bmatrix} a + 2c \\ b + 3c \\ 4a + 5b + 6c \end{bmatrix}$
- Set the resulting matrix equal to the right-hand side:
  - $\begin{bmatrix} a + 2c \\ b + 3c \\ 4a + 5b + 6c \end{bmatrix} = \begin{bmatrix} 14 \\ 21 \\ 76 \end{bmatrix}$
- Now, we can equate the *top* elements of the left and right-hand matrices, the *middle* elements of the matrices, and the *bottom* elements of the matrices, separately:
  - $a + 2c = 14$
  - $b + 3c = 21$
  - $4a + 5b + 6c = 76$
- We can rearrange the first two equations to express $a$ and $b$ in terms of $c$:
  - $a = 14 - 2c$
  - $b = 21 - 3c$
- Substitute those values for $a$ and $b$ into the third equation:
  - $4(14 - 2c) + 5(21 - 3c) + 6c = 76$
  - $56 - 8c + 105 - 15c + 6c = 76$
  - $161 - 17c = 76$
  - $-17c = 76 - 161$
  - $-17c = -85$
  - $c = \frac{-85}{-17}$
  - $c = 5$
- Substitute that value for $c$ back into the rearranged first two equations:
  - $a = 14 - 2(5) = 14 - 10 = 4$
  - $b = 21 - 3(5) = 21 - 15 = 6$
- **Answer**: $a = 4$, $b = 6$ and $c = 5$

