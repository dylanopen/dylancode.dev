# Learn Further Maths in One Video

### Pure - AS / A-level Year 1

---

# Complex numbers


---

## The imaginary constant, $i$

+ You may know that we "can't" find the square root of a negative number.
+ That creates some issues, so we need a way of finding it.
+ The square root of a negative number is the square root of that positive number, multiplied by $i$ (the imaginary constant).
+ This gives us the definition of $i$:
    - $i=\sqrt{-1}$
    - $i^2=-1$
+ Unlike a normal constant, we can't express the value of $i$, because it isn't a **real number**.

---

## Real number

+ The numbers your used to seeing.
+ They can be rational:
    + $7$
    + $-4.5$
    + $\frac23$
+ Or irrational:
    + $\sqrt7$
    + $\pi$
+ They're "real" because we can approximate them all to a single decimal number.

---

## Imaginary numbers

+ Numbers which are multiplied by the constant $i$.
+ They *only* have an imaginary part (the part multiplied by $i$).
+ For example:
    + $-7i$
    - $\frac37i$
    - $3.05i$
    + $\sqrt{-9}\rightarrow\sqrt9\times\sqrt{-1}\rightarrow3i$

---

## Complex numbers

+ A *real* number and a *complex* number are added together (or subtracted).
+ In other words: they have a real part **and** an imaginary part.
+ Examples:
    + $3+4i$
    + $-7-\frac13i$
    + $-\pi+2i$
+ We can generalise this to the form $z=x+yi$, where $z$ is the complex number, $x$ is the real part and $y$ is the imaginary part

---

## Expressing the real and imaginary part

+ The imaginary part is the part *before* the $i$, it doesn't include the $i$.
    + The imaginary part of $5-3i$ is $-3$
+ We usually write the real part *before* the imaginary part.
    + $-3+4i$ instead of $4i-3$

---

## Simplifying powers of $i$

+ Using the fact that $i^2=-1$ and our normal laws of indices, we can simplify larger powers of $i$:
    + $i^3=i^2\times i=-1\times i=-i$
    + $i^4=i^2\times i^2=-1\times-1=1$
    + $i^{12}=i^4\times i^4\times i^4=1\times1\times1=1$ 
    + $i^{13}=i^12\times i=1\times i=i$
+ *We can keep subtracting 4 from the power of i and it doesn't change the value.*

---

## Finding negative roots

+ Find $\sqrt{-9}$
    + $=\sqrt{9}\times\sqrt{-1}
    + $=3\times i$
    + $=3i$
+ Find $\sqrt{-\frac{1}{4}}$
    + $=\sqrt{\frac{1}{4}}\times\sqrt{-1}$
    + $=\frac12\times i$
    + $=\frac12i$

---

## Adding complex numbers

- We can add complex numbers as you would add any normal algebraic expression - add the imaginary and real part separately.
- $(a+bi)+(c+di)=(a+c)+(b+d)i$
+ Example:
    + $(25+4i)+(13-3i)$
    + $=(25+13)+(4+-3)i$
    + $=38+i$

---

## Subtracting complex numbers

- This works the same way as adding complex numbers, just subtract the real and imaginary parts separately.
- Be careful of any double negation!
- $(a+bi)-(c+di)=(a-c)+(b-d)i$
+ Example:
    + $(25+4i)-(13-3i)$
    + $=(25-13)+(4-(-3))i$
    + $=12+7i$

---

## Multiplying complex numbers

- We can multiply complex numbers just like expanding double brackets (you might know this as the distributive law).
- $(a+bi)(c+di)=ac+adi+bic+bidi$
- $=ac+(ad+bc)i+bd(i^2)$
- $=ac+(ad+bc)i-bd$
- $=(ac-bd)+(ad+bc)i$
- An example will make this clearer

---

## Multiply $4+5i$ by $2-3i$

|       | $4$    | $5i$     |
| ----- | ------ | -------- |
| $2$   | $8$    | $10i$    |
| $-3i$ | $-12i$ | $-15i^2$ |

+ $(4+5i)(2-3i)=8+10i-12i-15i^2$
- $=8-2i-15(-1)$
- $=8-2i+15$
- $=23-2i$

---

## Complex conjugate

- The conjugate of a complex number is:
    - the **same** real part
    - the **opposite** imaginary part (change the sign)
- We write the conjugate of the complex number $w$ as $w^*$.
+ For example:
    + the conjugate of $3+4i$ is $3-4i$
    + the conjugate of $-7-2i$ is $-7+2
    + the conjugate of $-5i$ is $5i$

---

## Dividing complex numbers

+ To divide complex numbers, we use a very similar method to **rationalising the denominator**.
+ We write the division as a fraction, then multiply the top and bottom by the **conjugate** of the denominator.

---

## Divide $5+2i$ by $3-4i$

+ $=\frac{5+2i}{3-4i}$
- $=\frac{(5+2i)(3+4i)}{(3-4i)(3+4i)}$ (multiply top and bottom by the conjugate of the denominator)
- $=\frac{15+20i+6i+8i^2}{9+12i-12i-16i^2}$ (expand the brackets)
- $=\frac{15+26i-8}{9+16}$ (simplify using $i^2=-1$)
- $=\frac{7+26i}{25}$ (simplify the real part and the denominator)
- $=\frac7{25}+\frac{26}{25}i$ (write in the form $a+bi$)

---

## Powers of complex numbers

+ When we expand $(ax+b)^n$ (a standard polynomial), we can't just raise $ax$ and $b$ to the power of $n$ - we have to write the brackets $n$ times and expand them.
+ Similarly, when expanding the complex number $(a+bi)^n$, we have to write out all the brackets.

---

## Simplify $(2+3i)^3$

+ $=(2+3i)(2+3i)(2+3i)$
+ $=(2+3i)(4+12i+9i^2)$
+ $=(2+3i)(4+12i-9)$
+ $=(2+3i)(-5+12i)$
+ $=-10+24i-15i+36i^2$
+ $=-10+9i-36$
+ $=-46+9i$

---

# Polar coordinates

---

## What are polar coordinates?

+ The 'normal' way of representing the location of a point is using **Cartesian coordinates**.
+ This is where we measure the distance along the $x$ and $y$ axes to express the location of a point.
+ Polar coordinates measure two different things, but can still express the location of a point.

---

## Polar form

+ Polar coordinates measure two things:
    + $r$: the distance from the origin to the point
    + $\theta$: the angle between the positive $x$ axis and the line from the origin to the point (measured anticlockwise)
+ We write a point in polar coordinates with the notation $(r,\theta)$


---

## Polar form

![[Pasted image 20260426144528.png|250]]

- The *distance* from the origin to the point ($r$) is $5$
- $\theta$ is the angle between the positive $x$ axis and the line from the origin to the point, which is $\frac26\pi$ radians ($\frac13\pi$ rad, or $60^\circ$)
- The point is $(5, \frac13\pi)$ in polar coordinates

---

## Distance between polar points

- Two points in polar coordinates will make a triangle, with the two points and the origin as the vertices.
- We can use the cosine rule to find the distance between the two points.
- The angle between the two points is the difference between their $\theta$ values.
