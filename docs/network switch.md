# Network switch

A *switch* in a [[local area network]] is a device which connects all the different devices together, and allows them to communicate with each other.

> A device sends packets of data via the central switch or [[network hub|hub]], and the **switch** will forward the packets to only the intended recipient.

## How it works

- A device sends a *frame* (basically a packet) over the wire to the switch
  (e.g. via ethernet).
- The switch then looks at the frame, and sees which device it's meant to be
  sent to. It does that by looking at the *[[mac address]]* of the frame, which is
  a unique identifier (basically name) for each device.
- The switch then sends the frame to the correct device, so that it can be
  received and read / processed by that device.

## 'Dumb' switches, or *hubs*

[[network hub]]

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Network switch | In a local area network, a device that connects all different devices together and allows them to communicate with each other. |
| What does a switch do when it receives a frame? | The switch looks at the frame, sees which device it is meant for by checking the MAC address, and forwards the frame only to the intended recipient. |
| What is a frame in the context of a switch? | A packet sent over the wire (e.g. via Ethernet) to the switch. |
| How does a switch determine the intended recipient of a frame? | It looks at the MAC address of the frame, which is a unique identifier for each device. |
| What is a "dumb" switch also known as? | A hub. |

