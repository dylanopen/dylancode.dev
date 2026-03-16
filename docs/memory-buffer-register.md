# Memory buffer register

> The memory buffer register (MBR) is a [register](/register) in the [processor](/processor) that holds the data that was read from memory, or the data that is going to be written to memory.

## Reading from memory

When the processor reads data from memory, it first loads the memory address of the data into the [memory address register](/memory-address-register) (MAR), and then fetches the data from memory at the address in the MAR.

Then, the RAM sends the data back to the processor, and the processor stores that data in the MBR.

## Writing to memory

When the processor writes data to memory, it first loads the memory address of where it wants to write the data into the MAR, and then loads the data it wants to write into the MBR.

Then, the processor sends both the address in the MAR and the data in the MBR to RAM, and RAM writes that data in the MBR to memory at that address.
