---
title: Matrix transformations about the origin
---

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

