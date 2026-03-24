# Colour map

A [[bitmap-image]] has a [[bitmap-colour-depth|colour depth]]. This determines the number of colours the image can represent.

Every [[pixel]]'s colour is represented by a [[binary]] number. To know which number represents which colour, we need to have a *colour map*.

## What is a colour map?

A colour map just stores a map (table) of the number and the colour it represents, so we can associate a binary pixel number with a colour.

## Pre-set colour map

Some formats, such as Windows' [[bmp-format]], have a hard-coded set of
colours that all bitmaps will use.

For example, if we store an image in 4 bits, there are only 16 possible colours,
and these colours **are the same for all bitmap images of that format**.

This isn't very good if we want to store colours other than the pre-set map of
the format's colours.

## Stored colour map

To fix this, we can use what I like to call a 'stored colour map'. Instead of
using the format's default [[colour-map]], we can store a map (like a table) of the
colour code, alongside the actual colour it makes up.

That way, if we have a specific colour used in our image, we can replicate
exactly that colour, while also using fewer bits per pixel.

This map is stored in the metadata. It might look something like this if we
visualise it:

|Code|Colour|
|---|---|
|0|black|
|1|red|
|2|green|
|3|blue|
|4|yellow|
|...|...|
|15|white|