# Matrix transformations about the origin

## Reflection in the x-axis

We can represent a reflection in the x-axis using the matrix:

$$
\pmatrix{1 & 0\\0 & -1}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{1&0\\0&-1}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{1&0\\0&-1}$
- So:
  - $A = \pmatrix{1&0\\0&-1}$
- **Answer**: $\pmatrix{1 & 0\\0 & -1}$

## Reflection in the y-axis

We can represent a reflection in the y-axis using the matrix:

$$
\pmatrix{-1 & 0\\0 & 1}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{-1&0\\0&1}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{-1&0\\0&1}$
- So:
  - $A = \pmatrix{-1&0\\0&1}$
- **Answer**: $\pmatrix{-1 & 0\\0 & 1}$

## Reflection in the line y = x

We can represent a reflection in the line $y = x$ using the matrix:

$$
\pmatrix{0 & 1\\1 & 0}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{0&1\\1&0}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{0&1\\1&0}$
- So:
  - $A = \pmatrix{0&1\\1&0}$
- **Answer**: $\pmatrix{0 & 1\\1 & 0}

## Reflection in the line y = -x

We can represent a reflection in the line $y = -x$ using the matrix:

$$
\pmatrix{0 & -1\\-1 & 0}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{0&-1\\-1&0}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{0&-1\\-1&0}$
- So:
  - $A = \pmatrix{0&-1\\-1&0}$
- **Answer**: $\pmatrix{0 & -1\\-1 & 0}$

## Rotation 90° clockwise about the origin

We can represent a rotation of 90° clockwise about the origin using the matrix:

$$
\pmatrix{0 & 1\\-1 & 0}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{0&1\\-1&0}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{0&1\\-1&0}$
- So:
  - $A = \pmatrix{0&1\\-1&0}$
- **Answer**: $\pmatrix{0 & 1\\-1 & 0}$

## Rotation 90° anticlockwise about the origin

We can represent a rotation of 90° anticlockwise about the origin using the matrix:

$$
\pmatrix{0 & -1\\1 & 0}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{0&-1\\1&0}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{0&-1\\1&0}$
- So:
  - $A = \pmatrix{0&-1\\1&0}$
- **Answer**: $\pmatrix{0 & -1\\1 & 0}$

## Rotation 180° about the origin

We can represent a rotation of 180° about the origin using the matrix:

$$
\pmatrix{-1 & 0\\0 & -1}
$$

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{-1&0\\0&-1}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{-1&0\\0&-1}$
- So:
  - $A = \pmatrix{-1&0\\0&-1}$
- **Answer**: $\pmatrix{-1 & 0\\0 & -1}$

## Enlargement about the origin

We can represent an enlargement about the origin with scale factor $k$ using the matrix:

$$
\pmatrix{k & 0\\0 & k}
$$

...where $k$ is the scale factor.

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{k&0\\0&k}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{k&0\\0&k}$
- So:
  - $A = \pmatrix{k&0\\0&k}$
- **Answer**: $\pmatrix{k & 0\\0 & k}$

## Horizontal stretch parallel to the x-axis

We can represent a horizontal stretch parallel to the x-axis with scale factor $k$ using the matrix:

$$
\pmatrix{k & 0\\0 & 1}
$$

...where $k$ is the scale factor.

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{k&0\\0&1}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{k&0\\0&1}$
- So:
  - $A = \pmatrix{k&0\\0&1}$
- **Answer**: $\pmatrix{k & 0\\0 & 1}$

## Vertical stretch parallel to the y-axis

We can represent a vertical stretch parallel to the y-axis with scale factor $k$ using the matrix:

$$
\pmatrix{1 & 0\\0 & k}
$$

...where $k$ is the scale factor.

### Finding this out

- Write out the coordinates of two non-origin points on the unit square, as a
  column matrix:
  - $\pmatrix{1&0\\0&1}$
- Write out where the points will end up, as a column matrix:
  - $\pmatrix{1&0\\0&k}$
- Find the matrix $A$ such that:
  - $A \pmatrix{1&0\\0&1} = \pmatrix{1&0\\0&k}$
- So:
  - $A = \pmatrix{1&0\\0&k}$
- **Answer**: $\pmatrix{1 & 0\\0 & k}$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Reflection in the x-axis matrix | $\pmatrix{1 & 0\\0 & -1}$ |
| Reflection in the y-axis matrix | $\pmatrix{-1 & 0\\0 & 1}$ |
| Reflection in the line $y=x$ matrix | $\pmatrix{0 & 1\\1 & 0}$ |
| Reflection in the line $y=-x$ matrix | $\pmatrix{0 & -1\\-1 & 0}$ |
| Rotation 90° clockwise about origin matrix | $\pmatrix{0 & 1\\-1 & 0}$ |
| Rotation 90° anticlockwise about origin matrix | $\pmatrix{0 & -1\\1 & 0}$ |
| Rotation 180° about origin matrix | $\pmatrix{-1 & 0\\0 & -1}$ |
| Enlargement about origin with scale factor $k$ matrix | $\pmatrix{k & 0\\0 & k}$ |
| Horizontal stretch parallel to x-axis with scale factor $k$ matrix | $\pmatrix{k & 0\\0 & 1}$ |
| Vertical stretch parallel to y-axis with scale factor $k$ matrix | $\pmatrix{1 & 0\\0 & k}$ |
| Method to find transformation matrix from unit square points | Use coordinates of $(1,0)$ and $(0,1)$ as column matrix $\pmatrix{1&0\\0&1}$, find where they map to as column matrix, then solve $A \times \text{original} = \text{image}$ to get $A$ |
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
| Unit square initial column matrix for finding transformations | $\pmatrix{1&0\\0&1}$ |

