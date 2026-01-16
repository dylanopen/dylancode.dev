---
title: Vector line equation
---

As well as being able to represent a line in cartesian form (e.g. $y = mx + c$),
we can also represent a line using vectors.

## Equation of a line in vector form

$$
\vec r = \vec a + \lambda \vec d
$$

## Finding the vectors between points

The first step to finding the equation of a line using vectors is to find the
vectors between all points.

### Find the vector between the point $A=(-2,4)$ and $B=(3,7)$

- $\vec a=\pmatrix{-2\\4}$
- $\vec b=\pmatrix{3\\7}$
- $\vec{AB}=\vec b - \vec a$
  - $=\pmatrix{3\\7} - \pmatrix{-2\\4}$
  - $=\pmatrix{5\\3}$
- **Answer**: $\vec{AB}=\pmatrix{5\\3}$

### Find ALL vectors between the points $A=(1,2,3)$, $B=(4,0,5)$ and $C=(2,6,1)$

- $\vec a=\pmatrix{1\\2\\3}$
- $\vec b=\pmatrix{4\\0\\5}$
- $\vec c=\pmatrix{2\\6\\1}$
- $\vec{AB}=\vec b - \vec a$
  - $=\pmatrix{4\\0\\5} - \pmatrix{1\\2\\3}$
  - $=\pmatrix{3\\-2\\2}$
- $\vec{AC}=\vec c - \vec a$
  - $=\pmatrix{2\\6\\1} - \pmatrix{1\\2\\3}$
  - $=\pmatrix{1\\4\\-2}$
- $\vec{BC}=\vec c - \vec b$
  - $=\pmatrix{2\\6\\1} - \pmatrix{4\\0\\5}$
  - $=\pmatrix{-2\\6\\-4}$
- **Answers**:
  - $\vec{AB}=\pmatrix{3\\-2\\2}$
  - $\vec{AC}=\pmatrix{1\\4\\-2}$
  - $\vec{BC}=\pmatrix{-2\\6\\-4}$

## Finding the vector equation from points

### Find a vector equation of the line between the points $(2,3)$ and $(5,1)$

- Let $\vec a$ be the position vector of $A$ from the origin:
  - $\vec A = \pmatrix{2 \\ 3}$
- $\vec{AB} = \vec B - \vec A$
  - $= \pmatrix{5 \\ 1} - \pmatrix{2 \\ 3}$
  - $= \pmatrix{3 \\ -2}$
- So the **direction** vector is $\pmatrix{3 \\ -2}$.
- Equation of a line:
  - $\vec r = \vec a + \lambda \vec d$
  - $= \pmatrix{ 2 \\ 3 } + \lambda \pmatrix{ 3 \\ -2 }$
- **Answer**: $\vec r = \pmatrix{ 2 \\ 3 } + \lambda \pmatrix{ 3 \\ -2 }$

> Note: there are multiple solutions to this line equation from the points
> given. We can find other ones by using different vectors (e.g. using
> $\vec{OB}$ instead of $\vec{OA}$).

### Find a vector equation of the line between the points $(1,0,2)$ and $(4,6,5)$
- Let $\vec a$ be the position vector of $A$ from the origin:
  - $\vec A = \pmatrix{1 \\ 0 \\ 2}$
- $\vec{AB} = \vec B - \vec A$
  - $= \pmatrix{4 \\ 6 \\ 5} - \pmatrix{1 \\ 0 \\ 2}$
  - $= \pmatrix{3 \\ 6 \\ 3}$
- So the **direction** vector is $\pmatrix{3 \\ 6 \\ 3}$, which we can simplify
  to $\pmatrix{1 \\ 2 \\ 1}$ (because it's just a direction and the magnitude is
  not important here).
- Equation of a line:
  - $\vec r = \vec a + \lambda \vec d$
  - $= \pmatrix{ 1 \\ 0 \\ 2 } + \lambda \pmatrix{ 1 \\ 2 \\ 1 }$
- **Answer**: $\vec r = \pmatrix{ 1 \\ 0 \\ 2 } + \lambda \pmatrix{ 1 \\ 2 \\ 1 }$

> Note: there are multiple solutions to this line equation from the points
> given. We can find other ones by using different vectors (e.g. using
> $\vec{OB}$ instead of $\vec{OA}$).

### Find a vector equation of the line between the points $(-2,4)$ and $(1,-2)$

- Let $\vec a$ be the position vector of $A$ from the origin:
  - $\vec A = \pmatrix{-2 \\ 4}$
- $\vec{AB} = \vec B - \vec A$
  - $= \pmatrix{1 \\ -2} - \pmatrix{-2 \\ 4}$
  - $= \pmatrix{3 \\ -6}$
- So the **direction** vector is $\pmatrix{3 \\ -6}$, which we can simplify
  to $\pmatrix{1 \\ -2}$ (because it's just a direction and the magnitude is
  not important here).
- Equation of a line:
  - $\vec r = \vec a + \lambda \vec d$
  - $= \pmatrix{ -2 \\ 4 } + \lambda \pmatrix{ 1 \\ -2 }$
- **Answer**: $\vec r = \pmatrix{ -2 \\ 4 } + \lambda \pmatrix{ 1 \\ -2 }$

## More complex exam-style questions

### $A$ is the point $(3,1,4)$ and $AQ=18$. Find $Q$ if $A$ and $Q$ are on the line $r=\pmatrix{1 \\ 2 \\ 3} + \lambda \pmatrix{4 \\ -2 \\ -4}$

- Find the length of vector $\pmatrix{4 \\ -2 \\ -4}$:
  - $|\vec{d}| = \sqrt{4^2 + (-2)^2 + (-4)^2} = \pm\sqrt{16 + 4 + 16} = \pm\sqrt{36} = \pm6$
  - $\lambda\times|\pmatrix{4 \\ -2 \\ -4}|=18$
  - $\lambda \times \pm6 = 18$
  - $\lambda = \pm3$
- Find $Q$:
  - $Q=\pmatrix{1 \\ 2 \\ 3} \pm 3 \pmatrix{4 \\ -2 \\ -4}$
  - $=\pmatrix{1 \\ 2 \\ 3} \pm \pmatrix{12 \\ -6 \\ -12}$
  - $=\pmatrix{13 \\ -4 \\ -9}$ or $\pmatrix{-11 \\ 8 \\ 15}$
- **Answer**: $Q=\pmatrix{13 \\ -4 \\ -9}$ or $Q=\pmatrix{-11 \\ 8 \\ 15}$

