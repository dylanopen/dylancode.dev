---
title: Project setup
---

This is how to *manually* set up a Paper plugin project without a specific IDE - it applies for any development environment you want, as long as you have a terminal or command line interface to work with.

The only requirements are that you have Java and Gradle installed on your computer, and that you have access to a *command line*, such as a terminal or command prompt.

## File structure

Create a folder for your plugin - you can name it whatever you like, I'll choose `firstplugin`. You'll then need these files and folders inside it:

```
  firstplugin
 ├── 󰣞 src
 │   └──  main
 │       ├──  java
 │       │   └──  dev.dylancode.firstplugin
 │       │       └──  FirstPlugin.java
 │       └──  resources
 │           └──  paper-plugin.yml
 ├──  build.gradle.kts
 ├──  gradle.properties
 └──  settings.gradle.kts
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


## Build file

We'll use Gradle to build and run our Paper plugin.

Open up the `build.gradle.kts` file, and paste in these contents:

```kotlin
// Add some features to Gradle itself. E.g. it allows us to use
// `gradle runServer` to easily start a server with our plugin on it:
plugins { 
    // Our plugin isn't an application, so it's considered a Java
    // library. So import the relevant plugin:
    id("java-library")
    // Provide the `runServer` Gradle command, so that we can
    // easily test our plugin:
    id("xyz.jpenilla.run-paper") version "3.0.2"
}

repositories {
    // Allow us to use any API from 'maven central', the main place
    // to install Java libraries:
    mavenCentral()
    // Add the PaperMC maven repository, needed so that we can
    // import it later:
    maven("https://repo.papermc.io/repository/maven-public/")
}

 // These are the libraries/APIs that we want to be able to use
 // in our code.
dependencies {
    // Compile the PaperMC API (library) itself, so we can make our
    // plugin actually do stuff.
    compileOnly("io.papermc.paper:paper-api:26.2.build.+")
}

java {
    // Java 25 is required for any version after (excluding) 1.21.11
    toolchain.languageVersion = JavaLanguageVersion.of(25)
}

tasks {
    // Configure some stuff about the `gradle runServer` command.
    runServer {
        // This is the server software version that should run when we
        // type `gradle runServer`. Can be different from the API version.
        minecraftVersion("26.2")
        // We'll limit our server to 2GB of our computer's RAM.
        // This should easily be enough for testing plugins.
        jvmArgs("-Xms2G", "-Xmx2G") 
    }
}
```

We also need to edit the `settings.gradle.kts` file, which we'll just use to store our project's *name*:

```kotlin
// How Gradle should refer to your plugin.
// Replace FirstPlugin with your plugin name.
rootProject.name = "FirstPlugin" 
```

And that's it for build scripts!

You can check whether everything went OK by running `gradle runServer` in a terminal (or launching the `runServer` gradle task from your IDE).

If everything went well, you should get `BUILD SUCCESSFUL` printed to your screen. But you'll probably get an error *from Paper* when the server starts up. Something like:  
`Error loading plugin: \[name\] of type java.lang.String: A value is required for this field`.

Let's fix that!

## The paper plugin manifest

We've told *gradle* what the plugin is, but we haven't told *Paper*.

> From now on, all files we edit will be somewhere inside the `src/main` folder, and will be referenced relative to it.

Inside the `resources` folder, open `paper-plugin.yml`. This is where we can tell Paper what our plugin is.

Copy this into the file:

```yaml
# What should our plugin be known as?
# Replace with your plugin's name.
name: FirstPlugin

# This lets us manage updates to our plugin and check
# compatibility. Start with either 0.0.1 or 0.1.0.
version: 0.0.1

# The main class of our plugin: the class which extends JavaPlugin.
main: dev.dylancode.firstplugin.FirstPlugin

# The *minimum* version of Paper we want to support.
# Must be the same as in build.gradle.kts
api-version: '26.2'

# We want to load the plugin *after* the world has loaded.
load: POSTWORLD
```

Running `gradle runServer` should now give a new runtime error:  
`java.lang.ClassNotFoundException: dev.dylancode.firstplugin.FirstPlugin`.

That's because we haven't written any code yet.

## Let's start coding!

Open up the `FirstPlugin.java` file. This is where our plugin *startup* code will go.

### Specifying the package

Even though the folder structure should make it clear, we still need to tell Java what 'package' our plugin is in.

In our `paper-plugin.yml` file, we specified the main class as `dev.dylancode.firstplugin.FirstPlugin` (you may have chosen another name).

- The final part, `FirstPlugin`, *must* be the name of the **class**.
- The rest of it, `dev.dylancode.firstplugin`, before the last dot, *must* be the name of the **package**.

We need to specify this at the top of our file:

```java
package dev.dylancode.firstplugin;
```

The package name should be a 'reversed domain' you own. Make sure it matches what you've put in the build/yml files.

### An empty Java class

The first thing we need to do is turn this file into a Java class. To do that, we just create a class inside it.

See above to find the name of your class from your `main` specified in the `paper-plugin.yml`. In my case, it's `FirstPlugin`.

Importantly, this class needs to `extend` (inherit from) the `JavaPlugin` class. We need to do that if we want to be able to run code when the plugin starts.

```java
package dev.dylancode.firstplugin;

// We need to *import* the parent class so
// that we can use it by name.
import org.bukkit.plugin.java.JavaPlugin;

// Our class should have all the functionality of a JavaPlugin.
// Replace FirstPlugin with your plugin's class name.
public class FirstPlugin extends JavaPlugin {
    // Nothing in here for now :-)
}
```

Finally, let's do something when the plugin starts!

For now, we'll just say hello:

```java
package dev.dylancode.firstplugin;

import org.bukkit.plugin.java.JavaPlugin;

public class FirstPlugin extends JavaPlugin {
    // The onEnable method is called when the plugin is loaded.
    // We chose POSTWORLD, so it will be called after the server
    // has finished generting the world.
    // We use @Override because we're changing a method that was
    // created in the JavaPlugin parent class.
    @Override
    public void onEnable() {
        // Use this plugin's logger to print some text to console.
        getLogger().info("Why hello there, I'm a plugin!");
    }
}
```

Congratulations, you've written your first plugin! Try running it by typing `gradle runServer`.

You should see this line somewhere in the console logs:

```
[FirstPlugin] Enabling FirstPlugin v0.0.1
```
