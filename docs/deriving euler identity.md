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
