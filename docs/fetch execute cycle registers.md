# Fetch-execute cycle registers

During the [[fetch-execute cycle|fetch-execute cycle]], the [[processor]] uses the [[processor registers]] to hold data and addresses that it needs to access memory and execute instructions.

- During the fetch stage:
    - The [[program counter]] holds the address of the next instruction to be fetched from memory.
    - We copy the [[program counter]] into the [[memory address register]] (MAR).
    - The [[processor]] fetches the instruction from memory at the address in the MAR, and stores that instruction in the [[current instruction register]] (CIR).
    - The [[program counter]] is incremented so it points to the next instruction for the next cycle.
- During the execute stage:
    - The [[processor]] might request to read some memory from the [[main memory]], and it will use the [[memory address register|MAR]] to hold the address of the memory it wants to read from, and the [[memory buffer register]] (MBR) to hold the data that it reads from memory.
    - Or, it might want to write some data to memory, and it will use the MAR to hold the address of where it wants to write, and the MBR to hold the data that it wants to write to memory.

## [[flashcards]]

| Question                                                                                                              | Answer                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In the [[fetch-execute cycle]], what do we do first with the [[program counter]]?                                     | Copy its value into the [[memory address register]].                                                                                                                            |
| What do we do *to* the program counter near the end of the **fetch** stage?                                           | Increment its value                                                                                                                                                             |
| Why do we increment the value of the program counter after the fetch stage?                                           | So that it points to the [[memory address]] of the next instruction to be executed.                                                                                             |
| What does the processor do after the value in the [[program counter]] is copied into the [[memory address register]]? | Fetches the data at that [[memory address]], stores the instruction first in the [[memory buffer register]], then copies that register to the [[current instruction register]]. |
| During the execute stage, what does the processor use the [[memory address register]] for?                            | To hold the **address** of memory it wants to read from or write to                                                                                                             |
| During the execute stage, what does the processor use the [[memory buffer register]] for?                             | To hold the **data** that it reads from memory or wants to write to memory.                                                                                                     |
