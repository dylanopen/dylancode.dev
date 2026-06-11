# High-level language

A *high-level programming language* is a programming language that is designed
to be easy for humans to read and write.

They create an *abstraction* over the low-level details of the computer's
[[hardware]], so that programmers can focus on solving problems and building
[[software]], rather than worrying about the nitty-gritty details of how the CPU and
memory work.

For example, instead of having to do this to print to the screen in assembly
language:

```asm
MOV AX, 0x0E        ; BIOS teletype function
MOV BX, 0x0007      ; Page number and attribute
MOV CX, 1           ; Number of characters to write
MOV DX, OFFSET msg  ; Offset of the string to print
INT 0x10            ; Call BIOS interrupt
```

> (not exactly, but you get the idea)

We can just do this in a high-level language like Python:

```python
print("Hello, world!")
```

You can probably see how this saves a tonne of time, and also means you don't
need to [[https://en.wikipedia.org/wiki/RollerCoaster_Tycoon|make a rollercoaster tycoon in x86 assembly]] xD

## Examples of high-level languages

- Python
- Java
- C#
- C
- JavaScript (not a real programming language, change my mind)
- Rust
- ...and almost [[https://en.wikipedia.org/wiki/List_of_programming_languages|infinite others]]

## Uses of high-level languages

Almost all [[application software]] is written in
high-level programming languages, including:

- Web applications
- Mobile apps
- Desktop [[software]]
- Games
- Data analysis and machine learning
- and much more!

## Advantages of high-level languages

- Easy to learn and use
- Fast development time
- Portable across different [[hardware]] architectures
  - This is a big one. Most high-level languages can be compiled or interpreted
    on different architectures with little to no changes (thanks to projects
    like [[https://llvm.org/|LLVM]]).
- Large standard libraries and frameworks available
  - This means we don't always have to reinvent the wheel - we can use
    existing libraries to [[speed]] up development.
- Easier to read and maintain code

## Disadvantages of high-level languages

- Less control over [[hardware]]
- Potentially slower performance compared to low-level languages
- May require a runtime or [[interpreter]] to execute
- Less efficient memory usage
- Abstraction can sometimes lead to making mistakes if the programmer
  doesn't understand how the high-level constructs actually map to the low-level
  operations. This can also lead to performance issues if the programmer isn't
  aware of the underlying costs of certain high-level operations.
- Can be less suitable for system-level programming (like operating systems,
  device drivers, embedded systems, etc) where low-level control is often
  required.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| High-level programming language | A programming language designed to be easy for humans to read and write, creating an abstraction over low-level hardware details. |
| What does a high-level language create over low-level hardware details? | An abstraction. |
| What is the primary advantage of using `print("Hello, world!")` in Python over the equivalent assembly code? | It saves time and allows the programmer to focus on problem-solving rather than hardware details. |
| Name five examples of high-level languages. | Python, Java, C#, C, Rust (or any five from the document: Python, Java, C#, C, JavaScript, Rust). |
| What type of software is almost always written in high-level languages? | Application software. |
| List four uses of high-level languages. | Web applications, mobile apps, desktop software, games (or any four from: Web applications, Mobile apps, Desktop software, Games, Data analysis and machine learning). |
| What is a major advantage of high-level languages related to different computer architectures? | They are portable across different hardware architectures with little to no changes. |
| How do standard libraries and frameworks benefit development in high-level languages? | They prevent reinventing the wheel and speed up development. |
| What is a key disadvantage of high-level languages regarding hardware? | Less control over hardware. |
| What potential performance issue do high-level languages have compared to low-level languages? | Potentially slower performance. |
| What runtime or execution environment might a high-level language require? | A runtime or interpreter. |
| How can abstraction in high-level languages lead to mistakes? | If the programmer doesn't understand how high-level constructs map to low-level operations, it can cause errors or performance issues. |
| Why are high-level languages often less suitable for system-level programming? | Because system-level programming (like OS or device drivers) often requires low-level control that high-level languages abstract away. |

