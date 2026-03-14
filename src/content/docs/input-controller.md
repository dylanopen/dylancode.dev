---
title: Input controller
---

Manufacturers of CPUs make their CPUs to be general-purpose processors, which
means they shouldn't be designed to work with just one specific type of input
device (e.g. a specific make of keyboard or mouse). Instead, they need to be
designed to work with anything that follows the standard *protocol* for that
input device.

To do this, the motherboard has lots of little circuits called *input
controllers* that are designed to work with specific types of input devices.
For example, there will be a keyboard controller that is designed to work with
any keyboard that follows the standard keyboard protocol, and a mouse controller
which does the same for mice. These controllers are connected to the processor
via the [buses](/computer-bus), so the processor can receive input from the
input devices and only have to understand one way of communicating with them.

> An input controller is a circuit which processes the input from a specific
> type of input device, and sends it to the processor in a standard way that the
> processor can understand.

