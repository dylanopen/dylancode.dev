# Fetch-execute cycle

The fetch-execute cycle (or fetch-decode-execute cycle) is the way that a processor executes a program's instructions.

The cycle has three main stages:
1. Fetch data from memory
2. Decode the instruction
3. Execute the instruction

## Fetch 

- The first thing it does is to actually *read the instruction* it needs to execute.
- It does this by copying the *program counter* (which stores the current memory address of the next instruction) into the *memory address register* (MAR), which is used to access memory.
- Then, it copies that address onto the [address bus](/address-bus), which it then carries to the [main memory](/main-memory).
- The memory then returns the instruction stored at that address, which is copied into the *memory buffer register* (MBR).
- Finally, the instruction is copied from the MBR into the *current instruction register* (CIR), which is where the processor holds the instruction it's currently executing.
- The processor also increments the program counter, so that it points to the next instruction for the next cycle.

## Decode

- Sure, the processor now has the raw instruction in its CIR, but how does it know what to do with it? The instruction needs to be *decoded*.
- Decoding the instruction means that we take the raw instruction and figure out what operation it represents, and what data it needs to operate on.
- For example, we may look at an ADD instruction and decode it to mean "add the values in registers A and B, and store the result in register C".

## Execute

- Once the instruction has been decoded, the processor can execute it.
- THat usually means sending signals to the parts of the processor (or the rest of the computer) that need to be involved in carrying out the instruction.
- For example, if the instruction is an ADD instruction, the processor would send signals to the [arithmetic logic unit](/arithmetic-logic-unit) (ALU) to perform the addition, and then send signals to the registers to store the result.
- Often, it involves fetching or writing data to memory.

## How frequently does this happen?

Processors have a [clock](/processor-clock) that ticks at a certain frequency (measured in hertz). Each tick of the clock represents one cycle, and during each cycle, the processor can carry out one fetch-decode-execute cycle. So, if a processor has a clock speed of 3 GHz, it can carry out 3 billion fetch-decode-execute cycles per second!

Look at the [clock speed](/clock-speed) to see how quickly it does the fetch-execute cycle.
