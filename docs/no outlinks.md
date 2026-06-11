
```dataview
TABLE
file.path, length(file.outlinks)
FROM ""
WHERE (length(file.outlinks) = 0)
SORT Date DESC
```

## [[flashcards]]

| Question | Answer |
| --- | --- |
| What does the provided Dataview query do? | It returns a table of files with no outlinks, showing their paths and the count of their outlinks (which will be zero), sorted by Date descending. |

