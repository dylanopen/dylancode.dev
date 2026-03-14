---
title: Read-only memory
---

Read-only memory (ROM) is a type of memory that is used to store data that 
the computer needs to access quickly, but that doesn't ever change (except for
during a BIOS flash / update).

It's called 'read-only' because the data stored in ROM can't be changed by the
computer - it's 'read-only' data. That's the opposite of RAM, which is 
'read-write' memory, because the data stored in RAM can be changed by programs.

## Role of ROM

ROM stores the *firmware* of the computer, which is the software that is built
into the hardware of the computer, and that controls how the hardware works.

The main example you'll here is the **BIOS** (Basic Input/Output System), which 
is the firmware that controls the basic functions of the computer, and it's 
needed to boot up the computer. BIOS is stored in ROM.

*In reality, modern computers use a more advanced type of firmware called UEFI,
but the concept is the same - it's still stored in ROM, and it still controls
the basic functions of the computer.*

## Volatility

ROM is *non-volatile* - that means that, when we cut the power to the computer,
the data stored in ROM is not lost. It wouldn't be great if we lost the BIOS
every time we shut down the computer...

