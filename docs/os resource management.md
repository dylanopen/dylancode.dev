# OS resource management

One of the roles of the [[operating system]] is to *manage system resources*.

These system resources include:
- CPU time
- Memory (RAM)
- Storage (disk space)
- Network [[bandwidth]]
- Peripheral devices (like printers, USB devices, etc)
- And more...

The *[[application software]]* must 'talk through' the [[operating system]], which makes
sure that no application can hog all the resources, and that no application is
trying to access memory or devices that it shouldn't be allowed to.

## Resource allocation

When a program requests more memory to be allocated to it, for example, it asks
the [[operating system]]. The [[operating system]] checks if there is enough free
memory, and if so, it allocates that memory to the program.

If there isn't enough memory available, the [[operating system]] might use a
technique called [[swapping|'swapping']] to free up some memory by moving some
data from RAM (also known as 'paging' or 'virtual memory').

## Process scheduling

By default, [[software]] can't use multiple *threads* and *cores* of the CPU. The
[[operating system]] manages the CPU time by scheduling which processes get to use
which threads of the CPU - it does this by rapidly switching between processes,
giving the illusion that multiple processes are running at the same time (this
is called 'time slicing').

While most processors now have many cores, the [[operating system]] still might run
multiple processes on the same core by time slicing, especially if there are
more processes than there are cores (which there almost always are - try opening
your system monitor/task manager to see how many processes are running on your
computer right now!)

Most processes also only use a tiny fraction of a CPU thread, so won't need an
entire thread dedicated to them. A good [[operating system]] will realise this and
schedule processes accordingly!

Also, some processes might be given higher priority than others, meaning they
get more CPU time. The [[operating system]] manages this priority system to make
sure that processes that need more of the CPU, get it.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| One of the roles of the operating system is to... | Manage system resources. |
| List three system resources managed by the operating system. | CPU time, Memory (RAM), Storage (disk space). Accept Network bandwidth, Peripheral devices, or others. |
| How does an application access hardware resources? | It must 'talk through' the operating system. |
| What happens if a program requests memory that is not available? | The operating system may use swapping (or paging/virtual memory) to free up memory by moving data from RAM. |
| What technique does the OS use to free RAM when memory is low? | Swapping (also known as paging or virtual memory). |
| How does the operating system give the illusion that multiple processes are running simultaneously on a CPU? | By rapidly switching between processes using a technique called 'time slicing'. |
| Why does the OS still use time slicing on a multi-core processor? | Because there are almost always more processes than there are cores, and most processes only use a tiny fraction of a CPU thread. |
| How does the operating system manage process priority? | It gives higher priority processes more CPU time, ensuring processes that need more CPU get it. |

