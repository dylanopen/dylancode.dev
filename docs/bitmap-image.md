# Bitmap image

Unlike a *vector image* which stores the mathematical instructions for how to draw
the image, a *bitmap image* (which we sometimes call a 'raster image') stores
the image as a grid of pixels, where each pixel has a specific color value.

Think of it like a big table, each containing a *code* which corresponds to a
specific colour.

For example, if we have a 3x3 bitmap image, it might look something like this:

```
R G B
G R G
B G R
```

(where I'm using R G and B to represent colours which can be drawn).

## Metadata

Bitmap images are a grid of pixels, but how does the computer know how many
rows and columns there are?

That's stored in the metadata. See [bitmap metadata](/bitmap-metadata) for more
details!
