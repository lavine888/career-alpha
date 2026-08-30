<div align="center">

# Career Alpha

### AI-native Career OS · AI 原生职业操作系统

**Find your career alpha before it becomes consensus.**  
**在机会成为共识之前，找到你的职业 Alpha。**

[English](README_en.md) · [Workbench](assets/career-alpha-workbench.html) · [End-to-End Case](docs/agent-engineer-end-to-end.md)

![License](https://img.shields.io/badge/license-MIT-2f81f7)
![Codex](https://img.shields.io/badge/Codex-skill-111827)
![Claude Code](https://img.shields.io/badge/Claude_Code-plugin-d97757)
![OpenCode](https://img.shields.io/badge/OpenCode-plugin-2563eb)
![Evidence First](https://img.shields.io/badge/method-evidence--first-16a34a)

</div>

---

大多数求职工具从一个问题开始：

> **你已经做过什么，怎么写得更好？**

Career Alpha 往前多走一步：

> **未来两周你应该做什么，才能让半年后的自己更值钱？**

它从 **趋势发现 → 错位机会 → 主动造经历 → 外部协作 → 证据审计 → 岗位定位 → 面试防守 → 市场反馈** 建立一个完整闭环。

不是先包装简历，而是先制造 **值得被写进简历的事实**。

![Career Alpha journey from opportunity scanning to offer](assets/career-alpha-visual-02.png)

---

## ⚡ 直接体验：Career Alpha Workbench

仓库现在包含一个真正可用的本地 Workbench：

**[`assets/career-alpha-workbench.html`](assets/career-alpha-workbench.html)**

下载后用浏览器打开即可，无需安装依赖、无需服务器。

它可以维护：

- **Trend Radar** — 当前关注的趋势、分数、EARLY / GROWING / SATURATED 状态；
- **Opportunity Wedge** — Demand、Scarcity、Proofability、Timing 与 kill criteria；
- **Proof of Work** — 项目 / PR / benchmark 的完成状态；
- **Claim–Evidence Ledger** — VERIFIED / SUPPORTED / SELF-REPORTED / PLANNED；
- **Positioning** — Safe / Strong / Missing Evidence；
- **Interview Defense** — 当前最危险的简历主张；
- **Application Pipeline** — Target → Outreach → Interview → Offer。

所有数据默认只存在当前浏览器 `localStorage`，支持 **JSON 导入 / 导出**，不会自动上传。

> 打开后点击 **「载入示例」**，可以直接看到 Agent Engineer 案例状态。

---

## 🎯 一个完整例子

如果你现在是：

```text
CS 硕士
Python + TypeScript
做过几个 Agent Demo
没有大厂实习
目标：AI Agent Engineer
```

Career Alpha 不会只建议你“把 Agent 项目写高级一点”。

它会走完整个链路：

```text
/radar
Generic RAG      → SATURATED
Agent Eval       → EARLY / GROWING
Agent Reliability→ EARLY
        ↓
/wedge
选择 Agent Reliability / Evaluation
        ↓
/build
72h Mission：做固定任务集的 Agent Harness Reliability Benchmark
        ↓
/proof
Benchmark / raw CSV / failure taxonomy / architecture
        ↓
/position
从“做过 Agent Demo”
变成有证据边界的 Agent Evaluation / Reliability narrative
        ↓
/interview
追问 task sampling / baseline / ablation / model variance / ownership
        ↓
/offer
用真实回复、面试和拒绝重新验证这个职业假设
```

完整示例：**[Agent Engineer End-to-End Case](docs/agent-engineer-end-to-end.md)**

---

## Core Loop

```text
/radar
  ↓ 发现正在形成的真实需求
/wedge
  ↓ 选择供需错位的最小进入点
┌────────────────┐
│                │
▼                ▼
/contributor    /build
真实开源贡献     Proof of Work
│                │
└────────┬───────┘
         ↓
       /proof
建立 Claim–Evidence Ledger
         ↓
     /position
Safe / Strong / Future Position
         ↓
┌────────┴────────┐
▼                 ▼
/interview       /offer
面试压力测试      投递与市场反馈
                   │
                   └────→ 回流 /radar /wedge /build
```

这不是一次性的线性流程，而是 **Career Hypothesis Loop**。

---

## 8 个 Skills

| Skill | 它解决什么 | 主要交付 |
| --- | --- | --- |
| **`/radar`** | 哪些方向正在形成、但还没完全成为共识？ | Trend Radar、source hierarchy、反证、时间窗口 |
| **`/wedge`** | 我应该从这个趋势的哪个小切口进入？ | Wedge comparison、Evidence ROI、72h test、kill criteria |
| **`/build`** | 用 2–7 天造出什么事实最值钱？ | Mission Brief、baseline、evaluation、DoD、coding-agent prompt |
| **`/contributor`** | 如何通过真实开源协作获得外部证据？ | Repo rubric、拟改动、PR evidence、review boundary |
| **`/proof`** | 简历上的主张到底有多硬？ | Atomic claim audit、Evidence Card、confidence、safe wording |
| **`/position`** | 这些事实应该如何翻译成岗位语言？ | Safe / Strong / Future、resume bullet、HR / Founder outreach |
| **`/interview`** | 哪一句最容易被面试官问穿？ | Risk Map、five-layer drill、Defense Report、downgrade decision |
| **`/offer`** | 市场真实反馈是否支持当前假设？ | Pipeline、funnel、feedback loop、KEEP / REFINE / PIVOT |

每个 skill 现在都有自己的 `references/` 工具箱，不只是一个 prompt 文件。

---

## 第一次用，从哪里开始？

| 你的问题 | 推荐入口 |
| --- | --- |
| 不知道 AI / Agent / Quant / Robotics 接下来学什么 | `/radar` |
| 知道大方向，但不知道怎么切进去 | `/wedge` |
| 简历太空，想造一段真正能讲的经历 | `/build` |
| 想用真实 GitHub PR 建立协作证据 | `/contributor` |
| 项目很多，但不知道哪些话真的有证据 | `/proof` |
| 想把真实经历写成更强的岗位语言 | `/position` |
| 已经有面试，怕项目被问穿 | `/interview` |
| 已经开始投递，需要用市场反馈修正策略 | `/offer` |

### 常见路径

```text
没有相关经历：
/radar → /wedge → /build 或 /contributor → /proof → /position

已有项目，但很像 Demo：
/proof → /wedge → /build → /proof → /position

已有经历，不会表达：
/proof → /position → /interview

已经投递，但反馈很差：
/offer → /position / wedge / radar
```

---

## /radar：不是热点榜，是需求雷达

`/radar` 会区分信号层级：

```text
Tier A — 招聘、付费产品、first-party hiring、生产需求
Tier B — GitHub adoption、工程博客、benchmark、真实 builder pain
Tier C — 组织 / 融资 / 新团队
Tier D — 媒体、X、小红书、搜索热度
```

只有热度、没有 Tier A / B 支撑的方向，会被标记为 `HYPE` 或低 confidence。

统一状态：

```text
EARLY
GROWING
CONSENSUS
SATURATED
TOO_EARLY
HYPE
```

同时强制找 **negative evidence**，避免趋势分析变成自我说服。

---

## /wedge：不选最热门，选最小非对称入口

Career Alpha 支持多种 wedge：

- **Skill Wedge** — 新能力供给少；
- **Problem Wedge** — 新痛点开始产生预算；
- **Distribution Wedge** — 技术 × 市场 / 行业组合稀缺；
- **Evidence Wedge** — 大家都说会，但很少人能拿出 hard proof；
- **Organization Wedge** — 特定公司阶段需要非常规组合能力；
- **Contribution Wedge** — 通过真实开源生态建立外部验证。

核心不是“新”，而是：

```text
Evidence ROI = credibility gained / time + learning cost + coordination cost
```

---

## /build：先定义证据，再写代码

一个 Career Alpha 项目必须先回答：

> **项目完成后，我能诚实多说哪一句以前不能说的话？**

默认流程：

```text
Career Claim
   ↓
Baseline
   ↓
Intervention
   ↓
Evaluation
   ↓
Failure Cases
   ↓
Artifacts
   ↓
Definition of Done
```

优先项目 archetype：Benchmark、Reliability、Vertical Workflow、Integration、Cost / Latency、Open-source Extension、Reproduction。

不会默认让你再做一个全栈 ChatGPT Clone。

![Proof of Work：把努力变成可验证的结果](assets/career-alpha-visual-01.png)

---

## /proof：Claim–Evidence Ledger

Career Alpha 的核心事实层。

每条强主张拆成 atomic claims，并分别审计：

```text
Claim
Evidence
Result
Ownership
Confidence
Status
Causal Risk
Resume-safe Wording
Strong Wording Requirements
Interview Risks
Missing Evidence
```

Confidence 只允许：

- `VERIFIED`
- `SUPPORTED`
- `SELF-REPORTED`
- `PLANNED`

一个项目本身可以是 VERIFIED，但其中的“性能提升 28%”仍可能只是 SUPPORTED。

![证据账本：把主张和可验证证据对应起来](assets/career-alpha-visual-03.png)

需要结构化保存时使用：

- [career-claim-ledger-template.json](assets/career-claim-ledger-template.json)
- [claim-evidence-ledger.schema.json](references/claim-evidence-ledger.schema.json)

---

## /position：Safe / Strong / Future

它不是简单“简历润色”。

### Safe Position

当前证据直接支持，默认可写简历。

### Strong Position

更进取，但必须能明确解释边界。

### Future Position

下一阶段想成为谁，以及 **还缺什么证据**。

Future Position 不能被偷偷写成当前事实；它会被路由回 `/build` 或 `/contributor`。

同一份 evidence 可以生成：

- Resume Summary / bullets；
- 30 秒自我介绍；
- HR / Boss / 微信 opener；
- Hiring Manager / Founder DM；
- GitHub / portfolio intro；
- interview story。

但所有渠道必须回到同一个 Ledger，不能一个地方写 `contributed`，另一个地方突然变成 `led`。

---

## /interview：不是背题，是压力测试

针对高风险 claim 使用 five-layer follow-up：

```text
What exactly did you do?
Why this approach?
What alternative did you reject?
How did you measure it?
What failed?
What did teammates / AI tools do?
What would you change now?
```

输出 verdict：

```text
DEFENSIBLE
DEFENSIBLE_WITH_BOUNDARY
KNOWLEDGE_GAP
EVIDENCE_GAP
OWNERSHIP_GAP
DOWNGRADE
REMOVE
```

如果一条简历主张扛不住，默认选择补知识、补证据或降低表述，而不是训练用户“圆过去”。

---

## /offer：让市场修正你的判断

Pipeline 不是 Excel 档案，而是 Career Alpha 的反馈层。

记录：

- positioning version；
- 对方看到的 evidence；
- recruiter / engineer / founder feedback；
- repeated objection；
- role pattern；
- company pattern。

每个周期给：

```text
KEEP / REFINE / PIVOT
```

并回流：

```text
trend wrong      → /radar
wedge wrong      → /wedge
proof weak       → /build /contributor /proof
position unclear → /position
interview weak   → /interview
```

---

## Cross-skill Contract

所有 skills 通过 [Cross-skill Handoff Contract](references/handoff-contract.md) 共享最小 Context Packet：

- Goal
- Verified facts
- Hypotheses / fresh signals
- Planned work
- Evidence references
- Open questions
- Recommended next skill
- Privacy boundary

核心规则：

> **下一个 skill 可以改写表达，但不能静默提升 confidence、扩大 ownership，或把计划写成既成事实。**

---

## Installation

### Codex

最简单的方式：把仓库链接发给 Codex。

```text
请从这个仓库安装 Career Alpha，并启用 radar、wedge、contributor、build、proof、position、interview、offer：
https://github.com/lavine888/career-alpha
```

安装后新开一个对话，让 skill 重新加载。

### Claude Code / OpenCode

仓库包含：

```text
.codex-plugin/
.claude-plugin/
.opencode-plugin/
```

三者共享同一套 `skills/`、`references/` 和 `assets/`。

---

## Repository Structure

```text
career-alpha/
├── .codex-plugin/plugin.json
├── .claude-plugin/plugin.json
├── .opencode-plugin/plugin.json
├── assets/
│   ├── career-alpha-workbench.html
│   ├── career-alpha-visual-01.png
│   ├── career-alpha-visual-02.png
│   ├── career-alpha-visual-03.png
│   └── career-claim-ledger-template.json
├── docs/
│   └── agent-engineer-end-to-end.md
├── skills/
│   └── <skill>/
│       ├── SKILL.md
│       ├── agents/openai.yaml
│       └── references/
├── references/
│   ├── career-alpha-playbook.md
│   ├── trend-scoring-framework.md
│   ├── opportunity-scoring.md
│   ├── proof-of-work-standard.md
│   ├── claim-evidence-ledger.md
│   ├── claim-evidence-ledger.schema.json
│   ├── handoff-contract.md
│   ├── resume-language-guide.md
│   └── interview-defense-framework.md
├── tests/
│   ├── skill-routing-cases.yaml
│   └── routing-boundary-cases.yaml
└── scripts/
    ├── validate_skills.py
    └── validate_package.py
```

---

## Validation

```bash
python3 scripts/validate_skills.py
python3 scripts/validate_package.py
```

基础校验检查 frontmatter、plugin JSON、references 和路由；严格校验进一步检查入口元数据、handoff、ledger schema、模板和 routing fields。

---

## Design Principles

1. **Asymmetric opportunity** — 不只看最热门，寻找需求与供给暂时错位的地方。
2. **Proof before polish** — 先建立 Repo / PR / Benchmark / Deployment / User Feedback，再优化表达。
3. **No fabricated alpha** — 不虚构 title、数字、排名、技术栈、production、ownership。
4. **Fresh signals, explicit uncertainty** — 趋势必须标注来源、日期、样本与 uncertainty。
5. **Interview-defensible by default** — 写进简历的主张默认应该扛得住至少五层追问。
6. **Market feedback closes the loop** — 求职不是最后一步，而是下一轮职业假设的数据源。

---

## Contribution Boundary

- 只写真实、可核验或明确标记为计划的经历；
- 外部 fork / patch / PR / message 操作前先展示动作与风险；
- 公开示例只保留最小必要信息；
- 招聘邮件、联系人、薪资、内部链接和未公开项目默认留在本地；
- 欢迎提交新的 wedge、真实案例、routing case、benchmark pattern 与 evidence protocol。

## License

MIT
