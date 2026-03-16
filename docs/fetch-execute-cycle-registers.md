# Fetch-execute cycle registers

During the [fetch-execute cycle](/fetch-execute-cycle), the processor uses the [processor registers](/processor-registers) to hold data and addresses that it needs to access memory and execute instructions.

- During the fetch stage:
    - The [program counter](/program-counter) holds the address of the next instruction to be fetched from memory.
    - We copy the program counter into the [memory address register](/memory-address-register) (MAR).
    - The processor fetches the instruction from memory at the address in the MAR, and stores that instruction in the [current instruction register](/current-instruction-register) (CIR).
    - The program counter is incremented so it points to the next instruction for the next cycle.
- During the execute stage:
    - The processor might request to read some memory from the [main memory](/main-memory), and it will use the [MAR](/memory-address-register) to hold the address of the memory it wants to read from, and the [memory buffer register](/memory-buffer-register) (MBR) to hold the data that it reads from memory.
    - Or, it might want to write some data to memory, and it will use the MAR to hold the address of where it wants to write, and the MBR to hold the data that it wants to write to memory.
