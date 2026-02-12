---
title: Adding vector quantities
---

If we have two vector quantities, we can add them to get a new vector quantity.

The thing we get after adding two vectors together is called the *resultant*, or
more specifically, *resultant vector*.

## Adding vectors of the same direction

Suppose we have two vectors, $\vec A$ and $\vec B$, which are in the same
direction. We can add them together by adding their magnitudes together.

For example, if $\vec A$ has a magnitude of $3m$ and $\vec B$ has a magnitude of
$5m$, then the resultant vector $\vec R$ will have a magnitude of $3m+5m=8m$.

That's because, if you suppose the vector represents a *movement*, then we will
have moved $3m$ in the direction of $\vec A$, and then $5m$ in the same
direction, so we will have moved a total of $8m$ in that direction.

### A car moves $30km$ north, then $20km$ north. What is the resultant vector for the car's movement?

- The car moves $30km$ north, then $20km$ north, so the car in total moves
  $30km+20km=50km$.
- We're still going North, so the direction of the resultant vector is north.
- **Answer**: $50km$ north

## Adding vectors of opposite directions

If we have two vectors, $\vec A$ and $\vec B$, which are in opposite directions,
then we can add them together by *subtracting* the smaller magnitude from the
larger magnitude, and keeping the direction of the larger vector.

- Let's suppose $\vec A$ has a magnitude of $3m$ and $\vec B$ has a magnitude of
  $5m$, and $\vec A$ is in the opposite direction to $\vec B$.
- the resultant vector $\vec R$ will have a magnitude of $5m-3m=2m$, and the
  direction of $\vec R$ will be the same as the direction of $\vec B$ (because
  $\vec B$ has the larger magnitude).
- **Answer**: $2m$ in the same direction as $\vec B$

### A car moves $30km$ north, then $20km$ south. What is the resultant vector for the car's movement?

- The car moves $30km$ north, then $20km$ south, so the car in total moves
  $30km-20km=10km$.
- The car is still moving north, because the north movement is larger than the
  south movement, so the direction of the resultant vector is north.
- **Answer**: $10km$ north

### A person cycles $10km$ east, then $15km$ west. What is the resultant vector for the person's movement?

- The person cycles $10km$ east, then $15km$ west, so the person in total moves
  $15km-10km=5km$.
- The person is still moving west, because the west movement is larger than the
  east movement, so the direction of the resultant vector is west.
- **Answer**: $5km$ west

## Bearings

We can write the direction of a vector as a bearing, which is the angle that the
vector makes with the north direction, measured clockwise.

For example, if a vector has a bearing of $90\degree$, then it is pointing
east, because it is $90\degree$ clockwise from north.

## Adding vectors at right angles

We can also find the resultant of two vectors if they're at right angles to each
other.

We can use:
- the Pythagorean theorem to find the magnitude of the resultant vector
- trigonometry to find the direction of the resultant vector

### Boat A is $6km$ east of a lighthouse, and boat B is $8km$ north of the lighthouse. What is the resultant position vector OF $B$ FROM $A$?

Draw a right triangle with the lighthouse at the right angle, boat A at one end 
of the hypotenuse, and boat B at the other end of the hypotenuse:

```
        B
          +
          | \
          |   \
          |     \
          |       \
     8km  |         \
          |           \
          |             \
          |            θ  \
          + --------------- +
        L         6km         A
```

- The magnitude is the *hypotenuse* of the triangle, so:
  - $a^2+b^2=c^2$
  - $6^2+8^2=c^2$
  - $36+64=c^2$
  - $100=c^2$
  - $c=10km$
- The direction is the angle $\theta$ that the hypotenuse makes with the east
  direction, so:
  - $\tan\theta=\frac{8}{6}$
  - $\theta=\tan^{-1}\frac{8}{6}$
  - $\theta\approx53.13\degree$
  - To make it into a bearing north, add the $270\degree$ that we need to rotate
    from north to the west line:
    - $\theta=270\degree+53.13\degree=323.13\degree$
- **Answer**: $10km$ at a bearing of $323.13\degree$

