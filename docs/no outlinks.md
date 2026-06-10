
```dataview
TABLE
file.path, length(file.outlinks)
FROM ""
WHERE (length(file.outlinks) = 0)
SORT Date DESC
```
