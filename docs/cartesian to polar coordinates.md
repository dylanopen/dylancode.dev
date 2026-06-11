# Cartesian to polar coordinates

If we have a Cartesian coordinate in the form $(x,y)$, then we can convert these
to a polar coordinate, using our [[
/[[polar coordinate identities]]|[[polar coordinate identities]]]] from before!

## General steps

[[polar coordinates]] are in the form $(r,\theta)$, where:
- $r$ is the magnitude, the [[distance]] of a point from the origin
- $\theta$ is the *bearing* from the origin, starting from the right-stretching
  line and going *anticlockwise*.

To find the magnitude of the polar coordinate, $r$:
- Just use the Pythagorean theorem to find the hypotenuse!
- $r=\sqrt{x^2+y^2}$

Then to find the angle, $\theta$:
- $\theta=\tan^{-1}(\frac yx)$

> **Note**: If the $x$ coordinate is negative, we need to *add $\pi$* to our
> answer for $\theta$. That's because, otherwise, the angle we got from
> $\tan^{-1}(\frac yx)$ would be in the wrong quadrant.

### Find the polar coordinate from the Cartesian $(4,4)$

- $r=\sqrt{4^2+4^2}$
- $r=\pm\sqrt32$
- $r=\pm4\sqrt2$
- $\theta=\tan^{-1}(\frac44)$
- $\theta=\tan^{-1}(1)$
- $\theta=\frac{\pi}4$
- **Answer**: $(4\sqrt2, \frac{\pi}4)$

### Convert the cartesian coordinate $(-1,4)$ to polar coordinates (to 3sf)

- $r=\sqrt{(-1)^2+4^2}$
- $r=\sqrt{17}$
- $r\approx4.123$
- $\theta=\tan^{-1}(\frac4{-1})$
- $\theta=\tan^{-1}4{-1}$
- $\theta=\tan^{-1}(4)$
- $\theta=-\tan^{-1}(-4)$
- $\theta=-1.326$
- Because our $x$ coordinate is negative, we need to *add $\pi$*:
  - $\theta=-1.326+\pi$
  - $\theta\approx1.816$
- **Answer**: $(4.123, 1.816)$

### Convert the cartesian coordinate $(-1,-4)$ to polar coordinates (to 3sf)

- $r=\sqrt{(-1)^2+(-4)^2}$
- $r=\sqrt{17}$
- $r\approx4.123$
- $\theta=\tan^{-1}(\frac{-4}{-1})$
- $\theta=\tan^{-1}4$
- $\theta=-\tan^{-1}(-4)$
- $\theta=-1.326$
- Because our $x$ coordinate is negative, we need to *add $\pi$*
- $\theta=-1.326+\pi$
- $\theta\approx1.816$
- **Answer**: $(4.123, 1.816)$

### Convert the cartesian coordinate $(1,-4)$ to polar coordinates (to 3sf)

- $r=\sqrt{1^2+(-4)^2}$
- $r=\sqrt{17}$
- $r\approx4.123$
- $\theta=\tan^{-1}(\frac{-4}{1})$
- $\theta=\tan^{-1}(-4)$
- $\theta=-\tan^{-1}4$
- $\theta=-1.326$
- Because our $x$ coordinate is positive, we don't need to add $\pi$!
- **Answer**: $(4.123, -1.326)$

### Write $(4,8)$ as a set of polar coordinates

- $r=\sqrt{4^2+8^2}$
- $r=\sqrt{80}$
- $r=4\sqrt5$
- $\theta=\tan^{-1}(\frac8{4})$
- $\theta=\tan^{-1}2$
- $\theta=1.107$
- **Answer**: $(4\sqrt5, 1.107)$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the formula for $r$ (magnitude) when converting Cartesian $(x,y)$ to polar coordinates? | $r=\sqrt{x^2+y^2}$ |
| What is the formula for $\theta$ (angle) when converting Cartesian $(x,y)$ to polar coordinates? | $\theta=\tan^{-1}(\frac yx)$ |
| What must you do to $\theta$ if the $x$ coordinate is negative when converting to polar coordinates? | We need to *add $\pi$* to our answer for $\theta$. |
| Why must you add $\pi$ to $\theta$ when $x$ is negative? | Because otherwise the angle from $\tan^{-1}(\frac yx)$ would be in the wrong quadrant. |
| Convert the Cartesian coordinate $(4,4)$ to polar coordinates. | $(4\sqrt2, \frac{\pi}4)$ |
| Convert the Cartesian coordinate $(-1,4)$ to polar coordinates (to 3sf). | $(4.123, 1.816)$ |
| Convert the Cartesian coordinate $(-1,-4)$ to polar coordinates (to 3sf). | $(4.123, 1.816)$ |
| Convert the Cartesian coordinate $(1,-4)$ to polar coordinates (to 3sf). | $(4.123, -1.326)$ |
| Convert the Cartesian coordinate $(4,8)$ to polar coordinates. | $(4\sqrt5, 1.107)$ |
| What is the polar coordinate $r$ a measure of? | The magnitude, the [[distance]] of a point from the origin. |
| What is the polar coordinate $\theta$ a measure of? | The *bearing* from the origin, starting from the right-stretching line and going *anticlockwise*. |
| What do you need to do if $x$ is positive and $y$ is negative when finding $\theta$? | Do not add $\pi$ to the $\tan^{-1}(\frac yx)$ result. |

