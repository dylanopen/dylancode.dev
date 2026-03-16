# Arithmetic logic unit

> An arithmetic logic unit (ALU) is a component of a [processor](/processor) that performs arithmetic and logical operations on data - that is, things involving maths and logical operations, like AND, OR, XOR, their bitwise variants, etc.

The [control unit](/control-unit) will send the ALU what's called an *opcode* and *operands*:
- The opcode is a code that tells the ALU what operation to perform. For example, it might be a code for addition, subtraction, AND, OR, etc.
- The operands are the data that the ALU will operate on. For example, if the opcode is for addition, the operands might be two numbers that the ALU will add together.

The ALU will then perform that calculation, and then store the result in the [accumulator](/accumulator). The [control unit](/control-unit) can then retrieve the result from the accumulator and use it in whatever it needs to.

## What does the ALU do?

Some examples of things the ALU can do are:
- Addition, subtraction, multiplication, and division of integers and floating-point numbers.
- Bitwise operations like AND, OR, XOR, NOT, and shifts.
- Comparison operations like greater than, less than, equal to, etc.
- Logical (boolean) operations like AND, OR, NOT, etc.
- Incrementing and decrementing values.
- Memory address calculations (pointer arithmetic).
