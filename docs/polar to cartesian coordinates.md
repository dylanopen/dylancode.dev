# Polar to Cartesian coordinates

Let's suppose we want to convert a coordinate in the form $(r,\theta)$ to a
coordinate in the form $(x,y)$. How do we do that?

Again, we'll be using our [[polar coordinate identities]]
a lot to do this. Here they are summarised:
- $x=r\cos\theta$
- $y=r\sin\theta$
- $r^2=x^2+y^2$
- $\tan\theta=\frac yx$

## Form of coordinates

- [[polar coordinates]] are in the form $(r,\theta)$, where:
  - $r$ is the magnitude, the [[distance]] of a point from the origin
  - $\theta$ is the *bearing* from the origin, starting from the
    right-stretching line and going *anticlockwise*.
- [[cartesian coordinates]] are in the form $(x,y)$, where:
  - $x$ is the horizontal [[distance]] of a point from the origin
  - $y$ is the vertical [[distance]] of a point from the origin

## General steps

To convert polar to cartesian, we can just use the first two identities:
- $x=r\cos\theta$
- $y=r\sin\theta$

Substitute in the values for $r$ and $\theta$, and then simplify to get the
answer as a cartesian coordinate in the form $(x,y)$.

## Examples

### Convert the polar coordinate $(4\sqrt2, \frac{\pi}4)$ to cartesian coordinates

- $x=4\sqrt2\cos\frac{\pi}4$
- $x=4\sqrt2\cdot\frac{\sqrt2}2$
- $x=4$
- $y=4\sqrt2\sin\frac{\pi}4$
- $y=4\sqrt2\cdot\frac{\sqrt2}2$
- $y=4$
- **Answer**: $(4,4)$

### Convert the polar coordinate $(4.123, 1.816)$ to cartesian coordinates (to 3sf)

- $x=4.12\cos1.816$
- $x=-1.00$
- $y=4.12\sin1.816$
- $y=4.00$
- **Answer**: $(-1.00, 4.00)$

### Convert the polar coordinate $(5, 2.356)$ to cartesian coordinates (to 3sf)

- $x=5\cos2.356$
- $x=-3.54$
- $y=5\sin2.356$
- $y=3.54$
- **Answer**: $(-3.54, 3.54)$

### Convert the polar coordinate $(3, 4.712)$ to cartesian coordinates (to 3sf)

- $x=3\cos4.712$
- $x=0.00$
- $y=3\sin4.712$
- $y=-3.00$
- **Answer**: $(0.00, -3.00)$

### Convert the polar coordinate $(2, 5.890)$ to cartesian coordinates (to 3sf)

- $x=2\cos5.890$
- $x=1.73$
- $y=2\sin5.890$
- $y=-1.00$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| How do you convert a polar coordinate $(r, \theta)$ to cartesian $(x, y)$? | Use the identities $x = r\cos\theta$ and $y = r\sin\theta$, then simplify to the form $(x, y)$. |
| What are the four polar coordinate identities? | $x = r\cos\theta$, $y = r\sin\theta$, $r^2 = x^2 + y^2$, $\tan\theta = \frac{y}{x}$ |
| What are the components of a polar coordinate $(r, \theta)$? | $r$ is the magnitude (distance from the origin), $\theta$ is the bearing from the right-stretching line going anticlockwise. |
| What are the components of a cartesian coordinate $(x, y)$? | $x$ is the horizontal distance from the origin, $y$ is the vertical distance from the origin. |
| What are the steps to convert polar to cartesian coordinates? | Substitute $r$ and $\theta$ into $x = r\cos\theta$ and $y = r\sin\theta$, then simplify to get $(x, y)$. |
| Convert $(4\sqrt2, \frac{\pi}{4})$ to cartesian. | $(4, 4)$ because $x = 4\sqrt2 \cdot \frac{\sqrt2}{2} = 4$ and $y = 4\sqrt2 \cdot \frac{\sqrt2}{2} = 4$. |
| Convert $(4.123, 1.816)$ to cartesian to 3sf. | $(-1.00, 4.00)$ because $x = 4.123\cos1.816 \approx -1.00$ and $y = 4.123\sin1.816 \approx 4.00$. |
| Convert $(5, 2.356)$ to cartesian to 3sf. | $(-3.54, 3.54)$ because $x = 5\cos2.356 \approx -3.54$ and $y = 5\sin2.356 \approx 3.54$. |
| Convert $(3, 4.712)$ to cartesian to 3sf. | $(0.00, -3.00)$ because $x = 3\cos4.712 \approx 0.00$ and $y = 3\sin4.712 \approx -3.00$. |
| Convert $(2, 5.890)$ to cartesian to 3sf. | $(1.73, -1.00)$ because $x = 2\cos5.890 \approx 1.73$ and $y = 2\sin5.890 \approx -1.00$. |

