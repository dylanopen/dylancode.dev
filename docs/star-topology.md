# Star topology

> In a *star* [network topology](network-topology), all devices are connected to a central hub or switch. The switch forwards [frames](network-frame) to the correct device based on the destination [MAC address](mac-address) in the frame.

Basically, we have a central device which connects to all the devices on the network individually.

## Advantages of the star topology

- If one client or cable fails, it doesn't affect the rest of the network. The other devices can still communicate with each other through the central hub or switch, unlike a [bus topology](bus-topology) where if one device fails, the whole network can be affected.
- It's easy to add new devices to the network. You just connect them to the central hub or switch, without needing to worry about how it will affect the rest of the network.
- It's easy to manage and troubleshoot. If there's a problem with a device, you can easily identify it by just looking at the device which isn't working.
- Faster connection speed, as devices don't have to wait for the entire connection to be free. Collisions don't really happen in a star topology, because each device has its own dedicated connection to the central hub or switch.
- Its speed doesn't decrease so much when we add more devices.
- The network is more secure, because data is only sent to the intended recipient, rather than being broadcast to all devices on the network like in a bus topology. That is, assuming we use a switch, and not a hub, because a hub does broadcast data to all devices, which is less secure because everything can read it.

## Disadvantages of the star topology

- If the hub/switch fails, the entire network fails. We've moved the single point of failure from a long wire to a switch.
- It's more expensive to set up than a bus topology, because we need more cables and a central hub or switch.
    - Every client needs its own cable to connect to the central hub or switch, which can be really expensive if we have a lot of devices.
- The central hub or switch can become a bottleneck if there are a lot of devices on the network, because all data has to pass through it. If the hub/switch isn't powerful enough to handle the traffic, it can slow down the entire network.
