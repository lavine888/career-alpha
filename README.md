<div align="center">

<img src="assets/career-alpha-logo.svg" width="120" alt="Career Alpha logo" />

# Career Alpha

### AI-native Career OS · AI 原生职业操作系统

**Find your career alpha before it becomes consensus.**  
**在机会成为共识之前，找到你的职业 Alpha。**

[English](README_en.md) · [打开 Workbench](assets/career-alpha-workbench.html) · [5 分钟上手](docs/quickstart.md) · [安装](docs/installation.md) · [案例](docs/cases/README.md)

![Version](https://img.shields.io/badge/version-0.3.0-cbb7ff)
![License](https://img.shields.io/badge/license-MIT-2f81f7)
![Codex](https://img.shields.io/badge/Codex-skill-111827)
![Claude Code](https://img.shields.io/badge/Claude_Code-plugin-d97757)
![OpenCode](https://img.shields.io/badge/OpenCode-plugin-2563eb)
![TraeWork](https://img.shields.io/badge/TraeWork-plugin-7c3aed)
![Evidence First](https://img.shields.io/badge/method-evidence--first-16a34a)

</div>

<img src="assets/career-alpha-hero.svg" width="100%" alt="Career Alpha workflow" />

---

大多数求职工具从一个问题开始：

> **你已经做过什么，怎么写得更好？**

Career Alpha 往前多走一步：

> **未来两周你应该做什么，才能让半年后的自己更值钱？**

它不是先包装简历，而是从 **趋势 → 错位机会 → Proof of Work → 证据 → 定位 → 面试 → 市场反馈** 建立一个 Career Hypothesis Loop。

**Don’t fake experience. Build real evidence faster.**

---

## ⚡ Workbench v0.3

[`assets/career-alpha-workbench.html`](assets/career-alpha-workbench.html) 是一个单文件、本地优先的职业操作台。浏览器直接打开即可使用，不需要服务器。

<img src="assets/workbench-preview.svg" width="100%" alt="Career Alpha Workbench preview" />

v0.3 包含：

- **3-step Start Guide** — 根据目标岗位、现有证据和每周投入，推荐从 `/radar`、`/proof`、`/position` 或 `/offer` 开始；
- **Trend Radar** — 记录需求信号、阶段和反证；
- **Opportunity Wedge** — Demand / Scarcity / Proofability / Timing + kill criteria；
- **Proof of Work** — 管理可验证项目、PR、benchmark 和完成状态；
- **Claim–Evidence Ledger** — `VERIFIED / SUPPORTED / SELF-REPORTED / PLANNED`；
- **Career Health** — 分开显示 Signal Confidence / Evidence Strength / Market Validation，不制造假的总分；
- **Career Summary** — 自动给出当前 wedge 和下一步 skill；
- **Application Pipeline** — Discover → Active → Outcome；
- **Interview Defense** — 追踪最危险的主张和下一轮压力测试；
- **Case Lab** — 离线切换 Agent Engineer / AI PM / Quant / Robotics 四套完整状态；
- **Share Card** — 本地生成 1600×900 Career Alpha Snapshot PNG；
- **Adaptive Buddy** — 根据证据和市场状态切换 sleepy / focus / happy / celebrate。

### Local-first 数据边界

Workbench 不自动上传任何职业数据。

```text
localStorage key: career-alpha-workbench-v2
state schema:     1.0
```

v0.3 新增 [`assets/workbench-state.schema.json`](assets/workbench-state.schema.json)：

- 旧 `career-alpha-workbench-v1` 数据会自动迁移；
- JSON 导入会先 normalize，再进入当前状态；
- 未知的未来 `schema_version` 会被拒绝，避免静默破坏数据；
- 导出文件始终包含 `schema_version: "1.0"`。

---

## Core Loop

```text
/radar
  ↓ 发现真实需求
/wedge
  ↓ 找最小非对称入口
┌───────────────┐
▼               ▼
/contributor   /build
外部协作证据    Proof of Work
└───────┬───────┘
        ↓
      /proof
Claim–Evidence Ledger
        ↓
    /position
Safe / Strong / Future
        ↓
┌───────┴───────┐
▼               ▼
/interview     /offer
压力测试        市场反馈
                  │
                  └──→ 回流 /radar /wedge /build
```

---

## 8 个 Skills

| Skill | 问题 | 主要交付 |
| --- | --- | --- |
| **`/radar`** | 什么正在形成，但还没成为共识？ | Signal hierarchy、反证、时间窗口 |
| **`/wedge`** | 从哪里切进去最有非对称优势？ | Wedge comparison、72h test、kill criteria |
| **`/build`** | 2–7 天造什么事实最值钱？ | Mission Brief、baseline、evaluation、DoD |
| **`/contributor`** | 如何用真实开源协作建立外部证据？ | Repo rubric、PR evidence、review boundary |
| **`/proof`** | 哪些职业主张真的站得住？ | Atomic claim audit、confidence、ownership |
| **`/position`** | 如何把事实翻译成岗位语言？ | Safe / Strong / Future positioning |
| **`/interview`** | 哪句话最容易被问穿？ | Risk Map、five-layer drill、Defense Report |
| **`/offer`** | 市场是否支持当前职业假设？ | Pipeline、feedback loop、KEEP / REFINE / PIVOT |

每个 skill 都有独立 `references/`，而不是只有一段 prompt。

---

## 🎯 4 个 End-to-End Cases

| Case | 核心 Wedge | Proof of Work |
| --- | --- | --- |
| **[Agent Engineer](docs/agent-engineer-end-to-end.md)** | Agent Reliability / Evaluation | harness benchmark、failure taxonomy、ablation |
| **[AI Product Manager](docs/cases/ai-product-manager.md)** | Workflow + Evaluation PM | workflow、eval rubric、human fallback、outcome metrics |
| **[Quant Researcher](docs/cases/quant-researcher.md)** | Robustness-first Research | cost model、sensitivity、failure regimes |
| **[Robotics / Physical AI](docs/cases/robotics-engineer.md)** | Eval + Reliability | fixed scenarios、recovery benchmark、simulation boundary |

共同原则：

> **不要先问“怎么包装这个项目”，先问“还缺什么事实，才能让我诚实地多说一句更强的话”。**

---

## Integrity：Evidence First 不是一句 slogan

Career Alpha 的状态转换受到两个回归测试约束：

```bash
npm run eval:handoff
npm run eval:integrity
```

它们专门阻止：

- `PLANNED` 被偷偷写成 completed；
- 团队成果被扩张成个人 sole ownership；
- weak evidence 被升级成 `VERIFIED`；
- backtest 被描述成 production result；
- simulation / demo 被描述成 real-world deployment；
- `/radar → /wedge → /proof` 时 uncertainty 无依据消失。

真实案例收集也有独立协议：[`docs/real-cases/`](docs/real-cases/README.md)。

---

## Browser E2E

v0.3 不再只检查“HTML 里有没有按钮文字”。Playwright 会真的打开 Workbench 并执行：

```text
Onboarding
→ Case Lab
→ localStorage persistence
→ v1 → v2 migration
→ Share Card rendering
→ schema-aware JSON export
```

运行：

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

完整验证：

```bash
npm run validate
npm run test:e2e
```

---

## Local Workspace / CLI

```bash
npm run init
npm run demo
npm run snapshot
```

`npm run init` 会创建本地 `.career-alpha/` 工作区；它已默认加入 `.gitignore`。

`npm run snapshot` 会生成一个可人工复核的 Career Alpha Markdown Snapshot，公开前仍需要你自己检查隐私内容。

---

## Installation

完整步骤见 [docs/installation.md](docs/installation.md)。

### Codex

```text
请从这个仓库安装 Career Alpha，并启用 radar、wedge、contributor、build、proof、position、interview、offer：
https://github.com/lavine888/career-alpha
```

### Claude Code

```text
/plugin marketplace add lavine888/career-alpha
/plugin install career-alpha@career-alpha
```

仓库同时提供：

```text
.codex-plugin/
.claude-plugin/
.opencode-plugin/
.trae-plugin/
```

四套客户端共享同一套 `skills/`、`references/` 和 evidence contract。

---

## Repository Structure

```text
career-alpha/
├── assets/
│   ├── career-alpha-logo.svg
│   ├── career-alpha-mascot.svg
│   ├── career-alpha-hero.svg
│   ├── career-alpha-workbench.html
│   ├── workbench-preview.svg
│   └── workbench-state.schema.json
├── skills/<skill>/
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   └── references/
├── references/
├── docs/
│   ├── cases/
│   └── real-cases/
├── examples/workbench/
├── tests/
│   ├── e2e/
│   └── integrity-eval-cases.json
├── scripts/
├── playwright.config.mjs
├── ROADMAP.md
└── package.json
```

---

## Design Principles

1. **Asymmetric opportunity** — 不只追最热门，找需求和人才供给暂时错位的位置。
2. **Proof before polish** — 先建立 Repo / PR / Benchmark / Deployment / User Feedback，再优化表达。
3. **No fabricated alpha** — 不虚构 title、数字、排名、production、ownership。
4. **Fresh signals, explicit uncertainty** — 趋势判断保留来源、日期、样本和 uncertainty。
5. **Interview-defensible by default** — 强主张必须准备好连续追问。
6. **Market feedback closes the loop** — 投递结果不是终点，而是下一轮职业假设的数据。

---

## Contributing

欢迎提交真实匿名 Career Alpha loop、wedge / benchmark pattern、failure case、routing/eval case 和 Workbench 改进。

查看 [CONTRIBUTING.md](CONTRIBUTING.md) 与 [ROADMAP.md](ROADMAP.md)。

## License

MIT
