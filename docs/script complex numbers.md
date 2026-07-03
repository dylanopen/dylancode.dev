# Complex Numbers (script)

> This is a script for a YouTube video and not intended as a learning resource in itself.
> You can find video tutorials for various topics at [youtube.com/@dylancode](https://youtube.com/@dylancode).

---

You have probably spent most of your time in education learning about *real* numbers: the height of a tree or the number of sweets in a bag. Even Pi, often considered one of the 'weird' numbers (because it's irrational) is still **real**.

So what are these so called 'imaginary numbers'? And why did we invent them?

---

We need to start with an important letter: i. i, sometimes called the 'imaginary constant', is used to denote that a number is *not real*, but rather **imaginary**.

The number '4i' means an imaginary number with the same *magnitude* (size) as the number 4, but in the **imaginary plane**. This diagram, by the way, showing both real and imaginary numbers, is known as an **Argand diagram**, and we'll see them more later.

It turns out that i has another special property though, related to the square root of a negative number.

You hopefully know that the square root of 1 is, well, just 1. But you may also be aware that we 'can't' take the square root of a *negative* number, such as -1. Well that is, up until now.

You see, i is actually defined as the square root of negative 1. i = the square root of -1, and so you may be able to see that, if we square both sides of this equation, i squared must equal negative 1.

---

Alright, we know that the square root of -1 is i, but how about the square root of, say, -9?

If you remember your surd laws, you'll know that if we multiply two surds (square roots) together, we *multiply* the numbers under the roots together.

The square root of 6 times the square root of 5 is the square root of 30, for example.

---

Well we can use this fact in reverse to *split up* square roots with a negative sign.

We can write -9 as -1 times 9; so using our law from before, we know that the square root of negative 9 is the square root of -1, times the square root of positive 9.

We know that the square root of -1 is i, and the square root of 9 is 3, so the square root of -9 must be i times 3, or 3i.

---

More generally, for *any* negative square root we want to find, just find the root of the *positive* number, and multiply it by i.

The square root of 4 is 2, so the square root of -4 is 2i.

The square root of 16 is 4, so the square root of -16 is 4i.

The square root of 128 is 8 root 2, so the square root of -128 is 8 root 2 i, or i 8 root 2.

---

Mathematicians are still arguing over whether to put the i before the number or after the number... in most cases, it doesn't matter.

---

Anyway, we know about real numbers, and we know about imaginary numbers, but what happens when we add them together?

We can't directly add real and imaginary parts together, but we have now got a new type of number: a *complex number*.

A complex number is any number that has both a real part **and** an imaginary part, added together (or subtracted).

We often write these in the form x+iy - x is the real part, and y is the imaginary part (note that iy isn't the imaginary part, just y).

---

What if we have two of these complex numbers, and want to add them together?

We can just add together the real parts and imaginary parts separately, to get our new complex number.

---

The same thing works with subtraction.

If we subtract one imaginary number from another, we subtract the real parts and imaginary parts to get our new number.

---

Multiplication is a little bit different. We don't just multiply the two parts together.

Instead, we have to treat the multiplication as a set of double brackets to expand.

We can then expand the double brackets like normal.

And then simplify the i terms.

But this doesn't look like the complex numbers we've seen before. We've got an i squared term.

To simplify this, we need to remember the rule from before about i squared. i squared is equal to negative 1, so we can substitute it for -1, then we multiply, and collect like terms.

---

> Equation is $x^2-6x+13=0$

Knowing that the square root of negative 1 is i, we can solve equations that were previously 'impossible'.

We'll solve this using the quadratic formula. The part under the square root evaluates to -16, and we know that the square root of -16 is 4i.

Our solutions for x now read $x=\frac{-(-6)\pm4i}{2\times1}$. We can simplify this to $x=3\pm2i$.

Giving us the solutions for x as 3+2i and 3-2i.

---

Every complex number has an 'inverse', which we call the **complex conjugate**.

The complex conjugate of a number is exactly the same as the number, but with the *sign* of the imaginary part flipped.

If we take the complex number 3+4i, its conjugate is 3-4i.

The conjugate of -5i-2 is 5i-2.

We write the complex conjugate with an asterisk. If we call our complex number z, its conjugate is z*.

---

There's an interesting property to complex numbers.

Let's try multiplying the general complex number (x+iy) with its conjugate (x-iy).

Expanding the brackets we get $x^2+ixy-ixy-i^2y^2$. The middle i terms cancel out, which just leaves us with $x^2-i^2y^2$, but we also know that $i^2$ is -1. So we get $x^2+y^2$ - a **real number**.

If you know about the difference of two squares, you can probably see why this always works.

Whenever we multiply a complex number by its conjugate, we *always* get a real number.

---

We can use that interesting property to *divide* complex numbers.

We first write them as a fraction.

Then, we can multiply the numerator and denominator by the *conjugate* of the denominator. This is essentially the same thing as when we *rationalised* the denominator to get rid of surds.

We know that when we multiply a complex number by its conjugate, the result is the same as adding the square of the real and imaginary parts.

For the numerator, we just expand the brackets.

Finally, simplify.

And we've divided the complex numbers.

---

I mentioned earlier that we can represent complex numbers on something called an *Argand diagram*.

They show the normal real part on the horizontal axis - just like a number line.

But they also have a vertical axis, which shows the imaginary part.

That means that, if we take a complex number written in Cartesian form (that's what the x+iy form is called), we can plot it on the argand diagram.

The number 2-3i can be placed 2 along to the right and 3 downwards.


We can add complex numbers using the Argand diagram.

Adding 1 (a real number) will move it one point right. Adding 1i (an imaginary number) will move it one point up.

We can also add a full complex number, which is similar to adding vectors in a normal graph.

Adding -2+3i will move it 2 to the left and 3 up.

Subtracting a complex number is the same as just adding the complex number, but with both the real and imaginary parts flipped.

---

There isn't actually just one way to write complex numbers: there's lots, and each are good for different things.

The Cartesian form of complex numbers we've been working with so far is great for adding and subtracting. But it's much more difficult to multiply and divide complex numbers in Cartesian form.

Because of this, another form exists: modulus-argument form. This format makes a lot of sense on an Argand diagram.

Any point can be expressed in it's horizontal and vertical components, sure. That's what we were doing before.

But we can also describe it in terms of the distance from the origin (0, 0) and the angle it makes from the positive real line (the one stretching to the right).

This is actually just a special form of **polar coordinates**.

We call the distance from the centre the *modulus* (r), and the angle it makes with the positive real line the *argument* (theta).

---

Of course, this wouldn't be any use unless we have a way to convert between Cartesian form and modulus-argument form.

Let's start with how we find the modulus, if we know the Cartesian point.

Drawing a triangle onto an Argand diagram, we can see that the modulus is the hypotenuse of the triangle.

Using the Pythagorean theorem, the modulus must be the square root of x squared plus y squared.

Now, we want to also find the argument. The argument is this angle, and we can calculate it using inverse tangent (remember SOH CAH TOA?)

The argument is just inverse tan of y over x.

*However*, we do need to check if it's in the right quadrant. If it seems like the point is completely wrong (e.g. the argument shows us it's in the the bottom left quadrant but we can actually see that the Cartesian point is in the top right quadrant) then we'll need to add pi radians (or 180 degrees) to our argument, so that it's in the right quadrant.

---

How about going the other way?

To convert modulus-argument form to Cartesian, we'll think about our triangle again.

Rearranging sin theta = opposite / hypotenuse, we get y = modulus times the sine of the argument.

Rearranging cos theta = adjacent / hypotenuse, we get x = modulus times the cosine of the argument.

---

Here are the four identities, of a complex number we'll call z.

---

If we know the modulus and argument of a number, we can write it as r( cos theta + i sin theta ).

Remember that r is the modulus and theta is the argument.

If we have a complex number with modulus 5 and argument pi over 4 radians, we can write it as 5(cos pi/4 + i sin pi/4)

This is especially helpful for converting back to Cartesian, because we just expand the brackets and evaluate the sine and cosine.

---

Another thing we can do with complex numbers on an Argand diagram is draw loci.