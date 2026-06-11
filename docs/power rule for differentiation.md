# Power rule for differentiation

The **[[power]] rule** allows us to easy differentiate any function, as long as we
only have powers of $x$ (i.e. no addition, [[subtraction]], [[multiplication]] or
[[riscv/division|division]] of $x$ terms).

To differentiate a term $ax^n$:
- Multiply the term by the [[power]] $n$: $a \times n$.
- Decrease the [[power]] by 1: $n - 1$.
- So the derivative of $ax^n$ is: $a \times n \times x^{n-1}$.

## Differentiating larger expressions

### Example: Differentiate $f(x) = 3x^4 + 2x^3 - 5x^2 + 7x - 4$

- Differentiate each term separately:
  - $3x^4$: Multiply by 4 and decrease [[power]] by 1: $3 \times 4 \times x^{4-1} = 12x^3$.
  - $2x^3$: Multiply by 3 and decrease [[power]] by 1: $2 \times 3 \times x^{3-1} = 6x^2$.
  - $-5x^2$: Multiply by 2 and decrease [[power]] by 1: $-5 \times 2 \times x^{2-1} = -10x$.
  - $7x$: Multiply by 1 and decrease [[power]] by 1: $7 \times 1 \times x^{1-1} = 7$.
  - $-4$: Constant term, derivative is $0$.
- Add together the results:
  - $f'(x) = 12x^3 + 6x^2 - 10x + 7$.
- **Answer:** $f'(x) = 12x^3 + 6x^2 - 10x + 7$.

### Example: Differentiate $g(x) = 5x^5 - 3x^4 + x^2 - 8$

- Differentiate each term separately:
  - $5x^5$: Multiply by 5 and decrease [[power]] by 1: $5 \times 5 \times x^{5-1} = 25x^4$.
  - $-3x^4$: Multiply by 4 and decrease [[power]] by 1: $-3 \times 4 \times x^{4-1} = -12x^3$.
  - $x^2$: Multiply by 2 and decrease [[power]] by 1: $1 \times 2 \times x^{2-1} = 2x$.
  - $-8$: Constant term, derivative is $0$.
- Add together the results:
  - $g'(x) = 25x^4 - 12x^3 + 2x$.
- **Answer:** $g'(x) = 25x^4 - 12x^3 + 2x$.

### Example: Differentiate $h(x) = 4x^3 + 6x - 9$

- Differentiate each term separately:
  - $4x^3$: Multiply by 3 and decrease [[power]] by 1: $4 \times 3 \times x^{3-1} = 12x^2$.
  - $6x$: Multiply by 1 and decrease [[power]] by 1: $6 \times 1 \times x^{1-1} = 6$.
  - $-9$: Constant term, derivative is $0$.
- Add together the results:
  - $h'(x) = 12x^2 + 6$.
- **Answer:** $h'(x) = 12x^2 + 6$.

### Example: Differentiate $k(x) = 7x^6 - 2x^3 + 5x^2 - x + 1$

- Differentiate each term separately:
  - $7x^6$: Multiply by 6 and decrease [[power]] by 1: $7 \times 6 \times x^{6-1} = 42x^5$.
  - $-2x^3$: Multiply by 3 and decrease [[power]] by 1: $-2 \times 3 \times x^{3-1} = -6x^2$.
  - $5x^2$: Multiply by 2 and decrease [[power]] by 1: $5 \times 2 \times x^{2-1} = 10x$.
  - $-x$: Multiply by 1 and decrease [[power]] by 1: $-1 \times 1 \times x^{1-1} = -1$.
  - $1$: Constant term, derivative is $0$.
- Add together the results:
  - $k'(x) = 42x^5 - 6x^2 + 10x - 1$.
- **Answer:** $k'(x) = 42x^5 - 6x^2 + 10x - 1$.

## Differentiating terms with negative or fractional powers

We can use the exact same [[power]] rule to differentiate terms with negative or
[[fractional powers]].

Make sure to remember that, for [[negative powers]], decreasing the [[power]] by 1 means
making it more negative (e.g. from $-2$ to $-3$).

### Example: Differentiate $m(x) = 2x^{-3} + 4x^{1/2} - 5$

- Differentiate each term separately:
  - $2x^{-3}$: Multiply by -3 and decrease [[power]] by 1: $2 \times -3 \times x^{-3-1} = -6x^{-4}$.
  - $4x^{1/2}$: Multiply by 1/2 and decrease [[power]] by 1: $4 \times \frac{1}{2} \times x^{\frac{1}{2}-1} = 2x^{-\frac{1}{2}}$.
  - $-5$: Constant term, derivative is $0$.
- Add together the results:
  - $m'(x) = -6x^{-4} + 2x^{-\frac{1}{2}}$.
- **Answer:** $m'(x) = -6x^{-4} + 2x^{-\frac{1}{2}}$.

### Example: Differentiate $n(x) = 3x^{3/2} - 2x^{-1} + 7$

- Differentiate each term separately:
  - $3x^{3/2}$: Multiply by 3/2 and decrease [[power]] by 1: $3 \times \frac{3}{2} \times x^{\frac{3}{2}-1} = \frac{9}{2}x^{\frac{1}{2}}$.
  - $-2x^{-1}$: Multiply by -1 and decrease [[power]] by 1: $-2 \times -1 \times x^{-1-1} = 2x^{-2}$.
  - $7$: Constant term, derivative is $0$.
- Add together the results:
  - $n'(x) = \frac{9}{2}x^{\frac{1}{2}} + 2x^{-2}$.
- **Answer:** $n'(x) = \frac{9}{2}x^{\frac{1}{2}} + 2x^{-2}$.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the power rule for differentiation? | To differentiate $ax^n$, multiply by the power $n$ then decrease the power by 1: derivative is $a \times n \times x^{n-1}$. |
| How do you differentiate $3x^4$? | Multiply by 4, decrease power by 1: $3 \times 4 \times x^{4-1} = 12x^3$. |
| How do you differentiate $2x^3$? | Multiply by 3, decrease power by 1: $2 \times 3 \times x^{3-1} = 6x^2$. |
| How do you differentiate $-5x^2$? | Multiply by 2, decrease power by 1: $-5 \times 2 \times x^{2-1} = -10x$. |
| How do you differentiate $7x$? | Multiply by 1, decrease power by 1: $7 \times 1 \times x^{1-1} = 7$. |
| What is the derivative of a constant term like $-4$? | The derivative is $0$. |
| What is the derivative of $f(x) = 3x^4 + 2x^3 - 5x^2 + 7x - 4$? | $f'(x) = 12x^3 + 6x^2 - 10x + 7$. |
| What is the derivative of $g(x) = 5x^5 - 3x^4 + x^2 - 8$? | $g'(x) = 25x^4 - 12x^3 + 2x$. |
| What is the derivative of $h(x) = 4x^3 + 6x - 9$? | $h'(x) = 12x^2 + 6$. |
| What is the derivative of $k(x) = 7x^6 - 2x^3 + 5x^2 - x + 1$? | $k'(x) = 42x^5 - 6x^2 + 10x - 1$. |
| How do you differentiate a term with a negative power, like $2x^{-3}$? | Multiply by the negative power and decrease the power by 1 (making it more negative): $2 \times -3 \times x^{-3-1} = -6x^{-4}$. |
| How do you differentiate a term with a fractional power, like $4x^{1/2}$? | Multiply by the fraction and decrease the power by 1: $4 \times \frac{1}{2} \times x^{\frac{1}{2}-1} = 2x^{-\frac{1}{2}}$. |
| What is the derivative of $m(x) = 2x^{-3} + 4x^{1/2} - 5$? | $m'(x) = -6x^{-4} + 2x^{-\frac{1}{2}}$. |
| What is the derivative of $n(x) = 3x^{3/2} - 2x^{-1} + 7$? | $n'(x) = \frac{9}{2}x^{\frac{1}{2}} + 2x^{-2}$. |
| What must you remember when decreasing a negative power by 1? | Decreasing a negative power by 1 means making it more negative (e.g., from $-2$ to $-3$). |

