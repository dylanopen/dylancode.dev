# Addressable memory

> Addressable memory is a way we can lay out the memory in a computer so that we can access it using [[memory-address]]es. Each piece of data or instruction is stored at a specific address in memory, and we can use that address to read or write data.

For example, if we have a memory with 8 bytes, we can label each byte with an address, like this:

| Address | Data |
| ------- | ---- |
| 0x00    | H    |
| 0x01    | E    |
| 0x02    | L    |
| 0x03    | L    |
| 0x04    | O    |

In this example, we have a total of 5 bytes stored in [[main-memory]]. Each [[byte]] has a unique address (0x00, 0x01, etc.) that we can use to access it. So if we want to read the data at address 0x02, we would get the value 'L'. If we want to write a new value to address 0x03, we can do that as well.

## Giving programs their own memory

In a modern [general-purpose computer](/general-purpose-computer), we can have loads of different programs running at the same time. Each program needs its own memory to store its data and instructions.

We need to make sure we divide the memory in a way that each program can only access its own memory, and not the memory of other programs - it would be bad if one program could read or write the data of another program without permission!

The [operating system](/operating-system) is responsible for managing this. It creates separate memory spaces for each program, and it uses a technique called [virtual memory](/virtual-memory) to give each program the illusion that it has its own private memory, even though it's actually sharing the physical memory with other programs.

## Memory addresses

A memory address is just the number we give to represent a location in memory. It's like a label that we can use to refer to a specific byte or group of bytes in memory.

## Address size

Based on the size of the [address bus](/address-bus), we can determine how many unique memory addresses we can have.

For example, if we have a 32-bit address bus, we can have 2^32 unique addresses, which means we can address up to 4 GB of memory. If we have a 64-bit address bus, we can have 2^64 unique addresses, which means we can address up to 16 exabytes of memory (which is probably enough for a while). 
