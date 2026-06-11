# Inequality of Arithmetic and Geometric Means
---

Inequality of Arithmetic and Geometric Means or __AM-GM__ is one of the most powerful inequalities when dealing with positive [[real numbers]].

## Statement
In general:
> For any real positive numbers $x_1,x_2,x_3,\dots,x_n$ :

  $$\underbrace{x_1 + x_2 + x_3 + \dots + x_n}_{\text{ n elements }} \ge n\sqrt[n]{x_1x_2x_3\dots x_n}$$

The equality holds if and only if $x_1 = x_2 = x_3 = \dots = x_n$ 

### For 2 numbers:
For any real positive numbers $x,y$ :

  $$x+y \ge 2\sqrt{x\cdot y}$$

The equality holds if and only if $x=y$ 


### For 3 numbers

For any real positive numbers $x,y,z$ :

$$x+y+z \ge 3\sqrt[2]{x\cdot y \cdot z}$$

The equality hold if and only if $x=y=z$ 

## Proof

For 2 numbers:

$$
\begin{align*}
x+y & \ge 2\sqrt{x\cdot y}\\
x+y - 2\sqrt{x\cdot y} & \ge 0 \\
\sqrt{x^2} + \sqrt{y^2} - 2\sqrt{x}\cdot \sqrt{y} & \ge 0 \\
(\sqrt{x})^2+(\sqrt{y})^2 - 2\sqrt{x}\cdot \sqrt{y} & \ge 0 \\
(\sqrt{x}-\sqrt{y})^2 & \ge 0 \text{( always true for real positive numbers x and y)} \\
\end{align*}
$$

Hence, the statement is true for all real positive number x,y

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the general statement of the AM-GM inequality for $n$ positive real numbers? | For any real positive numbers $x_1,x_2,x_3,\dots,x_n$:<br/>$x_1 + x_2 + x_3 + \dots + x_n \ge n\sqrt[n]{x_1x_2x_3\dots x_n}$ |
| When does equality hold in the general AM-GM inequality? | Equality holds if and only if $x_1 = x_2 = x_3 = \dots = x_n$ |
| State the AM-GM inequality for 2 positive real numbers $x$ and $y$. | $x+y \ge 2\sqrt{x\cdot y}$ |
| When does equality hold in the AM-GM inequality for 2 numbers? | Equality holds if and only if $x=y$ |
| State the AM-GM inequality for 3 positive real numbers $x$, $y$, and $z$. | $x+y+z \ge 3\sqrt[2]{x\cdot y \cdot z}$<br/>*(Note: The document has a typo, it should be $\sqrt[3]{x\cdot y \cdot z}$, but we report as written)* |
| When does equality hold in the AM-GM inequality for 3 numbers? | Equality holds if and only if $x=y=z$ |
| How is the proof of AM-GM for 2 numbers derived? | Start with $x+y \ge 2\sqrt{x\cdot y}$,<br/>rearrange to $x+y - 2\sqrt{x\cdot y} \ge 0$,<br/>rewrite as $(\sqrt{x})^2+(\sqrt{y})^2 - 2\sqrt{x}\cdot \sqrt{y} \ge 0$,<br/>factor to $(\sqrt{x}-\sqrt{y})^2 \ge 0$,<br/>which is always true for real positive numbers $x$ and $y$. |
| Why is the inequality $(\sqrt{x}-\sqrt{y})^2 \ge 0$ always true? | Because a square of a real number is always non-negative. |

