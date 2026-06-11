# Intersection of circles

If we have two circles and know their radii and the [[distance]] between their
centres, we can find out *how* their circles overlap.

## Ways they can overlap

There are 6 ways that two circles can overlap:

- Completely *separate* (no points of intersection)
- *Intersecting* at two points (the circles properly overlap, but neither is
  inside the other)
- *Internally tangential* (the circles touch at just one point, from the inside,
  one circle is **inside** the other)
- *Externally tangiential* (the circles touch at just one point, from the
  outside, one circle is **not** inside the other)
- *Touching* at exactly one point (called *tangent*), of which they can be:
  - *Externally tangential* (the circles touch from the outside, one circle is
    **not** inside the other)
  - *Internally tangential* (the circles touch from the inside, one circle
    **is** inside the other)
- *One circle inside the other* (the circles don't touch, but one is completely
  inside the other)
- *The circles are the same* (the circles have the same centre and radius, so
  they are literally the same shape)

## Checking whether they overlap

If we know the radius of circle 1 and circle 2 ($r_1$ and $r_2$), and the
[[distance]] between their centres ($d$), we can check which of the 6 cases applies
by checking some inequalities.

## Separate circles

Two circles are completely separate if the [[distance]] between their centres is
greater than the sum of their radii:

$$
d > r_1 + r_2
$$

## Intersecting circles

Two circles intersect at two points if the [[distance]] between their centres is
less than the sum of their radii, but greater than the difference of their
radii:

$$
|r_1 - r_2| < d < r_1 + r_2
$$

## Internally tangential circles

Two circles are internally tangential if the [[distance]] between their centres is
equal to the difference of their radii:

$$
d = |r_1 - r_2|
$$

## Externally tangential circles

Two circles are externally tangential if the [[distance]] between their centres is
equal to the sum of their radii:

$$
d = r_1 + r_2
$$

## One circle inside the other

Two circles are such that one is completely inside the other if the [[distance]]
between their centres is less than the difference of their radii:

$$
d < |r_1 - r_2|
$$

## The circles are the same

Two circles are the same if the [[distance]] between their centres is zero, and
their radii are the same:

$$
d = 0 \quad \text{and} \quad r_1 = r_2
$$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the condition for two circles to be completely separate? | $d > r_1 + r_2$ |
| What is the condition for two circles to intersect at two points? | $|r_1 - r_2| < d < r_1 + r_2$ |
| What does it mean if the distance between two circle centres equals the absolute difference of their radii? | The circles are internally tangential (they touch at one point from the inside). |
| What does it mean if the distance between two circle centres equals the sum of their radii? | The circles are externally tangential (they touch at one point from the outside). |
| What is the condition for one circle to be completely inside the other (without touching)? | $d < |r_1 - r_2|$ |
| How do you determine if two circles are the same circle? | $d = 0$ and $r_1 = r_2$ |
| List the 6 ways two circles can overlap. | 1. Completely separate<br/>2. Intersecting at two points<br/>3. Internally tangential<br/>4. Externally tangential<br/>5. One circle inside the other<br/>6. The circles are the same |

