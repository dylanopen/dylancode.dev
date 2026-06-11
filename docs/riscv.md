# RISC-V assembly

- [[riscv/examples]]
    - [[riscv/smallest program]]
- [[riscv/immediate and register instructions]]
- [[riscv/instruction reference]]
    - [[riscv/setting registers]]
    - [[riscv/copying registers]]
    - [[riscv/adding immediates]]
    - [[riscv/adding registers]]
    - [[riscv/subtraction]]
    - [[riscv/multiplication]]
    - [[riscv/division]]
    - [[riscv/labels]]
    - [[riscv/jumping]]

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is the smallest RISC-V program? | A program that is just an infinite loop, e.g., `j 0` or `jal x0, 0`. |
| How do immediate instructions differ from register instructions in RISC-V? | Immediate instructions use a constant value encoded in the instruction, while register instructions use only register operands. |
| What does `addi rd, rs1, imm` do? | Adds the immediate value `imm` to register `rs1` and stores the result in `rd`. |
| What does `add rd, rs1, rs2` do? | Adds the values in registers `rs1` and `rs2`, storing the result in `rd`. |
| How do you copy a value from one register to another without using `mv`? | Use `addi rd, rs, 0`. |
| How do you perform subtraction in RISC-V? | Use `sub rd, rs1, rs2` to compute `rs1 - rs2`. |
| How do you multiply two registers in RISC-V? | Use `mul rd, rs1, rs2`; the result is the lower 64 bits (or 32 bits for RV32I). |
| How do you divide two registers in RISC-V? | Use `div rd, rs1, rs2` for signed division; `divu` for unsigned. |
| What are labels used for in RISC-V assembly? | Labels mark a location in code (e.g., `loop:`) so that jump instructions can refer to them. |
| How do you perform an unconditional jump to a label in RISC-V? | Use `j label` (pseudo-instruction for `jal x0, label`). |
| How do you jump and link (call a subroutine) in RISC-V? | Use `jal rd, label`; `rd` receives the return address (PC+4), and execution goes to `label`. |
| What is the effect of `jal x0, label`? | It jumps to `label` without saving a return address, because `x0` always holds 0. |

