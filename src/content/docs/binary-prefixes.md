---
title: Binary prefixes
---

Just like we have *decimal* prefixes, such as mega (for x1,000,000) and
nano (for x0.000001), we also have *binary* prefixes, which are based on powers
of 2.

## Common binary prefixes

| Prefix | Symbol | Factor   |
|--------|--------|----------|
| kibi   | Ki     | $2^{10}$ |
| mebi   | Mi     | $2^{20}$ |
| gibi   | Gi     | $2^{30}$ |
| tebi   | Ti     | $2^{40}$ |
| pebi   | Pi     | $2^{50}$ |

> An interesting pattern here is that each prefix is 1024 times larger than the
> previous one, since $2^{10} = 1024$.

## Example conversions

### Example: Convert 4 kibibytes to bytes.

- 1 kibibyte (KiB) = $2^{10}$ bytes (B)
- 4 KiB = $4 \times 2^{10}$ B = 4096 B
- **Answer**: 4096 bytes

### Example: Convert 3 mebibytes to bytes.

- 1 mebibyte (MiB) = $2^{20}$ bytes (B)
- 3 MiB = $3 \times 2^{20}$ B = 3,145,728 B
- **Answer**: 3,145,728 bytes

### Example: Convert 2 gibibytes to mebibytes.

- 1 gibibyte (GiB) = $2^{30}$ bytes (B)
- 1 mebibyte (MiB) = $2^{20}$ bytes (B)
- Therefore, 1 GiB = $2^{30} \div 2^{20} = 2^{10}$ MiB = 1024 MiB
- 2 GiB = $2 \times 1024$ MiB = 2048 MiB
- **Answer**: 2048 mebibytes

### Example: Convert 5 tebibytes to gibibytes.

- 1 tebibyte (TiB) = $2^{40}$ bytes (B)
- 1 gibibyte (GiB) = $2^{30}$ bytes (B)
- Therefore, 1 TiB = $2^{40} \div 2^{30} = 2^{10}$ GiB = 1024 GiB
- 5 TiB = $5 \times 1024$ GiB = 5120 GiB
- **Answer**: 5120 gibibytes

### Example: Convert 1 pebibyte to gibibytes.

- 1 pebibyte (PiB) = $2^{50}$ bytes (B)
- 1 gibibyte (GiB) = $2^{30}$ bytes (B)
- Therefore, 1 PiB = $2^{50} \div 2^{30} = 2^{20}$ GiB = 1,048,576 GiB
- 1 PiB = 1,048,576 GiB
- **Answer**: 1,048,576 gibibytes

