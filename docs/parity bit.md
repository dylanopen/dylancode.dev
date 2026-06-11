# Parity bit

Parity bits are a super simple way to check for an error when transferring
data over a network / cable.

THe idea is that we add an extra [[bit]] to the end of our data, which is called the
*parity [[bit]]*.

## What does the parity bit store?

This parity [[bit]] will tell the receiver whether the number of 1s in the group of
data is even or odd, through a single [[bit]] in each 'group' of data.

For example, if we have the data `1010`, we have two 1s, which is an even
number. So, depending on our convention, we could set the parity [[bit]] to 0 to
indicate that the number of 1s is even. If we had the data `1011`, we have three
1s, which is an odd number. So, we could set the parity [[bit]] to 1 to indicate
that the number of 1s is odd.

## How does the receiver use the parity bit?

When the receiver gets the data, it can count the number of 1s in the data and
compare it to the parity [[bit]]. If the parity [[bit]] says there should be an even
number of 1s, but the receiver counts an odd number, then it knows that something
went wrong during the transmission of the data.

It can ask the sender to send it again.

## Benefits of parity bits

- simple and easy to implement.
- Can usually detect single-[[bit]] errors (when one [[bit]] is flipped during
  transmission).
- Sometimes, for example, in [[ascii]], there is a 'free [[bit]]' in each character that
  can be used as a parity [[bit]] without needing to add extra bits to the data.

## Downsides of parity bits

- If two (or any even number of bits) are flipped, then the parity [[bit]] will
  still make it look like the data is correct, even though it's not. So, it
  can't detect all errors.
- It doesn't tell you which [[bit]] is wrong, just that something is wrong. So, it
  can't correct errors, just detect them.
- Like any ewrror detection method which sends more data, it means we need to
  send more data, so use more [[bandwidth]]. It can also make the data transfer
  slower.
- It doesn't help at all with security. It's only for detecting accidental
  errors, not malicious attacks by changing the data on purpose.

## Even parity

In *even* parity, the parity [[bit]] is a `0` if the number of `1`s in the data is
even, and a `1` if the number of `1`s is odd.

## Odd parity

In *odd* parity, the parity [[bit]] is a `1` if the number of `1`s in the data is
even, and a `0` if the number of `1`s is odd.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Parity bit | An extra [[bit]] added to the end of a group of data during transmission, used to detect errors by indicating whether the number of 1s in the data is even or odd. |
| What does a parity bit store? | A single [[bit]] that tells the receiver whether the number of 1s in the data group is even or odd. |
| How does the receiver use the parity bit? | The receiver counts the number of 1s in the data and compares it to the parity [[bit]]. If they don't match (e.g., parity says even but count is odd), an error is detected and the receiver can ask the sender to resend. |
| What is a benefit of using parity bits? | They are simple and easy to implement, and can usually detect single-[[bit]] errors (when one bit is flipped during transmission). In [[ascii]], the 'free bit' in each character can serve as a parity bit. |
| What is a downside of parity bits? | If an even number of bits (e.g., two) are flipped, the parity [[bit]] will still appear correct, so the error is undetected. |
| Does a parity bit indicate which bit is wrong? | No, it only indicates that something is wrong. It cannot correct errors, only detect them. |
| How does adding a parity bit affect bandwidth? | It requires sending more data (the extra parity bit), which uses more [[bandwidth]] and can make data transfer slower. |
| Does a parity bit provide security? | No, it only detects accidental errors, not malicious attacks that intentionally change the data. |
| Even parity rule | The parity [[bit]] is `0` if the number of `1`s in the data is even, and `1` if the number of `1`s is odd. |
| Odd parity rule | The parity [[bit]] is `1` if the number of `1`s in the data is even, and `0` if the number of `1`s is odd. |

