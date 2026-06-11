# Asynchronous transmission

Asynchronous transmission is [[data transmission]] without a [[clock]] signal, and instead we send extra signals to indicate when data is being sent.

For example, we might send a [[start bit]] to indicate that we're about to send
data, and then we send the data bits, and then we send a [[stop bit]] to indicate
that we're done sending data.

The advantage of asynchronous transmission is that the sender and receiver don't
need to be synchronised to the same clock signal, and they don't need to always
be listening to a clock signal, which can save [[power]].

The disadvantage is that it can be slower than [[synchronous transmission]], because
there's overhead of sending extra signals like start and stop bits, and the
sender and receiver need to wait for each other to be ready before sending data.

## Start and stop bits

We send a start [[bit]] when we're about to send data, to indicate to the receiver
that data is coming.

Then, after we send the data bits, we send a stop [[bit]] to indicate that we're
done sending data.

The start signal may be a 0 or a 1 depending on the [[protocol]]. The key thing
is that it is **different** from the **stop [[bit]]**.

## Synchronisation

In asynchronous transmission, the sender and receiver are not synchronised to
the same clock signal, so they need to use the start and stop bits to indicate
when data is being sent. They *are* [[synchronised]] to each other, after the
start [[bit]]. So they know when to read the next [[bit]], but they don't have to stay
constantly synchronised to a [[clock]] signal, which can save [[power]].

## Examples of asynchronous transmission

- [[uart|UART]] (Universal Asynchronous Receiver Transmitter)
- [[rs232|RS-232]] (a standard for serial communication)
- [[midi|MIDI]] (Musical Instrument Digital Interface)

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What is asynchronous transmission? | A method of data transmission without a shared clock signal, using extra signals like start and stop bits. |
| What is the main purpose of sending extra signals like start and stop bits in asynchronous transmission? | To indicate when data is being sent and when it is finished, without relying on a clock signal. |
| What is a key advantage of asynchronous transmission? | The sender and receiver don't need to be synchronised to the same clock signal, which can save power. |
| What are examples of protocols that use asynchronous transmission? | UART (Universal Asynchronous Receiver Transmitter),<br/>RS-232 (a standard for serial communication),<br/>MIDI (Musical Instrument Digital Interface) |
| Why can asynchronous transmission be slower than synchronous transmission? | Because of the overhead of sending extra signals like start and stop bits, and the need to wait for each other to be ready. |
| What does a start bit do? | It is sent to indicate to the receiver that data is coming. |
| What does a stop bit do? | It is sent after the data bits to indicate that data transmission is done. |
| How is the start signal defined in relation to the stop signal? | The start signal must be **different** from the stop bit. |
| How are the sender and receiver synchronised in asynchronous transmission? | They are synchronised to each other after the start bit, allowing them to know when to read the next bit. |
| What power-saving feature is enabled by asynchronous transmission? | The sender and receiver do not need to stay constantly synchronised to a clock signal. |
| Define a start bit. | A signal sent before data bits to indicate data is about to be sent. |
| Define a stop bit. | A signal sent after data bits to indicate data transmission is complete. |

