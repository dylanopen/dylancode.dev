# Processor core

## Number of cores

Modern processors have more than one CPU core - they're called *multithreaded* processors.

> If we have more cores, it means that the processor can work on more than one thing at a time - in **parallel**.

### Why doesn't doubling the number of cores double performance?

Because not every program can be split up into two processes identical in size, doubling the number of cores won't double the performance, because:
- there will always be some times where one core is waiting for another to finish
- some programs aren't built to take advantage of multiple cores.

Generally though, if we have more cores, the computer will run faster because it can run different programs at the same time. With a single-threaded processor, the operating system would have to divide the time it spends on each program, between the different programs.
