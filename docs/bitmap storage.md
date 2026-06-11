# Bitmap storage

A [[bitmap image]] typically uses more storage for an image than a vector image
does, because it's storing each individual pixel.

## Calculating the storage used by a bitmap image

**If we ignore [[bitmap metadata|its metadata]]**, then we can calculate the
storaged (number of bits) used by a bitmap using:

> $$
> \text{bits taken up}=\text{width}\times\text{height}\times\text{colour depth}
> $$

Or, if we know the resolution - the number of pixels:

$$
\text{bits taken up}=\text{resolution}\times\text{colour depth}
$$

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the formula for calculating the storage of a bitmap image (ignoring metadata) when width and height are known? | $\text{bits taken up}=\text{width}\times\text{height}\times\text{colour depth}$ |
| How do you calculate the storage of a bitmap image when the number of pixels is known? | $\text{bits taken up}=\text{resolution}\times\text{colour depth}$ |
| Why does a bitmap image typically use more storage than a vector image? | Because it is storing each individual pixel. |

