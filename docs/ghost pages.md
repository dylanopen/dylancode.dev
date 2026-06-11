```dataview
TABLE without id 
out AS "Uncreated files", file.link as "Origin"
FLATTEN file.outlinks as out
WHERE !(out.file) AND !contains(meta(out).path, "/")
SORT out ASC
```
p

## [[flashcards]]

| Question | Answer |
| --- | --- |
| question: | How do you list all uncreated files that are linked in your notes using Dataview? |
| answer: | Use the query:<br/>```dataview<br/>TABLE without id <br/>out AS "Uncreated files", file.link as "Origin"<br/>FLATTEN file.outlinks as out<br/>WHERE !(out.file) AND !contains(meta(out).path, "/")<br/>SORT out ASC<br/>``` |
| question: | What does `FLATTEN file.outlinks as out` do in the Dataview query? |
| answer: | It expands each file's list of outlinks into individual rows, naming each link as `out`. |
| question: | What condition does `!(out.file)` check in the Dataview WHERE clause? |
| answer: | It checks if the outlink `out` does not point to an existing file (i.e., the file is missing/uncreated). |
| question: | Why is `!contains(meta(out).path, "/")` used in the WHERE clause? |
| answer: | To filter out links that contain a `/` in their path, which are likely external links or links to files in folders (only showing links without folder paths). |
| question: | What does the `SORT out ASC` clause do? |
| answer: | It sorts the resulting table by the `out` column (the uncreated file names) in ascending alphabetical order. |

