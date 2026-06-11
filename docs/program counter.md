# Program counter

> The program counter is a [[register]] in the [[processor]] that keeps track of the [[addressable memory|memory address]] of the next instruction to be executed. It's sometimes also called the instruction pointer.

It's used to keep track of where the [[processor]] is in the program it's executing. When the [[processor]] fetches an instruction from memory, it uses the program counter to know which instruction to fetch next.

Just after we fetch the instruction from memory, we *increment* the program counter, so that it points to the next instruction for the next cycle. This way, the [[processor]] can keep executing instructions one after another.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Program counter (PC) | Register in the processor that stores the memory address of the next instruction to be executed. |
| What is another name for the program counter? | Instruction pointer. |
| What happens to the program counter just after an instruction is fetched? | It is incremented to point to the next instruction for the next cycle. |
| How does the processor know which instruction to fetch next? | It uses the address stored in the program counter. |

