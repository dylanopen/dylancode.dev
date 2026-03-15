# Parity bit

Parity bits are a super simple way to check for an error when transferring
data over a network / cable.

THe idea is that we add an extra bit to the end of our data, which is called the
*parity bit*.

## What does the parity bit store?

This parity bit will tell the receiver whether the number of 1s in the group of
data is even or odd, through a single bit in each 'group' of data.

For example, if we have the data `1010`, we have two 1s, which is an even
number. So, depending on our convention, we could set the parity bit to 0 to
indicate that the number of 1s is even. If we had the data `1011`, we have three
1s, which is an odd number. So, we could set the parity bit to 1 to indicate
that the number of 1s is odd.

## How does the receiver use the parity bit?

When the receiver gets the data, it can count the number of 1s in the data and
compare it to the parity bit. If the parity bit says there should be an even
number of 1s, but the receiver counts an odd number, then it knows that something
went wrong during the transmission of the data.

It can ask the sender to send it again.

## Benefits of parity bits

- simple and easy to implement.
- Can usually detect single-bit errors (when one bit is flipped during
  transmission).
- Sometimes, for example, in ASCII, there is a 'free bit' in each character that
  can be used as a parity bit without needing to add extra bits to the data.

## Downsides of parity bits

- If two (or any even number of bits) are flipped, then the parity bit will
  still make it look like the data is correct, even though it's not. So, it
  can't detect all errors.
- It doesn't tell you which bit is wrong, just that something is wrong. So, it
  can't correct errors, just detect them.
- Like any ewrror detection method which sends more data, it means we need to
  send more data, so use more bandwidth. It can also make the data transfer
  slower.
- It doesn't help at all with security. It's only for detecting accidental
  errors, not malicious attacks by changing the data on purpose.

## Even parity

In *even* parity, the parity bit is a `0` if the number of `1`s in the data is
even, and a `1` if the number of `1`s is odd.

## Odd parity

In *odd* parity, the parity bit is a `1` if the number of `1`s in the data is
even, and a `0` if the number of `1`s is odd.
