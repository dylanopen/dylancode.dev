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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Reflection in the x-axis matrix | $\begin{pmatrix}1 & 0\\0 & -1\end{pmatrix}$ |
| Reflection in the y-axis matrix | $\begin{pmatrix}-1 & 0\\0 & 1\end{pmatrix}$ |
| Reflection in the line $y=x$ matrix | $\begin{pmatrix}0 & 1\\1 & 0\end{pmatrix}$ |
| Reflection in the line $y=-x$ matrix | $\begin{pmatrix}0 & -1\\-1 & 0\end{pmatrix}$ |
| Rotation 90° clockwise about origin matrix | $\begin{pmatrix}0 & 1\\-1 & 0\end{pmatrix}$ |
| Rotation 90° anticlockwise about origin matrix | $\begin{pmatrix}0 & -1\\1 & 0\end{pmatrix}$ |
| Rotation 180° about origin matrix | $\begin{pmatrix}-1 & 0\\0 & -1\end{pmatrix}$ |
| Enlargement about origin with scale factor $k$ matrix | $\begin{pmatrix}k & 0\\0 & k\end{pmatrix}$ |
| Horizontal stretch parallel to x-axis with scale factor $k$ matrix | $\begin{pmatrix}k & 0\\0 & 1\end{pmatrix}$ |
| Vertical stretch parallel to y-axis with scale factor $k$ matrix | $\begin{pmatrix}1 & 0\\0 & k\end{pmatrix}$ |
| Method to find transformation matrix from unit square points | Use coordinates of $(1,0)$ and $(0,1)$ as column matrix $\begin{pmatrix}1&0\\0&1\end{pmatrix}$, find where they map to as column matrix, then solve $A \times \text{original} = \text{image}$ to get $A$ |
| What does a reflection in the x-axis do to the point $(x,y)$? | Maps it to $(x, -y)$ |
| What does a reflection in the y-axis do to the point $(x,y)$? | Maps it to $(-x, y)$ |
| What does a reflection in $y=x$ do to the point $(x,y)$? | Maps it to $(y, x)$ |
| What does a reflection in $y=-x$ do to the point $(x,y)$? | Maps it to $(-y, -x)$ |
| What does a 90° clockwise rotation do to $(x,y)$? | Maps it to $(y, -x)$ |
| What does a 90° anticlockwise rotation do to $(x,y)$? | Maps it to $(-y, x)$ |
| What does a 180° rotation do to $(x,y)$? | Maps it to $(-x, -y)$ |
| What does an enlargement scale factor $k$ about origin do to $(x,y)$? | Maps it to $(kx, ky)$ |
| What does a horizontal stretch scale factor $k$ do to $(x,y)$? | Maps it to $(kx, y)$ |
| What does a vertical stretch scale factor $k$ do to $(x,y)$? | Maps it to $(x, ky)$ |
| Unit square initial column matrix for finding transformations | $\begin{pmatrix}1&0\\0&1\end{pmatrix}$ |

