# Vernam cipher

> The **Vernam cipher** uses a [one time pad](/one-time-pad) to encrypt
> messages. We XOR each character in the plaintext message with the
> corresponding character in the one-time pad to produce the ciphertext
> character.

For example, if the plaintext message is "HELLO" and the one-time pad is
"XMCKL", we can encrypt the message as follows:

| Plaintext | H | E | L | L | O |
|-----------|---|---|---|---|---|
| Pad       | X | M | C | K | L |
| Ciphertext| ? | ? | ? | ? | ? |

To encrypt each character, we can convert the letters to their ASCII values and
then XOR them:
- H (72) XOR X (88) = 16
- E (69) XOR M (77) = 8
- L (76) XOR C (67) = 15
- L (76) XOR K (75) = 7
- O (79) XOR L (76) = 3

So the ciphertext would be the characters corresponding to the ASCII values 16,
8, 15, 7, and 3.

## Decryption

Decrypting a message encrypted with the Vernam cipher is exactly the same
process as encrypting it! We XOR the ciphertext character with the corresponding
character in the one-time pad, which gives us the ASCII value of the original
plaintext character.

For example, if we have the ciphertext characters corresponding to the ASCII
values 16, 8, 15, 7, and 3, and we know the one-time pad is "XMCKL", we can
decrypt it as follows:
- 16 XOR X (88) = H (72)
- 8 XOR M (77) = E (69)
- 15 XOR C (67) = L (76)
- 7 XOR K (75) = L (76)
- 3 XOR L (76) = O (79)

So we would recover the original plaintext message "HELLO".

## Security

IF we use it with a truly random one-time pad, and we never reuse the same pad
for multiple messages, then the Vernam cipher is considered to be unbreakable
(assuming nobody else gets access to the one-time pad). This is because each
character in the plaintext message is encrypted with a different key, so there
is no way to analyse patterns in the ciphertext to try to crack the key.

## Issues 

The main issues really come from the fact that it uses a [one-time pad](/one-time-pad), which can be difficult to distribute securely. How do you share the OTP with only the intended recipient without it being intercepted by an attacker?
