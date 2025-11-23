---
title: Fundamental Counting
author: Alexis_Fx & Dylancode
---
## Introduction
From thousands of years ago, we developed Mathematics 

## Tree Diagram
### What is tree diagram
As things get more complex, we are required an effective tool to organise and visualise objects. Diagrams satisfy both requirement. Consequently, Diagrams are delevloped and used as one way for counting. One of them is tree diagram, an early and well-used one due to its simplicity.
``` mermaid
flowchart LR
    S1["Sub Event 1"] --> A["Element 1"] & B["Element 2"] & C["Element 3"]
    S2(["Sub Event 2"]) --> A1(["Element 4"]) & B2(["Element 5"]) & C3(["Element 6"]) & D4(["Element 7"])
    n1["Main Event"] --> S1 & S2

    S1@{ shape: rounded}
    A@{ shape: rounded}
    B@{ shape: rounded}
    C@{ shape: rounded}
    n1@{ shape: diam}
```

### Example
```mermaid
flowchart TD
    A[Geometry] --> B(Circles)
    A[Geometry] --> C(Polygons)
    A[Geometry] --> D(Lines)
    B --> E(Relative Positions)
    B --> F(Equations)
    B --> P(Theorems)
    C --> G(Triangles)
    C --> J(Rectangles)
    D --> I(Relative Positions)
    D --> K(Slopes)
    D --> L(Equations)
```
### Tree diagram in counting
## Addition Principle 
### Statement  
If one event can occur in $m$ ways and a second event with no common outcomes can occur in $n$ ways, then the first or second event can occur in $m+n$ ways.
### Example 1 - Addition Priciple
#### Problem
In how many ways can we get a drink from a menu with 5 soda options and 8 boba options.
#### Solution
Event "we get a soda" can occur in 5 ways and event "we get a boba" can occur in 8 ways. If we get a drink, it has to be from the menu ,or more precisely, either from the soda options or the boba options. Since these two events contribute to form a bigger event which is "we get a drink", according to addition principle, total ways for event "we get a drink" to occur are $5+8=13$ ways 
```mermaid
flowchart LR
    S(["Soda"]) --> A(["Soda no.1"]) & B(["Soda no.2"]) & C(["Soda no.3"]) & D(["Soda no.4"]) & E(["Soda no.5"])
    Bo(["Boba"]) --> A1(["Boba no.1"]) & B2(["Boba no.2"]) & C3(["Boba no.3"]) & D4(["Boba no.4"]) & E5(["Boba no.5"]) & F5(["Boba no.6"]) & H5(["Boba no.7"]) & K5(["Boba no.8"])
    n1["Drink_Menu"] --> S & Bo

    n1@{ shape: diam}
```
Making a tree diagram like figure above, you can easily find how many outcomes there are just by normal counting.

## Multiplication Principle
### Statement
If one event can occur in $m$ ways and a second event can occur in $n$ ways __*after the first event has occurred*__, then the two events can occur in $m \cdot n$ ways.
```mermaid
flowchart LR
    S1["Sub Event 1"] --> S2(["Sub Event 2"])
    S2 --> n2["Sub Event 3"]
    n1["Main Event"] --> S1

    S1@{ shape: rounded}
    n1@{ shape: diam}
```
Each Sub Event contains elements from its set. In fact, if we "unbox" a subset , it would look like this (the figure below show subset/subevent 1 with 4 elements)
```mermaid
flowchart LR
    S1["Sub_1 Element 1"] --> S2(["Sub Event 2"])
    S2 --> n2["Sub Event 3"]
    n1["Main Event"] --> S1 & n3["Sub_1 Element 2"] & n4["Sub_1 Element 3"] & n5["Sub_1 Element 4"]
    n6(["Sub Event 2"]) --> n7["Sub Event 3"]
    n8(["Sub Event 2"]) --> n9["Sub Event 3"]
    n10(["Sub Event 2"]) --> n11["Sub Event 3"]
    n3 --> n6
    n4 --> n8
    n5 --> n10

    S1@{ shape: rounded}
    n1@{ shape: diam}
    n3@{ shape: rounded}
    n4@{ shape: rounded}
    n5@{ shape: rounded}
    n7@{ shape: rect}
    n9@{ shape: rect}
    n11@{ shape: rect}
```
"Unbox" both subevent 1 and 2

```mermaid
flowchart LR
    S1["Sub_1 Element 1"] --> n12(["Sub_2 Element 1"]) & n13(["Sub_2 Element 2"]) & n14(["Sub_2 Element 3"])
    n1["Main Event"] --> S1 & n3["Sub_1 Element 2"] & n4["Sub_1 Element 3"] & n5["Sub_1 Element 4"]
    n3 --> n15(["Sub_2 Element 1"]) & n16(["Sub_2 Element 2"]) & n17(["Sub_2 Element 3"])
    n4 --> n18(["Sub_2 Element 1"]) & n19(["Sub_2 Element 2"]) & n20(["Sub_2 Element 3"])
    n5 --> n21(["Sub_2 Element 1"]) & n22(["Sub_2 Element 2"]) & n23(["Sub_2 Element 3"])
    n12 --> n11["Sub Event 3"]
    n13 --> n9["Sub Event 3"]
    n14 --> n7["Sub Event 3"]
    n15 --> n24["Sub Event 3"]
    n16 --> n25["Sub Event 3"]
    n17 --> n26["Sub Event 3"]
    n18 --> n27["Sub Event 3"]
    n19 --> n28["Sub Event 3"]
    n20 --> n29["Sub Event 3"]
    n21 --> n30["Sub Event 3"]
    n22 --> n31["Sub Event 3"]
    n23 --> n32["Sub Event 3"]

    S1@{ shape: rounded}
    n1@{ shape: diam}
    n3@{ shape: rounded}
    n4@{ shape: rounded}
    n5@{ shape: rounded}
    n11@{ shape: rect}
    n9@{ shape: rect}
    n7@{ shape: rect}
    n24@{ shape: rect}
    n25@{ shape: rect}
    n26@{ shape: rect}
    n27@{ shape: rect}
    n28@{ shape: rect}
    n29@{ shape: rect}
    n30@{ shape: rect}
    n31@{ shape: rect}
    n32@{ shape: rect}
```
### Explanation
As you see in the figure above, each element in Sub event 1 can be paired with 1 of the elements in Sub event 2. If there are n elements (or n ways in counting) in Sub event 2, you can pair it with one of the one of the elements in Sub event 1, which give n pairs. And since there are m elements im Sub event 1, there are m of n pairs similarly. Hence prove that the total pairs are $m \cdot n$ pair (or $m \cdot n$ ways in counting).
### Example 1 - Multiplication Principle
#### Problem
In how many ways have lunch consist of a drink from a menu with 5 soda options and 8 boba options, and a dish from the same menu with 3 vegan options and 7 non-vegan options.
#### Solution
In this problem, event "having lunch" consist of us choosing a drink and a dish, to be exact, choosing a drink *then* a dish. Consequently, such event is 2 Sub events happen in order : "get a drink" and then "get a dish". According to the principle, total ways we can have a lunch are *(number of ways to get a drink)* $\cdot$ *(number of ways to get a dish)*. We can find them using Addition Principle we established earlier. number of ways to get a drink are $5+8=13$, number of ways to get a dish are $3+7=10$. Hence the total ways to get a lunch are $13 \cdots 10=130$ ways. 

