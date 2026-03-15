# Lossless compression

**Lossless compression** is a type of [compression](/compression) where the
original file can be perfectly reconstructed from the compressed version - no
data is lost when we compress it.

That means that we don't lose any quality / details when we compress a file with
lossless compression.

> In lossless compression, we can perfectly reconstruct the original file from
> the compressed version, as no data was lost during compression.

## How does lossless compression work?

The main two ways that we can losslessly compress a file are:
- [Run-length encoding](/run-length-encoding)
- [Dictionary encoding](/dictionary-encoding)

## Examples of lossless compression

- PNG images
- GIF images
- ZIP files (and things like gzip)
- FLAC audio files
- Lossless x264 video files

## Benefits of lossless compression

- The original file can be perfectly reconstructed, so we don't lose any quality
  or details when we compress it.
- If we need to edit the file later, it's better to have a lossless version of
  it, as we can make edits without losing quality. If we edit a lossy compressed
  file, we will lose more quality each time we save it, as more data is lost
  each time we save it.
  - We don't experience **generational loss**
- If we have a lossless compressed version, we can always get the original back
  if we need it.
- Archive projects can store the original file with no lost detail.

## Drawbacks of lossless compression

- It often uses a lot of CPU power to compress and decompress the file, which can
  make it slow to work with (think if you've ever tried to extract a large zip /
  gzipped-tarball file - it can take a long time).
- It doesn't reduce the file size as much as lossy compression, so it may not save
  as much storage space or make it as fast to transfer over the internet.
  - If we don't need the original file, and we just want a smaller file to save space or
    transfer over the internet, lossy compression may be a better choice, as it can
    reduce the file size much more than lossless compression.
