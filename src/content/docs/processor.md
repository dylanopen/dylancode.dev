---
title: Processor
---

> The **processor** is the part of the computer that fetches, decodes and
> executes a program's instructions.

It's the 'brain' of the computer, because it's the part that tells all the other
components what to do.

## Role of the processor

- Executing the instructions of a program
  - It does this with the [fetch-decode-execute cycle](fetch-decode-execute-cycle)
- Managing the resources of the computer
- Handling user input, from the keyboard, mouse, etc.
- It basically connects all the other components together, and makes sure they
  work together to run the program.

## Multi-thread processors

Pretty much every modern processor is *multi-threaded*. That means that it can
be carrying out multiple instructions at the same time, if the program is
written to allow it.

If a processor has multiple cores, then it basically has lots of processors
connected together, so they can work at the same time. This is called
**parallel processing**.

## What's a processor made of?

Processors are made of tiny *transistors*, which are like tiny switches that can
be turned on or off. The transistors are arranged so that they produce [logic
gates](/logic-gates), which are the building blocks of the processor - we
combine logic gates together to make more complex circuits.

## Parts of the processor

- [Control unit](/control-unit): This is the part of the processor that fetches
  instructions from memory, decodes them, and tells the other parts of the
  processor what to do.
- [Arithmetic logic unit (ALU)](/alu): This is the part of the processor
  that performs maths and boolean logic operations, like addition, subtraction,
  AND, OR, etc.
- [Registers](/register): These are small, fast storage locations within the
  processor, where it can store data and instructions that it's currently
  working on. They're much faster than the main memory, so the processor can
  access them quickly.
- [Cache](/processor-cache): This is a small amount of very fast memory that's built into
  the processor. It's used to store frequently accessed data and instructions,
  so the processor can access them quickly without having to go to the main
  memory. It's like a 'shortcut' for the processor to access data it needs
  quickly.
- [Clock](/processor-clock): This is a tiny circuit that generates an on and off
  signal, lots of times per second at a regular frequency, which
  is used to synchronise the operations of the processor. It basically tells
  the processor when to do things, and how fast to do them. The speed of the
  clock is measured in hertz (Hz), and it tells us how many instructions the
  processor can execute per second.

