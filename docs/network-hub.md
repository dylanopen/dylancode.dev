# Network hub

Generally, [[network-switch|switches]] are 'smart' and they can look at the [[network-frame|frames]] and send them
to the correct device **only**.

But we also have 'dumb' switches, which are called *hubs*. A hub just sends the frame to *every* device on the network, and then the device that it's meant for can read it and process it, while the other devices just ignore it.

This makes hubs act *logically* like a [bus topology](/bus-topology) - because the data is sent to every device on the network, and the devices have to ignore the data if it's not meant for them, just like in a bus network.