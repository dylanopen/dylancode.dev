# Majority voting

Majority voting, like [parity bits](/parity-bit), is a really simple way of
checking for errors during data transmission.

The idea is that, instead of just sending the data once, we send it multiple
times, and then the receiver can look at all the copies of the data and take a
'vote' on what the correct bit is likely to be.

## How does majority voting work?

- The data is sent multiple times
  - It must be an odd number of times, so that there is a clear majority
  - The data can be sent by sending each bit 3 times in a row, or by sending
    the whole data 3 times, or just sending a packet 3 times, etc. There are
    lots of ways it can be implemented.
- The receiver gets all the copies of the data, and for each bit, it looks at
  all the copies of that bit and takes a majority vote on what the correct bit
  is likely to be. If there are 2 `1` bits and 1 `0` bit, then the majority vote would be `1`. If there are 2 `0` bits and 1 `1` bit, then the majority vote would be `0`, etc.

## Example

Let's say we're sending the data `1010`. With majority voting, we might send it
something like this:

```
1010
1010
1010
```

If it's received as this:

```
1000
1011
0010
```

...then the receiver will look at each of the bits:
- For the first bit, we have `1`, `1`, and `0`. The majority vote is `1`, so we'd decode the first bit as `1`.
- For the second bit, we have `0`, `0`, and `0`. The majority vote is `0`, so we'd decode the second bit as `0`.
- For the third bit, we have `1`, `1`, and `1`. The majority vote is `1`, so we'd decode the third bit as `1`.
- For the fourth bit, we have `0`, `1`, and `0`. The majority vote is `0`, so we'd decode the fourth bit as `0`.

So we'd correctly decode the data as `1010`, even though actually *none* of the
individual copies of the data were correct. The majority voting allows us to
correct the errors and get the right data.

## Benefits of majority voting

- It can detect errors even if multiple bits are flipped, as long as the
  majority of the copies are correct. So, it can detect more errors than parity
  bits.
- It can also correct errors, not just detect them. Whatever the majority vote
  is, it is more likely to be correct than a single copy of the data.
- It's still pretty simple to implement, and doesn't require any complex algorithms
  like some other error detection/correction methods.
- It can be used in situations where we have a lot of bandwidth and can afford
  to send the data multiple times. Perhaps, over a superfast USB cable when
  transferring files between a computer and a hard drive.

## Downsides of majority voting

- It takes up *way* more bits, especially compared to [parity bits](/parity-bit).
  - If we send the data 3 times, then we're using 3 times as many bits.
  - If we send it 5 times, then we're using 5 times as many bits, etc.
  - So, it can be very inefficient in terms of bandwidth.
- It can also make the data transfer slower, since we have to send the data multiple times.
- Like any error detection/correction method, it doesn't help at all with security. It's only for detecting/correcting accidental errors, not malicious attacks by changing the data on purpose.
- It can only correct errors if the majority of the copies are correct. If more than half of the copies are wrong, then it will actually give us the wrong data. So, it's not perfect, and there are still some cases where it can fail to detect/correct errors.
  - It can actually *confidently* be wrong, if this happens.
- It doesn't tell us which bits were wrong, just what the majority vote is. So, it can't give us any information about where the errors occurred, just what the most likely correct data is.
