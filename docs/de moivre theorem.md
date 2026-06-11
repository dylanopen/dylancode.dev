# De Moivre's theorem

De Moivre's theorem states that for a [[complex number]] $z$:

> $$
>  \text{for }z=r(\cos\theta+i\sin\theta)\text{, then }z^2=r^2(\cos n\theta+i\sin n\theta)
> $$

We can prove this using the [[modulus argument form]] of the complex numbers

## Proof for $r=2$ 

- Let $z=r(\cos\theta+i\sin\theta)$
- It follows that $z^2=zz=r\cos\theta+i\sin\theta)\times r(\cos\theta+i\sin\theta)$
- So $|z^2|=|z||z|=r\times r=r^2$
- And $\arg(z^2)=\arg z+\arg z=\arg2z$
- Therefore $z^2=r^2(\cos2z+i\sin2z)$

## Prove $z^n=r^n(\cos n\theta+i\sin n\theta)$ for n = any positive integer

- [[proof by induction]]!
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


## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is De Moivre's theorem? | For $z=r(\cos\theta+i\sin\theta)$, $z^n=r^n(\cos n\theta+i\sin n\theta)$ |
| How do you prove De Moivre's theorem for $n=2$? | Let $z=r(\cos\theta+i\sin\theta)$; then $z^2=zz$ gives $|z^2|=r^2$ and $\arg(z^2)=2\theta$, so $z^2=r^2(\cos2\theta+i\sin2\theta)$. |
| What method proves $z^n=r^n(\cos n\theta+i\sin n\theta)$ for any positive integer $n$? | Proof by induction. |
| In the proof by induction, how do you show the statement is true for $n=1$? | LHS: $z^1=r(\cos\theta+i\sin\theta)$, RHS: $r^1(\cos1\theta+i\sin1\theta)=r(\cos\theta+i\sin\theta)$, so true. |
| In the induction proof, what is the assumption for $n=k$? | $z^k=r^k(\cos k\theta+i\sin k\theta)$ |
| In the induction step for $n=k+1$, how do you simplify $z^{k+1}=z^k\cdot z$? | Square bracket: Multiply $r^k(\cos k\theta+i\sin k\theta)$ by $r(\cos\theta+i\sin\theta)$ to get $r^{k+1}[(\cos k\theta\cos\theta-\sin k\theta\sin\theta)+i(\cos k\theta\sin\theta+\sin k\theta\cos\theta)]$. |
| After multiplying in the induction step, what identity gives $\cos(k\theta+\theta)+i\sin(k\theta+\theta)$? | The angle addition formulas: $\cos(A+B)=\cos A\cos B-\sin A\sin B$ and $\sin(A+B)=\sin A\cos B+\cos A\sin B$. |
| What is the final result of the induction proof for $n=k+1$? | $z^{k+1}=r^{k+1}(\cos(k+1)\theta+i\sin(k+1)\theta)$, matching the expected form. |

