# Matrix transformations

## Examples of transformations

- [[matrix rotation|Rotations]]
- [[matrix stretch|Stretches]]
- [[matrix reflection|Reflections]]
- [[matrix shear|Shears]]
- [[vector translation|Translations]] - but these aren't matrix transformations
  because they don't keep the origin fixed.

## Combining transformations

When we combine transformations (e.g. do a transformation by matrix $A$ followed
by a transformation by matrix $B$), we can represent the combined transformation
by multiplying the matrices in reverse:

$$
BA
$$

This is exactly the same as [[composite functions]].

### Find the single matrix which represents a 90° clockwise rotation followed by a reflection in the line y=x

- 90° clockwise rotation matrix:
  - $\begin{pmatrix}0 & 1\\-1 & 0\end{pmatrix}$
- Reflection in the line $y=x$ matrix:
  - $\begin{pmatrix}0 & 1\\1 & 0\end{pmatrix}$
- Multiply them in reverse:
  - $\begin{pmatrix}0 & 1\\1 & 0\end{pmatrix} \begin{pmatrix}0 & 1\\-1 & 0\end{pmatrix}$
  - $= \begin{pmatrix}0(0)+1(-1) & 0(1)+1(0)\\1(0)+0(-1) & 1(1)+0(0)\end{pmatrix}$
  - $= \begin{pmatrix}-1 & 0\\0 & 1\end{pmatrix}$
- **Answer**: $\begin{pmatrix}-1 & 0\\0 & 1\end{pmatrix}$

## Linear transformations

- A *linear* transformation is essentially a 2D transformation.
- If a shape has straight edges, a linear transformation will keep them 
  straight.

We can write a linear transformation either as:

$$
\begin{pmatrix}x\\y\end{pmatrix} \to \begin{pmatrix}...\\...\end{pmatrix}
$$

or as a [[matrix multiplication]]:

$$
\begin{pmatrix}a & b\\c & d\end{pmatrix} \begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}ax + by\\cx + dy\end{pmatrix}
$$

### Find a matrix to map $\begin{pmatrix}x\\y\end{pmatrix}$ to $\begin{pmatrix}2y+x\\3x\end{pmatrix}$

- $\begin{pmatrix}a & b\\c & d\end{pmatrix} \begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}2y+x\\3x\end{pmatrix}$
- So we need to solve:
  - $ax + by = 2y + x$
  - $cx + dy = 3x$
- Solve $ax + by = 2y + x$:
  - $a = 1$
  - $b = 2$
- Solve $cx + dy = 3x$:
  - $c = 3$
  - $d = 0$
- Write this as a matrix:
  - $\begin{pmatrix}1 & 2\\3 & 0\end{pmatrix}$
- **Answer**: $\begin{pmatrix}1 & 2\\3 & 0\end{pmatrix}$

### Find a matrix to map $\begin{pmatrix}x\\y\end{pmatrix}$ to $\begin{pmatrix}2y+x\\3x+y\end{pmatrix}$

- $\begin{pmatrix}a & b\\c & d\end{pmatrix} \begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}2y+x\\3x+y\end{pmatrix}$
- Equations we can form:
  - $ax+by=2y+x$
  - $cx+dy=3x+y$
- Solve $ax + by = 2y + x$:
  - $ax=1x \Rightarrow a=1$
  - $by=2y \Rightarrow b=2$
- Solve $cx + dy = 3x + y$:
  - $cx=3x \Rightarrow c=3$
  - $dy=y \Rightarrow d=1$
- Write this as a matrix:
  - $\begin{pmatrix}1 & 2\\3 & 1\end{pmatrix}$
- **Answer**: $\begin{pmatrix}1 & 2\\3 & 1\end{pmatrix}$

### Find the coordinates of the points $(1,1)$, $(3,1)$, $(3,3)$ and $(1,3)$ after a transformation by matrix $\begin{pmatrix}-1 & 2 \\ 2 & 1\end{pmatrix}$

- Find a column matrix for all the points combined:
  - Write the corresponding coordinates in each column
  - $\begin{pmatrix}1 & 3 & 3 & 1\\1 & 1 & 3 & 3\end{pmatrix}$
- Multiply the transformation matrix by the column matrix (make sure you do it
  in the right order, transformation matrix first):
  - $\begin{pmatrix}-1 & 2 \\ 2 & 1\end{pmatrix} \begin{pmatrix}1 & 3 & 3 & 1\\1 & 1 & 3 & 3\end{pmatrix}$
  - $= \begin{pmatrix}-1(1)+2(1) & -1(3)+2(1) & -1(3)+2(3) & -1(1)+2(3)\\2(1)+1(1) & 2(3)+1(1) & 2(3)+1(3) & 2(1)+1(3)\end{pmatrix}$
  - $= \begin{pmatrix}1 & -1 & 3 & 5\\3 & 7 & 9 & 5\end{pmatrix}$
- **Answer(s)**:
  - $(1,3)$
  - $(-1,7)$
  - $(3,9)$
  - $(5,5)$

## Determinant and area scale factor

The *determinant* of the transformation matrix gives the area scale factor of
the transformation.

- For example, If the determinant is 2, the area of any shape will double after
  the transformation.

### Determinant of $1$ or $-1$

Transformations which do *not* change the size of shapes (e.g. rotations and
reflections) have a determinant of either $1$ or $-1$.

- A determinant of $1$ means the shape keeps its orientation (e.g. a rotation)
  **and** its size the same.
- A determinant of $-1$ means the shape changes its orientation (e.g. a
  reflection) **but** keeps its size the same.

### Singular matrix

A [[singular matrix]] has a determinant of $0$, which means that it will create an
image which has **no area**. For example:

- A line
- A single point (for a transformation of $\begin{pmatrix}0 & 0\\0 & 0\end{pmatrix}$)

## Self-inverse matrix transformations

With transformations, we can pre-multiply by the inverse of a transformation
matrix to reverse the transformation.

You need to do the inverse operations in the *opposite order* to how you did
the transformations originally.

$$
(X)(X)^{-1} = I
$$

