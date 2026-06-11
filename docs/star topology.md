# Star topology

> In a *star* [[network topology]], all devices are connected to a central hub or switch. The switch forwards [[network frame|frames]] to the correct device based on the destination [[mac address|MAC address]] in the frame.

Basically, we have a central device which connects to all the devices on the network individually.

## Advantages of the star topology

- If one [[client]] or cable fails, it doesn't affect the rest of the network. The other devices can still communicate with each other through the central hub or switch, unlike a [[bus topology]] where if one device fails, the whole network can be affected.
- It's easy to add new devices to the network. You just connect them to the central hub or switch, without needing to worry about how it will affect the rest of the network.
- It's easy to manage and troubleshoot. If there's a problem with a device, you can easily identify it by just looking at the device which isn't working.
- Faster connection [[speed]], as devices don't have to wait for the entire connection to be free. Collisions don't really happen in a star topology, because each device has its own dedicated connection to the central hub or switch.
- Its [[speed]] doesn't decrease so much when we add more devices.
- The network is more secure, because data is only sent to the intended recipient, rather than being broadcast to all devices on the network like in a [[bus topology]]. That is, assuming we use a switch, and not a hub, because a hub does broadcast data to all devices, which is less secure because everything can read it.

## Disadvantages of the star topology

- If the hub/switch fails, the entire network fails. We've moved the single point of failure from a long wire to a switch.
- It's more expensive to set up than a [[bus topology]], because we need more cables and a central hub or switch.
    - Every [[client]] needs its own cable to connect to the central hub or switch, which can be really expensive if we have a lot of devices.
- The central hub or switch can become a bottleneck if there are a lot of devices on the network, because all data has to pass through it. If the hub/switch isn't powerful enough to handle the traffic, it can slow down the entire network.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Star topology | In a star topology, all devices are connected to a central hub or switch individually. |
| What forwards frames to the correct device based on the MAC address in a star topology? | The central switch. |
| What happens to a star topology if one client cable fails? | It doesn't affect the rest of the network; other devices can still communicate. |
| How does a star topology differ from a bus topology regarding a single device failure? | In a star topology, if one device fails it doesn't affect the whole network, unlike a bus topology. |
| How do you add a new device to a star topology? | You just connect it to the central hub or switch without worrying about the rest of the network. |
| What is an advantage of a star topology for troubleshooting? | It is easy to identify a problem by looking at the non-working device. |
| Why are collisions rare in a star topology? | Because each device has its own dedicated connection to the central hub or switch. |
| What happens to the speed of a star topology when more devices are added? | It doesn't decrease so much. |
| How is security improved in a star topology using a switch? | Data is only sent to the intended recipient, rather than being broadcast to all devices. |
| What is the security issue if a star topology uses a hub instead of a switch? | A hub broadcasts data to all devices, which is less secure because everything can read it. |
| What is the main disadvantage of having a single point of failure in a star topology? | If the hub/switch fails, the entire network fails. |
| Why is a star topology more expensive to set up than a bus topology? | Because we need more cables and a central hub or switch. |
| How does the cabling cost scale with the number of devices in a star topology? | Every client needs its own cable, which can be really expensive with a lot of devices. |
| What can become a bottleneck in a star topology and why? | The central hub or switch, because all data has to pass through it. |
| What happens if the central switch isn't powerful enough to handle the traffic? | It can slow down the entire network. |

