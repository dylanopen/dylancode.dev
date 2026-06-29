# Vector line equation

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

- $\vec a=\begin{pmatrix}-2\\4\end{pmatrix}$
- $\vec b=\begin{pmatrix}3\\7\end{pmatrix}$
- $\vec{AB}=\vec b - \vec a$
  - $=\begin{pmatrix}3\\7\end{pmatrix} - \begin{pmatrix}-2\\4\end{pmatrix}$
  - $=\begin{pmatrix}5\\3\end{pmatrix}$
- **Answer**: $\vec{AB}=\begin{pmatrix}5\\3\end{pmatrix}$

### Find ALL vectors between the points $A=(1,2,3)$, $B=(4,0,5)$ and $C=(2,6,1)$

- $\vec a=\begin{pmatrix}1\\2\\3\end{pmatrix}$
- $\vec b=\begin{pmatrix}4\\0\\5\end{pmatrix}$
- $\vec c=\begin{pmatrix}2\\6\\1\end{pmatrix}$
- $\vec{AB}=\vec b - \vec a$
  - $=\begin{pmatrix}4\\0\\5\end{pmatrix} - \begin{pmatrix}1\\2\\3\end{pmatrix}$
  - $=\begin{pmatrix}3\\-2\\2\end{pmatrix}$
- $\vec{AC}=\vec c - \vec a$
  - $=\begin{pmatrix}2\\6\\1\end{pmatrix} - \begin{pmatrix}1\\2\\3\end{pmatrix}$
  - $=\begin{pmatrix}1\\4\\-2\end{pmatrix}$
- $\vec{BC}=\vec c - \vec b$
  - $=\begin{pmatrix}2\\6\\1\end{pmatrix} - \begin{pmatrix}4\\0\\5\end{pmatrix}$
  - $=\begin{pmatrix}-2\\6\\-4\end{pmatrix}$
- **Answers**:
  - $\vec{AB}=\begin{pmatrix}3\\-2\\2\end{pmatrix}$
  - $\vec{AC}=\begin{pmatrix}1\\4\\-2\end{pmatrix}$
  - $\vec{BC}=\begin{pmatrix}-2\\6\\-4\end{pmatrix}$

## Finding the vector equation from points

### Find a vector equation of the line between the points $(2,3)$ and $(5,1)$

- Let $\vec a$ be the position vector of $A$ from the origin:
  - $\vec A = \begin{pmatrix}2 \\ 3\end{pmatrix}$
- $\vec{AB} = \vec B - \vec A$
  - $= \begin{pmatrix}5 \\ 1\end{pmatrix} - \begin{pmatrix}2 \\ 3\end{pmatrix}$
  - $= \begin{pmatrix}3 \\ -2\end{pmatrix}$
- So the **direction** vector is $\begin{pmatrix}3 \\ -2\end{pmatrix}$.
- Equation of a line:
  - $\vec r = \vec a + \lambda \vec d$
  - $= \begin{pmatrix} 2 \\ 3 \end{pmatrix} + \lambda \begin{pmatrix} 3 \\ -2 \end{pmatrix}$
- **Answer**: $\vec r = \begin{pmatrix} 2 \\ 3 \end{pmatrix} + \lambda \begin{pmatrix} 3 \\ -2 \end{pmatrix}$

> Note: there are multiple solutions to this line equation from the points
> given. We can find other ones by using different vectors (e.g. using
> $\vec{OB}$ instead of $\vec{OA}$).

### Find a vector equation of the line between the points $(1,0,2)$ and $(4,6,5)$
- Let $\vec a$ be the position vector of $A$ from the origin:
  - $\vec A = \begin{pmatrix}1 \\ 0 \\ 2\end{pmatrix}$
- $\vec{AB} = \vec B - \vec A$
  - $= \begin{pmatrix}4 \\ 6 \\ 5\end{pmatrix} - \begin{pmatrix}1 \\ 0 \\ 2\end{pmatrix}$
  - $= \begin{pmatrix}3 \\ 6 \\ 3\end{pmatrix}$
- So the **direction** vector is $\begin{pmatrix}3 \\ 6 \\ 3\end{pmatrix}$, which we can simplify
  to $\begin{pmatrix}1 \\ 2 \\ 1\end{pmatrix}$ (because it's just a direction and the magnitude is
  not important here).
- Equation of a line:
  - $\vec r = \vec a + \lambda \vec d$
  - $= \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + \lambda \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$
- **Answer**: $\vec r = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + \lambda \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$

> Note: there are multiple solutions to this line equation from the points
> given. We can find other ones by using different vectors (e.g. using
> $\vec{OB}$ instead of $\vec{OA}$).

### Find a vector equation of the line between the points $(-2,4)$ and $(1,-2)$

- Let $\vec a$ be the position vector of $A$ from the origin:
  - $\vec A = \begin{pmatrix}-2 \\ 4\end{pmatrix}$
- $\vec{AB} = \vec B - \vec A$
  - $= \begin{pmatrix}1 \\ -2\end{pmatrix} - \begin{pmatrix}-2 \\ 4\end{pmatrix}$
  - $= \begin{pmatrix}3 \\ -6\end{pmatrix}$
- So the **direction** vector is $\begin{pmatrix}3 \\ -6\end{pmatrix}$, which we can simplify
  to $\begin{pmatrix}1 \\ -2\end{pmatrix}$ (because it's just a direction and the magnitude is
  not important here).
- Equation of a line:
  - $\vec r = \vec a + \lambda \vec d$
  - $= \begin{pmatrix} -2 \\ 4 \end{pmatrix} + \lambda \begin{pmatrix} 1 \\ -2 \end{pmatrix}$
- **Answer**: $\vec r = \begin{pmatrix} -2 \\ 4 \end{pmatrix} + \lambda \begin{pmatrix} 1 \\ -2 \end{pmatrix}$

## More complex exam-style questions

### $A$ is the point $(3,1,4)$ and $AQ=18$. Find $Q$ if $A$ and $Q$ are on the line $r=\begin{pmatrix}1 \\ 2 \\ 3\end{pmatrix} + \lambda \begin{pmatrix}4 \\ -2 \\ -4\end{pmatrix}$

- Find the length of vector $\begin{pmatrix}4 \\ -2 \\ -4\end{pmatrix}$:
  - $|\vec{d}| = \sqrt{4^2 + (-2)^2 + (-4)^2} = \pm\sqrt{16 + 4 + 16} = \pm\sqrt{36} = \pm6$
  - $\lambda\times|\begin{pmatrix}4 \\ -2 \\ -4\end{pmatrix}|=18$
  - $\lambda \times \pm6 = 18$
  - $\lambda = \pm3$
- Find $Q$:
  - $Q=\begin{pmatrix}1 \\ 2 \\ 3\end{pmatrix} \pm 3 \begin{pmatrix}4 \\ -2 \\ -4\end{pmatrix}$
  - $=\begin{pmatrix}1 \\ 2 \\ 3\end{pmatrix} \pm \begin{pmatrix}12 \\ -6 \\ -12\end{pmatrix}$
  - $=\begin{pmatrix}13 \\ -4 \\ -9\end{pmatrix}$ or $\begin{pmatrix}-11 \\ 8 \\ 15\end{pmatrix}$
- **Answer**: $Q=\begin{pmatrix}13 \\ -4 \\ -9\end{pmatrix}$ or $Q=\begin{pmatrix}-11 \\ 8 \\ 15\end{pmatrix}$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the general vector form for the equation of a line? | $\vec r = \vec a + \lambda \vec d$ |
| How do you find the vector between two points $A$ and $B$? | $\vec{AB} = \vec b - \vec a$ |
| Find the vector between $A=(-2,4)$ and $B=(3,7)$. | $\vec{AB} = \begin{pmatrix}5\\3\end{pmatrix}$ |
| Find the vector $\vec{BC}$ for points $A=(1,2,3)$, $B=(4,0,5)$ and $C=(2,6,1)$. | $\vec{BC} = \begin{pmatrix}-2\\6\\-4\end{pmatrix}$ |
| How do you find the vector equation of the line through points $(2,3)$ and $(5,1)$? | $\vec r = \begin{pmatrix}2\\3\end{pmatrix} + \lambda \begin{pmatrix}3\\-2\end{pmatrix}$ |
| Why might you simplify a direction vector like $\begin{pmatrix}3\\6\\3\end{pmatrix}$ to $\begin{pmatrix}1\\2\\1\end{pmatrix}$? | Because the magnitude is not important for the direction, so we can simplify it. |
| Find a vector equation of the line between points $(1,0,2)$ and $(4,6,5)$. | $\vec r = \begin{pmatrix}1\\0\\2\end{pmatrix} + \lambda \begin{pmatrix}1\\2\\1\end{pmatrix}$ |
| Find a vector equation of the line between points $(-2,4)$ and $(1,-2)$. | $\vec r = \begin{pmatrix}-2\\4\end{pmatrix} + \lambda \begin{pmatrix}1\\-2\end{pmatrix}$ |
| What is the length (magnitude) of the direction vector $\begin{pmatrix}4\\-2\\-4\end{pmatrix}$? | $|\vec d| = \sqrt{4^2 + (-2)^2 + (-4)^2} = \pm 6$ |
| Given $A=(3,1,4)$, $AQ=18$, and the line $r=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}4\\-2\\-4\end{pmatrix}$, what are the possible coordinates for $Q$? | $Q = \begin{pmatrix}13\\-4\\-9\end{pmatrix}$ or $\begin{pmatrix}-11\\8\\15\end{pmatrix}$ |
| If $\lambda \times |\vec d| = 18$ and $|\vec d| = \pm 6$, what are the possible values of $\lambda$? | $\lambda = \pm 3$ |

