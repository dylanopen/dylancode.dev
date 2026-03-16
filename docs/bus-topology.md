# Bus topology

> In a **bus** [network topology](network-topology) all the devices are connected to a single shared communication line, called a bus. All data travels along this single wire.

You can think of it like having a real-life bus service, where we have a single route the buses take which goes through all the stops. The buses (data) can only travel along this single route (the bus), and they have to wait for their turn to use the bus if it's already being used by another bus.

## Logical bus (but it's really a star)

We can configure a [network switch](network-switch) so that it just forwards packets to *everyone* even if they're not the intended recipient. This means that all the devices connected to the switch will receive all the data sent by any device, and they can choose to ignore it if it's not meant for them.

That makes the network function exactly like a bus, but just that the physical cables are actually arranged like a [star topology](star-topology) instead of a bus. So it's really a star, but it functions like a bus.

## Advantages of bus topology

- It's really easy to set up, because you just have to connect all the devices to a single wire.
- It's cheap, because you don't need a lot of cables or hardware to set it up.

## Disadvantages of bus topology

- If the bus (the single wire) breaks, then the whole network goes down, because all the devices are connected to that single wire.
- It's not very scalable, because as you add more devices to the bus, it can get *congested* so become slow.
- It's not very secure, because all the devices can see all the data sent by any device, so if one device is compromised, it can potentially access all the data on the network.
- It's not very efficient, because all the devices have to wait for their turn to use the bus, so it can be slow if there are a lot of devices trying to use it at the same time.
- Not very reliable, because if one device sends a lot of data, it can cause *collisions* where two devices try to use the bus at the same time, which can cause us to lose data or have to resend it.
- You have to physically cut the bus to add or remove devices - that can cause downtime!

*Buses really aren't used very often now, they're just not the best option.*
