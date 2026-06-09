# Project setup

This is how to *manually* set up a Paper plugin project without a specific IDE - it applies for any development environment you want, as long as you have a
terminal or command line interface to work with.

## File structure

Create a folder for your plugin - you can name it whatever you like, I'll choose `firstplugin`. You'll then need these files and folders inside it:

```
firstplugin
├── build.gradle.kts
├── settings.gradle.kts
└── src
    └── main
        └── java
            └── dev.dylancode.firstplugin
                └── FirstPlugin.java
```

### Quick install script

If you don't want to manually create these files and directories, you can run this instant setup script in a terminal.

Feel free to replace `FirstPlugin` with whatever you'd like your plugin to be called.

Bash script (Linux / macOS):

```bash
mkdir firstplugin
cd firstplugin
touch build.gradle.kts
touch settings.gradle.kts
touch gradle.properties
mkdir -p src/main/java/dev.dylancode.firstplugin
touch src/main/java/dev.dylancode.firstplugin/FirstPlugin.java
mkdir -p src/main/resources
touch src/main/resources/paper-plugin.yml
```

Command prompt script (Windows):

*I currently do not have a Windows environment available to test any commands, sorry :(*
