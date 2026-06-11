# Evaluation Results

Metrics are averaged over the 8 tasks at each level.
- **Pass@1** — single-attempt success rate.
- **Pass@3 (Avg.)** — average success rate over three independent attempts.
- **Pass@3 (Max)** — task counts as solved if any one of the three attempts succeeds.
- **Cost (M)** / **Time (min)** — averaged across attempts and tasks (`/` = not recorded).

The bar charts (`exports/web_exploitation_chart.pdf`, `exports/post_exploitation_chart.pdf`)
plot the **Pass@3 (Avg.)** metric.

---

## Web Exploitation

| Model | Agent | Level | Pass@1 | Pass@3 (Avg.) | Pass@3 (Max) | Cost (M) | Time (min) |
|---|---|---|---|---|---|---|---|
| GPT-5.5 | Codex | Level-0 | 19.09% | 16.06% | 28.18% | / | / |
| GPT-5.5 | Codex | Level-1 | 36.36% | 32.12% | 47.27% | / | / |
| GPT-5.5 | Codex | Level-2 | 31.82% | 33.03% | 43.64% | / | / |
| Claude-Opus-4.7 | Claude Code | Level-0 | 13.64% | 10.91% | 22.73% | / | / |
| Claude-Opus-4.7 | Claude Code | Level-1 | 23.64% | 19.39% | 34.55% | / | / |
| Claude-Opus-4.7 | Claude Code | Level-2 | 28.18% | 21.82% | 36.36% | / | / |
| GLM-5.1 | Claude Code | Level-0 | 3.64% | 5.45% | 12.73% | / | / |
| GLM-5.1 | Claude Code | Level-1 | 12.73% | 14.85% | 26.36% | / | / |
| GLM-5.1 | Claude Code | Level-2 | 17.27% | 14.85% | 25.45% | / | / |
| DeepSeek-V4-Pro | Claude Code | Level-0 | 10.00% | 8.18% | 18.18% | / | / |
| DeepSeek-V4-Pro | Claude Code | Level-1 | 12.73% | 14.55% | 30.00% | / | / |
| DeepSeek-V4-Pro | Claude Code | Level-2 | 13.64% | 20.61% | 43.64% | / | / |
| Qwen-3.7-Max | Qwen Code | Level-0 | 4.55% | 1.52% | 4.55% | / | / |
| Qwen-3.7-Max | Qwen Code | Level-1 | 26.36% | 8.79% | 26.36% | / | / |
| Qwen-3.7-Max | Qwen Code | Level-2 | 12.73% | 4.24% | 12.73% | / | / |
| Kimi-2.6 | Kimi Code | Level-0 | 3.64% | 3.03% | 8.18% | / | / |
| Kimi-2.6 | Kimi Code | Level-1 | 12.73% | 12.12% | 18.18% | / | / |
| Kimi-2.6 | Kimi Code | Level-2 | 9.09% | 10.00% | 17.27% | / | / |

---

## Post Exploitation

| Model | Agent | Level | Pass@1 | Pass@3 (Avg.) | Pass@3 (Max) | Cost (M) | Time (min) |
|---|---|---|---|---|---|---|---|
| GPT-5.5 | Codex | Level-0 | 31.25% | 31.53% | 43.54% | 37.36 | 84.98 |
| GPT-5.5 | Codex | Level-1 | 39.38% | 33.40% | 43.54% | 41.12 | 81.50 |
| GPT-5.5 | Codex | Level-2 | 44.58% | 47.20% | 71.67% | 34.38 | 74.94 |
| Claude-Opus-4.7 | Claude Code | Level-0 | 4.58% | 11.11% | 24.38% | 48.57 | 99.00 |
| Claude-Opus-4.7 | Claude Code | Level-1 | 2.08% | 5.35% | 13.33% | 27.18 | 79.21 |
| Claude-Opus-4.7 | Claude Code | Level-2 | 29.58% | 29.77% | 44.17% | 41.14 | 94.54 |
| GLM-5.1 | Claude Code | Level-0 | 18.13% | 11.23% | 20.21% | 17.78 | 111.29 |
| GLM-5.1 | Claude Code | Level-1 | 13.54% | 11.10% | 19.79% | 13.52 | 101.90 |
| GLM-5.1 | Claude Code | Level-2 | 14.58% | 14.19% | 26.88% | 20.30 | 105.20 |
| DeepSeek-V4-Pro | Claude Code | Level-0 | 9.79% | 12.57% | 20.21% | 20.01 | 80.71 |
| DeepSeek-V4-Pro | Claude Code | Level-1 | 9.79% | 10.69% | 15.00% | 26.22 | 79.80 |
| DeepSeek-V4-Pro | Claude Code | Level-2 | 9.38% | 15.33% | 32.08% | 24.22 | 83.16 |
| Qwen-3.7-Max | Qwen Code | Level-0 | 18.13% | 12.45% | 18.13% | 21.84 | 90.19 |
| Qwen-3.7-Max | Qwen Code | Level-1 | 13.96% | 13.99% | 27.50% | 17.89 | 77.85 |
| Qwen-3.7-Max | Qwen Code | Level-2 | 13.96% | 17.91% | 24.79% | 21.80 | 86.53 |
| Kimi-2.6 | Kimi Code | Level-0 | 9.79% | 5.34% | 11.88% | 18.23 | 104.11 |
| Kimi-2.6 | Kimi Code | Level-1 | 7.29% | 6.26% | 9.38% | 18.73 | 111.17 |
| Kimi-2.6 | Kimi Code | Level-2 | 17.71% | 12.79% | 22.29% | 21.79 | 108.38 |

> **Note.** For Claude-Opus-4.7 (post exploitation), 13 trials stopped due to safety-related
> refusals and are excluded.
