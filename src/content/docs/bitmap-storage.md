---
title: Bitmap storage
---

A bitmap image typically uses more storage for an image than a vector image
does, because it's storing each individual pixel.

## Calculating the storage used by a bitmap image

**If we ignore [its metadata](/bitmap-metadata)**, then we can calculate the
storaged (number of bits) used by a bitmap using:

> $$
> \text{bits taken up}=\text{width}\times\text{height}\times\text{colour depth}
> $$

Or, if we know the resolution - the number of pixels:

$$
\text{bits taken up}=\text{resolution}\times\text{colour depth}
$$

