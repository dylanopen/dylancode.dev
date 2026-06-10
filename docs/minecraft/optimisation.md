# dylancode's Minecraft server optimisation guide

I've been running a [[minecraft]] [[server]] for a while now, and I became tired of the
lack of quality [[minecraft]] [[server]] optimisation guides out there. So I decided to
write my own!

## Credits

This guide would not have been possible without the work of some amazing
people over the years. A huge thank you to:

- The [[https://papermc.io/|PaperMC team]] for their incredible work on Paper,
  which is the only reason [[minecraft]] servers can run beyond just a handful of
  online players.
- [[https://aikar.co/|Aikar]] for his contributions to [[minecraft]] [[server]] 
  optimisation, mainly including Aikar's Flags and his work on Paper.
- [[https://www.spigotmc.org/|SpigotMC]] for their work on [[spigot]], which created
  the foundation for Paper and maintains the [[bukkit]] API, making plugins
  possible.
- [[https://spark.lucko.me/|Spark]] by Lucko for being an amazing profiling tool
  that helps [[server]] admins identify performance issues.
- [[https://paper chan.moe/paper optimization|Paper Chan]] for its detailed
  explanation of various Paper configuration options.
- [[https://github.com/YouHaveTrouble/minecraft optimization|YouHaveTrouble]]
  for their optimisation guide, which served as inspiration for this guide.

## So what does this guide do differently?

It is no doubt that all of the information you could ever need to know about
[[server]] optimisation is already out there. However, it is scattered across
various sources, and some of it is outdated or incomplete. This guide aims to
bring together all of that into a single guide, which is:
- up-to-date with the latest [[minecraft]] versions
- comprehensive (covers almost all aspects of [[server]] optimisation)
- easy to understand
- explains the reasoning behind each optimisation so you can change it for
  your specific [[server]]
- all in one place
- useful both as a 'best starter config' **and** as a way to properly understand
  what each config option does
