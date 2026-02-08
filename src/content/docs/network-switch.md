---
title: Network switch
---

A *switch* in a local area network is a device which connects all the different 
devices together, and allows them to communicate with each other.

## How it works

- A device sends a *frame* (basically a packet) over the wire to the switch
  (e.g. via ethernet).
- The switch then looks at the frame, and sees which device it's meant to be
  sent to. It does that by looking at the *MAC address* of the frame, which is
  a unique identifier (basically name) for each device.
- The switch then sends the frame to the correct device, so that it can be
  received and read / processed by that device.

## 'Dumb' switches, or *hubs*

Generally, switches are 'smart' and they can look at the frames and send them
to the correct device **only**.

But we also have 'dumb' switches, which are called *hubs*. A hub just sends the
frame to *every* device on the network, and then the device that it's meant for
can read it and process it, while the other devices just ignore it.

> This makes hubs act *functionally* like a [bus topology](/bus-topology) -
because the data is sent to every device on the network, and the devices have to
ignore the data if it's not meant for them, just like in a bus network.

