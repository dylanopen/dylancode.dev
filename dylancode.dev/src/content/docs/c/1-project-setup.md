---
title: Setting up a C project
---

> Creating our project folder and C source code file.

## Operating system concerns

Programming in C is **much** easier on a Unix-based system - such as Linux or
macOS. C programming on Windows is more difficult: please either install Linux
or use the Windows Subsystem for Linux (WSL) for a Linux terminal in Windows.

## Creating the project folder

If you have a directory (folder) that you commonly use for programming projects,
in my case a `dev` folder for development, use `cd` to enter that:

```bash
[dylan@dtop ~]$ cd dev
[dylan@dtop dev]$ 
```

Once inside your programming folder, run this command to create a new folder for
your C program:

```bash
mkdir ctutorial
```

Then, to change directory into the folder:

```bash
cd ctutorial
```

You are, of course, free to choose whatever name for your project you like.

## Making a C source file

A *source file* is the code that we write. It's simply a file on your computer
with a specific extension.

In the case of C, the extension is `.c`.

Create a file using this command:

```
touch main.c
```

You can call it something other than `main.c` if you wish, but `main.c` is the
standard name for the entry-point to your program.

