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

---

## Distance between polar points

![[res/Pasted image 20260426150901.png]]

- $a^2=b^2+c^2-2bc\cos A$
- $a^2=5^2+7^2-2\times5\times7\cos\left(\frac23\pi-\frac13\pi\right)$
- $a=\sqrt{39}$

---

## Polar line equation

+ We can also express the equation of a line in polar coordinates.
+ Polar equations are usually written as a function of $\theta$ (the angle), which gives us the value of $r$ (the distance from the origin), so $r=f(\theta)$.
+ For example, $r=2\sin\theta$ is a polar line equation, where the distance from the origin is $2\sin\theta$ for any given angle $\theta$ (in radians).
- Sometimes we ignore any parts of the line where $r$ is negative and don't draw these 'opposite' lines, you'll see a $r\ge0$ constraint in this case.

---

## Negative radius

+ Sometimes the value of $r$ we get from a polar equation (from some values of $\theta$) is negative.
+ In that case, we go away from the origin *in the 'wrong' direction* to the angle $\theta$.
+ For example, if a polar equation gave us $r=-3$ for $\theta=\frac\pi4$ (upper right quadrant), we would go 3 units in the opposite direction, which is the lower left quadrant (as if we were continuing the line backwards)

---

## Graphing polar equations

- To graph a polar equation, we can make a table of values for $\theta$ and $r$, then plot the points and join them up.
- We can then plot a point at a distance $r$ from the origin, at an angle $\theta$ away from the positive axis (or opposite to the direction of the angle if $r$ is negative).

---

## Polar to Cartesian: point

+ To convert a **point** from polar $(r,\theta)$ to Cartesian $(x,y)$ form, we can find $x$ and $y$ using:
+ $x=r\cos\theta$
+ $y=r\sin\theta$
+ This is because $r$ is the hypotenuse of a right angled triangle, with $x$ as the adjacent side and $y$ as the opposite side, so we can use SOHCAHTOA to find $x$ and $y$ (using the angle we know).

---

## Convert $(5, \frac13\pi)$ from polar to Cartesian form

+ $x=5\cos\frac13\pi=\frac52$
+ $y=5\sin\frac13\pi=\frac{5\sqrt3}2$
+ $(\frac52, \frac{5\sqrt3}2)$

---

## Cartesian to polar: point

+ To get a Cartesian **point** into polar, we need to find $r$ and $\theta$.
+ $r=\sqrt{x^2+y^2}$ (using Pythagoras' theorem)
+ $\theta=\tan^{-1}\left(y\div x\right)$ (using SOHCAHTOA)
+ We also need to check which quadrant the point is in, to make sure we get the correct value of $\theta$ (as $\tan^{-1}$ only gives us values between $-\frac\pi2$ and $\frac\pi2$)

---

## Convert $(\frac52, \frac{5\sqrt3}2)$ from Cartesian to polar form

+ $r=\sqrt{\left(\frac52\right)^2+\left(\frac{5\sqrt3}2\right)^2}$
+ $=\sqrt{\frac{25}{4}+\frac{75}{4}}=\sqrt{25}=5$
+ $\theta=\tan^{-1}\left(\frac{5\sqrt3}2\div\frac52\right)$
+ $=\tan^{-1}(\sqrt3)=\frac13\pi$ (or $60^\circ$)
+ The quadrant is the upper right, so we don't need to adjust $\theta$.
+ $(5, \frac13\pi)$

---

## Polar to Cartesian: line

+ To convert a **line** from polar to Cartesian form, we use any of our 4 formulas for converting points, and substitute them into the polar line equation.
    + $x=r\cos\theta$
    + $y=r\sin\theta$
    + $r^2=x^2+y^2$
    + $\theta=\tan^{-1}\left(y\div x\right)$
+ Which one you use depends on the form of the polar line equation, and which one is easiest to substitute into it.

---

## Convert $r=2\cos\theta$ from polar to Cartesian form

+ $r^2=\sqrt{x^2+y^2}$
+ $x=r\cos\theta$
+ $r=4\cos\theta$, substitute:
    + $r^2=2r\cos\theta$
    + $x^2+y^2=2x$
+ Rearrange to get $0$ on one side (optional):
    + $x^2-2x+y^2=0$

---

## Cartesian to polar: line

- Just like going the other way, we need to use the four formulas to substitute $x$ and $y$ for our new $r$ and $\theta$ variables.
    - $x=r\cos\theta$
    - $y=r\sin\theta$
    - $r^2=x^2+y^2$
    - $\theta=\tan^{-1}\left(y\div x\right)$

> Going this way round is usually a lot easier

---

## Convert $y=2x+3$ from Cartesian to polar form

+ $x=r\cos\theta$
+ $y=r\sin\theta$
+ $r\sin\theta=2r\cos\theta+3$
+ $r\sin\theta-2r\cos\theta=3$
+ $r(\sin\theta-2\cos\theta)=3$
+ $r=\frac3{\sin\theta-2\cos\theta}$

---

## Tangents at the pole

+ The pole is the origin (where $r=0$).
+ A polar line meets the pole at a tangent **if $r$ changes sign when $\theta$ changes quadrant**.
+ That means that, for example, for a tangent at $\theta=\frac\pi2$, $r$ must be positive for $\theta$ just less than $\frac\pi2$ and negative for $\theta$ just greater than $\frac\pi2$ (or the other way round).
+ $r$ must equal $0$ of course, because the line must go through the pole.

---

## Finding tangents at the pole

- To find the tangents at the pole for a polar line, we can find the values of $\theta$ where $r=0$, then check whether $r$ changes sign when $\theta$ changes quadrant.
- If it does, then the line is a tangent at the pole at that value of $\theta$.

---

## Find the tangents at the pole for $r=2\sin\theta$

- Set $r=0$ to find the values of $\theta$ where the line goes through the pole:
    - $2\sin\theta=0$
    - $\sin\theta=0$
    - $\theta=0,\pi,2\pi$ ($2\pi=0$ with polar coordinates, so we ignore it).)
- Check whether $r$ changes sign when $\theta$ changes quadrant:
    - For $\theta=0$: $2\sin{0-0.01}=-0.02$ (negative) and $2\sin{0+0.01}=0.02$ (positive) -> tangent at $\theta=0$
    - For $\theta=\pi$: $2\sin{\pi-0.01}=0.02$ (positive) and $2\sin{\pi+0.01}=-0.02$ (negative) -> tangent at $\theta=\pi$
- So the tangents at the pole are at $\theta=0$ and $\theta=\pi$.

---

## Minimum and maximum of $r$

+ If we have a polar line equation, we can find the minimum and maximum values of $r$ for $r=f(\theta)$ by finding the minimum and maximum values of $f(\theta)$.
+ We do that with differentiation! This will give us the points the closest to and farthest from the origin.

---

## Differentiating sine and cosine

- In order to do this, you might need to know that:
- $\frac{d}{d\theta}\sin\theta=\cos\theta$
- $\frac{d}{d\theta}\cos\theta=-\sin\theta$
- $\frac{d}{d\theta}-\sin\theta=-\cos\theta$
- $\frac{d}{d\theta}-\cos\theta=\sin\theta$
- I'll keep the examples simple and not require differentiation of trig values here, but you may need to use them in an exam.

---

## Find the minimum value of $r$ for $r=2\theta^2+\pi\theta$

- $\frac{dr}{d\theta}=4\theta+\pi$
- Set $\frac{dr}{d\theta}=0$ to find critical points:
- $4\theta+\pi=0$
- $\theta=-\frac\pi4$
- Substitute back into the original equation to find $r$:
- $r=2\left(-\frac\pi4\right)^2+\pi\left(-\frac\pi4\right)$
- $r=-\frac{\pi^2}{8}$ (minimum value, as the coefficient of $\theta^2$ is positive

---

## Find the minimum and maximum values of $r$ for $r=2\theta^3-3\theta^2+5$

- $\frac{dr}{d\theta}=6\theta^2-6\theta$
- Set $\frac{dr}{d\theta}=0$ to find the angles for the minima and maxima:
    - $6\theta^2-6\theta=0$
    - $6\theta(\theta-1)=0$
    - $\theta=0,1$
- Substitute back into the original equation to find $r$:
    - $r=2(0)^3-3(0)^2+5=5$
    - $r=2(1)^3-3(1)^2+5=4$
- Use the second derivative to find whether they're minima or maxima:
    - $\frac{d^2r}{d\theta^2}=12\theta-6$
    - $\frac{d^2r}{d\theta^2}\text{ at }{\theta=0}=-6$ -> $(0,5)$ is a maximum
    - $\frac{d^2r}{d\theta^2}\text{ at }{\theta=1}=6$ -> $(1,4)$ is a minimum

---

# Complex numbers: Argand diagrams

---

## Why the topic change?

+ We went through some content on complex numbers, but didn't finish and skipped to polar coordinates.
+ That's because the next part - Argand diagrams - has a lot of overlap with polar coordinates.
+ modulus-argument form is very similar to polar form, so it made sense to go through that first :)

---

## What is an Argand diagram?

+ Argand diagrams allow us to represent complex numbers visually, as points on a graph.
+ They use the **horizontal** axis to represent the **real part** of the complex number.
+ The **vertical** axis represents the **imaginary part** of the complex number.
+ For example, the complex number $3+4i$ would be represented as a point 3 along to the right, and 4 up.

---

## Represent $-7+5i$ and $-2-i$ on an Argand diagram

![[res/Pasted image 20260426162959.png]]

---

## Complex conjugate on an Argand diagram

- For any complex number on an Argand diagram, we can represent the *conjugate* of it as the point reflected across the horizontal axis.
- For example, the conjugate of $3+4i$ is $3-4i$, and to translate the point on the diagram, we just reflect it in the horizontal axis (the real axis).

---

## Modulus-argument form

+ Instead of writing a complex number in the form $a+bi$ (which is similar to Cartesian coordinates), we can write it in terms of its *modulus* (distance from the origin) and *argument* (angle from the positive real axis) - sound familiar?
+ It's called modulus-argument form, and it's basically polar coordinates.
- For a complex number $z$, we write:
    + the modulus as $|z|$ or $r$
    + the argument as $\arg z$ or $\theta$

---

## Cartesian to modulus-argument form

+ From polar coordinates, we know that:
    + $x=r\cos\theta$
    + $y=r\sin\theta$
    + $r=\sqrt{x^2+y^2}$
    + $\theta=\tan^{-1}\left(y\div x\right)$
+ From that, we can work out that the modulus-argument form of a complex number $z=x+yi$ is:
    + $z=r(\cos\theta+i\sin\theta)$
    + $z=|z|(\cos\arg z+i\sin\arg z)$

## Calculating modulus

+ The modulus is the distance from the origin.
+ So using pythagoras, we know:
    + $|z|=\sqrt{x^2+y^2}$
+ We already knew that from the polar formulas!

---

## Convert $z=3+4i$ to modulus-argument form

+ $|z|=\sqrt{3^2+4^2}=5$
+ $\arg z=\tan^{-1}\left(4\div3\right)=\tan^{-1}\left(\frac43\right)\approx0.927rad$
+ $z=5(\cos0.927+i\sin0.927)$
+ **We need to check the quadrant**.
    + $0.927<\frac\pi2$, so the point is in the upper right quadrant, which makes sense for $z=3+4i$.
    + We don't need to adjust the quadrant.

---

## Convert the complex number with modulus $5$ and argument $\frac{2\pi}3$ to Cartesian form

+ $z=5(\cos\frac{2\pi}3+i\sin\frac{2\pi}3)$
+ $z=5\left(-\frac12+i\frac{\sqrt3}2\right)$
+ $z=-\frac52+\frac{5\sqrt3}2i$

---

## Loci on an Argand diagram

+ A locus is a set of points which satisfy a certain condition.
+ Basically, it's a curve/line/shape on a graph where an equation or inequality is true.
+ On an Argand diagram, we can have loci which satisfy certain conditions on the complex numbers, usually related to its modulus or argument.

---

## Argument loci from the origin

+ A common locus on an Argand diagram is the set of points where the *argument* (angle) **equal** to a certain value (in radians).
+ We write this as $\arg z=\theta$.
+ This locus is a straight line from the origin, at an angle of $\theta$ to the positive real axis.
+ We call it a *half-line*, because it only goes in one direction from the origin (the other direction would have a different argument, $\pi$ different).
+ For example, $\arg z=\frac\pi4$ is a half-line at a $\frac{\pi}4$ angle to the positive real axis, in the upper right quadrant.

---

## Argument loci from a point

+ We can also have loci where the argument is equal to a certain value, but measured from a different point (not the origin).
+ We'll call this point we start at, $w$.
+ The locus is the set of points $z$ where $\arg(z-w)=\theta$.
+ This is a half-line from the point $w$, at an angle of $\theta$ to the positive real axis.

---

## Modulus loci

+ We can also have loci where the *modulus* (distance from the origin) is equal to a certain value.
+ We write this as $|z|=r$.
+ This locus is a circle (outline) with radius $r$ and centre at the origin.
+ This is because all points which are a distance of $r$ from the origin, will have their modulus as $r$, so the equation is true.
+ Some other related loci are:
    + $|z|<r$: the interior of the circle (all points less than $r$ from the origin)
    + $|z|>r$: the exterior of the circle (all points greater than $r$ from the origin)

---

## Modulus loci from a point

+ We can have the same thing, from a point other than the origin, say, the complex number $w$ again.
+ The locus is the set of points $z$ where $|z-w|=r$, $|z-w|<r$ or $|z-w|>r$.
+ This is a circle with radius $r$ and centre at the point $w$.

---

## Loci summary

| Type of locus | Equation | Shape |
| --- | --- | --- |
| Argument from origin | $\arg z=\theta$ | Half-line from origin at angle $\theta$ |
| Argument from point $w$ | $\arg(z-w)=\theta$ | Half-line from point $w$ at angle $\theta$ |
| Modulus from origin | $\lvert z\rvert=r$ | Circle with radius $r$ and centre at origin |
| Modulus from point $w$ | $\lvert z-w\rvert=r$ | Circle with radius $r$ and centre at point $w$ |

---

## Multiplying complex numbers

+ When multiplying two complex numbers together, the new modulus is the product of the two moduli:
    + $|z||w|=|zw|$
+ The new argument is the sum of the two arguments:
    + $\arg z+\arg w=\arg(zw)$

---

## Dividing complex numbers

+ When dividing two complex numbers, the new modulus is the quotient (division) of the two moduli:
    + $\frac{|z|}{|w|}=\left|\frac zw\right|$
+ The new argument is the difference of the two arguments (subtraction):
    + $\arg z-\arg w=\arg\left(\frac zw\right)$

---

## Horizontal and vertical lines on an Argand diagram

+ A horizontal line on an Argand diagram is a locus where the imaginary part of the complex number is constant, so $Im(z)=k$ (where $k$ is a constant).
+ A vertical line on an Argand diagram is a locus where the real part of the complex number is constant, so $Re(z)=k$ (where $k$ is a constant).
+ $Re(z)$ means the real part of the complex number $z$, and $Im(z)$ means its imaginary part.

---

# Complex equations

---

## Solving complex quadratics

+ The two methods I'd recommend using for solving quadratic equations with complex roots are:
    + Use the quadratic formula, $z=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$.
    + Type it in to the polynomial solver on your calculator :)

---

## Solve $z^2+4z+13=0$

+ $a=1$, $b=4$, $c=13$
+ $z=\frac{-4\pm\sqrt{4^2-4\times1\times13}}{2\times1}$
+ $z=\frac{-4\pm\sqrt{-36}}{2}$
+ $z=\frac{-4\pm6i}{2}$
+ $z=-2\pm3i$

---

## Factorising complex quadratics

+ The first step to factorise a quadratic with complex roots is to solve it.
+ Then we use the factor theorem to write the factors in the form $(z-(\text{root}))$:
    + We know if $z=a$ is a root, then $(z-a)$ is a factor.
+ If the roots to a quadratic are $a$ and $b$ (complex numbers), then the factors are $(z-a)(z-b)$.

---

## Factorise $z^2+4z+13$

+ We already solved this in the previous example, and found the roots to be $-2+3i$ and $-2-3i$.
+ So the factors are:
    + $z-(-2+3i)$
    + $z-(-2-3i)$
+ So the factorised form is:
    + $[z-(-2+3i)][z-(-2-3i)]$
+ If we want, we can simplify it a little bit:
    + $=(z+2-3i)(z+2+3i)$

---

## Solving non-quadratic complex equations

+ For non-quadratic complex equations, we need to:
    + Try to find a real (not complex) root.
    + Use the factor theorem to find one factor of the equation.
    + Use polynomial division to find the other quadratic factor (with complex roots).
    + Solve the quadratic factor using the method we just went through.

---

## Solve $z^3+z^2+z-39=0$

+ Try to find a real root by inspection:
    + $z=3$ is a root, because $3^3+3^2+3-39=0$
+ So $(z-3)$ is a factor by the factor theorem.
+ Use polynomial division to find the other factor:
    + $z^3+z^2+z-39=(z-3)(z^2+4z+13)$
+ Our quadratic factor is $z^2+4z+13$ (the one we've been working with) so the roots are $z=-2+3i$ and $z=-2-3i$.
+ So the three roots of the equation are $z=3$, $z=-2+3i$ and $z=-2-3i$.

---

## Factorise $z^3+z^2+z-39$

+ The solutions to the equation $z^3+z^2+z-39=0$ are $z=3$, $z=-2+3i$ and $z=-2-3i$.
+ Using the factor theorem, we know the 3 roots of the equation are:
    + $z-3$
    + $z-(-2+3i)$
    + $z-(-2-3i)$
+ So the factorised form is:
    + $[z-3][z-(-2+3i)][z-(-2-3i)]$

---

## Complex conjugate solutions

+ If a polynomial has real coefficients, then any complex roots must come in conjugate pairs.
+ That basically means that, if $z=a+bi$ is a root, then $z=a-bi$ must also be a root.
+ This is because the coefficients are real, so when we expand the factors, the imaginary parts must cancel out, which only happens if we have a conjugate pair of roots.
+ If we had a polynomial with complex coefficients, then we wouldn't necessarily have to have conjugate pairs of roots.

---

## $3-7i$ is a root of a quadratic: fully factorise.


- We are told that the coefficients are real.
+ Coefficients are real -> complex roots come in conjugate pairs.
+ The conjugate of $3-7i$ is $3+7i$, so $3+7i$ is also a root of the polynomial.
+ Roots: $3-7i$, $3+7i$
+ By the factor theorem, we can work out the factors:
+ $z-(3-7i)$ and $z-(3+7i)$ are factors
+ So the factorised form is:
    + $[z-(3-7i)][z-(3+7i)]$

---

## Formula for complex factor expansion

+ If we have two complex conjugate roots, $a+bi$ and $a-bi$, then the factors are:
    + $z-(a+bi)$ and $z-(a-bi)$
+ If we expand these factors, we get:
    + $x^2-2ax+(a^2+b^2)$
+ (you don't *have* to know this, but it saves you expanding 9 terms)

---

# Root-coefficient relationships

---

## Standard results for the roots and coefficients of polynomials


+ It turns out that there are some links between the roots of a polynomial and its coefficients, which we can use to find the roots without solving the equation.
+ There are (very long) proofs which explain these relationships, but, as much as proof is important, if you can memorise the results, you should be good.

---

## Quadratic polynomials

For a quadratic polynomial $ax^2+bx+c=0$ with roots $p$ and $q$:

| Relationship | Root expression | Result |
| --- | --- | --- |
| Sum of roots | $p+q$ | $-\frac ba$ |
| Product of roots | $pq$ | $\frac ca$ |

---

## Cubic polynomials

For a cubic polynomial $ax^3+bx^2+cx+d=0$ with roots $p$, $q$ and $r$:

| Relationship | Root expression | Result |
| --- | --- | --- |
| Sum of roots | $p+q+r$ | $-\frac ba$ |
| Sum of products of roots taken two at a time | $pq + pr + qr$ | $\frac ca$ |
| Product of roots | $pqr$ | $-\frac da$ |

---

## Quartic polynomials


For a quartic polynomial $ax^4+bx^3+cx^2+dx+e=0$ (degree 4) with roots $p$, $q$, $r$ and $s$:

| Relationship | Root expression | Result |
| --- | --- | --- |
| Sum of roots | $p+q+r+s$ | $-\frac ba$ |
| Sum of products of roots taken two at a time | $pq + pr + ps + qr + qs + rs$ | $\frac ca$ |
| Sum of products of roots taken three at a time | $pqr+pqs+prs+qrs$ | $-\frac da$ |
| Product of roots | $pqrs$ | $\frac ea$ |

---

## The pattern

- From the quartic polynomials, you might be able to see:
    - The sum of the roots is $-\frac ba$ - always.
    - We then go to the sum of roots taken two at a time (if applicable), then three at a time (if applicable), etc. - the sign alternates each time, and the coefficient is the next one along in the polynomial (next letter in the alphabet).
    - We continue this pattern for the number of roots we have, and the last one is the product of all the roots, which has the coefficient of the last term in the polynomial (the constant term).

---

## Find the sum of roots of $5w^3-2w^2+7=0$

+ $a=5$, $b=-2$, $c=0$, $d=7$
+ The sum of the roots is:
    + $-\frac ba$
    + $-\frac{-2}{5}$
    + $\frac25$

---

## Find the product of roots of $2z^4+3z^3-5z^2+7z-11=0$

+ $a=2$, $b=3$, $c=-5$, $d=7$, $e=-11$
+ The product of the roots is:
    + $\frac ea$
    + $\frac{-11}{2}$
    + $-\frac{11}{2}$

## Find the sum of products of roots taken two at a time for $z^3-4z^2+5z-2=0$

+ $a=1$, $b=-4$, $c=5$, $d=-2$
+ Sum of products of roots taken two at a time is:
    + $\frac ca$
    + $\frac5{1}$
    + $5$

---

## Find the sum of products of roots taken three at a time for $z^4+2z^3-3z^2+4z-5=0$

+ $a=1$, $b=2$, $c=-3$, $d=4$, $e=-5$
+ Sum of products of roots taken three at a time is:
    + $-\frac da$
    + $-\frac4{1}$
    + $-4$

---

## Find the sum of roots of $z^4-3z^3+5z^2-7z+11=0$

+ $a=1$, $b=-3$, $c=5$, $d=-7$, $e=11$
+ The sum of the roots is:
    + $-\frac ba$
    + $-\frac{-3}{1}$
    + $3$

---

## Deriving other relations

+ Sometimes you might not be asked to find the sum or product of the roots, but some other relationship between the roots which you can't do from a simple formula.
+ To solve these, we need to use the formulae we *do* know to derive the one we *don't*.
+ Let's try some examples.

---

## Find $p^2+q^2$ for the roots of $z^2-5z+6=0$

+ $a=1$, $b=-5$, $c=6$
+ $(p+q)^2=p^2+2pq+q^2$: we have a $2pq$ we don't want.
+ $p^2+q^2=(p+q)^2-2pq$
+ We know that:
    + $p+q=-\frac ba=-\frac{-5}{1}=5$
    + $pq=\frac ca=\frac6{1}=6$
+ So $p^2+q^2=5^2-2(6)=25-12=13$

---

## Find $p^3+q^3$ for the roots of $z^2-5z+6=0$

+ $a=1$, $b=-5$, $c=6$
+ $(p+q)^3=p^3+q^3+3p^2q+3pq^2$: we have $3p^2q$ and $3pq^2$ we don't want.
+ $p^3+q^3=(p+q)^3-3p^2q-3pq^2$
+ $p^3+q^3=(p+q)^3-3pq(p+q)$
+ We know that:
    + $p+q=-\frac ba=-\frac{-5}{1}=5$
    + $pq=\frac ca=\frac6{1}=6$
+ So $p^3+q^3=5^3-3(6)(5)=125-90=35$

---

## Find $\frac1p+\frac1q$ for the roots of $z^2-5z+6=0$

+ $a=1$, $b=-5$, $c=6$
+ $\frac1p+\frac1q=\frac q{pq}+\frac p{pq}=\frac{p+q}{pq}$
+ We know that:
    + $p+q=-\frac ba=-\frac{-5}{1}=5$
    + $pq=\frac ca=\frac6{1}=6$
+ So $\frac1p+\frac1q=\frac56$

---

## Find $\frac1p+\frac1q+\frac1r+\frac1s$ for the roots of $z^4-3z^3+5z^2-7z+11=0$

+ $a=1$, $b=-3$, $c=5$, $d=-7$, $e=11$
+ $\frac1p+\frac1q+\frac1r+\frac1s=\frac{qrs}{pqrs}+\frac{prs}{pqrs}+\frac{pqs}{pqrs}+\frac{pqr}{pqrs}$
+ $\frac1p+\frac1q+\frac1r+\frac1s=\frac{pqr+pq s+pr s+qrs}{pqrs}$
+ We know that:
    + $pqr+pq s+pr s+qrs=-\frac da=-\frac{-7}{1}=7$
    + $pqrs=\frac ea=\frac{11}{1}=11$
+ So $\frac1p+\frac1q+\frac1r+\frac1s=\frac{7}{11}$

---

## Finding coefficients from roots

+ So far we've found the roots while knowing the coefficients - how do we go the other way?
+ We can just use the same relationships, but rearranged to find the coefficients instead of the roots.

---

## $2+3i$ is a root, find the quadratic

- The coefficients are real.
+ The coefficients are real, so the conjugate $2-3i$ is also a root.
+ Roots: $2+3i$, $2-3i$
+ Sum of roots: $2+3i+2-3i=4$
+ Product of roots: $(2+3i)(2-3i)=4+9=13$
+ We know that $p+q=-\frac ba$ and $pq=\frac ca$
+ We can choose any value for $a$ (except $0$), so I'll choose $a=1$ for simplicity.
+ So $-\frac ba=4$ and $\frac ca=13$, solve simultaneously.
+ Then $b=-4$ and $c=13$.
+ So the quadratic is $z^2-4z+13=0$.

---

## $1+2i$ and $-1$ are roots, find the cubic

- The coefficients are real.
+ The coefficients are real, so the conjugate $1-2i$ is also a root.
+ Roots: $1+2i$, $1-2i$, $-1$
+ Sum of roots: $1+2i+1-2i-1=1$
+ Sum of products of roots taken two at a time: $(1+2i)(1-2i)+(1+2i)(-1)+(1-2i)(-1)$ $=5-1-1=3$
+ Product of roots: $(1+2i)(1-2i)(-1)=-5$
+ We know that $p+q+r=-\frac ba$, $pq+pr+qr=\frac ca$ and $pqr=-\frac da$, let $a=1$
+ So $-\frac ba=1$, $\frac ca=3$ and $-\frac da=-5$, solve simultaneously.
+ Then $b=-1$, $c=3$ and $d=-5$.
+ The cubic is $z^3-z^2+3z-5=0

---

%% ## Roots of transformations

- If we know the old roots of a polynomial, we can find the new roots after a transformation.

---

## A polynomial has roots $p$ and $q$ - find a polynomial with roots $2p$ and $2q$

+ Our old roots are $p$ and $q$, so the factorised quadratic is $(z-p)(z-q)$: factor theorem.
+ The new roots are $2p$ and $2q$, so the new factorised quadratic is $(z-2p)(z-2q)$.
+ That then means that the new quadratic is $z^2-2(p+q)z+4pq=0$.

---

## The equation $5x^3-4x^2+3x+6=0$ has roots $p$, $q$ and $r$. Find the equation with roots $p-1$, $q-1$ and $r-1$.


+ The old roots are $p$, $q$ and $r$, so the factorised cubic is $(z-p)(z-q)(z-r)$.
+ The new roots are $p-1$, $q-1$ and $r-1$, so the new factorised cubic is $(z-(p-1))(z-(q-1))(z-(r-1))$.
+ That then means that the new cubic is $z^3-(p+q+r-3)z^2+(pq+pr+qr-(p+q+r)+3)z-(pqr-(pq+pr+qr)+(p+q+r)-1)=0$.
+ We know that $p+q+r=-\frac ba=-\frac{-4}{5}=\frac45$, $pq+pr+qr=\frac ca=\frac3{5}$ and $pqr=-\frac da=-\frac6{5}$, so substitute those in:
    + $z^3-\left(\frac45-3\right)z^2+\left(\frac3{5}-\frac45+3\right)z-\left(-\frac6{5}-\frac3{5}+\frac45-1\right)=0$
    + $z^3-\left(-\frac{11}{5}\right)z^2+\left(\frac{22}{5}\right)z-\left(-\frac{14}{5}\right)=0$
    + $z^3+\frac{11}{5}z^2+\frac{22}{5}z+\frac{14}{5}=0$
+ $5z^3+11z^2+22z+14=0$

## Find the equation with roots $\frac1p$, $\frac1q$ and $\frac1r$ for the roots of $z^3-4z^2+5z-2=0$


+ The old roots are $p$, $q$ and $r$, so the factorised cubic is $(z-p)(z-q)(z-r)$.
+ The new roots are $\frac1p$, $\frac1q$ and $\frac1r$, so the new factorised cubic is $\left(z-\frac1p\right)\left(z-\frac1q\right)\left(z-\frac1r\right)$.
+ That then means that the new cubic is $z^3-\left(\frac1p+\frac1q+\frac1r\right)z^2+\left(\frac1{pq}+\frac1{pr}+\frac1{qr}\right)z-\frac1{pqr}=0$.
+ We know that $p+q+r=-\frac ba=-\frac{-4}{1}=4$, $pq+pr+qr=\frac ca=\frac5{1}=5$ and $pqr=-\frac da=-\frac{-2}{1}=2$, so substitute those in:
    + $z^3-\left(\frac{pq+pr+qr}{pqr}\right)z^2+\left(\frac{p+q+r}{pqr}\right)z-\frac1{pqr}=0$
    + $z^3-\left(\frac5{2}\right)z^2+\left(\frac42\right)z-\frac12=0$
    + $z^3-\frac52z^2+2z-\frac12=0$
+ $2z^3-5z^2+4z-1=0$

---

## Find the equation with roots $p-2$, $q-2$ and $r-2$ for the roots of $3x^2-x^2+2x+5=0$ 

+ The old roots are $p$, $q$ and $r$, so the factorised cubic is $(z-p)(z-q)(z-r)$.
+ The new roots are $p-2$, $q-2$ and $r-2$, so the new factorised cubic is $(z-(p-2))(z-(q-2))(z-(r-2))$.
+ That then means that the new cubic is $z^3-(p+q+r-6)z^2+(pq+pr+qr-(p+q+r)+12)z-(pqr-(pq+pr+qr)+(p+q+r)-8)=0$.
+ We know that $p+q+r=-\frac ba=-\frac{-1}{3}=\frac13$, $pq+pr+qr=\frac ca=\frac2{3}$ and $pqr=-\frac da=-\frac5{3}$, so substitute those in:
    + $z^3-\left(\frac13-6\right)z^2+\left(\frac2{3}-\frac13+12\right)z-\left(-\frac5{3}-\frac2{3}+\frac13-8\right)=0$
    + $z^3-\left(-\frac{17}{3}\right)z^2+\left(\frac{35}{3}\right)z-\left(-\frac{61}{3}\right)=0$
    + $z^3+\frac{17}{3}z^2+\frac{35}{3}z+\frac{61}{3}=0$
+ $3z^3+17z^2+35z+61=0$

--- REMAKE AS SOME QUESTIONS INCORRECT ---

%%

---

# Inequalities

---

## Solving quadratic inequalities

+ To solve a quadratic inequality, we need to do a few steps:
    + Rearrange the inequality so that one side is $0$.
    + Factorise the quadratic expression (if possible).
    + Find the *critical points* (where the expression equals $0$).
    + Sketch a graph of the quadratic to determine which regions satisfy the inequality.
+ You probably already know how to do this, but it's helpful to recap as we'll be doing it for cubics as well.

---

## Solve $x^2-5x<-6$

+ Rearrange: $x^2-5x+6<0$
+ Factorise: $(x-2)(x-3)<0$
+ Critical points: $x=2$, $x=3$
+ If we imagine the graph of $y=(x-2)(x-3)$:
    + It's a parabola opening upwards (because the coefficient of $x^2$ is positive).
    + It crosses the $x$-axis at $x=2$ and $x=3$.
    + We want to find the region where the graph is below the $x$-axis (where $y<0$).
    + That region will be *in between* the two critical points, so the solution is $2<x<3$.

---

## Solving cubic inequalities

+ We can't easily factorise a cubic expression without knowing a factor.
+ If we're not given a factor or root, try to find one by inspection (guess and check if it makes the expression equal to $0$).
+ Once we have a root, use the factor theorem to find a factor ($x-\text{root}$) and then use polynomial division to find the other quadratic factor - factorise that.
+ Then we can find the critical points by setting each factor equal to $0$.
+ Finally, we can sketch the graph of the cubic to find which regions satisfy the inequality.

---

## Solve $x^3-6x^2+11x-6>0$

+ Try to find a root by inspection:
    + $x=1$ is a root, because $1^3-6(1)^2+11(1)-6=0$
+ So $(x-1)$ is a factor by the factor theorem.
+ Use polynomial division to find the other factor:
    + $x^3-6x^2+11x-6=(x-1)(x^2-5x+6)$
+ Factorise the quadratic factor:
    + $x^2-5x+6=(x-2)(x-3)$
+ So the full factorisation is:
    + $(x-1)(x-2)(x-3)$
+ Critical points: $x=1$, $x=2$, $x=3$
+ Sketch the graph:
+ !res/Pasted image 20260426205114.png
+ The graph is above the $x$-axis (where $y>0$) when:
    + $1<x<2$ or $x>3$

---

# Rational functions

---

## What are rational functions?

+ A rational function is a function which can be written as a *ratio* (fraction with a numerator and denominator) of two polynomials.
+ For example, $\frac{2x^2+3}{x-1}$ is a rational function, because the numerator is a polynomial ($2x^2+3$) and the denominator is a polynomial ($x-1$).

---

## $y=\frac{ax+b}{cx+d}$

Any function which is in the form of $y=\frac{ax+b}{cx+d}$ is a translation of the *hyperbola*, $y=\frac1x$, which looks like:

!res/Pasted image 20260426210342.png

---

## Translations of $y=\frac1x$

+ If we want to translate the hyperbola $y=\frac1x$ by, say, $(h,k)$, we can do that by replacing $x$ with $x-h$ and $y$ with $y-k$.
+ So the translated function would be $y-k=\frac1{x-h}$, which we can rearrange to $y=\frac1{x-h}+k$.
+ This is the same as $y=\frac{1+k(x-h)}{x-h}$, which is in the form of $y=\frac{ax+b}{cx+d}$:
    + $y=\frac{1+kx-kh}{x-h}$
    + $y=\frac{kx+(1-kh)}{x-h}$

---

## Find the equation of the translation of $y=\frac1x$ by $(2,3)$

+ We can use the formula we just derived for translations of $y=\frac1x$:
    + $y=\frac1{x-h}+k$
+ Substitute $h=2$ and $k=3$:
    + $y=\frac1{x-2}+3$
+ Rearrange to the form of $y=\frac{ax+b}{cx+d}$:
    + $y=\frac1{x-2}+3$
    + $y=\frac{1+3(x-2)}{x-2}$
    + $y=\frac{3x-5}{x-2}$
+ So the equation of the translation is $y=\frac{3x-5}{x-2}$.

---

## Find the translations of $y=\frac1x$ for $y=\frac{2x+3}{x-1}$

+ We can rearrange $y=\frac{2x+3}{x-1}$ to the form of $y=\frac1{x-h}+k$:
    + $y=\frac{2x+3}{x-1}$
    + $y=\frac{2(x-1)+5}{x-1}$
    + $y=2+\frac5{x-1}$
    + $y=\frac5{x-1}+2$
+ So the translations are $h=1$ and $k=2$, so the function is a translation of $y=\frac1x$ by $(1,2)$.

---

## What are asymptotes?

+ An *asymptote* is a line that a curve gets closer and closer to, but never actually touches. It *approaches* it.
+ There are three types of asymptotes:
    + Vertical asymptotes: where the function goes to infinity as $x$ approaches a certain value, and the gradient approaches $\pm$infinity.
    + Horizontal asymptotes: where the function approaches a certain value as $x$ goes to $\pm$infinity, and the gradient approaches $0$.
    + Oblique (slanted) asymptotes: where the function approaches a line that is not horizontal or vertical as $x$ and $y$ goes to $\pm$infinity.

---

## Asymptotes of $y=\frac1x$

+ Vertical asymptote: $x=0$ (the $y$-axis), because as $x$ approaches $0$, $y$ goes to $\pm$infinity.
+ Horizontal asymptote: $y=0$ (the $x$-axis), because as $x$ goes to $\pm$infinity, $y$ approaches $0$.

---

## Roots of $\frac{ax+b}{cx+d}=0$

+ The solutions of $y=\frac{ax+b}{cx+d}$ are the values of $x$ for which $y=0$.
+ If the numerator is $0$, the function is $0$, so we set $ax+b=0$ and solve for $x$ to find the solutions:
    + $ax+b=0$
    + $ax=-b$
    + $x=-\frac ba$
+ So the root of $y=\frac{ax+b}{cx+d}$ is $x=-\frac ba$.

---

## Y-intercept of $y=\frac{ax+b}{cx+d}$

+ The y=intercept of *any* line or curve is the point where $x=0$.
+ In this case, when $x=0$:
    + $y=\frac{a(0)+b}{c(0)+d}$
    + $y=\frac b{d}$
+ So the y-intercept of $y=\frac{ax+b}{cx+d}$ is $\frac b{d}$.

---

## Vertical asymptote of $y=\frac{ax+b}{cx+d}$

+ The vertical asymptote occurs where the denominator is $0$, because the function goes to infinity there.
+ So we set $cx+d=0$ and solve for $x$ to find the vertical asymptote:
    + $cx+d=0$
    + $cx=-d$
    + $x=-\frac dc$
+ So the vertical asymptote of $y=\frac{ax+b}{cx+d}$ is $x=-\frac dc$.

---

## Horizontal asymptote of $y=\frac{ax+b}{cx+d}$

+ The horizontal asymptote occurs where the function approaches a certain value as $x$ goes to $\pm$infinity.
+ To find the horizontal asymptote, we can divide the numerator and denominator by $x$:
    + $y=\frac{ax+b}{cx+d}$
    + $y=\frac{a+\frac b{x}}{c+\frac d{x}}$
+ As $x$ goes to $\pm$infinity, $\frac b{x}$ and $\frac d{x}$ go to $0$, so the function approaches $\frac ac$.
+ So the horizontal asymptote of $y=\frac{ax+b}{cx+d}$ is $y=\frac ac$.

---

## $y=\frac{ax+b}{cx+d}$ summary

| Feature              | Value         |
| -------------------- | ------------- |
| Root                 | $x=-\frac ba$ |
| Y-intercept          | $\frac b{d}$  |
| Vertical asymptote   | $x=-\frac dc$ |
| Horizontal asymptote | $y=\frac ac$  |

---

## Solving rational inequalities

+ If we want to solve an inequalities involving a fraction, like $\frac{ax+b}{cx+d}<5$, then we need to do things a little bit differently.
+ We can't just multiply by the denominator, $cx+d$, because it could be negative (for values of $x$). Remember when we multiply an inequality by a negative value, the sign flips.
+ Instead, we need to multiply by $(cx+d)^2$, which is always positive.

TODO: examples

---

## Roots of $y=\frac{ax^2+bx+c}{dx^2+ex+f}$

+ We've gone from rational functions with linear numerators and denominators, to rational functions with quadratic numerators and denominators.
+ The roots of $y=\frac{ax^2+bx+c}{dx^2+ex+f}$ are the values of $x$ for which $y=0$.
+ If the numerator is $0$, the function is $0$, so we set $ax^2+bx+c=0$ and solve for $x$ to find the solutions:
    + $ax^2+bx+c=0$
    + Use any method you like to solve this quadratic - they're the roots.
+ So the roots of $y=\frac{ax^2+bx+c}{dx^2+ex+f}$ are the roots of $ax^2+bx+c=0$.

---

## Y-intercept of $y=\frac{ax^2+bx+c}{dx^2+ex+f}$

+ The y-intercept is when $x=0$:
    + $y=\frac{a(0)^2+b(0)+c}{d(0)^2+e(0)+f}$
    + $y=\frac cf$
+ So the y-intercept of $y=\frac{ax^2+bx+c}{dx^2+ex+f}$ is $\frac cf$.

---

## Vertical asymptotes of $y=\frac{ax^2+bx+c}{dx^2+ex+f}$

+ The vertical asymptotes occur where the denominator is $0$, because the function goes to infinity there.
+ So we set $dx^2+ex+f=0$ and solve for $x$ to find the vertical asymptotes:
    + $dx^2+ex+f=0$
    + Use any method you like to solve this quadratic - they're the vertical asymptotes.
+ So the vertical asymptotes of $y=\frac{ax^2+bx+c}{dx^2+ex+f}$ are the roots of $dx^2+ex+f=0$.

---

## Horizontal asymptote of $y=\frac{ax^2+bx+c}{dx^2+ex+f}$

+ The horizontal asymptote occurs where the function approaches a certain value as $x$ goes to $\pm$infinity.
+ As $x$ approaches infinity, the highest degree terms dominate, so we can approximate the function as $y\approx\frac{ax^2}{dx^2}=\frac ad$.
+ So the horizontal asymptote of $y=\frac{ax^2+bx+c}{dx^2+ex+f}$ is $y=\frac ad$.

---

## $y=\frac{ax^2+bx+c}{dx^2+ex+f}$ summary

| Feature               | Value                  |
| --------------------- | ---------------------- |
| Root(s)               | Roots of $ax^2+bx+c=0$ |
| Y-intercept           | $\frac cf$             |
| Vertical asymptote(s) | Roots of $dx^2+ex+f=0$ |
| Horizontal asymptote  | $y=\frac ad$           |

---

## State all intercepts and asymptotes of $y=\frac{x^2+5x+6}{4x^2-4}$

+ Roots are where $x^2+5x+6=0$:
    + $(x+2)(x+3)=0$
    + $x=-2$, $x=-3$
+ Y-intercept is when $x=0$:
    + $y=\frac{0^2+5(0)+6}{4(0)^2-4}$
    + $y=\frac6{-4}$
    + $y=-\frac32$
+ Vertical asymptotes are where $4x^2-4=0$:
    + $4(x^2-1)=0$
    + $x^2-1=0$
    + $(x-1)(x+1)=0$
    + $x=-1$, $x=1$
+ Horizontal asymptote is $y=\frac ad=\frac14$

---

## Find the roots, y-intercept and asymptotes of $y=\frac{2x^2+3x+1}{x^2-x-6}$

+ Roots are where $2x^2+3x+1=0$:
    + $(2x+1)(x+1)=0$
    + $x=-\frac12$, $x=-1$
+ Y-intercept is when $x=0$:
    + $y=\frac{2(0)^2+3(0)+1}{(0)^2-(0)-6}$
    + $y=\frac1{-6}$
    + $y=-\frac16$
+ Vertical asymptotes are where $x^2-x-6=0$:
    + $(x-3)(x+2)=0$
    + $x=-2$, $x=3$
+ Horizontal asymptote is $y=\frac ad=\frac2{1}=2$

---

## Find the range of values for $k$ where $y=k$ intersects with $y=\frac{2x^2+3x+1}{x^2-x-6}$ at no points

+ We want to find the values of $k$ so that $\frac{2x^2+3x+1}{x^2-x-6}=k$ has no solutions.
+ Rearranging gives $2x^2+3x+1=k(x^2-x-6)$
+ $2x^2+3x+1=kx^2-kx-6k$
+ $2x^2+3x+1-kx^2+kx+6k=0$
+ $(2-k)x^2+(3+k)x+(1+6k)=0$
+ For this quadratic to have no solutions, the discriminant needs to be $<0$:
    + $(3+k)^2-4(2-k)(1+6k)<0$

TODO make better example

---

# Hyperbolic functions

---
``
## Hyperbolic trigonometry

+ We have our normal $\sin$, $\arcsin$, $\cos$, $\arccos$, $\tan$ and $\arctan$ functions.
+ We also have some 'hyperbolic' variants, which we can express in terms of exponentials, and $e$.
+ They are:
    + $\sinh$ and $\operatorname{arcsinh}$
    + $\cosh$ and $\operatorname{arccosh}$
    + $\tanh$ and $\operatorname{arctanh}$

---

## $\sinh$

> $\sinh x=\frac{e^x-e^{-x}}{2}$

+ $\sinh(5)=\frac{e^5-e^{-5}}{2}\approx 74.2$
+ $\sinh(-2)=\frac{e^{-2}-e^2}{2}\approx -3.6$

---

## $\cosh$

> $\cosh x=\frac{e^x+e^{-x}}{2}$

+ $\cosh(5)=\frac{e^5+e^{-5}}{2}\approx 74.2$
+ $\cosh(-2)=\frac{e^{-2}+e^2}{2}\approx 3.6$

---

## $\tanh$

> $\tanh x=\frac{\sinh x}{\cosh x}=\frac{e^x-e^{-x}}{e^x+e^{-x}}$


+ $\tanh(2)=\frac{\sinh(2)}{\cosh(2)}=\frac{e^2-e^{-2}}{e^2+e^{-2}}\approx 0.96$
+ $\tanh(-3)=\frac{\sinh(-3)}{\cosh(-3)}=\frac{e^{-3}-e^3}{e^{-3}+e^3}\approx -0.995$
+ $\tanh(0)=\frac{\sinh(0)}{\cosh(0)}=\frac{e^0-e^{-0}}{e^0+e^{-0}}=0$

---

## Standard hyperbolic trig results

+ $\cosh0=1$
+ $\sinh0=0$
+ $\tanh0=0$

---

## Graph of $\sinh x$

!res/Pasted image 20260428110057.png

---

## Graph of $\cosh x$

!res/Pasted image 20260428110147.png

---

## Graph of $\tanh x$

!res/Pasted image 20260428110254.png

---

## Identities

+ These give us some standard results relating the different functions, that are always true.
+ $\cosh^2 x-\sinh^2 x\equiv 1$
+ $\tanh x=\frac{\sinh x}{\cosh x}=\frac{e^x-e^{-x}}{e^x+e^{-x}}$

---

## Proving $\cosh^2 x-\sinh^2 x\equiv 1$

+ We know that $\sinh x=\frac{e^x-e^{-x}}{2}$ and $\cosh x=\frac{e^x+e^{-x}}{2}$, so we can substitute those in:
    + $\cosh^2 x-\sinh^2 x=\left(\frac{e^x+e^{-x}}{2}\right)^2-\left(\frac{e^x-e^{-x}}{2}\right)^2$
    + $\cosh^2 x-\sinh^2 x=\frac{(e^x+e^{-x})^2}{4}-\frac{(e^x-e^{-x})^2}{4}$
    + $\cosh^2 x-\sinh^2 x=\frac{(e^x+e^{-x})^2-(e^x-e^{-x})^2}{4}$
    + $\cosh^2 x-\sinh^2 x=\frac{(e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})}{4}$
    + $\cosh^2 x-\sinh^2 x=\frac4{4}=1$

---

## Inverse hyperbolic trigonometry

+ With normal trig, we have $\sin$, for example, but also it's *inverse*, which is $\arcsin$ (or sometimes $\sin^{-1}$).
+ Hyperbolic trig functions also have this. We have:
    + $\operatorname{arsinh}$, which is the inverse of $\sinh$.
    + $\operatorname{arcosh}$, which is the inverse of $\cosh$.
    + $\operatorname{artanh}$, which is the inverse of $\tanh$

---

## $\operatorname{arsinh}$

> $\operatorname{arsinh} x=\ln\left(x+\sqrt{x^2+1}\right)$

+ $\operatorname{arsinh}(5)=\ln\left(5+\sqrt{5^2+1}\right)\approx 2.3$
+ $\operatorname{arsinh}(-2)=\ln\left(-2+\sqrt{(-2)^2+1}\right)\approx -1.44$
+ $\operatorname{arsinh}(0)=\ln\left(0+\sqrt{0^2+1}\right)=\ln(1)=0$

---

## $\operatorname{arcosh}$

> $\operatorname{arcosh} x=\ln\left(x+\sqrt{x^2-1}\right)$

+ $\operatorname{arcosh}(5)=\ln\left(5+\sqrt{5^2-1}\right)\approx 2.3$
+ $\operatorname{arcosh}(2)=\ln\left(2+\sqrt{2^2-1}\right)\approx 1.32$
+ $\operatorname{arcosh}(1)=\ln\left(1+\sqrt{1^2-1}\right)=\ln(1)=0$

---

## $\operatorname{artanh}$

> $\operatorname{artanh} x=\frac12\ln\left(\frac{1+x}{1-x}\right)$  

+ $\operatorname{artanh}(0.5)=\frac12\ln\left(\frac{1+0.5}{1-0.5}\right)\approx 0.55$
+ $\operatorname{artanh}(-0.5)=\frac12\ln\left(\frac{1-0.5}{1+0.5}\right)\approx -0.55$
+ $\operatorname{artanh}(0)=\frac12\ln\left(\frac{1+0}{1-0}\right)=\frac12\ln(1)=0$

---

## Prove that $\operatorname{arsinh}=\ln\left(x+\sqrt{x^2+1}\right)$

+ Let $y=\operatorname{arsinh} x$, so $\sinh y=x$.
+ We know that $\sinh y=\frac{e^y-e^{-y}}{2}$, so:
    + $\frac{e^y-e^{-y}}{2}=x$.
    + $e^y-e^{-y}=2x$
    + $e^{2y}-1=2xe^y$
    + $e^{2y}-2xe^y-1=0$
+ Let $z=e^y$, so we have $z^2-2xz-1=0$ (disguised quadratic).
+ Use the quadratic formula to solve for $z$:
    + $z=\frac{2x\pm\sqrt{(2x)^2-4(-1)}}{2}$
    + $z=x\pm\sqrt{x^2+1}$
+ We know that $z=e^y>0$, so we take the positive root:
    + $z=x+\sqrt{x^2+1}$
    + $e^y=x+\sqrt{x^2+1}$
    + $y=\ln\left(x+\sqrt{x^2+1}\right)$
+ So $\operatorname{arsinh} x=\ln\left(x+\sqrt{x^2+1}\right)$.

---

## Solve $2\sinh x+\cosh^2x=9$

+ Rearrange $\sinh^2-\cosh^2=1$ into $\cosh^2x=\sinh^2x+1$.
+ Substitute that into $\cosh^2x$, then rearrange:
    + $2\sinh x+\sinh^2x+1=9$
    + $\sinh^2x+2\sinh x-8=0$
+ Factorise to solve for $\sinh x$:
    + $(\sinh x+4)(\sinh x-2)=0$
    + $\sinh x=-4$ or $\sinh x=2$
+ Use $\operatorname{arsinh}$ to solve for $x$:
    + If $\sinh x=-4$, then $x=\operatorname{arsinh}(-4)=\ln\left(-4+\sqrt{(-4)^2+1}\right)\approx -2.1$
    + If $\sinh x=2$, then $x=\operatorname{arsinh}(2)=\ln\left(2+\sqrt{2^2+1}\right)\approx 1.44$
+ $x\approx -2.1$ or $x\approx 1.44$

---

## How to solve hyperbolic trig equations

- **Use the exponential forms!**
- You can usually solve a trig equation by just writing out its exponential form, then solving for $e^x$.
- When you have $e^x$, take the natural logarithm to find $x$.
+ Or, rearrange / substitute to try to find an identity (e.g. divide a $\sinh$ by a $\cosh$ to get $\tanh$)

---

# Vectors

---

## Position vectors

+ We can describe a point in 2D or 3D space using a vector.
+ For example, $\begin{pmatrix}2\\3\end{pmatrix}$ describes the point $(2,3)$ - where $x=2$ and $y=3$ - in 2D.
+ In 3D, $\begin{pmatrix}1\\-2\\4\end{pmatrix}$ describes the point $(1,-2,4)$.

---

## Direction vectors

+ A *direction vector* can represent which direction something, e.g. a line, is moving/pointing.
+ It basically says "for every unit you move along, increase $x$ by this much, increase $y$ by this much, and increase $z$ by this much".
+ For example, $\begin{pmatrix}2\\3\end{pmatrix}$ means "for every 2 you move in the $x$ direction, move 3 in the $y$ direction".
+ $\begin{pmatrix}1\\-2\\4\end{pmatrix}$ means "for every 1 you move in the $x$ direction, move -2 in the $y$ direction, and move 4 in the $z$ direction".
+ We can multiply a direction vector by a scalar to get a new direction vector that points in the same direction (because we're just scaling it up or down), so $\begin{pmatrix}2\\3\end{pmatrix}$ and $\begin{pmatrix}4\\6\end{pmatrix}$ point in the same direction, because $\begin{pmatrix}4\\6\end{pmatrix}=2\begin{pmatrix}2\\3\end{pmatrix}$.)

---

## Vector line equation

+ If you think about the properties of a line, we can describe it with just two things:
    + The direction the line travels (e.g. with a direction vector)
    + Any single point on the line (e.g. using a position vector)
+ We can use that to write the equation of a line in vector form:
    + $\overline r=\overline a+\lambda\overline d$
    + $\overline r$ is the position vector of any point on the line (think of it a bit like 'y' in $y=mx+c$)
    + $\overline a$ is the position vector of a specific point on the line.
    + $\overline d$ is the direction vector of the line.
    + $\lambda$ is a scalar that we can change to get different points on the line. Think of it a bit like 'x' in $y=mx+c$ - it controls how far along the line we go.

---

## A different way of writing vectors

+ Instead of writing a 2D vector as, say, $\begin{pmatrix}2\\3\end{pmatrix}$, we can write it as $2i+3j$.
+ In 3D, we can write $\begin{pmatrix}1\\-2\\4\end{pmatrix}$ as $1i-2j+4k$.
+ $i$, $j$ and $k$ are just symbols that we use to represent the 'unit' vectors, in each direction:
    + $i=\pmatrix{1\\0\\0}$, $j=\pmatrix{0\\1\\0}$, $k=\pmatrix{0\\0\\1}$ (for 3D)
+ That shows we can just write $\pmatrix{4\\6\\8}$ as $4i+6j+8k$.

---

## Parallel vector lines

+ We know that parallel lines are two lines which have the same gradient, in 2D form.
+ We can generalise this to 'any lines which point in the same direction'.
+ So if two lines have the same direction vector, then they are parallel.
+ Also, if one direction vector is a *multiple* of the other, then they are parallel, because they point in the same direction.

---

### Find the equation of the line parallel to $\overline r=\begin{pmatrix}1\\2\end{pmatrix}+\lambda\begin{pmatrix}3\\4\end{pmatrix}$ and passing through $(5,6)$

+ Direction vector = $\begin{pmatrix}3\\4\end{pmatrix}$
+ Position vector = $\begin{pmatrix}5\\6\end{pmatrix}$
+ $\overline r=\begin{pmatrix}5\\6\end{pmatrix}+\lambda\begin{pmatrix}3\\4\end{pmatrix}$
+ This is so much simpler than doing the same using $y=mx+c$!

---

### Find the equation of the line parallel to $\overline r=\begin{pmatrix}1\\2\\4\end{pmatrix}+\lambda\begin{pmatrix}3\\4\\5\end{pmatrix}$ and passing through $(5,6,7)$

+ Direction vector = $\begin{pmatrix}3\\4\\5\end{pmatrix}$
+ Position vector = $\begin{pmatrix}5\\6\\7\end{pmatrix}$
+ $\overline r=\begin{pmatrix}5\\6\\7\end{pmatrix}+\lambda\begin{pmatrix}3\\4\\5\end{pmatrix}$

---

## Calculating direction vectors

+ If we are **not** given the direction vector, but we *do* know two points on the line, we can calculate it by *subtracting the vectors*.
+ For points $A$ and $B$, the direction vector is $\vec{AB}=\overline{B}-\overline{A}$.
+ It doesn't matter which way we subtract them! That's because a line can 'go' forwards or backwards, it's the same line.

---

### Find the equation of a line passing through $(1,2)$ and $(3,4)$

+ Direction vector = $\vec{AB}=\begin{pmatrix}3\\4\end{pmatrix}-\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}2\\2\end{pmatrix}$
+ Position vector = $\begin{pmatrix}1\\2\end{pmatrix}$ (use either!)
+ $\overline r=\begin{pmatrix}1\\2\end{pmatrix}+\lambda\begin{pmatrix}2\\2\end{pmatrix}$

---

### Find the equation of a line passing through $(1,2,3)$ and $(4,5,6)$

+ Direction vector = $\vec{AB}=\begin{pmatrix}4\\5\\6\end{pmatrix}-\begin{pmatrix}1\\2\\3\end{pmatrix}=\begin{pmatrix}3\\3\\3\end{pmatrix}=3\begin{pmatrix}1\\1\\1\end{pmatrix}$
+ Position vector = $\begin{pmatrix}1\\2\\3\end{pmatrix}$
+ $\overline r=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}1\\1\\1\end{pmatrix}$

---

## Understanding $\lambda$

+ $\lambda$ is a scalar that we can change to get different points on the line.
+ We sometimes call it the 'parameter'.
+ It's the thing that multiplies the direction vector, so it controls how far along the line we go.
+ If $\lambda=1000$, we're going to be much further from the point given by the position vector, than if $\lambda=1$.
+ If $\lambda$ is negative, we're going to be in the opposite direction from the position vector, than if $\lambda$ is positive.

---

## Proving two lines are the same

+ If two lines are the same, then:
    + their direction vectors are the same (they're parallel)
    + The position vector of one line is on the other line (because they share all the same points)
+ So to prove that the lines are the same, you need to:
    + Show they are parallel, by showing the direction vectors are the same (or multiples of each other, you may need to scale one/both).
    + Show that the position vector of one line is on the other line, by substituting it into $r$ for the other line, and showing that it works for some value of $\lambda$.

---

### Prove that the lines $\overline r=\begin{pmatrix}1\\2\end{pmatrix}+\lambda\begin{pmatrix}3\\4\end{pmatrix}$ and $\overline r=\begin{pmatrix}4\\6\end{pmatrix}+\mu\begin{pmatrix}6\\8\end{pmatrix}$ are the same

+ Notice we use a different parameter letter for both lines: $\lambda$ for the first line, and $\mu$ for the second line - that's because they're different lines so take different parameters for the same point.
+ $\vec d_1$ = $\begin{pmatrix}3\\4\end{pmatrix}$, $\vec d_2$ = $\begin{pmatrix}6\\8\end{pmatrix}=2\begin{pmatrix}3\\4\end{pmatrix}$
    + So the direction vectors are parallel.
+ Substitute the position vector of the first line into the second line:
    + $\begin{pmatrix}4\\6\end{pmatrix}+\mu\begin{pmatrix}6\\8\end{pmatrix}=\begin{pmatrix}1\\2\end{pmatrix}$
    + $\mu\begin{pmatrix}6\\8\end{pmatrix}=\begin{pmatrix}-3\\-4\end{pmatrix}$
    + $\mu=-\frac12$
+ So the position vector of the first line is on the second line, therefore they are the same line.

---

### Prove that the lines $\overline r=\begin{pmatrix}1\\2\\3\end{pmatrix}+\lambda\begin{pmatrix}3\\4\\5\end{pmatrix}$ and $\overline r=\begin{pmatrix}4\\6\\8\end{pmatrix}+\mu\begin{pmatrix}-6\\-8\\-10\end{pmatrix}$ are the same

+ $\vec d_1$ = $\begin{pmatrix}3\\4\\5\end{pmatrix}$, $\vec d_2$ = $\begin{pmatrix}-6\\-8\\-10\end{pmatrix}=-2\begin{pmatrix}3\\4\\5\end{pmatrix}$
    + So the direction vectors are parallel.
+ Substitute the position vector of the first line into the second line:
+   + $\begin{pmatrix}4\\6\\8\end{pmatrix}+\mu\begin{pmatrix}-6\\-8\\-10\end{pmatrix}=\begin{pmatrix}1\\2\\3\end{pmatrix}$
    + $\mu\begin{pmatrix}-6\\-8\\-10\end{pmatrix}=\begin{pmatrix}-3\\-4\\-5\end{pmatrix}$
    + $\mu=\frac12$
+ position vector of the first line is on the second line, therefore they are the same line.

---

## Distance between points on a line

+ The distance between two points $A$ and $B$ is the length of the vector $\vec{AB}$.
+ We can just subtract the position vectors of the two points to get $\vec{AB}$.
+ Then though, we need to find the **magnitude** of that vector. We can do that with Pythagoras!

---

### Find the distance between the points $(1,2)$ and $(4,6)$

+ $\vec{AB}=\begin{pmatrix}4\\6\end{pmatrix}-\begin{pmatrix}1\\2\end{pmatrix}=\begin{pmatrix}3\\4\end{pmatrix}$
+ $|AB|=\sqrt{3^2+4^2}=\sqrt{25}=5$
+ So the distance between the points is $5$.

---

### Find the distance between the points $(7,8)$ and $(1,2)$

+ $\vec{AB}=\begin{pmatrix}1\\2\end{pmatrix}-\begin{pmatrix}7\\8\end{pmatrix}=\begin{pmatrix}-6\\-6\end{pmatrix}$
+ $|AB|=\sqrt{(-6)^2+(-6)^2}=\sqrt{72}=6\sqrt{2}$
+ So the distance between the points is $6\sqrt{2}$.

---

## Pythagoras in 3D

+ We can actually use Pythagoras to find the distance between points in 3D too!
+ The pythagorean theorem works exactly the same in 3D:
    + $|AB|=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$
    + If you'd like a proof for this, maybe I'll make a video proving it in the future.
+ So we can find the distance between any two points in 3D, just by substituting into that formula.

---

### Find the distance between the points $(1,2,3)$ and $(4,5,6)$

+ $|AB|=\sqrt{(4-1)^2+(5-2)^2+(6-3)^2}$
+ $|AB|=\sqrt{3^2+3^2+3^2}$
+ $|AB|=\sqrt{27}=3\sqrt{3}$
+ Distance between the points is $3\sqrt{3}$.

---

### Find the distance between the points $(7,8,9)$ and $(1,2,3)$

+ $|AB|=\sqrt{(1-7)^2+(2-8)^2+(3-9)^2}$
+ $|AB|=\sqrt{(-6)^2+(-6)^2+(-6)^2}$
+ $|AB|=\sqrt{108}=6\sqrt{3}$
+ Distance between the points is $6\sqrt{3}$.

---

## Intersection of two lines

+ If two lines intersect, then they share a point.
+ So to find the intersection of two lines, we can just set their equations equal to each other, and solve for the parameters!
+ This will give us the value of the parameters at which they intersect, and we can substitute that back in to find the point of intersection.

---

### Given that $r=\pmatrix{3\\1\\-2}+\lambda\pmatrix{3\\-4\\1}$ and $r=\pmatrix{-12\\a\\-3}+\mu\pmatrix{3\\2\\-1}$, find $a$

+ $\pmatrix{3\\1\\-2}+\lambda\pmatrix{3\\-4\\1}=\pmatrix{-12\\a\\-3}+\mu\pmatrix{3\\2\\-1}$
+ $\pmatrix{3\lambda+3\\-4\lambda+1\\\lambda-2}=\pmatrix{3\mu-12\\2\mu+a\\-\mu-3}$
+ $3\lambda-3\mu= -15$
+ $\lambda+\mu=-1$
    + $\lambda=-3$, $\mu=2$
+ $-4\lambda+1=2\mu+a$
    + $-4(-3)+1=2(2)+a$
    + $9=a$

###### Question adapted from AQA 2022 Further Maths: Paper 1

---

### $r=\pmatrix{3\\1\\-2}+\lambda\pmatrix{3\\-4\\1}$ and $r=\pmatrix{-12\\9\\-3}+\mu\pmatrix{3\\2\\-1}$, find the point of intersection

+ We found that $\lambda=-3$ and $\mu=2$, where they intersect
+ Substitute $\lambda=-3$ into the first line:
    + $r=\pmatrix{3\\1\\-2}+\lambda\pmatrix{3\\-4\\1}$
    + $r=\pmatrix{3\\1\\-2}+(-3)\pmatrix{3\\-4\\1}$
    + $r=\pmatrix{-6\\13\\-5}$ is the point of intersection
+ We can check by substituting $\mu=2$ into the second line:
    + $r=\pmatrix{-12\\9\\-3}+\mu\pmatrix{3\\2\\-1}$
    + $r=\pmatrix{-12\\9\\-3}+2\pmatrix{3\\2\\-1}$
    + $r=\pmatrix{-6\\13\\-5}$, which is the same point, so that checks out.

---

## Skew lines

+ If two lines are *skew*, it means they **never meet**.
+ In 2D, this means they are parallel.
+ In 3D, most lines won't be parallel, but they also won't meet - they're *skew*.
+ To check if two lines are skew, we can try to find their intersection points ($\lambda$ and $\mu$).
+ Then, substitute into both equations: if they give different $r$ value, then they are skew. If they give the same value, then they intersect and are not skew.

---

### Determine whether the lines $\overline r=\begin{pmatrix}1\\2\end{pmatrix}+\lambda\begin{pmatrix}3\\4\end{pmatrix}$ and $\overline r=\begin{pmatrix}4\\6\end{pmatrix}+\mu\begin{pmatrix}7\\19\end{pmatrix}$ are skew

+ Find equations in $\lambda$ and $\mu$ and set them equal:
    + $\begin{pmatrix}1\\2\end{pmatrix}+\lambda\begin{pmatrix}3\\4\end{pmatrix}=\begin{pmatrix}4\\6\end{pmatrix}+\mu\begin{pmatrix}7\\19\end{pmatrix}$
    + $3\lambda-7\mu=-3$
    + $4\lambda-19\mu=-4$
    + $\lambda=-1$, $\mu=0$
+ Now substitute into both equations:
    + $r_1=\begin{pmatrix}1\\2\end{pmatrix}+(-1)\begin{pmatrix}3\\4\end{pmatrix}=\begin{pmatrix}-2\\-2\end{pmatrix}$
    + $r_2=\begin{pmatrix}4\\6\end{pmatrix}+0\begin{pmatrix}7\\19\end{pmatrix}=\begin{pmatrix}4\\6\end{pmatrix}$
+ So the lines don't intersect - **they are skew**.

---

## Dot product

+ The 'dot' (or 'scalar') product is a way of taking two vectors and getting a single number out.
+ The main thing we'll use it for is to find the *angle* between two vector lines.

---

## Calculating dot product

+ To calculate the dot product, we:
    + Multiply the corresponding 'elements' in each vector
    + Add those numbers together
+ For example, the dot product of 2D vectors is:
    + $\begin{pmatrix}a\\b\end{pmatrix}\cdot\begin{pmatrix}c\\d\end{pmatrix}=ac+bd$
+ Or, in 3D:
    + $\begin{pmatrix}a\\b\\c\end{pmatrix}\cdot\begin{pmatrix}d\\e\\f\end{pmatrix}=ad+be+cf$
+ THis gives us a single number out.

---

## Dot product formula

+ There's another useful formula we can use, related to the dot product:
    + $\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta$
    + $\theta$ is the angle between the two vectors (lines).
    + $|\vec a|$ and $|\vec b|$ are the magnitudes of the **direction** vectors, which we can find with Pythagoras.
+ For a vector $(a,b,c)$, the magnitude is $|\vec a|=\sqrt{a^2+b^2+c^2}$.

---

## Finding the angle between lines

+ Using $\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta$, we can find the angle between two lines - rearrange it to:
    + $\theta=\cos^{-1}\left(\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}\right)$
+ Knowing this, we can find the angle between any two lines, by finding their direction vectors, calculating the dot product of those direction vectors, calculating the magnitudes of those direction vectors, and then substituting into that formula.

---

### Find the angle between $r=\pmatrix{3\\1\\-2}+\lambda\pmatrix{3\\-4\\1}$ and $r=\pmatrix{-12\\9\\-3}+\mu\pmatrix{3\\2\\-1}$

+ $\vec a=\begin{pmatrix}3\\-4\\1\end{pmatrix}$, $\vec b=\begin{pmatrix}3\\2\\-1\end{pmatrix}$ (direction vectors)
+ $\vec a\cdot\vec b=3(3)+(-4)(2)+1(-1)=9-8-1=0$
+ $|\vec a|=\sqrt{3^2+(-4)^2+1^2}=\sqrt{26}$
+ $|\vec b|=\sqrt{3^2+2^2+(-1)^2}=\sqrt{14}$
+ $\theta=\cos^{-1}\left(\frac{0}{\sqrt{26}\sqrt{14}}\right)=\cos^{-1}(0)=90^\circ$
+ So the angle is a right angle - they lines are **perpendicular**

---

## Perpendicular lines

+ From that example you might be able to see that when the scalar product is $0$, the lines are perpendicular because $\cos^{-1}(0)=90^\circ$.
+ If asked to prove two lines are perpendicular, you should show that the dot product of the two direction vectors is zero.

---

## Distance from point to line: 2D

> TODO

---

## Vector to Cartesian line: 2D

+ If we have a 2D vector line and want to find it as a vector equation:
    + Find the gradient - the gradient of $\pmatrix{a\\b}=\frac ba$
    + Use the $x$ and $y$ value of the point we know, then substitute them into $y-y_1=m(x-x_1)$

---


### Find the Cartesian equation of the line $r=\pmatrix{1\\2}+\lambda\pmatrix{3\\4}$

- $m=\frac43$
- $y_1=2$
- $x_1=1$
- $y-2=\frac43(x-1)$
- $y=\frac43x+\frac23$

---

## Vector to Cartesian line: 3D

+ It's actually not too difficult!
+ We set a vector of $x$, $y$ and $z$ 

---

### Find the Cartesian equation of the line $r=\pmatrix{1\\2\\3}+\lambda\pmatrix{3\\4\\5}$

+ $\pmatrix{x\\y\\z}=\pmatrix{1\\2\\3}+\lambda\pmatrix{3\\4\\5}$
    + $x=1+3\lambda\rightarrow\lambda=\frac{x-1}3$
    + $y=2+4\lambda\rightarrow\lambda=\frac{y-2}4$
    + $z=3+5\lambda\rightarrow\lambda=\frac{z-3}5$ 
+ $\frac{x-1}3=\frac{y-2}4=\frac{z-3}5$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| i | $i$	The imaginary constant, defined by $i=\sqrt{-1}$ and $i^2=-1$. |
| real number | A number which can be rational or irrational, and can be approximated to a single decimal number. |
| imaginary number | A number which is multiplied by the constant $i$ and only has an imaginary part. |
| complex number | A real number and an imaginary number added together, of the form $z=x+yi$. |
| How do you express the real and imaginary part of a complex number? | The imaginary part is the part before the $i$ (it doesn't include the $i$). The real part is usually written before the imaginary part. |
| How do you simplify $i^{13}$? | $i^{13}=i^{12}\times i=i$. Subtract 4 from the power of $i$ repeatedly to simplify. |
| How do you find $\sqrt{-9}$? | $\sqrt{-9}=\sqrt{9}\times\sqrt{-1}=3i$ |
| How do you add $(a+bi)+(c+di)$? | $(a+bi)+(c+di)=(a+c)+(b+d)i$ |
| How do you subtract $(a+bi)-(c+di)$? | $(a+bi)-(c+di)=(a-c)+(b-d)i$ |
| How do you multiply $(a+bi)(c+di)$? | $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$ |
| What is the complex conjugate of $3+4i$? | $3-4i$ (same real part, opposite imaginary part). |
| How do you divide $\frac{5+2i}{3-4i}$? | Multiply the numerator and denominator by the conjugate of the denominator: $=\frac{(5+2i)(3+4i)}{(3-4i)(3+4i)}=\frac7{25}+\frac{26}{25}i$ |
| How do you simplify $(2+3i)^3$? | Write out all the brackets: $(2+3i)(2+3i)(2+3i)=-46+9i$ |
| What do polar coordinates measure? | $r$ (distance from the origin) and $\theta$ (angle anticlockwise from the positive $x$ axis). |
| How do you find the distance between two polar points? | Use the cosine rule: $a^2=b^2+c^2-2bc\cos A$, where $A$ is the difference between their $\theta$ values. |
| What does a negative radius $r$ mean in polar form? | Go away from the origin in the opposite direction to the angle $\theta$. |
| How do you convert a point from polar $(r,\theta)$ to Cartesian $(x,y)$? | $x=r\cos\theta$, $y=r\sin\theta$ |
| How do you convert a point from Cartesian $(x,y)$ to polar $(r,\theta)$? | $r=\sqrt{x^2+y^2}$, $\theta=\tan^{-1}(y \div x)$, then check the quadrant. |
| How do you convert a line from polar to Cartesian form? | Substitute $x=r\cos\theta$, $y=r\sin\theta$, $r^2=x^2+y^2$, or $\theta=\tan^{-1}(y\div x)$ into the polar equation. |
| Convert $r=2\cos\theta$ from polar to Cartesian form. | $x^2+y^2=2x$ (or $x^2-2x+y^2=0$) |
| How do you convert a line from Cartesian to polar form? | Substitute $x=r\cos\theta$ and $y=r\sin\theta$ into the Cartesian equation. |
| What is the condition for a polar line to have a tangent at the pole? | $r$ must equal $0$ and change sign when $\theta$ changes quadrant. |
| What is the value of $\frac{d}{d\theta}\sin\theta$? | $\cos\theta$ |
| What is the value of $\frac{d}{d\theta}\cos\theta$? | $-\sin\theta$ |
| How do you find the minimum value of $r$ for a polar line $r=f(\theta)$? | Differentiate $f(\theta)$ and set it to $0$ to find critical points, then substitute back to find $r$. |
| What is an Argand diagram? | A graph where the horizontal axis represents the real part and the vertical axis represents the imaginary part of a complex number. |
| How is a complex conjugate shown on an Argand diagram? | As the point reflected across the horizontal (real) axis. |
| What is the modulus-argument form of a complex number? | $z=r(\cos\theta+i\sin\theta)$ where $r$ is the modulus and $\theta$ is the argument. |
| How do you calculate the modulus $|z|$ of $z=x+yi$? | $|z|=\sqrt{x^2+y^2}$ |
| Convert $z=3+4i$ to modulus-argument form. | $|z|=5$, $\arg z\approx0.927\text{ rad}$, so $z=5(\cos0.927+i\sin0.927)$ |
| What does the locus $\arg z=\theta$ look like on an Argand diagram? | A half-line from the origin at an angle $\theta$ to the positive real axis. |
| What does the locus $|z-w|=r$ look like on an Argand diagram? | A circle with radius $r$ and centre at point $w$. |
| What happens to the modulus when multiplying two complex numbers? | $|z||w|=|zw|$ (the new modulus is the product of the two moduli). |
| What happens to the argument when dividing two complex numbers? | $\arg z-\arg w=\arg\left(\frac zw\right)$ (the new argument is the difference). |
| What does $Re(z)=k$ represent on an Argand diagram? | A vertical line where the real part of $z$ is equal to $k$. |
| How do you solve a quadratic equation with complex roots? | Use the quadratic formula $z=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$. |
| How do you factorise a quadratic with complex roots $a$ and $b$? | The factors are $(z-a)(z-b)$. |
| How do you solve a cubic equation like $z^3+z^2+z-39=0$? | Find a real root (e.g. $z=3$), use factor theorem and polynomial division to find the quadratic factor $z^2+4z+13$, then solve the quadratic. |
| What is the rule for complex conjugate solutions? | If a polynomial has real coefficients, any complex roots must come in conjugate pairs. |
| What is the sum of roots for a quadratic $ax^2+bx+c=0$? | $p+q=-\frac ba$ |
| What is the product of roots for a cubic $ax^3+bx^2+cx+d=0$? | $pqr=-\frac da$ |
| What is the sum of products of roots taken two at a time for a quartic $ax^4+bx^3+cx^2+dx+e=0$? | $pq + pr + ps + qr + qs + rs = \frac ca$ |
| How do you find $p^2+q^2$ for the roots of a quadratic? | $p^2+q^2=(p+q)^2-2pq$. Find $p+q$ and $pq$ from the coefficients. |
| How do you find $\frac1p+\frac1q$ for the roots of a quadratic? | $\frac1p+\frac1q=\frac{p+q}{pq}$. Find $p+q$ and $pq$ from the coefficients. |
| How do you find a quadratic given one complex root? | Use the conjugate root theorem, then use $p+q=-\frac ba$ and $pq=\frac ca$ to find the coefficients. |
| How do you solve a quadratic inequality like $x^2-5x+6<0$? | Factorise to $(x-2)(x-3)<0$. The solution is the region between the critical points: $2<x<3$. |
| How do you solve a cubic inequality? | Find one root by inspection, use factor theorem and polynomial division to find the quadratic factor, factorise the quadratic to find all critical points, then sketch the graph to find the regions satisfying the inequality. |
| In the rational function $y=\frac{ax+b}{cx+d}$, what is the vertical asymptote? | $x=-\frac dc$ |
| In the rational function $y=\frac{ax+b}{cx+d}$, what is the horizontal asymptote? | $y=\frac ac$ |
| How do you solve a rational inequality like $\frac{ax+b}{cx+d}<5$? | Multiply by $(cx+d)^2$ (which is always positive) to avoid sign flipping. |
| In the rational function $y=\frac{ax^2+bx+c}{dx^2+ex+f}$, what are the vertical asymptotes? | The roots of $dx^2+ex+f=0$. |
| In the rational function $y=\frac{ax^2+bx+c}{dx^2+ex+f}$, what is the horizontal asymptote? | $y=\frac ad$ |
| What is the definition of $\sinh x$? | $\sinh x=\frac{e^x-e^{-x}}{2}$ |
| What is the definition of $\cosh x$? | $\cosh x=\frac{e^x+e^{-x}}{2}$ |
| What is the definition of $\tanh x$? | $\tanh x=\frac{\sinh x}{\cosh x}=\frac{e^x-e^{-x}}{e^x+e^{-x}}$ |
| What is $\cosh0$? | 1 |
| What is $\sinh0$? | 0 |
| Prove that $\cosh^2 x-\sinh^2 x\equiv 1$ | $\cosh^2 x-\sinh^2 x = \left(\frac{e^x+e^{-x}}{2}\right)^2 - \left(\frac{e^x-e^{-x}}{2}\right)^2 = \frac{(e^{2x}+2+e^{-2x})-(e^{2x}-2+e^{-2x})}{4}=1$ |
| What is the inverse hyperbolic function for $\sinh$? | $\operatorname{arsinh}$ |
| What is the formula for $\operatorname{arsinh} x$? | $\operatorname{arsinh} x=\ln\left(x+\sqrt{x^2+1}\right)$ |
| What is the formula for $\operatorname{arcosh} x$? | $\operatorname{arcosh} x=\ln\left(x+\sqrt{x^2-1}\right)$ |
| What is the formula for $\operatorname{artanh} x$? | $\operatorname{artanh} x=\frac12\ln\left(\frac{1+x}{1-x}\right)$ |
| How do you solve a hyperbolic trig equation? | Use the exponential forms to write the equation in terms of $e^x$, solve for $e^x$, then take the natural logarithm to find $x$. |
| What is a direction vector? | A vector indicating the direction of a line, stating for every unit you move in one direction, how much you move in others. |
| What is the vector equation of a line? | $\overline r=\overline a+\lambda\overline d$, where $\overline a$ is a point on the line and $\overline d$ is a direction vector. |
| How do you calculate a direction vector from two points $A$ and $B$? | $\vec{AB}=\overline{B}-\overline{A}$ |
| How do you prove two lines are the same? | Show they are parallel (direction vectors are multiples) and show the position vector of one line lies on the other. |
| How do you find the distance between points $(1,2,3)$ and $(4,5,6)$? | $|AB|=\sqrt{(4-1)^2+(5-2)^2+(6-3)^2}=3\sqrt{3}$ |
| How do you find the intersection point of two vector lines? | Set their equations equal and solve for the parameters $\lambda$ and $\mu$. |
| What are skew lines? | Lines in 3D that are not parallel and never meet. |
| What is the dot product of $\begin{pmatrix}a\\b\\c\end{pmatrix}$ and $\begin{pmatrix}d\\e\\f\end{pmatrix}$? | $ad+be+cf$ |
| How do you find the angle between two vector lines using the dot product? | $\theta=\cos^{-1}\left(\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}\right)$, where $\vec a$ and $\vec b$ are the direction vectors. |
| What does a dot product of $0$ indicate about two lines? | They are perpendicular (the angle is $90^\circ$). |
| Find the Cartesian equation of the line $r=\pmatrix{1\\2\\3}+\lambda\pmatrix{3\\4\\5}$. | $\frac{x-1}3=\frac{y-2}4=\frac{z-3}5$ |

