# Critical Path Analysis

## Activity box

- Shows the activity name, the **early start** time, **duration** and **late
  finish** time.
- The **early start** time is the earliest time that the activity can start,
  based on the durations of *preceding* activities.
- The **duration** is how long the activity takes.
- The **late finish** time is the latest time that the activity can finish
  without delaying the overall project.

### Example activity network

## Float

The float is the amount of time that an activity can be delayed without delaying
the overall project.

The float is calculated using:

$$
\text{Float}=\text{Late Finish}-\text{Early Start}-\text{Duration}
$$

The **critical path** is the sequence of activities that have zero float.
Any delay in these activities will delay the overall project.

The critical path can be found by:
- Calculating the early start and late finish times for each activity.
- Identifying the activities with zero float.
- Tracing the path through these activities from start to finish.

## Activity network example 1

The table below shows the activities, durations and predecessors for a project.

| Activity | Duration (days) | Immediate predecessors |
|----------|-----------------|------------------------|
| A        | 3               | -                      |
| B        | 4               | -                      |
| C        | 6               | -                      |
| D        | 5               | A                      |
| E        | 5               | B                      |
| F        | 6               | B                      |
| G        | 7               | C, D, E                |

Draw the activity network:
![[../../assets/activity networks 1.png|Activity network example 1]]

Find the early start times:
![[../../assets/activity networks 2.png|Early start times example 1]]

## [[flashcards]]

| Question | Answer |
| --- | --- |
| activity name | Shows the activity name, the early start time, duration and late finish time |
| early start time | The earliest time that the activity can start, based on the durations of preceding activities |
| duration | How long the activity takes |
| late finish time | The latest time that the activity can finish without delaying the overall project |
| float | The amount of time that an activity can be delayed without delaying the overall project |
| float formula | $\text{Float}=\text{Late Finish}-\text{Early Start}-\text{Duration}$ |
| critical path | The sequence of activities that have zero float; any delay in these activities will delay the overall project |
| How do you find the critical path? | Calculate the early start and late finish times for each activity. Identify the activities with zero float. Trace the path through these activities from start to finish. |

