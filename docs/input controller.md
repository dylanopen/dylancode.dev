# Input controller

Manufacturers of CPUs make their CPUs to be general-purpose processors, which
means they shouldn't be designed to work with just one specific type of input
device (e.g. a specific make of keyboard or mouse). Instead, they need to be
designed to work with anything that follows the standard *protocol* for that
input device.

To do this, the motherboard has lots of little circuits called *input
controllers* that are designed to work with specific types of input devices.
For example, there will be a keyboard controller that is designed to work with
any keyboard that follows the standard keyboard protocol, and a mouse controller
which does the same for mice. These controllers are connected to the [[processor]]
via the [[computer bus|buses]], so the [[processor]] can receive input from the
input devices and only have to understand one way of communicating with them.

> An input controller is a circuit which processes the input from a specific
> type of input device, and sends it to the [[processor]] in a standard way that the
> [[processor]] can understand.

## [[flashcards]]

| Question | Answer |
| --- | --- |
| CPU設計上為何需要輸入控制器？ | 因為CPU是通用處理器，不專門為某一特定輸入設備設計，必須透過遵循標準協定的輸入控制器來與各種輸入設備溝通。 |
| 什麼是輸入控制器（input controller）？ | 一種專門處理特定類型輸入設備訊號的電路，它會將輸入以處理器能理解的標準方式傳送給處理器。 |
| 主機板上的鍵盤控制器和滑鼠控制器有什麼功能？ | 它們分別負責處理任何遵循標準鍵盤協定或標準滑鼠協定的裝置，並將輸入資料透過匯流排傳送給處理器。 |
| 輸入控制器與處理器之間如何連接？ | 透過電腦匯流排（[[computer bus|buses]]）連接。 |
| 處理器如何接收來自不同輸入裝置的資料？ | 處理器只需理解與各輸入控制器之間的單一溝通標準，由輸入控制器負責轉譯不同裝置的輸入協定。 |

