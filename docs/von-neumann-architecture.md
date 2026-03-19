# Von-Neumann architecture

> Von-Neumann's architecture is a type of [stored program architecture](stored-program-concept.md) where the instructions and data are stored in the same memory region. This means that the CPU can access both instructions and data using the same memory address space.

In practice, what this means is that we have a block of memory, and we can store both our program instructions, and the data (variables and constants) that the program operates on, in that same block of memory. The CPU fetches instructions from memory and executes them, and it can also read and write data to that same memory as needed.

## Separating the instructions from the data

Although they're stored in the same memory, we do need to make sure we don't accidentally treat data as instructions, or vice versa. To do this, we usually divide the memory into two main sections:
- The data section
- The instruction section

But the key thing to remember is that it's the same memory - we've just 'artificially' divided it in software.

## Where is Von-Neumann used?

In pretty much every general-purpose computer. It's the standard way of creating [general-purpose computers](/general-purpose-computer).

Some embedded systems also use Von-Neumann, but embedded systems are the most common use of the [Harvard architecture](/harvard-architecture).
