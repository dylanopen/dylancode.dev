# Matrix transformations about the origin

## Reflection in the x-axis

We can represent a reflection in the x-axis using the matrix:

$$
\begin{pmatrix}1 & 0\\0 & -1\end{pmatrix}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}1&0\\0&-1\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}1&0\\0&-1\end{pmatrix}$
- **Answer**: $\begin{pmatrix}1 & 0\\0 & -1\end{pmatrix}$

## Reflection in the y-axis

We can represent a reflection in the y-axis using the matrix:

$$
\begin{pmatrix}-1 & 0\\0 & 1\end{pmatrix}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}-1&0\\0&1\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}-1&0\\0&1\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}-1&0\\0&1\end{pmatrix}$
- **Answer**: $\begin{pmatrix}-1 & 0\\0 & 1\end{pmatrix}$

## Reflection in the line y = x

We can represent a reflection in the line $y = x$ using the matrix:

$$
\begin{pmatrix}0 & 1\\1 & 0\end{pmatrix}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}0&1\\1&0\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}0&1\\1&0\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}0&1\\1&0\end{pmatrix}$
- **Answer**: $\begin{pmatrix}0 & 1\\1 & 0\end{pmatrix}

## Reflection in the line y = -x

We can represent a reflection in the line $y = -x$ using the matrix:

$$
\begin{pmatrix}0 & -1\\-1 & 0\end{pmatrix}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}0&-1\\-1&0\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}0&-1\\-1&0\end{pmatrix}$
- **Answer**: $\begin{pmatrix}0 & -1\\-1 & 0\end{pmatrix}$

## Rotation 90° clockwise about the origin

We can represent a rotation of 90° clockwise about the origin using the matrix:

$$
\begin{pmatrix}0 & 1\\-1 & 0\end{pmatrix}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$
- **Answer**: $\begin{pmatrix}0 & 1\\-1 & 0\end{pmatrix}$

## Rotation 90° anticlockwise about the origin

We can represent a rotation of 90° anticlockwise about the origin using the matrix:

$$
\begin{pmatrix}0 & -1\\1 & 0\end{pmatrix}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$
- **Answer**: $\begin{pmatrix}0 & -1\\1 & 0\end{pmatrix}$

## Rotation 180° about the origin

We can represent a rotation of 180° about the origin using the matrix:

$$
\begin{pmatrix}-1 & 0\\0 & -1\end{pmatrix}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}-1&0\\0&-1\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}-1&0\\0&-1\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}-1&0\\0&-1\end{pmatrix}$
- **Answer**: $\begin{pmatrix}-1 & 0\\0 & -1\end{pmatrix}$

## Enlargement about the origin

We can represent an enlargement about the origin with scale factor $k$ using the matrix:

$$
\begin{pmatrix}k & 0\\0 & k\end{pmatrix}
$$

...where $k$ is the scale factor.

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}k&0\\0&k\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}k&0\\0&k\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}k&0\\0&k\end{pmatrix}$
- **Answer**: $\begin{pmatrix}k & 0\\0 & k\end{pmatrix}$

## Horizontal stretch parallel to the x-axis

We can represent a horizontal stretch parallel to the x-axis with scale factor $k$ using the matrix:

$$
\begin{pmatrix}k & 0\\0 & 1\end{pmatrix}
$$

...where $k$ is the scale factor.

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}k&0\\0&1\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}k&0\\0&1\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}k&0\\0&1\end{pmatrix}$
- **Answer**: $\begin{pmatrix}k & 0\\0 & 1\end{pmatrix}$

## Vertical stretch parallel to the y-axis

We can represent a vertical stretch parallel to the y-axis with scale factor $k$ using the matrix:

$$
\begin{pmatrix}1 & 0\\0 & k\end{pmatrix}
$$

...where $k$ is the scale factor.

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\begin{pmatrix}1&0\\0&1\end{pmatrix}$
- Write out where the points will end up, as a column matrix:
  - $\begin{pmatrix}1&0\\0&k\end{pmatrix}$
- Find the matrix $A$ such that:
  - $A \begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}1&0\\0&k\end{pmatrix}$
- So:
  - $A = \begin{pmatrix}1&0\\0&k\end{pmatrix}$
- **Answer**: $\begin{pmatrix}1 & 0\\0 & k\end{pmatrix}$

