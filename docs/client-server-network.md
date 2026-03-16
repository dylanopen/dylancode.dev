# Client-server network

> A client-server network is a way of connecting computers together on a network, where one central computer (the *server*) provides resources or services to other computers (the *clients*). The clients ask the server for things, like files, data or programs, and the server can respond or store data the client sends to it.

We often say this is an 'authoritative server setup'. The server has complete control over the data and resources it provides, and the clients have to ask the server for access to those resources, so it's often used in schools and businesses where they don't want everyone to have full control to access everything on the network.

## Processing power

Usually, all the heavy computational work is done by the central server. That means that the server needs to be really powerful - so it may have a fast processor, lots of memory, and a large storage drive (and likely a lot of processor cores).

THis means though that the clients don't need to have much power at all. They just need to be able to connect to the server and display the data it sends back, so they can be pretty poor performance computers without people noticing too much.

## Advantages

- The server has central control over all the devices
- Easier to manage the network
- Can install and update software on just one machine, and it will update everywhere
- Easier to back up data, because it's all stored on the server
- Can have better security, because the server can control who has access to what resources
- The server can be very powerful if a single user wants to use a lot of its processing power
- The clients can be pretty cheap, because they don't need to do much processing
- If the organisation wants to prevent access to certain resources, they can do that easily with a client-server network, because the server has control over who can access what (e.g. they can block any non-work related websites)

## Disadvantages

- **Single point of failure!** If the server goes down, then the whole network is unusable, because all the clients rely on the server to provide them with resources and services.
- The server can become a bottleneck if too many clients are trying to access it at the same time (it can slow down)
- The security of an individual client is better, but if someone gains access to the *server*, then they can potentially access all the data and resources on the network, which is a big risk if the server isn't well protected.
- Requires an expensive, powerful server
- Requires a lot of maintenance - the organisation will need a specialist IT team
