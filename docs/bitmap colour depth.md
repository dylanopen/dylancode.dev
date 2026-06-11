# Bitmap colour depth

Because a [[bitmap image]] is really just a long string of 1s and 0s ([[binary]] digits, [[bit]]s), it has no idea about the concept of colour.

We *could* store each colour as 24 bits (or 32 bits if we need [[transparency]]).  
That *would* allow us to store pretty much any colour, *but* it does [[mean]] that
images which only use a few colours would take up a lot more storage than they
need to.

To fix this, we can store a **[[bit]] depth**, which will tell the program reading
the image how many bits each [[pixel]]'s colour takes up.

The colours represented by each number is stored in a [[colour map]].

## Example: black and white images

If we store a black and white image, there are only two possible colours each
pixel can have. We can represent a black-and-white image with just 1 [[bit]] per
pixel (a 0 for black and a 1 for white, for example), and so our colour depth
would be **one [[bit]]**.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a colour depth in a bitmap image? | The number of bits used to store each pixel’s colour, telling the program how many bits each pixel’s colour takes up. |
| How is the mapping from numbers to colours stored in a bitmap image? | In a colour map. |
| Why might a 24-bit colour depth be wasteful for images that use only a few colours? | Because each pixel still uses 24 bits (or 32 bits with transparency), even when fewer colours would suffice, taking up more storage than needed. |
| What colour depth is used for a black-and-white bitmap image, and why? | 1 bit per pixel, because only two colours are needed; 0 can represent black and 1 can represent white. |
| What are the two components used together to interpret a bitmap image’s colours? | The colour depth (bits per pixel) and the colour map. |

