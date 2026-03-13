---
title: Decryption
---

> **Decryption** is the opposite of [encryption](/encryption) - it's where we
> take the *ciphertext* and use a *reverse cipher* - usually using an
> encryption key - to produce the *plaintext*.

## The encryption key

We need a key. That's because, to do the reverse of the encryption
function, we need to know the 'secret' part of the function, which will allow
only the person with the key to decode it.

## Decryption functions

The decryption function is the reverse of the encryption function. For example,
if the encryption function is:

```
E(x) = (x + 3) mod 26
```

(This effectively shifts the letters of the alphabet by 3 places, so A becomes D, B becomes E, etc. It's known as a Caesar cipher - you'll see it soon!)

Then the decryption function would be:

```
D(y) = (y - 3) mod 26
```

This means that if we have the ciphertext 'D', which corresponds to 3 (since A=0, B=1, C=2, D=3), we can apply the decryption function:

```
D(3) = (3 - 3) mod 26 = 0
```

The important thing to see is the `3`. In an encryption scheme, this would be
the key - it could change and be any number, and only someone with the key would
be able to decrypt the message (in theory, this cipher is incredibly insecure).

