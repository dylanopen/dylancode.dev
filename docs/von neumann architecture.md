# Von Neumann architecture

> Von-Neumann's architecture is a type of [[stored program concept|stored program architecture]] where the instructions and data are stored in the same memory region. This means that the CPU can access both instructions and data using the same [[memory address]] space.

In practice, what this means is that we have a block of memory, and we can store both our program instructions, and the data ([[cs/variables|variables]] and constants) that the program operates on, in that same block of memory. The CPU fetches instructions from memory and executes them, and it can also read and write data to that same memory as needed.

## Separating the instructions from the data

Although they're stored in the same memory, we do need to make sure we don't accidentally treat data as instructions, or vice versa. To do this, we usually divide the memory into two main sections:
- The data section
- The instruction section

But the key thing to remember is that it's the same memory - we've just 'artificially' divided it in [[software]].

## Where is Von-Neumann used?

In pretty much every general-purpose computer. It's the standard way of creating [[general purpose computer|general-purpose computers]].

Some embedded systems also use Von-Neumann, but embedded systems are the most common use of the [[harvard architecture|Harvard architecture]].

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Von Neumann architecture | Type of stored program architecture where instructions and data are stored in the same memory region, allowing the CPU to access both using the same memory address space. |
| How does the CPU access instructions and data in Von Neumann architecture? | Using the same memory address space, as they are stored in the same block of memory. |
| How is confusion between instructions and data prevented in Von Neumann architecture? | The memory is artificially divided into two sections in software: the data section and the instruction section. |
| Where is Von Neumann architecture primarily used? | In virtually every general-purpose computer, as it is the standard way to create them. |
| Where is Harvard architecture more commonly used than Von Neumann? | In embedded systems; while some use Von Neumann, embedded systems are the most common use case for Harvard architecture. |

