# Axios vs Fetch

## Interceptores
- Execute logic before the request (auth, headers, logs)
- Execute logic after response (logs, retry, refresh token, global errors)

## bundle size

### axios
| size | Time (ms) |
|---------|------------|
| 36.6 KiB | 464 ms |

### Fetch
| size | Time (ms) |
|---------|------------|
| 1.57 KiB | 162 ms |

## Execution Test

#### Axios
| Execution | Time (ms) |
|---------|------------|
| 1 | 100.78 |
| 2 | 111.01 |
| 3 | 109.31 |
| 4 | 126.03 |
| 5 | 107.03 |
| 6 | 106.07 |
| 7 | 100.78 |
| 8 | 105.29 |
| 9 | 111.04 |
| 10 | 147.81 |
| **Average** | **112.52** |

#### Fetch
| Execution | Time (ms) |
|---------|------------|
| 1 | 152.65 |
| 2 | 137.31 |
| 3 | 125.33 |
| 4 | 148.25 |
| 5 | 129.11 |
| 6 | 137.54 |
| 7 | 126.55 |
| 8 | 128.29 |
| 9 | 150.09 |
| 10 | 172.29 |
| **Average** | **140.74** |
