---
title: Translating graphs
---

## What is a translation?

A translation is basically when we *move* a graph (without changing its shape).

We can represent a translation using a vector of coordinates, where the top
number represents the movement in the $x$ direction, and the bottom number
represents the movement in the $y$ direction.

For example, the vector $\begin{pmatrix}3 \\ -2\end{pmatrix}$ means we move 3
units to the right (positive $x$ direction) and 2 units down (negative $y$
direction).

## Equation of a translated graph

If we have a function $y = f(x)$, and we translate it using the vector
$\begin{pmatrix}a \\ b\end{pmatrix}$, the equation of the translated graph will
be:
$$y = f(x - a) + b$$

This means we subtract $a$ from $x$ inside the function, and add $b$ to the
whole function.

The way to remember this is:
- Inside the bracket is $x$, and it's the opposite of what the vector says
- Outside the bracket is the whole function, and it's the same as what the
  vector says

There's an easier way to think of this, though:
- If we want to move the graph in the $x$ direction, we subtract from the $x$
  (which happens to be inside the function).
- If we want to move the graph in the $y$ direction, we subtract from the $y$.

Using this, a translation of $\begin{pmatrix}a \\ b\end{pmatrix}$ would give us
$y - b = f(x - a)$, which rearranges to the same equation as above:
$y = f(x - a) + b$.

### Example: find the equation of the graph $y=4x + 1$ translated by $\begin{pmatrix}-2 \\ 3\end{pmatrix}$

- Start with the originaal equation:
  - $y = 4x + 1$
- Translate using the vector $\begin{pmatrix}-2 \\ 3\end{pmatrix}$:
  - $(y-3) = 4(x - (-2)) + 1$
- Simplify:
  - $y - 3 = 4(x + 2) + 1$
  - $y - 3 = 4x + 8 + 1$
  - $y - 3 = 4x + 9$
  - $y = 4x + 12$
- **Answer**: $y = 4x + 12$.

