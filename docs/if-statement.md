---
tags:
  - slides
---
# Your 'if' Statements Don't Actually Exist

> High-level languages ***lie*** to you.

---

```c
if (condition1) {
	printf("Condition 1 is true, 2 might be");
} else if (condition2) {
	printf("Condition 2 is true, 1 is false");
} else {
	printf("Both conditions are false");
}
printf("This line is always executed, afterwards");
```

---

## But that's not what the CPU sees.

The only thing that processors can do is ***jump***.

---

## In pseudocode

```c
jump to 'condition1_true' if condition1 is not 0 // not zero means true
jump to 'condition2_true' if condition2 is not 0
jump to 'condition_else' // if we got here, both conditions are false

condition1_true:
	print "Condition 1 is true, 2 might be"
	goto end

condition2_true:
    print "Condition 2 is true, 1 is false"
    goto end

condition_else:
	print "Both conditions are false"
	// don't need to jump to end, because it's the next instruction

end:
    print "This line is always executed, afterwards"pr
```

---

## 