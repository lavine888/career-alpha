# Career Alpha

> **Find your career alpha before it becomes consensus.**
>
> 在机会成为共识之前，找到你的职业 Alpha。

Career Alpha 是一套面向 AI 时代的开源求职工作流。它不只优化你已经拥有的简历，而是从 **趋势发现 → 错位机会 → 主动造经历 → 证据化 → 岗位定位 → 面试防守 → 投递管理**，帮助你建立真正可验证的职业优势。

很多求职工具从「你已经做过什么」开始。Career Alpha 更往前一步：

> **未来两周你应该做什么，才能让半年后的自己更值钱？**

## Why Career Alpha

传统求职往往是在拥挤赛道里做同质化竞争：大家学同一套技术、做同一种项目、刷同一套题，再努力把 60 分卷到 85 分。

Career Alpha 采用另一种思路：

1. 找到需求已经出现、但人才供给尚未饱和的新方向；
2. 识别目标岗位真正缺少的可验证证据；
3. 用 2–7 天的小型 Proof of Work 主动补齐证据；
4. 把项目、开源贡献和真实结果沉淀成 Claim–Evidence Ledger；
5. 再把证据转译成简历、HR 开场白、Founder DM 和面试故事；
6. 用连续追问检查这些表述是否真的经得起面试。

这不是「教你包装自己」，而是 **先制造值得被包装的东西**。

## Skills

Career Alpha 由 8 个可以独立调用、也可以串联使用的 skills 组成：

| Skill | 作用 | 主要交付 |
| --- | --- | --- |
| `/radar` | 扫描正在形成的技术与行业趋势 | Trend Radar、时间窗口、风险 |
| `/wedge` | 找需求增长快于人才供给的错位机会 | Opportunity Score、切入口、岗位假设 |
| `/contributor` | 寻找真实、可验证的开源贡献机会 | Contribution Plan、PR 证据 |
| `/build` | 把机会转成 2–7 天可完成的 Proof of Work | Mission Brief、里程碑、交付标准 |
| `/proof` | 把经历沉淀成 GitHub / Demo / Benchmark / Evidence | Evidence Card、Claim–Evidence Ledger |
| `/position` | 将真实经历翻译成目标岗位语言 | 岗位定位、简历要点、HR 开场白 |
| `/interview` | 连续追问，验证你是否真的掌握简历上的东西 | Defense Report、薄弱点、补课清单 |
| `/offer` | 管理投递、面试、拒信、Offer 与后续动作 | Pipeline、Next Action、复盘 |

## Core Loop

```text
/radar
   ↓
发现新趋势
   ↓
/wedge
   ↓
找到供需错位机会
   ↓
┌───────────────┐
│               │
▼               ▼
/contributor   /build
开源贡献       自建项目
│               │
└───────┬───────┘
        ↓
      /proof
建立真实证据
        ↓
    /position
岗位定位 + 经历重组
        ↓
┌───────┴────────┐
▼                ▼
/interview      /offer
面试防守        投递管理
```

## The Evidence Layer

Career Alpha 的所有核心 skill 共享同一套 **Claim–Evidence Ledger**。任何强主张都必须尽可能绑定真实证据：

```text
Claim
Built an agent harness benchmark.

Evidence
- GitHub repository
- architecture diagram
- benchmark.csv
- demo video

Result
61% → 78%

Ownership
本人负责：benchmark design / retry policy / context strategy
团队负责：UI

Confidence
VERIFIED

Interview risks
- 为什么选择这组任务？
- 如何排除模型升级带来的影响？
- 有没有 regression？
```

没有证据的数字不自动生成；没有直接负责的内容不冒领；没有完成的贡献不会写成已完成。

## Example

用户输入：

```text
/position
目标：Agent Engineer
经历：做过一个 AI 教育项目、参加过黑客松、写过几个 Agent demo。
```

Career Alpha 不会只返回一份更漂亮的简历，而会进一步给出：

```text
稳妥定位
AI Product / Agent Application Engineer

进取定位
Agent Systems Engineer

当前证据缺口
- agent eval
- observability
- production reliability

建议下一步
/build agent-observability-benchmark
```

也就是说：**经历 → 定位 → 找缺口 → 再造经历 → 再定位**。

## Philosophy

### 1. Asymmetric opportunity

不要只问「什么最热门」，而要问：

> 哪里已经开始有人付钱，但真正做过的人还很少？

### 2. Proof before polish

先建立证据，再优化表达。项目、PR、Demo、Benchmark、用户反馈都比空泛的形容词更有价值。

### 3. No fabricated alpha

Career Alpha 可以帮助用户更准确、更有攻击性地表达真实经历，但不虚构公司、职位、技术栈、数据、排名或 ownership。

### 4. Interview-defensible by default

任何写进简历的强主张，都应该能被连续追问 5 层以上而不崩。

## Repository Structure

```text
career-alpha/
├── README.md
├── README_en.md
├── LICENSE
├── AGENTS.md
├── CLAUDE.md
├── .codex-plugin/
│   └── plugin.json
├── .claude-plugin/
│   └── plugin.json
├── .opencode-plugin/
│   └── plugin.json
├── skills/
│   ├── radar/
│   ├── wedge/
│   ├── contributor/
│   ├── build/
│   ├── proof/
│   ├── position/
│   ├── interview/
│   └── offer/
├── references/
│   ├── career-alpha-playbook.md
│   ├── trend-scoring-framework.md
│   ├── opportunity-scoring.md
│   ├── proof-of-work-standard.md
│   ├── claim-evidence-ledger.md
│   ├── resume-language-guide.md
│   └── interview-defense-framework.md
├── tests/
│   └── skill-routing-cases.yaml
└── scripts/
    └── validate_skills.py
```

## Installation

### Codex

把仓库链接发给 Codex，并要求安装其中的 skills：

```text
请从这个仓库安装 Career Alpha，并启用 radar、wedge、contributor、build、proof、position、interview、offer：
https://github.com/lavine888/career-alpha
```

### Claude Code / OpenCode

仓库同时提供插件 manifest，可复用同一套 `skills/` 与 `references/`。

## Acknowledgements

Career Alpha 的产品化方式吸收了开源求职工作流项目 **ASu-skills** 中值得借鉴的设计思想，尤其是多入口 skill 套件、证据优先、面试追问和求职流程闭环；Career Alpha 在此基础上把工作流向前延伸到 **趋势发现、错位竞争和主动制造 Proof of Work**。

## License

MIT
