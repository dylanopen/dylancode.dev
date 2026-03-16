# Program counter

> The program counter is a [register](/register) in the [processor](/processor) that keeps track of the [memory address](/addressable-memory) of the next instruction to be executed. It's sometimes also called the instruction pointer.

It's used to keep track of where the processor is in the program it's executing. When the processor fetches an instruction from memory, it uses the program counter to know which instruction to fetch next.

Just after we fetch the instruction from memory, we *increment* the program counter, so that it points to the next instruction for the next cycle. This way, the processor can keep executing instructions one after another.
