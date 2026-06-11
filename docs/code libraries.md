# Dynamic libraries

- Dynamic libraries are files on a computer which have *shared code* which can
  be used by multiple different programs.
- This means that programs don't need to include all of the code they need to
  function within their own files, which saves space on the computer.
- Instead, they can just call the functions they need from the dynamic library.
- The [[operating system]] loads these libraries when programs need them.

### Examples of libraries

- `gcc-libs`
- `OpenSSL`
- `OpenGL`
- `Vulkan`
- `GLFW`

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is a dynamic library? | A file on a computer that has *shared code* which can be used by multiple different programs. |
| Why do programs use dynamic libraries instead of including all code in their own files? | To save space on the computer, as they can call the functions they need from the dynamic library instead of including all code. |
| When does the operating system load dynamic libraries? | When programs need them. |
| Name four examples of dynamic libraries. | `gcc-libs`, `OpenSSL`, `OpenGL`, `Vulkan`, `GLFW` |

