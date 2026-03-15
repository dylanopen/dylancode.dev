# Lossy compression

**Lossy compression** is a type of [compression](/compression) where the original
file can't be perfectly reconstructed from the compressed version - some data
is lost when we compress it. This can lead to a loss in quality, and if we
compress it too much, it can look really bad.

> In lossy compression, we cannot perfectly reconstruct the original file from
> the compressed version, as some data was lost during compression.

## Examples of lossy compression

- JPEG images
- MP3 audio files
- MP4 video files, encoded with lossy codecs like H.264 or H.265

## Benefits of lossy compression

- It can massively reduce the file size, which can save a lot of storage space
  and make it much faster to transfer over the internet.
- We usually don't need 100% of the original data to get a good quality image,
  video or audio file - for example, if we have a photo of a cat, we don't need
  to keep every single pixel to have a good quality image of the cat - we can
  lose some of the data without worrying.

## Drawbacks of lossy compression

- The original file can't be perfectly reconstructed, so if we compress it too
  much, it can look really bad.
- If we need to edit the file later, it's better to have a lossless version of
  it, as we can make edits without losing quality. If we edit a lossy compressed
  file, we will lose more quality each time we save it, as more data is lost
  each time we save it.
  - This is called **generational loss**
- If all we have is a lossy compressed version, the original is lost forever.
  - This is especially important in archive projects.
