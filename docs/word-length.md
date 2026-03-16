# Word length

> The *word length* is the size of data that a processor can process at once.

Some common word lengths are:
- 8 bits (1 byte)
- 16 bits (2 bytes)
- 32 bits (4 bytes)
- 64 bits (8 bytes)

## How word length affects performance

Generally, the larger the word length, the more data the processor can process at once, which can lead to better performance. For example, a 64-bit processor can process 64 bits of data at once, while a 32-bit processor can only process 32 bits of data at once.

There are loads of other [factors affecting processor performance](processor-performance) - word length is just one of them.

## Word length and memory addressing

The word length also affects how much memory a processor can address. For example, a 32-bit processor can only address up to 4 GB of memory (2^32 bytes), while a 64-bit processor can address up to 16 exabytes of memory (2^64 bytes). That's because memory is addressed using a word, so the larger the word length, the more memory addresses there are available.

Usually, the word length is the same as the [data bus](data-bus) and [address bus](address-bus)' [width](bus-width). For example, a 64-bit processor will usually have a 64-bit data bus and a 64-bit address bus, which means it can transfer 64 bits of data at once.
