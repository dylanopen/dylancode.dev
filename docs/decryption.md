# Decryption

> **Decryption** is the opposite of [[encryption]] - it's where we
> take the *ciphertext* and use a *reverse [[cipher]]* - usually using an
> [[encryption]] key - to produce the *plaintext*.

## The encryption key

We need a key. That's because, to do the reverse of the [[encryption]]
function, we need to know the 'secret' part of the function, which will allow
only the person with the key to decode it.

## Decryption functions

The decryption function is the reverse of the [[encryption]] function. For example,
if the [[encryption]] function is:

```
E(x) = (x + 3) mod 26
```

(This effectively shifts the letters of the alphabet by 3 places, so A becomes D, B becomes E, etc. It's known as a [[caesar cipher]] - you'll see it soon!)

Then the decryption function would be:

```
D(y) = (y - 3) mod 26
```

This means that if we have the ciphertext 'D', which corresponds to 3 (since A=0, B=1, C=2, D=3), we can apply the decryption function:

```
D(3) = (3 - 3) mod 26 = 0
```

The important thing to see is the `3`. In an [[encryption]] scheme, this would be
the key - it could change and be any number, and only someone with the key would
be able to decrypt the message (in theory, this [[cipher]] is incredibly insecure).

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Decryption | Decryption is the process of taking ciphertext and using a reverse cipher, usually with an encryption key, to produce plaintext. |
| Why do we need a key for decryption? | To do the reverse of the encryption function, we need to know the 'secret' part of the function, which will allow only the person with the key to decode it. |
| If the encryption function is $E(x) = (x + 3) \mod 26$, what is the decryption function? | The decryption function is $D(y) = (y - 3) \mod 26$. |
| In the example with ciphertext 'D' (where A=0, B=1, C=2, D=3) and the decryption function $D(y) = (y - 3) \mod 26$, what is the decrypted value? | $D(3) = (3 - 3) \mod 26 = 0$ |
| What does the '3' represent in the encryption function $E(x) = (x + 3) \mod 26$? | The '3' represents the key. It could change and be any number, and only someone with the key would be able to decrypt the message (in theory, though this cipher is incredibly insecure). |
| What is the relationship between the decryption function and the encryption function? | The decryption function is the reverse of the encryption function. |
| What type of cipher is $E(x) = (x + 3) \mod 26$ an example of? | It is an example of a Caesar cipher, which effectively shifts the letters of the alphabet by 3 places (A becomes D, B becomes E, etc.). |

