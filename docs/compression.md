# Compression

When we save any sort of file, for example, an image, audio file, etc. it can
take up *a lot* of storage on our hard drive (or, more likely, SSD).

To save space, we can use something called **compression**. This is when we
take a large file and making it smaller, by removing some of the data from it.

## Types of compression

Depending on whether the original file can be perfectly reconstructed from the
compressed version or not, there are two types of compression:
- [Lossy compression](/lossy-compression)
- [Lossless compression](/lossless-compression)

## Benefits of compression

Compressing a file makes it smaller: there are two main benefits to this:
- It takes up less storage space on our hard drive.
- If we're sending/receiving it over the internet, it will take less time and
  bandwidth to transfer the file - that can sometimes save money, too!

## Drawbacks of compression

- If we use lossy compression, the original file can't be perfectly reconstructed
  from the compressed version - some data is lost. This can lead to a loss in
  quality, and if we compress it too much, it can look really bad.
- If we use lossless compression, the original file can be perfectly reconstructed,
  but often, it uses a lot of CPU power to compress and decompress the file,
  which can make it slow to work with (think if you've ever tried to extract a
  large zip / gzipped-tarball file - it can take a long time).
