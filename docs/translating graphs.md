# Translating graphs

## What is a translation?

A [[translation]] is basically when we *move* a graph (without changing its shape).

We can represent a [[translation]] using a [[vector]] of [[coordinates]], where the top
number represents the movement in the $x$ direction, and the bottom number
represents the movement in the $y$ direction.

For example, the vector $\begin{pmatrix}3 \\ -2\end{pmatrix}$ means we move 3
units to the right (positive $x$ direction) and 2 units down (negative $y$
direction).

## Equation of a translated graph

If we have a function $y = f(x)$, and we translate it using the [[vector]]
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

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a translation in the context of graphs? | Moving a graph without changing its shape, represented by a vector where the top number is movement in $x$ and bottom in $y$. |
| How is a translation represented using a vector? | By a vector $\begin{pmatrix}a \\ b\end{pmatrix}$, where $a$ is movement in $x$ direction and $b$ is movement in $y$ direction. |
| What does the vector $\begin{pmatrix}3 \\ -2\end{pmatrix}$ mean for a graph? | Move 3 units to the right (positive $x$) and 2 units down (negative $y$). |
| If $y = f(x)$ is translated by vector $\begin{pmatrix}a \\ b\end{pmatrix}$, what is the equation of the new graph? | $y = f(x - a) + b$. |
| How do you remember the signs when translating a graph with vector $\begin{pmatrix}a \\ b\end{pmatrix}$? | Inside the bracket (with $x$) it’s the opposite of the vector’s $a$; outside (adding to whole function) it’s the same as $b$. |
| What is an alternative way to think about translation using $x$ and $y$? | To move in $x$ direction, subtract from $x$ inside the function; to move in $y$ direction, subtract from $y$, giving $y - b = f(x - a)$. |
| Find the equation when $y = 4x + 1$ is translated by $\begin{pmatrix}-2 \\ 3\end{pmatrix}$. | Start with $y - 3 = 4(x - (-2)) + 1$; simplify to $y - 3 = 4(x + 2) + 1$, then $y - 3 = 4x + 8 + 1$, so $y - 3 = 4x + 9$, finally $y = 4x + 12$. |

