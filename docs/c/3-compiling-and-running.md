---
sidebar_position: 3
---

# Compiling and running code

> Build an executable from our source code and run it.

## Compilation

We can compile our C program using a program known as `gcc`.

First, open a terminal and make sure you are in the directory which contains
your C source file (e.g. `main.c`). If not, use the `cd` command to get there.

After that, run this command:

```bash
gcc main.c
```

(replacing `main.c` with the name of your C source file).

## Running the binary

Assuming you are on a Unix-based system or are emulating a Unix system, `gcc`
will produce a binary called `a.out`. You can run your program using this
command:

```bash
./a.out
```

Sometimes, `gcc` can output a file marked without execute permissions. This
means that you will not be able to run your program unless you change the file
permission attributes. You can fix that with a simple command:

```bash
chmod +rwx a.out
```

## Choosing the name of the output binary

`gcc` allows us to choose the name of the binary file it outputs (instead of
`a.out`). We can do this by specifying the `-o` flag when compiling:

```bash
gcc main.c -o outputbinary
```

This will compile our program into the `outputbinary` file.

Then, to run the `outputbinary` program:

```bash
./outputbinary
```

## Compiling and running the code

We can compile the source file and execute the binary in a single command. The
command below will compile the code **and only if is successful**, will execute
the program:

```bash
gcc main.c && ./a.out
```

If you renamed your program's output binary, say, to `mycoolprogram`, you would
use:

```bash
gcc main.c -o mycoolprogram && ./mycoolprogram
```

