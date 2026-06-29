```dataviewjs
const unresolvedLinks = app.metadataCache.unresolvedLinks;
const linkCounts = {};

for (const sourceFile in unresolvedLinks) {
    const targets = unresolvedLinks[sourceFile];
    for (const target in targets) {
        const count = targets[target];
        if (linkCounts[target]) {
            linkCounts[target] += count;
        } else {
            linkCounts[target] = count;
        }
    }
}

const sortedLinks = Object.entries(linkCounts)
    .map(([note, count]) => ({ note, count }))
    .sort((a, b) => b.count - a.count);

if (sortedLinks.length > 0) {
    dv.table(
        ["Missing Note", "Backlinks Count"], 
        sortedLinks.map(item => [
            dv.fileLink(item.note),
            item.count
        ])
    );
} else {
    dv.paragraph("No missing or unresolved links found!");
}
```
