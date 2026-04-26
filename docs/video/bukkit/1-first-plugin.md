
# Coding a Minecraft plugin

dylancode.dev

---

## Installing IntelliJ

- IntelliJ is an *IDE* - it helps us write Java code more easily.
- Install it using your normal package manager, or from https://www.jetbrains.com/idea.
- Start IntelliJ and we'll create a new plugin!

---

## The full code

```java
package dev.dylancode.tutorialplugin;
import org.bukkit.plugin.java.JavaPlugin;

public class TutorialPlugin extends JavaPlugin {  
    @Override  
    public void onEnable() {  
        // startup code goes here
    }
    @Override  
    public void onDisable() {
        // shutdown code goes here
    }
}
```

---

## `onEnable`

- Called when our plugin is *loaded* or *reloaded*.
- It's the first thing that gets run, so any other classes or functions need to be added or called from here.

---

## Plugin logger

- The Bukkit API has separate loggers for each plugin
- We can get the logger for our plugin with the `getLogger` function of a `Plugin`.
- If we're in the main plugin class, e.g. the `onEnable` method, just use `this.getLogger()`.

```java
this.getLogger().info("Hello from the logger!");
```

---

## Thanks for watching!

- Find more resources and videos at [dylancode.dev](https://dylancode.dev)
- Subscribe for more programming content!
- Leave a comment if you have any questions about any topic you'd like to see covered.
- Obsidian Development: commissions for custom plugins available at [dylancode.dev/commissions](https://dylancode.dev/commissions)
- Talk to me on Discord: [dylancode.dev/discord](https://dylancode.dev/discord)


