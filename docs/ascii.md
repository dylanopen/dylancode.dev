# ASCII

ASCII is one specific [text encoding](/text-encoding) scheme.

It was one of the first text encoding schemes that came about.

## How many bits?

ASCII can store 128 different characters. That means we need to use 7 bits to
store each character, because $2^7 = 128$.

## ASCII character codes

The ASCII character code for 'A' is 65, and the ASCII character code for 'a' is
97. If we include numbers, the character '0' has the ASCII character code 48.

From that, you can work out all the other letters, because they are sequential!

The code for 'B' is 66, 'C' is 67, and so on. The code for 'b' is 98, 'c' is
99, and again, so on. That's one of the reasons ASCII is nice to work with!

## Benefits of ASCII

- It's simple and easy to understand.
- It's very widely supported and used almost everywhere
- It can represent all the basic English letters, numbers and symbols.
- It only takes up 7 bits per character (minimum, it can be stored in 8 bits
  or more depending on the implementation)
- If you look at *any* successive 7 bits, you know exactly which character it
  represents. With UTF-8, for example, not all characters are represented by
  the same number of bits.
  - This is an important one. Think of when you want to 'substring' a string
    when programming: with ASCII strings, we know *exactly* where the nth
    character is, just by adding an offset to the start of the string.
  - With UTF-8, we can't do that, because we don't know how many bits each
    character is represented by. So we have to read through the string from
    the start to find the nth character.

## Drawbacks of ASCII

- It can only represent 128 characters, which is not enough for many languages
  and symbols.
- Event extended-ASCII which uses 8 bits can only represent 256 characters,
  which is still not enough for many languages and symbols.
- It wasn't really built for non-English languages
- We're stuck with the characters we've got - there's no way to add more
  characters to ASCII, like we can do with unicode!
