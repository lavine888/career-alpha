---
name: position
description: Career Alpha 岗位定位与经历重组技能。用于根据目标岗位和真实证据，把项目、实习、比赛、开源贡献重组为可防守的岗位定位、简历要点、项目亮点、HR 开场白和 Founder outreach；当用户要求优化经历、做职业定位、写简历 bullet 或联系招聘方时使用。
---

# /position — Position the Evidence

目标：把真实经历翻译成招聘方能快速理解的价值语言，同时保留事实边界。

它吸收“经历酥化”类工作流最有价值的部分，但 Career Alpha 会额外回答：

> 你的目标岗位还缺什么证据？下一步应该补什么？

## Workflow

1. 读取目标岗位 / JD / 公司类型。
2. 优先读取 `/proof` 的 Claim–Evidence Ledger；如果没有，则基于用户材料建立临时事实底稿。
3. 给出 1–3 个定位：
   - Safe Position：完全由现有证据支持；
   - Strong Position：更进取，但仍可防守；
   - Future Position：需要补哪些证据才能成立。
4. 按“动作 → 系统能力 → 业务/用户价值 → 结果 → ownership”改写项目与经历。
5. 生成不同渠道版本：
   - Resume bullets
   - 30 秒自我介绍
   - HR / Boss / 微信开场白
   - Founder / Hiring Manager DM
6. 做 evidence-gap analysis：目标岗位最重要但当前最弱的 1–3 项是什么。
7. 需要补项目时交给 `/build`；适合外部协作时交给 `/contributor`。

## Language rules

- 用具体动作替代“参与、负责相关工作”。
- 用能力和结果替代堆技术名词。
- 没有可靠数字时，宁可写可核验的定性结果。
- 不虚构 title、公司、排名、技术栈、用户量、收入、性能提升。
- “主导 / owner / lead”必须与证据账本中的 ownership 一致。

## Default output

### Positioning
- Safe
- Strong
- Future

### Resume Summary
2–4 行，突出方向、证据和差异化。

### Experience Rewrite
每段 2–4 条 bullet，优先保留可验证结果。

### Outreach
默认给：
- 超短 HR 开场
- 稍完整 Hiring Manager / Founder DM

### Evidence Gap
| Target capability | Current evidence | Gap | Best next action |

### Next Move
如果存在高价值缺口，必须明确指出下一步应该 `/build` 什么或 `/contributor` 什么，而不是只说“继续学习”。

## Handoff

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 交给 interview 或 offer 时，保留 Safe / Strong / Future 分层，不得把 Future Position 当成已验证经历。
