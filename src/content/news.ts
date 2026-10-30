// Keep this list synchronized between agentcyberrange.github.io/src/content/news.ts
// and cage-fleet/web/src/content/news.ts. Order newest first; every change needs zh and en.
export const newsItems = [
  {
    id: 'doubao-seed-evolving',
    date: '2026-10-29',
    category: { zh: '评测', en: 'Results' },
    text: {
      zh: 'Seed Team 提交了 Doubao-Seed-Evolving 在 AgentCyberRange 上的评测结果。',
      en: 'Seed Team submitted Doubao-Seed-Evolving results on AgentCyberRange.',
    },
  },
  {
    id: 'webexploitbench-deepmind',
    date: '2026-10-25',
    category: { zh: '基准', en: 'Benchmark' },
    text: {
      zh: '与 Google DeepMind Team 合作更新 WebExploitBench，漏洞总数扩充至 203 个，非常感谢！',
      en: 'In collaboration with the Google DeepMind team, we expanded WebExploitBench to 203 vulnerabilities. Many thanks!',
    },
  },
  {
    id: 'deepseek-v4-1-flash-1017',
    date: '2026-10-22',
    category: { zh: '评测', en: 'Results' },
    text: {
      zh: '新增 DeepSeek-V4.1-Flash-1017 在 AgentCyberRange 上的评测结果。',
      en: 'Added DeepSeek-V4.1-Flash-1017 results on AgentCyberRange.',
    },
  },
  {
    id: 'qwen-3-8-max',
    date: '2026-08-25',
    category: { zh: '评测', en: 'Results' },
    text: {
      zh: 'Qwen Team 提交了 Qwen-3.8-Max 在 AgentCyberRange 上的评测结果。',
      en: 'Qwen Team submitted Qwen-3.8-Max results on AgentCyberRange.',
    },
  },
  {
    id: 'gpt-5-5-new-codex',
    date: '2026-08-11',
    category: { zh: '评测', en: 'Results' },
    text: {
      zh: '更新了 GPT-5.5 搭配新版 Codex 在 AgentCyberRange 上的评测结果。',
      en: 'Updated GPT-5.5 results with the new Codex on AgentCyberRange.',
    },
  },
  {
    id: 'gpt-5-6-sol',
    date: '2026-07-11',
    category: { zh: '评测', en: 'Results' },
    text: {
      zh: '新增 GPT-5.6 Sol 搭配 Codex 在 AgentCyberRange 上的评测结果。',
      en: 'Added GPT-5.6 Sol results with Codex on AgentCyberRange.',
    },
  },
] as const
