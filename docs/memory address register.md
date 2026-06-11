# Memory address register

Whenever the [[processor]] needs to read from or write to memory, it uses the [[memory address]] [[register]] (MAR) to hold the [[memory address]] that it wants to access.

> The [[memory address]] [[register]] stores the [[memory address]] that the [[processor]] wants to access (either to read from or write to).

It's used whenever we read or write to memory. For example, when we fetch an instruction from memory, we copy the [[program counter]] (which holds the address of the next instruction) into the MAR, and then use the MAR to access memory and fetch the instruction. Similarly, when we want to write data to memory, we copy the address we want to write to into the MAR, and then use the MAR to access memory and write the data.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| memory address register (MAR) | Holds the memory address the processor wants to access (to read from or write to). |
| When does the processor use the MAR? | Whenever the processor needs to read from or write to memory. |
| How is the MAR used during an instruction fetch? | The program counter (holding the address of the next instruction) is copied into the MAR, then the MAR is used to access memory and fetch the instruction. |
| How is the MAR used when writing data to memory? | The target address is copied into the MAR, then the MAR is used to access memory and write the data. |

