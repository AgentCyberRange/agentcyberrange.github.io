// Publication dates are examples from the approved design, not verified release dates.
// Confirm them before a production merge. Keep this seed data synchronized between
// agentcyberrange.github.io/src/content/news.ts and cage-fleet/web/src/content/news.ts.
export const newsItems = [
  {
    id: 'v2-preview',
    date: '2026-10-20',
    category: { zh: '预告', en: 'Preview' },
    text: {
      zh: 'AgentCyberRange v2.0 即将发布：更真实、更复杂、规模更大的评测环境。',
      en: 'AgentCyberRange v2.0 is coming: more realistic, more complex, and larger-scale environments.',
    },
    href: 'https://eval.agentcyberrange.io/',
  },
  {
    id: 'leaderboard-update',
    date: '2026-10-18',
    category: { zh: '评测', en: 'Results' },
    text: {
      zh: '排行榜新增 Qwen-3.8-Max 与 GPT-5.5（Codex 0.147.0）的评测结果。',
      en: 'New leaderboard results for Qwen-3.8-Max and GPT-5.5 with Codex 0.147.0.',
    },
    href: 'https://eval.agentcyberrange.io/#leaderboard',
  },
  {
    id: 'python-sdk-guide',
    date: '2026-10-15',
    category: { zh: 'SDK', en: 'SDK' },
    text: {
      zh: 'Python SDK 接入指南已上线，通过 run_agent() 运行 Agent 并提交评测。',
      en: 'The Python SDK integration guide is available. Run and submit evaluations with run_agent().',
    },
    href: 'https://eval.agentcyberrange.io/#sdk',
  },
  {
    id: 'open-source-environments',
    date: '2026-10-12',
    category: { zh: '开源', en: 'Open source' },
    text: {
      zh: '部分 Web 与后渗透测试环境已开源，可先本地验证，再申请正式评测。',
      en: 'Selected Web and post-exploitation environments are open source for local testing.',
    },
    href: 'https://github.com/AgentCyberRange',
  },
  {
    id: 'technical-report',
    date: '2026-10-08',
    category: { zh: '报告', en: 'Research' },
    text: {
      zh: 'AgentCyberRange 技术报告已公开，介绍评测任务、实验结果与关键发现。',
      en: 'Read the AgentCyberRange technical report for tasks, evaluation results, and findings.',
    },
    href: 'https://arxiv.org/abs/2606.14295',
  },
  {
    id: 'cage-toolkit',
    date: '2026-10-01',
    category: { zh: '工具', en: 'Toolkit' },
    text: {
      zh: 'CAGE 提供 Agent 运行、任务编排、结果收集与自动验证工具链。',
      en: 'Explore CAGE for agent execution, task orchestration, result collection, and verification.',
    },
    href: 'https://github.com/AgentCyberRange/CAGE',
  },
] as const
