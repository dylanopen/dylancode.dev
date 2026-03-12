---
title: Digital sampling
---

When we *sample* an analogue signal, we take measurements of the analogue signal
at regular intervals.  
That means that we measure the **amplitude** of the analogue signal every, say,
1/44,100th of a second. We then convert those measurements each into a digital
signal, which gives us a digital 'equivalent' of the analogue signal.

It's not exactly the same as the original analogue signal, but it's a close approximation.

## Improving quality

- If we take more samples (measure the analogue signal more frequently), we get
  a better approximation of the original analogue signal, but it takes up more
  storage space.
- If we store each analogue signal measurement using more bits, we can represent
  more values, which gives us a better approximation of the original analogue
  signal, but again, takes up more storage space.
- Sometimes, we can use a better algorithm to convert the analogue signal into a
  more accurate digital signal. They can take more processing power, in cases,
  though.

## Sample rate

The sample rate is just the number of samples we take per second.

FOr example, CD quality audio has a sample rate of 44,100 samples per second.
That means that every second, we've taken 44,100 measurements of the analogue
signal, and converted those into a digital signal.

The higher the sample rate, the better the quality of the digital signal, but it
also takes up more storage.

## Bit depth

The bit depth is the number of bits we use to store each sample.

For example, CD quality audio has a bit depth of 16 bits. That means that each
sample is stored using 16 bits, which allows us to represent 2^16 = 65,536
different values for each sample.

