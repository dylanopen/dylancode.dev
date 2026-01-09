---
title: Scalar product of vectors
---

If we have two vectors, $\vec a$ and $\vec b$, we write the *scalar product* as:

$$
\vec a \cdot \vec b
$$

Because of the big dot operator which we use to mean 'scalar product', it is
also called the *dot product*.

## Scalar product rule for 2D

For vectors $\vec a=\pmatrix{a_1\\a_2}$ and $b=\pmatrix{b_1\\b_2}$, then $\vec a\cdot\vec b=a_1b_1 + a_2b_2$.

## Scalar product rule for 3D

For 3D, it's exactly the same.

For vectors $\vec a=\pmatrix{a_1\\a_2\\a_3}$ and $b=\pmatrix{b_1\\b_2\\b_3}$, then $\vec a\cdot\vec b=a_1b_1 + a_2b_2 + a_3b_3$.

## Geometric definition

$$
\vec a \cdot \vec b = |\vec a| |\vec b| \cos \theta
$$

### Proof

- The origin is at point $O$.
- Point $A$ is at $(a_1, a_2)$.
- Point $B$ is at $(b_1, b_2)$.
- let $\vec a=|OA|$
- let $\vec b=|OB|$
- let $\theta$ be the angle between $\vec a$ and $\vec b$.
- $| \vec a | = \sqrt{a_1^2 + a_2^2}$
- $| \vec a |^2 = a_1^2 + a_2^2$
- $| \vec b | = \sqrt{b_1^2 + b_2^2}$
- $| \vec b |^2 = b_1^2 + b_2^2$
- The cosine rule is $\cos C=\frac{a^2 + b^2 - c^2}{2ab}$.
- $\cos C=\frac{|\vec a|^2 + |\vec b|^2 - |\vec{AB}|^2}{2 |\vec a| |\vec b|}$
- $\cos C=\frac{(a_1^2 + a_2^2) + (b_1^2 + b_2^2) - ((b_1 - a_1)^2 + (b_2 - a_2)^2)}{2 \sqrt{a_1^2 + a_2^2} \sqrt{b_1^2 + b_2^2}}$
- $\cos C=\frac{(a_1^2 + a_2^2) + (b_1^2 + b_2^2) - (b_1^2 - 2a_1b_1 + a_1^2 + b_2^2 - 2a_2b_2 + a_2^2)}{2 \sqrt{a_1^2 + a_2^2} \sqrt{b_1^2 + b_2^2}}$
- $\cos C=\frac{2a_1b_1 + 2a_2b_2}{2 \sqrt{a_1^2 + a_2^2} \sqrt{b_1^2 + b_2^2}}$
- $\cos C=\frac{a_1b_1 + a_2b_2}{\sqrt{a_1^2 + a_2^2} \sqrt{b_1^2 + b_2^2}}$
- $a_1b_1+a_2b_2=a\cdot b$
- $\cos C=\frac{\vec a \cdot \vec b}{|\vec a| |\vec b|}$

## Applying the rules: finding the angle between two vectors

### Find the angle between $\vec a=\pmatrix{3\\4}$ and $\vec b=\pmatrix{5\\-12}$

- $\cos\theta=\frac{\vec a \cdot \vec b}{|\vec a| |\vec b|}$
- $\vec a \cdot \vec b = 3 \times 5 + 4 \times -12$
  - $= 15 - 48=-33$
- $|\vec a| = \sqrt{3^2 + 4^2}$
  - $= \sqrt{9 + 16}$
  - $= \sqrt{25}=5$
  - so $|\vec a|=5$
- $|\vec b| = \sqrt{5^2 + (-12)^2}$
  - $= \sqrt{25 + 144}$
  - $= \sqrt{169}=13$
  - so $|\vec b|=13$
- $\cos\theta=\frac{-33}{5 \times 13}$
  - $=\frac{-33}{65}$
- $\theta=\cos^{-1}\left(\frac{-33}{65}\right)$
  - $\approx 120.5^\degree$
- So the angle between the two vectors is $120.5^\circ$ - we've solved it!!

### Find the angle between $\vec a=\pmatrix{3\\5\\6}$ and $\vec b=\pmatrix{4\\2\\1}$

- $\cos\theta=\frac{\vec a \cdot \vec b}{|\vec a| |\vec b|}$
- $\vec a \cdot \vec b = a_1b_1 + a_2b_2 + a_3b_3$
- $\vec a \cdot \vec b = 3\times4+5\times2+6\times1$
  - $=12+10+6=28$
- $|\vec a| = \sqrt{3^2 + 5^2 + 6^2}$
  - $= \sqrt{9 + 25 + 36}$
  - $= \sqrt{70}$
- $|\vec b| = \sqrt{4^2 + 2^2 + 1^2}$
  - $= \sqrt{16 + 4 + 1}$
  - $= \sqrt{21}$
- $\cos\theta=\frac{28}{\sqrt{70} \times \sqrt{21}}$
  - $=\frac{28}{\sqrt{1470}}$
- $\theta=\cos^{-1}\left(\frac{28}{\sqrt{1470}}\right)$
  - $\approx 51.2^\circ$
- So the angle between the two vectors is $51.2^\circ$ :)

### Find the angle between $\vec a=\pmatrix{3\\5\\6}$ and $\vec b=\pmatrix{4\\2\\1}$

## Checking if vectors are perpendicular

- $\cos\theta=\frac{\vec a \cdot \vec b}{|\vec a| |\vec b|}$
- If $\vec a \perp \vec b$, then $\theta=90^\circ$.
- $\cos90=\frac{\vec a \cdot \vec b}{|\vec a| |\vec b|}$
- $0=\frac{\vec a \cdot \vec b}{|\vec a| |\vec b|}$
- $\vec a \cdot \vec b=0$
- So if the scalar product of two vectors is zero, then the vectors are perpendicular:

> Key take-away: if $\vec a \cdot \vec b=0$, then $\vec a \perp \vec b$.

