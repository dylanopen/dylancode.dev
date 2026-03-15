# Sound storage

With a sound file, we can measure a few things:
- The sample rate - how many samples we take per second.
- The bit depth - how many bits we use to store each sample's amplitude
- The number of channels - whether it's mono (1 channel) or stereo (2 channels), etc.
- The duration of the sound - how long the sound file is (in seconds).

If we *multiply* all of those together, we can calculate how much storage the
sound file takes up (in bits):

> $$
> \text{storage used (bits)}=\text{sample rate}\times\text{bit depth}\times\text{number of channels}\times\text{duration (seconds)}
> $$

For example, if we have a stereo sound file (2 channels) with a sample rate of 44,100 samples per second, a bit depth of 16 bits, and a duration of 3 minutes (180 seconds), then the storage used would be:

$$
44,100\times16\times2\times180=254,016,000\text{ bits}
$$

To find that in megabytes, we can do $254,016,000\div8\div1,000,000=31.752$ megabytes. So that sound file would take up about 31.752 megabytes of storage **if** it
was uncompressed.
