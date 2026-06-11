# PaperMC plugin development

- [[minecraft plugin/project structure]]

## [[flashcards]]

| Question | Answer |
| --- | --- |
| PaperMC plugin development | Development of plugins for PaperMC, a high-performance fork of SpigotMC, focusing on server-side modifications. |
| What is the standard project structure for a PaperMC plugin? | The project typically includes: `src/main/java` for code, `src/main/resources` for plugin.yml (which defines the main class, name, version, and dependencies), and a build file (e.g., `pom.xml` for Maven or `build.gradle` for Gradle). |
| What must be included in the `resources/plugin.yml`? | The `plugin.yml` must define at minimum: `name`, `version`, and `main` (the fully qualified main class). Optionally includes `api-version`, `author(s)`, `commands`, and `permissions`. |
| How do you define a command in `plugin.yml`? | Under the `commands` node, list command names as keys with optional sub-keys like `description`, `usage`, `aliases`, and `permission`. |
| What is the purpose of the `main` class in a PaperMC plugin? | The main class extends `JavaPlugin` and is the entry point. It overrides `onEnable()` (for startup) and `onDisable()` (for shutdown) methods. |
| How do you register an event listener in PaperMC? | In the main class's `onEnable()`, call `getServer().getPluginManager().registerEvents(new ListenerClass(), this);` where `ListenerClass` implements `Listener`. |
| What is the importance of the `api-version` in `plugin.yml`? | It specifies which Minecraft version API the plugin is targeting (e.g., `1.20`), preventing loading on older servers and ensuring proper API behavior. |
| How do you specify plugin dependencies in `plugin.yml`? | Use the `depend` list for required plugins (load after them), `softdepend` for non-required plugins (load before), and `loadbefore` to load your plugin before specified ones. |
| What are the required keys in `plugin.yml` for a minimal plugin? | At minimum, `name`, `version`, and `main` must be present. |
| Where does the compiled Java source code go in a PaperMC project? | All source code is placed under `src/main/java` directory, following standard Java package naming conventions. |

