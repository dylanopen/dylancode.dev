# De Moivre's theorem

De Moivre's theorem states that for a [[complex-number]] $z$:

> $$
>  \text{for }z=r(\cos\theta+i\sin\theta)\text{, then }z^2=r^2(\cos n\theta+i\sin n\theta)
> $$

We can prove this using the [[modulus-argument-form]] of the complex numbers

## Proof for $r=2$ 

- Let $z=r(\cos\theta+i\sin\theta)$
- It follows that $z^2=zz=r\cos\theta+i\sin\theta)\times r(\cos\theta+i\sin\theta)$
- So $|z^2|=|z||z|=r\times r=r^2$
- And $\arg(z^2)=\arg z+\arg z=\arg2z$
- Therefore $z^2=r^2(\cos2z+i\sin2z)$

## Prove $z^n=r^n(\cos n\theta+i\sin n\theta)$ for n = any positive integer

- [[proof-by-induction]]!
- $z=r(\cos\theta+i\sin\theta)$
- For $n=1$:
    - $\text{LHS}=z^1=[r(\cos\theta+i\sin\theta)]^1=r(\cos\theta+i\sin\theta)$
    - $\text{RHS}=r^1(\cos1\theta+i\sin1\theta)=r(\cos\theta+i\sin\theta)$
    - So true for $n=1$
- Assume true for $n=k$:
    - $z^k=r^k(\cos k\theta+i)
- Test for $n=k+1$:
    - $\text{LHS}=z^{k+1}=z^k\cdot z$
    - $=r^k(\cos k\theta+i\sin i\theta)\cdot r(\cos\theta+i \sin\theta)$
    - $=r^{k+1}(\cos k\theta+i\cos k\theta\sin\theta+i\sin k\theta\cos\theta+i^2\sin k\theta\sin\theta)$
    - $=r^{k+1}[(\cos k\theta\cos\theta-\sin k\theta\sin\theta)+i(\cos k\theta\sin\theta+\sin k\theta\sin\theta)]$
    - Using our angle rules:
    - $=r^{k+1}(\cos(k\theta+\theta)+i\sin(k\theta+\theta))$
    - $=r^{k+1}(\cos(k+1)\theta+i\sin(k+1)\theta)\Rightarrow\text{expected result for n=k+1}$
- Therefore we have proven that $z^n=r^n(\cos n\theta+i\sin n\theta)$, by induction.

