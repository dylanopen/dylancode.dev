# Caesar cipher

A *Caesar cipher* is a super simple type of [cipher](/cipher) where we shift the
letters of the alphabet by a certain number of places. For example, if we shift
by 3, then A becomes D, B becomes E, C becomes F, and so on.

## Mathematical function

$$
E(x) = (x + k) \mod 26
$$

- $E(x)$ is the encryption function, which takes a letter (represented as a
  number from 0 to 25) and produces the ciphertext letter.
- $x$ is the plaintext letter, represented as a number from 0 to 25 (where A=0,
  B=1, ..., Z=25).
- $k$ is the key, which is the number of positions we shift the letters by. It
  can be any whole number from 0 to 25.

## Decryption function

To decrypt a message encrypted with a Caesar cipher, we can use this:

$$
D(y) = (y - k) \mod 26
$$

As you can see, all we do is *subtract* the key from the encrypted character, to
find the plaintext letter.

## Why is it so easy to crack?

The Caesar cipher isn't used in any real encryption schemas, because it's so
insecure. The main reasons for that are:
- There are only 26 possible keys (shifts), so an attacker can easily try all of
  them to see which one produces a readable message.
- It doesn't change the frequency of letters, so if you analyze the frequency of
  letters in the ciphertext, you can easily guess the key by looking at the most
  common letters (e.g., if 'G' is the most common letter in the ciphertext, it's
  likely that the key is 2, as 'E' is the most common letter in English text,
  so shifting back by 2 would give you 'E' as the most common).

## Examples

### Encrypt the text "HELLO" with a pad (key) of 3

We can first write out a table of the letters and their corresponding encrypted
form:

```
Plain:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cipher: DEFGHIJKLMNOPQRSTUVWXYZABC
```

Then we can encrypt each letter of "HELLO":
- H (7) becomes K (10)
- E (4) becomes H (7)
- L (11) becomes O (14)
- L (11) becomes O (14)
- O (14) becomes R (17)

So our final encrypted message is "KHOOR".

*You may already be able to see an issue - we can immediately see there is a
double letter in the 3rd and 4th positions of the word, which may help us crack
the cipher!*

### Decrypt the text "KHOOR" with a pad (key) of 3

Obviously, we know what our answer will be, but let's go through the decryption
process to check it works!

With a pad of 3, we can get from the encrypted letter to the plaintext letter by
subtracting 3 from the encrypted letter's position in the alphabet:

```
Cipher: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Plain:  DEFGHIJKLMNOPQRSTUVWXYZABC
```

Then we can decrypt each letter of "KHOOR":
- K (10) becomes H (7)
- H (7) becomes E (4)
- O (14) becomes L (11)
- O (14) becomes L (11)
- R (17) becomes O (14)

So our final decrypted message is "HELLO", which is what we started with!
