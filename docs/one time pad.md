# One-time pad

A *one-time pad* is a *key* used by a [[cipher]] that is as long as the
message that is being encrypted.

It is **only used once** (hence the name) and then we never use it again. That's
because if we reuse the same pad for multiple messages, it becomes much easier
to crack the [[encryption]].

We can then use each character in the pad to encrypt the corresponding character
in the plaintext message, using whatever [[encryption]] function the [[cipher]] uses.  
For example, the [[vernam cipher|Vernam cipher]] uses a one-time pad where each
character in the pad is XORed with the plaintext character to produce the
ciphertext character.

The fact that each character is encoded with a different key makes one-time pads
very secure, as long as the pad is truly random and kept secret. However, the
main challenge with one-time pads is that they can be difficult to actually
*distribute* - how does the receiver get the pad without it being intercepted by
an attacker?

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a one-time pad in cryptography? | A *key* used by a cipher that is as long as the message being encrypted. |
| Why is a one-time pad only used once? | Because if we reuse the same pad for multiple messages, it becomes much easier to crack the encryption. |
| How is each character in a one-time pad used to encrypt the plaintext? | Each character in the pad encrypts the corresponding character in the plaintext message using whatever encryption function the cipher uses. |
| How does the Vernam cipher use a one-time pad? | Each character in the pad is XORed with the plaintext character to produce the ciphertext character. |
| What makes one-time pads very secure? | The fact that each character is encoded with a different key, as long as the pad is truly random and kept secret. |
| What is the main challenge with using one-time pads? | They can be difficult to actually *distribute* - how does the receiver get the pad without it being intercepted by an attacker? |

