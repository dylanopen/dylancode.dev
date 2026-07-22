---
title: Method of differences
---

### Calculate $(\frac12-\frac13)+(\frac13-\frac14)+...+(\frac19-\frac1{10})$

- You may notice that a lot of terms cancel out:
  - $\frac13$ is a negative term in the first bracket, and a positive term in
    the second bracket.
  - $\frac14$ is a negative term in the second bracket, and a positive term in
    the third bracket.
  - This pattern continues for all the middle terms, the last being $\frac19$.
- This leaves us with just $\frac12 - \frac1{10}$.
- Simplifying this gives us $\frac{5}{10} - \frac{1}{10} = \frac{4}{10} = \frac25$.
- **Answer**: $\frac25$.

> This is called the 'method of differences'!

### Show that $\frac1{r^2}-\frac1{(r+1)^2}=\frac{2r+1}{r^2(r+1)^2}$

- $\frac1{r^2}-\frac1{(r+1)^2}$ (write down the left-hand side)
- $\frac{(r+1)^2}{r^2 (r+1)^2} - \frac{r^2}{r^2 (r+1)^2}$ write each term with a common denominator
- $=\frac{(r+1)^2 - r^2}{r^2 (r+1)^2}$ (get a common denominator)
- $=\frac{(r^2 + 2r + 1) - r^2}{r^2 (r+1)^2}$ (expand the numerator)
- $=\frac{2r + 1}{r^2 (r+1)^2}$ (simplify)

### Hence solve $\sum^n_{r=1} \frac{2r+1}{r^2 (r+1)^2}$

- $\sum^n_{r=1} \frac{2r+1}{r^2 (r+1)^2}$
- $=\sum^n_{r=1} \left( \frac1{r^2} - \frac1{(r+1)^2} \right)$ (use the result from above)
- $=\left(\frac1{1^2} - \frac1{2^2}\right) + \left(\frac1{2^2} - \frac1{3^2}\right) + \left(\frac1{3^2} - \frac1{4^2}\right) + ... +$  
  $\left(\frac1{(n-2)^2} - \frac1{(n-1)^2}\right) + \left(\frac1{(n-1)^2} - \frac1{n^2}\right) + \left(\frac1{n^2} - \frac1{(n+1)^2}\right)$  
  (write out the first and last few terms)
- All except the first and last terms cancel out, leaving us with $\frac1{1^2} - \frac1{(n+1)^2}$
- $=1 - \frac1{(n+1)^2}$ (simplify)
- **Answer**: $1 - \frac1{(n+1)^2}$.

### Given that $(2r+1)^3-(2r-1)^3=24r^2+2$, show that $\sum r^2=\frac16 n(n+1)(2n+1)$

- $\sum(24r^2+2)=\sum^n_{r=1}\left((2r+1)^3-(2r-1)^3\right)$
- $=(3^2-1^2)+(5^2-3^2)+(7^2-5^2)+...+(2n+1)^2-(2n-1)^2+((2n+1)^2-(2n-1)^2)$
  (write out the first few terms)
- $\sum(24r^2+2)=(2n+1)^3-1^3$ (all middle terms cancel out)
- $24\sum r^2 + 2n = (2n+1)^3 - 1$ (expand the left-hand side)
- $24\sum r^2 = (2n+1)^3 - 1 - 2n$ (rearrange)
- $24\sum r^2= 8n^3 + 12n^2 + 6n + 1 - 1 - 2n$ (expand the right-hand side)
- $24\sum r^2= 8n^3 + 12n^2 + 4n$ (simplify)
- $24\sum r^2=4n(2n^2 + 3n + 1)$ (factorise out a 4n)
- $24\sum r^2=4n(2n+1)(n+1)$ (factorise the quadratic)
- $\sum r^2 = \frac4{24}n(2n+1)(n+1)$ (divide both sides by 24)
- $\sum r^2=\frac16 n(n+1)(2n+1)$ (simplify)

