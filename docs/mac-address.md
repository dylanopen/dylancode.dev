# MAC address

> A MAC address (Media Access Control address) is a unique identifier assigned to a network interface for communications on the physical network segment. It's used to identify devices on a local network, such as Ethernet or Wi-Fi, so that computers can tell each other apart on a network.

We usually represent a MAC address as a string of six pairs of hexadecimal digits, separated by colons or hyphens. For example, `00:1A:2B:3C:4D:5E` is a valid MAC address.

The first three pairs of digits (the first 24 bits) represent the manufacturer of the network interface, while the last three pairs (the last 24 bits) are just unique to each device. This means that no two devices *should* have the same MAC address, which helps to ensure that data is sent to the correct device on a local network.

## How they're different to IP addresses

IP addresses identify a *local area network* on the internet. MAC addresses are specific to a device, not the entire LAN.
