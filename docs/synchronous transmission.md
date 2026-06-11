# Synchronous transmission

Synchronous transmission is when we send data in time with a clock signal.

One signal is sent each time the clock pulses, so the sender and receiver are
synchronised to the same clock signal.

That way, they can both know when to send and receive data, without needing to
send extra signals to indicate when data is being sent.

This does [[mean]] that the sender and receiver need to be synchronised to the same
clock signal, and they need to always be listening to the clock signal, even 
when no data is being sent.

The advantage though is that, once they're synchronised, they can just *send
data*. They don't need to send any extra signals like start and stop bits, or
wait for the receiver to be ready, etc. They can just send data whenever they
want, and the receiver will know when to receive it.  
That makes synchronous transmission faster than [[asynchronous transmission]],
because there's no overhead of sending extra signals.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| Synchronous transmission | Data is sent in time with a clock signal, so sender and receiver are synchronised to the same clock. |
| How do sender and receiver know when to send/receive data in synchronous transmission? | They are synchronised to the same clock signal, so they know when to send/receive without extra signals. |
| What is a disadvantage of synchronous transmission regarding the clock? | The sender and receiver need to be synchronised to the same clock signal, and they must always listen to it, even when no data is sent. |
| What is a main advantage of synchronous transmission over asynchronous transmission? | Once synchronised, data can be sent without extra signals like start/stop bits, making it faster with no overhead. |

