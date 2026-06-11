# Main memory

> The **main memory** is the part of the computer that stores the program and
> data that the [[processor]] is currently using. It's also called RAM (Random
> Access Memory) or primary memory.

The main memory is like a big 'workspace' for the [[processor]], where it can store
the program and data that it's currently working on. It's much faster than the
secondary storage (like a hard drive), but it's also much smaller, so it can
only hold a smaller amount of data at a time - depending on how much RAM you
have.

## Role of main memory

- Storing the program and data that the [[processor]] is currently using
- Storing [[cs/variables|variables]] and other data that the program needs to access quickly
- Storing the results of calculations that the [[processor]] has done, so they can
  be accessed later
- Storing the stack, which is a special area of memory that the [[processor]] uses
  to keep track of function calls, primitive [[cs/data types|data types]], pointers, and other
  important data.
- Storing the heap, which is a special area of memory that the [[processor]] uses to
  store dynamically allocated data, like objects and arrays (as well as strings)
  that are created at runtime.
- Storing the program's machine code, so the [[processor]] can fetch and execute it.

## How main memory works

RAM is made up of billions of tiny 'memory cells'. They're like boxes, which
can store usually a single *word* (32 bits) or *double word* (64 bits) of data,
or an instruction (the size of the box depends on the architecture of the
computer, e.g. i386 is 32-[[bit]], while x86-64 is 64-[[bit]]).

## Volatility

RAM is *volatile* - that means that, when we cut the [[power]] to the computer,
like when we shut it down, all the data stored in RAM is lost. That's just
because of the way RAM is designed.

If we want to store data permanently, we need to use a different type of memory,
[[secondary storage]], like a hard drive or an SSD, which is
non-volatile, so it can keep the data even when the [[power]] is off.

## Memory addressing

Each memory cell has a unique address, which is like its 'location' in memory.
The [[processor]] uses these addresses to access the data and instructions stored in
memory. When it needs to access a particular piece of data or instruction, it
sends the address to the memory, and the memory returns the data or instruction
stored at that address.

## Memory management

The CPU manages memory - it keeps track of which parts of memory are being used
by which program, and then it *allocates* and *deallocates* memory as needed.

When a program needs to store some data, it requests memory from the CPU, and
the CPU finds a free block of memory and allocates it to the program.

When the program is done with that memory, it can deallocate it, which means that the CPU marks it as free again, so it can be used by other programs.

## RAM amount

Having more RAM doesn't make a computer faster by itself. It just means that the computer can store more data and instructions in memory at the same time, which can help it run more smoothly if you're running a lot of programs at once, or if you're working with large files. But if you have a lot of RAM but a slow [[processor]], then the computer will still be slow, because the [[processor]] is the part that actually executes the instructions.

However, having more RAM *does* [[mean]] that:
- The [[processor]] and programs have to do less **garbage collection**, which is the process of finding and freeing up memory that's no longer being used by the program. This can help improve performance, because garbage collection can  halt a program (make it seem like it isn't responding) while it's happening.
- The [[processor]] can store more data and instructions in memory at the same time, which can help it run more smoothly if you're running a lot of programs at once, or if you're working with large files. This is because the [[processor]] can access data and instructions stored in RAM much faster than it can access data stored on a hard drive or other secondary storage device. So if you have more RAM, the [[processor]] can access more data and instructions quickly, which can help improve performance.
- It needs to use less **virtual memory**, which is a technique that allows the computer to use a portion of the hard drive as if it were RAM, when the physical RAM is full. This can help improve performance, because accessing data stored in virtual memory is much slower than accessing data stored in physical RAM. So if you have more RAM, the [[processor]] can store more data and instructions in physical RAM, which can help reduce the need to use virtual memory, and improve performance.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is main memory also called? | RAM (Random Access Memory) or primary memory. |
| What does main memory store? | The program and data that the processor is currently using. |
| What is the role of main memory in storing variables? | Storing variables and other data that the program needs to access quickly. |
| What area of memory does the processor use to keep track of function calls? | The stack. |
| What area of memory stores dynamically allocated data like objects? | The heap. |
| How does the processor execute a program's instructions from main memory? | It fetches and executes the program's machine code stored in main memory. |
| What is a memory cell? | A tiny box that stores a single word (32 bits) or double word (64 bits) of data or an instruction. |
| What determines the size of a memory cell? | The architecture of the computer (e.g., 32-bit vs 64-bit). |
| What does "volatile" mean in the context of RAM? | All data in RAM is lost when power to the computer is cut. |
| Why do we need secondary storage? | To store data permanently because RAM is volatile. |
| What is a memory address? | A unique 'location' of a memory cell that the processor uses to access data and instructions. |
| How does the processor access a particular piece of data in memory? | It sends the address to the memory, and the memory returns the data stored at that address. |
| What does the CPU do when a program needs to store data? | It finds a free block of memory and allocates it to the program. |
| What happens when a program deallocates memory? | The CPU marks it as free again, so it can be used by other programs. |
| What does having more RAM allow the computer to do? | Store more data and instructions in memory at the same time. |
| Why does having more RAM reduce garbage collection? | The processor and programs have to do less finding and freeing of unused memory, which can prevent program halts. |
| Why does more RAM reduce the need for virtual memory? | More data and instructions can be stored in physical RAM, reducing the need to use slower hard drive space as RAM. |
| What is virtual memory? | A technique that allows the computer to use a portion of the hard drive as if it were RAM when physical RAM is full. |

