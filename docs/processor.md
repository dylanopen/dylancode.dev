# Processor

> The **processor** is the part of the computer that fetches, decodes and
> executes a program's instructions.

It's the 'brain' of the computer, because it's the part that tells all the other
components what to do.

## Role of the processor

- Executing the instructions of a program
  - It does this with the [[fetch-execute cycle|fetch-decode-execute cycle]]
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

See: [[processor core]].

## What's a processor made of?

Processors are made of tiny *transistors*, which are like tiny switches that can
be turned on or off. The transistors are arranged so that they produce [](logic-gate), which are the building blocks of the processor - we
combine logic gates together to make more complex circuits.

## Parts of the processor

- [[control unit|Control unit]]: This is the part of the processor that fetches
  instructions from memory, decodes them, and tells the other parts of the
  processor what to do.
- [[arithmetic logic unit|Arithmetic logic unit (ALU)]]: This is the part of the processor
  that performs maths and [[boolean]] logic operations, like addition, [[subtraction]],
  AND, OR, etc.
- [[register|Registers]]: These are small, fast storage locations within the
  processor, where it can store data and instructions that it's currently
  working on. They're much faster than the [[main memory]], so the processor can
  access them quickly.
- [[processor cache|Cache]]: This is a small amount of very fast memory that's built into
  the processor. It's used to store frequently accessed data and instructions,
  so the processor can access them quickly without having to go to the main
  memory. It's like a 'shortcut' for the processor to access data it needs
  quickly.
- [[processor clock|Clock]]: This is a tiny circuit that generates an on and off
  signal, lots of times per second at a regular frequency, which
  is used to synchronise the operations of the processor. It basically tells
  the processor when to do things, and how fast to do them. The [[speed]] of the
  clock is measured in hertz (Hz), and it tells us how many instructions the
  processor can execute per second.
- [[computer bus|Bus]]: This is a set of wires that connects the different parts of
  the processor together, and allows them to communicate with each other. It
  carries data, instructions, and control signals between the different parts
  of the processor.

See [[processor components]].

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the role of the processor? | It is the 'brain' of the computer, fetching, decoding, and executing a program's instructions, managing resources, handling user input, and connecting all components together. |
| What cycle does the processor use to execute instructions? | The fetch-decode-execute cycle (also called the fetch-execute cycle). |
| What does it mean for a processor to be multi-threaded? | It can carry out multiple instructions at the same time if the program allows it. |
| What is parallel processing? | When a processor has multiple cores, which is essentially many processors connected together working simultaneously. |
| What are transistors in a processor? | Tiny switches that can be turned on or off; they are arranged to form logic gates. |
| What does the Control Unit (CU) do? | It fetches instructions from memory, decodes them, and tells other parts of the processor what to do. |
| What does the Arithmetic Logic Unit (ALU) do? | It performs mathematical and boolean logic operations like addition, subtraction, AND, and OR. |
| What are registers? | Small, fast storage locations within the processor for data and instructions currently being worked on, faster than main memory. |
| What is the processor cache? | A small amount of very fast memory built into the processor to store frequently accessed data/instructions, acting as a shortcut so the processor doesn't have to access main memory as often. |
| What is the function of the processor clock? | It generates a regular on/off signal at a set frequency to synchronise the processor's operations, measured in hertz (Hz), indicating how many instructions per second can be executed. |
| What is a computer bus? | A set of wires that connects different parts of the processor, carrying data, instructions, and control signals for communication. |

