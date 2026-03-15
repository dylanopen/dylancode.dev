# Bitmap colour depth

Because a bitmap image is really just a long string of 1s and 0s, it has no idea
about the concept of colour.

We *could* store each colour as 24 bits (or 32 bits if we need transparency).  
That *would* allow us to store pretty much any colour, *but* it does mean that
images which only use a few colours would take up a lot more storage than they
need to.

To fix this, we can store a **bit depth**, which will tell the program reading
the image how many bits each pixel's colour takes up.

## Example: black and white images

If we store a black and white image, there are only two possible colours each
pixel can have. We can represent a black-and-white image with just 1 bit per
pixel (a 0 for black and a 1 for white, for example), and so our colour depth
would be **one bit**.

## Pre-set colour map

Some formats, such as Windows' BMP bitmap format, have a hard-coded set of
colours that all bitmaps will use.

For example, if we store an image in 4 bits, there are only 16 possible colours,
and these colours **are the same for all bitmap images of that format**.

This isn't very good if we want to store colours other than the pre-set map of
the format's colours.

## Stored colour map

To fix this, we can use what I like to call a 'stored colour map'. Instead of
using the format's default colour map, we can store a map (like a table) of the
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
