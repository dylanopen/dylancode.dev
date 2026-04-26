
# Hello world

### Learn Java: #1

dylancode.dev

---

## Installing Java

On Linux/macOS, install a package called `openjdk` (or similar) with your normal package manager.

On Windows, follow the detailed installation instructions at https://jdk.java.net. Make sure you select 'Add to path' if asked during the installation.

---

## Creating a project

- We'll start this course in the terminal.
- Create a new directory for your project, and navigate into it:

```bash
cd path/to/your/projects
mkdir hello-world
cd hello-world
```

- Now we can create a new Java file, called `HelloWorld.java`:

```bash
touch HelloWorld.java
```

---

## Writing some code

Open the `HelloWorld.java` file a code editor of your choice, and add the following code:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
``` 

---

## Compiling the code

To run the code, we need to compile it into *Java bytecode* first.

We do that using the `javac` command, in the terminal:

```bash
javac HelloWorld.java
```

This will create a new file called `HelloWorld.class` - this is the compiled version of the code we just wrote.

---

## Running the code

To run the compiled code, we use the `java` command:

```bash
java HelloWorld
```

> Notice that we don't include the `.class` extension when running the code.

---

## Output

The output of the program should be:

```text
Hello, world!
```

---

## Next steps

+ How the code works
+ Understanding bytecode and the Java compiler
+ Creating a project using an IDE (IntelliJ)
+ 
