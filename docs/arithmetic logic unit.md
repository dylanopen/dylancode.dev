# Arithmetic logic unit

> An arithmetic logic unit (ALU) is a component of a [[processor]] that performs arithmetic and logical operations on data - that is, things involving maths and logical operations, like [[and gate|AND]], [[or gate|OR]], [[xor gate|XOR]], their bitwise variants, etc.

The [[control unit]] will send the ALU what's called an [[opcode]] and [[operand]]s:
- The opcode is a code that tells the ALU what operation to perform. For example, it might be a code for addition, [[subtraction]], AND, OR, etc.
- The operands are the data that the ALU will operate on. For example, if the opcode is for addition, the operands might be two numbers that the ALU will add together.

The ALU will then perform that calculation, and then store the result in the [[accumulator]]. The [[control unit]] can then retrieve the result from the [[accumulator]] and use it in whatever it needs to.

## What does the ALU do?

Some examples of things the ALU can do are:
- Addition, [[subtraction]], [[multiplication]], and [[riscv/division|division]] of [[integers]] and floating-point numbers.
- Bitwise operations like AND, OR, XOR, NOT, and shifts.
- Comparison operations like greater than, less than, equal to, etc.
- Logical ([[boolean]]) operations like AND, OR, NOT, etc.
- Incrementing and decrementing values.
- [[memory address]] calculations (pointer arithmetic).

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is an arithmetic logic unit (ALU)? | An ALU is a component of a processor that performs arithmetic and logical operations on data, such as addition, AND, and OR. |
| What does the control unit send to the ALU? | The control unit sends an opcode and operands to the ALU. |
| What is an opcode in the context of the ALU? | An opcode is a code that tells the ALU what operation to perform (e.g., addition, AND). |
| What are operands in the context of the ALU? | Operands are the data the ALU will operate on (e.g., two numbers for addition). |
| Where does the ALU store its result? | The ALU stores its result in the accumulator. |
| What can the control unit do with the result from the accumulator? | The control unit can retrieve the result from the accumulator and use it as needed. |
| List three types of integer arithmetic the ALU can perform. | Addition, subtraction, multiplication, and division. |
| List three types of bitwise operations the ALU can perform. | AND, OR, XOR, NOT, and shifts. |
| List three types of comparison operations the ALU can perform. | Greater than, less than, equal to. |
| What are logical (boolean) operations the ALU can perform? | AND, OR, NOT. |
| What does it mean for the ALU to increment or decrement values? | It can add 1 to or subtract 1 from a value. |
| What is an example of a memory address calculation the ALU might do? | Pointer arithmetic. |

