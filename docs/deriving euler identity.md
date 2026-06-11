# Deriving Euler's formula

## Find $e^{i\theta}$
- We know that:
    - $e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+...$
- Substitute in $x=i\theta$:
    - $e^{i\theta}=1+i\theta+\frac{i^2\theta^2}{2!}+\frac{i^3\theta^3}{3!}+\frac{i^4\theta^4}{4!}...$
- Separate the real and imaginary parts:
    - Real: $1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}-\frac{\theta^6}{6!}+...$
    - Imaginary: $ri(\theta-\frac{\theta^3}{3!}+\frac{\theta^5}{5!}+...)$ 
- This gives us $e^{i\theta}=\cos\theta+i\sin\theta$
- Therefore also, $re^{i\theta}=r(\cos\theta+i\sin\theta)$: [[modulus]]-argument form.

## Finding Euler's identity 

- $\cos\pi=-1$
- $\sin\pi=0$
- $e^{i\pi}=\cos\pi+i\sin\pi$
- $e^i\pi=-1+0$
- $e^i\pi=-1$
- $e^i\pi+1=0$

## Linking with [[de moivre theorem]]

- $(e^{i\theta})^n=(\cos\theta+i\sin\theta)^n$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the series expansion for $e^x$? | $e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+...$ |
| What is the first step to derive $e^{i\theta}$? | Substitute $x=i\theta$ into the series expansion for $e^x$. |
| What is the real part of the series expansion for $e^{i\theta}$? | $1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}-\frac{\theta^6}{6!}+...$ |
| What is the imaginary part of the series expansion for $e^{i\theta}$? | $i(\theta-\frac{\theta^3}{3!}+\frac{\theta^5}{5!}+...)$ |
| What is Euler's formula? | $e^{i\theta}=\cos\theta+i\sin\theta$ |
| How is the modulus-argument form of a complex number written using Euler's formula? | $re^{i\theta}=r(\cos\theta+i\sin\theta)$ |
| What is Euler's identity? | $e^{i\pi}+1=0$ |
| How do you derive Euler's identity using Euler's formula? | Substitute $\theta=\pi$ into $e^{i\theta}=\cos\theta+i\sin\theta$ to get $e^{i\pi}=-1$, then rearrange to $e^{i\pi}+1=0$. |
| What is the value of $\cos\pi$? | $-1$ |
| What is the value of $\sin\pi$? | $0$ |
| How does De Moivre's Theorem relate to Euler's formula? | $(e^{i\theta})^n=(\cos\theta+i\sin\theta)^n$ |

