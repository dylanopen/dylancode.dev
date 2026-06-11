# Dictionary encoding

> **Dictionary encoding** is a method of [[
  /[[lossless compression]]|[[lossless compression]]]] where we replace repeated data with a reference to a
  single copy of that data, stored in a sort of 'dictionary' that maps the
  reference to the original data.

For example, if we had the string `ABCDABCDABCD`, we could store that as:

```
Dictionary:
1: ABCD

Data:
1 1 1
```

That is, we have a dictionary that maps the reference `1` to the string `ABCD`, and then in our data, we just store the reference `1` three times to indicate that we want to repeat the string `ABCD` three times.

## Benefits of dictionary encoding

- The general benefits of [[lossless compression]]
- It can be very effective for certain types of data, like text with lots of
  repeated words or phrases, or images with lots of repeated patterns.
- It can be more efficient than run-length encoding for certain types of data,
  as it doesn't require the data to all be repeated in a row, and we can have
  a *pattern* as a dictionary entry, rather than just a single character or
  pixel.
- A variation of dictionary encoding can be used for things like PNG images, where
  we can store a pattern of pixels in the dictionary, and then reference that
  pattern multiple times in the image data, which can save a lot of space.

## Drawbacks of dictionary encoding

- It can be more complex to implement than run-length encoding, as we need to
  manage the dictionary and the references to it.
- We have to actually store the dictionary itself. Sometimes that can make the
  file size bigger!
- In certain cases, it can be less efficient than [[
  /[[run length encoding]]|[[run length encoding]]]].

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Dictionary encoding | Method of lossless compression where repeated data is replaced with a reference to a single copy stored in a dictionary mapping references to original data. |
| How would you encode the string "ABCDABCDABCD" using dictionary encoding? | Dictionary: {1: ABCD}; Data: 1 1 1 |
| What is a key benefit of dictionary encoding for text? | It can be very effective for text with lots of repeated words or phrases. |
| How does dictionary encoding compare to run-length encoding for non-consecutive repeats? | It can be more efficient as it doesn't require data to be repeated consecutively in a row. |
| What advantage does dictionary encoding have over run-length encoding in terms of pattern types? | It can store a *pattern* as a dictionary entry, rather than just a single character or pixel. |
| Where is a variation of dictionary encoding commonly used? | For PNG images, where a pixel pattern is stored in the dictionary and referenced multiple times. |
| What is a major drawback of dictionary encoding compared to run-length encoding? | It can be more complex to implement as it requires managing the dictionary and references. |
| Why can dictionary encoding sometimes increase file size? | Because we have to actually store the dictionary itself. |
| In what scenario might run-length encoding be preferred over dictionary encoding? | In certain cases where dictionary encoding is less efficient than run-length encoding. |

