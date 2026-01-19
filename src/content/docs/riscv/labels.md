---
title: Labels
---

In every assembly program, we need a way to refer to specific locations in our
code. This is where **labels** come in!

You've already seen two labels in the last few examples: `main:` and `stop:`.

```asm
.text
main:
    # main code goes here

stop:
    li a7, 10
    ecall
```

## What are labels?

A *label* is just a way of naming a specific 'line' in our code. When we put a
label before a line of code, we're saying "this line of code can be referred to
by this name".

## Syntax

We can define a label by writing a name followed by a colon (`:`). For example:

```asm
loop_start:
    # code for the loop goes here
```

We can also put the label on the same line as an instruction:

```asm
loop_start: addi t0, t0, -1
```

## Uses of labels

We'll get into the main usage of labels in the next chapter when we learn about
branching and jumping. The main uses of them are:
- for marking the start of functions (like `main:`)
- for marking locations to jump to (like `stop:`)
- for use in *selection* (assembly's equivalent of `if` statements)
- for iteration (loops)
- for marking data locations in the `.data` section, e.g. memory variables and
  constants.

