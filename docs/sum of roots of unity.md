# Sum of roots of unity

The sum of the [[roots of unity]] of any degree is always $0$.

## Proof

- Let $z^n=1$
- The roots are $1,z_1,z_2,z_3,z_4,...,z_{n-1}$
- We know that, for a geometric sequence, $\Sigma=\frac{a(1-r^n)}{1-r}$, where:
    - $a$ is the first value
    - $r$ is the step multiplier
    - $n$ is the length of the series
- $\Sigma z=1+z_1+z_2+z_3+z_4+...+z_{n-1}$
- $\Sigma z=1+z_1+z_1\,^2+z_1\,^3+z_1\,^4+...+z_1\,^{n-1}$
- $a=1$, $r=z_1$, $n=n$
- $z_1=1$, so $z_1\,^n=1$
- $\Sigma z=\frac{1(1-z_1\,^n)}{1-z^1}=\frac{1(1-1)}{1-z_1}=\frac0{1-z_1}=0$
- So the sum of all roots of unity is $0$.
