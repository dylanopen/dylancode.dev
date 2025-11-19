---
title: Interpreter
---

- Interpreters work by reading the source code **line-by-line** and executing
  it directly.
- This means that the source code needs to be present every time the program is
  run.

#### Positives of interpreters

- Easier to debug
- More portable (can run on any system with the interpreter)
- No compilation time

#### Negatives of interpreters

- Slower execution
- Source code must be distributed (may expose proprietary code)
- More runtime errors (harder to catch in development)
- Requires interpreter to be installed:
  - May not be available on all systems
  - User needs to install the interpreter themselves
- Less optimization for specific hardware

