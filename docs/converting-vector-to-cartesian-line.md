# Converting vector-form to cartesian-form line equations

## Vector form

A [[line]] in vector form has the equation:

$$
\vec r = \vec a + \lambda \vec d
$$

...where:
- $\vec r$ is the [[position-vector]] of any [[point]] on the line,
- $\vec a$ is the [[position-vector]] of a specific [[point]] on the line,
- $\vec d$ is the [[direction-vector]] of the line,
- $\lambda$ is a [[scalar-quantity|scalar]] multiplier (changing it gives a new point on the line).

See [[vector-line-equation]].

## Cartesian form

Cartesian form is the standard equation of a line (see [[cartesian-line-equation]], written as:

$$
y = mx + c
$$

(or one of its variants).

## Gradient

We can find the [[gradient]] of the line from the $\vec d$ vector of the vector form
equation.

- The top value of the direction vector $\vec d$ is the change in $x$.
- The bottom value of the direction vector $\vec d$ is the change in $y$.

From this, we can use the formula for gradient:

$$
\text{gradient} = \frac{\text{change in } y}{\text{change in } x}
$$

So the gradient of a line with direction vector $\vec d=\begin{pmatrix}2\\6\end{pmatrix}$, for example, will have gradient $\frac62=3$

## Converting from vector to Cartesian form

Once we have the gradient, we can substitute it into the Cartesian form equation
($y = mx + c$) to find $c$.

### Convert the vector equation $\vec r = \pmatrix{1 \\ 2} + \lambda \pmatrix{3 \\ 4}$ to cartesian form

- The direction vector is $\vec d = \pmatrix{3 \\ 4}$
  - Change in $x = 3$
  - Change in $y = 4$
- Gradient $m = \frac{4}{3}$
- $\vec a = \pmatrix{1 \\ 2}$ gives us that $(1, 2)$ is a point on the line.
- Substitute into $y = mx + c$ to find $c$:
  - $2 = \frac{4}{3}(1) + c$
  - $2 = \frac{4}{3} + c$
  - $c = 2 - \frac{4}{3}$
  - $c = \frac{2}{3}$ - **Answer**: $y = \frac{4}{3}x + \frac{2}{3}$

### Convert the vector equation $\vec r = \pmatrix{2 \\ 5} + \lambda \pmatrix{-1 \\ 2}$ to cartesian form

- The direction vector is $\vec d = \pmatrix{-1 \\ 2}$
  - Change in $x = -1$
  - Change in $y = 2$
- Gradient $m = \frac{2}{-1} = -2$
- $\vec a = \pmatrix{2 \\ 5}$ gives us that $(2, 5)$ is a point on the line.
- Substitute into $y = mx + c$ to find $c$:
  - $5 = -2(2) + c$
  - $5 = -4 + c$
  - $c = 5 + 4$
  - $c = 9$
- **Answer**: $y = -2x + 9$

### Convert the vector equation $\vec r = \pmatrix{-1 \\ 4} + \lambda \pmatrix{2 \\ -3}$ to cartesian form

- The direction vector is $\vec d = \pmatrix{2 \\ -3}$
  - Change in $x = 2$
  - Change in $y = -3$
- Gradient $m = \frac{-3}{2}$
- $\vec a = \pmatrix{-1 \\ 4}$ gives us that $(-1, 4)$ is a point on the line.
- Substitute into $y = mx + c$ to find $c$:
  - $4 = \frac{-3}{2}(-1) + c$
  - $4 = \frac{3}{2} + c$
  - $c = 4 - \frac{3}{2}$
  - $c = \frac{5}{2}$
- **Answer**: $y = \frac{-3}{2}x + \frac{5}{2}$
