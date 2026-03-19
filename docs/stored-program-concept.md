# Stored program concept

There are two main types of computer systems:
- [general-purpose computers](/general-purpose-computer) - which use the stored program concept
- [embedded systems](/embedded-system)

General-purpose computers are designed to be able to run loads of different things - depending on the programs we install and run on them. Because they *store* a *program* which they run, we often call these *stored program computers*.

> In a stored program computer, instructions are stored in [[main-memory]].  
> Instructions are [fetched, decoded and executed](fetch-execute-cycle) one-by-one ([[serial]]ly) by the [[processor]].  
> Programs can be moved in and out of main memory.

## Types of stored program architecture

Based on the way the instructions and data are laid out in memory, we can categorise stored program architectures into two main types:
- [Von-Neumann architecture](von-neumann-architecture)
- [Harvard architecture](harvard-architecture)

## Memory storage

Because we need to store the instructions and the data somewhere, we need a way to lay out the memory. This is where [addressable memory](/addressable-memory) comes in. We can give each byte (or group of bytes) in memory a unique address, and we can use those addresses to read and write data to certain locations in memory.
