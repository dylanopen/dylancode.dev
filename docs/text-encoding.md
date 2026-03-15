# Text encoding

A really important thing that computers need to do is to be able to represent
*text*. Basically every program will use text, or *strings*, in some way.

But the only thing that computers really understand is binary. So how do we
represent text as these binary numbers?

## Encoding

Encoding is essentially when we take our human-readable text, and convert it
into a format that computers can more easily understand.

When it comes to *text* encoding, we're converting the human-readable letters,
numbers and symbols into a binary number that the computer can understand.

For example, the letter "A" might be represented as the binary number `01000001`,
or `65`, in a particular encoding scheme.

## Encoding schemes

Because the 'A' will now just be stored as some random number, we need to have
a way of getting back to the letter 'A' from just reading the binary. That's
where encoding schemes come in!

There are (a few) standards which say 'this character should be represented by
this number'. So if we see the number `65`, we can look it up in the encoding
scheme and find out that it corresponds to the letter 'A'.

## Character code

I might refer to a 'character code' in future chapters. A character code just
means a number which represents a particular character, in the specific
encoding scheme we're using.

I may say 'The ASCII character code for 'A' is 65', which just means that in the
ASCII encoding scheme, the letter 'A' is represented by the number 65.
