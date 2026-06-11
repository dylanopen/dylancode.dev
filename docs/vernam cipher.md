# Vernam cipher

> The **Vernam [[cipher]]** uses a [[one time pad]] to encrypt
> messages. We XOR each character in the plaintext message with the
> corresponding character in the one-time pad to produce the ciphertext
> character.

For example, if the plaintext message is "HELLO" and the one-time pad is
"XMCKL", we can encrypt the message as follows:

| Plaintext | H | E | L | L | O |
|-----------|---|---|---|---|---|
| Pad       | X | M | C | K | L |
| Ciphertext| ? | ? | ? | ? | ? |

To encrypt each character, we can convert the letters to their [[ascii]] values and
then XOR them:
- H (72) XOR X (88) = 16
- E (69) XOR M (77) = 8
- L (76) XOR C (67) = 15
- L (76) XOR K (75) = 7
- O (79) XOR L (76) = 3

So the ciphertext would be the characters corresponding to the [[ascii]] values 16,
8, 15, 7, and 3.

## Decryption

Decrypting a message encrypted with the Vernam [[cipher]] is exactly the same
process as encrypting it! We XOR the ciphertext character with the corresponding
character in the one-time pad, which gives us the [[ascii]] value of the original
plaintext character.

For example, if we have the ciphertext characters corresponding to the [[ascii]]
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
for multiple messages, then the Vernam [[cipher]] is considered to be unbreakable
(assuming nobody else gets access to the one-time pad). This is because each
character in the plaintext message is encrypted with a different key, so there
is no way to analyse patterns in the ciphertext to try to crack the key.

## Issues 

The main issues really come from the fact that it uses a [[one time pad|one-time pad]], which can be difficult to distribute securely. How do you share the OTP with only the intended recipient without it being intercepted by an attacker?

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What cipher uses a one time pad to encrypt messages? | The Vernam cipher. |
| In the Vernam cipher, how do you combine each plaintext character with the corresponding one-time pad character? | We XOR each character in the plaintext message with the corresponding character in the one-time pad. |
| What is the ASCII value of 'H'? | 72 |
| What is the ASCII value of 'X'? | 88 |
| What is the result of 72 XOR 88? | 16 |
| What is the result of 69 XOR 77? | 8 |
| What is the result of 76 XOR 67? | 15 |
| What is the result of 76 XOR 75? | 7 |
| What is the result of 79 XOR 76? | 3 |
| How do you decrypt a message encrypted with the Vernam cipher? | We XOR the ciphertext character with the corresponding character in the one-time pad, which gives us the ASCII value of the original plaintext character. |
| What is the result of 16 XOR 88? | 72 (the ASCII value of 'H') |
| What is the result of 8 XOR 77? | 69 (the ASCII value of 'E') |
| What is the result of 15 XOR 67? | 76 (the ASCII value of 'L') |
| What is the result of 7 XOR 75? | 76 (the ASCII value of 'L') |
| What is the result of 3 XOR 76? | 79 (the ASCII value of 'O') |
| Under what conditions is the Vernam cipher considered unbreakable? | If we use it with a truly random one-time pad, and we never reuse the same pad for multiple messages. |
| Why does the Vernam cipher prevent pattern analysis in ciphertext? | Because each character in the plaintext message is encrypted with a different key. |
| What is the main practical issue with the Vernam cipher? | Using a one-time pad can be difficult to distribute securely. |
| What is the key security question about sharing the one-time pad? | How do you share the OTP with only the intended recipient without it being intercepted by an attacker? |

