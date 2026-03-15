# Run-length encoding

> **Run-length encoding** is a method of [lossless compression](
> /lossless-compression) where we replace sequences of repeated data with a single
> value and a count of how many times it was repeated.

As an example, suppose we had this string of text:

```
AAAAAAAABBBBBBBCDDDDDDDDDDDDDEEEEEEE
```

That is:
- 8 A's
- 7 B's
- 1 C
- 13 D's
- 7 E's

It would be much better if, instead of storing each individual character, we
just stored the character and how many times it was repeated!

While the underlying encoding would be different in reality, run length encoding
would essentially turn the string above into something like:

```
8A 7B 1C 13D 7E
```

Stored in binary, that's a lot less data to store than the original string.

## Run-length encoding in images

We can do the same with images. For example, if we had a bitmap image that was
10 pixels wide and 10 pixels high, and the top 5 rows were all red and the rest
was all blue, we might store that as something like:

```
50R 50B
```

## Benefits of run-length encoding

- All the benefits of [lossless compression](/lossless-compression)
- It's very simple to implement, and can be very effective for certain types of
  data, like images with large areas of solid colour, or text with lots of
  repeated characters.
- A variation of run length encoding can be used for things like GIFs, where a
  single video frame or pixel in a certain position can be stored and 'repeated'
  for multiple frames, which can save a lot of space.

## Drawbacks of run-length encoding

- It can actually make the file size bigger if there aren't many repeated characters
  or pixels - for example, if we had a string like `ABCDABCDABCD`, run-length
  encoding would turn that into `1A 1B 1C 1D 1A 1B 1C 1D 1A 1B 1C 1D`, which is
  much longer than the original string.
- It is not very effective for images with lots of detail, like photos, as there
  aren't many large areas of solid colour to take advantage of.
