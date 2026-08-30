---
name: build
description: Career Alpha Proof-of-Work 项目构建器。用于把趋势或职业楔子变成 2–7 天可以真正完成、展示和验证的小型项目；当用户问应该做什么项目、如何快速补齐某能力证据、如何把新趋势变成作品集，或需要一个可交给 Codex / Claude Code 执行的项目任务书时使用。
---

# /build — Build the Evidence

`/build` 的目标不是“再做一个项目”，而是把 `/wedge` 的职业假设转成 **一段新的、可验证的事实**。

核心原则：

> **Project exists to prove a claim. The claim does not exist to decorate the project.**

---

## 1. Read the upstream hypothesis

优先读取：

- `/wedge` 选出的方向；
- 用户当前证据缺口；
- cheapest test；
- kill criteria；
- 目标岗位 / 公司类型；
- 用户可用时间与工具。

如果用户没有经过 `/wedge`，也可以直接从目标岗位出发，但必须先问自己：

```text
这个项目完成后，简历里会多出哪一条以前不能诚实说的话？
```

如果答案只是“我也做过一个 X”，项目价值通常偏低。

---

## 2. Define ONE primary career claim

项目必须有一个主要主张，例如：

- 能设计 Agent Eval；
- 能系统分析 tool-use failure；
- 能做真实数据 pipeline；
- 能优化 latency / cost 并说明 tradeoff；
- 能把模型能力变成完整 workflow；
- 能读懂并扩展真实开源代码库。

可以产生多个 secondary claims，但 scope 由 primary claim 决定。

### Bad

> 做一个完整 AI SaaS，展示产品、前端、后端、算法、增长、商业化能力。

### Better

> 用一个可复现 benchmark 证明我能设计 Agent Reliability Eval。

---

## 3. Choose the right project archetype

读取 [Project Archetypes](references/project-archetypes.md)。优先从以下类型选择：

- Benchmark；
- Reliability / failure analysis；
- Vertical workflow；
- Integration；
- Cost / latency optimization；
- Open-source extension；
- Reproduction / replication。

不要默认做“全栈网站”。

如果最有价值的证据来自现有开源生态，应考虑把任务转给 `/contributor`，而不是重新造一个平行项目。

---

## 4. Baseline before intervention

除非项目本质无法比较，否则先定义 baseline。

Baseline 至少说明：

- 当前实现 / naïve approach；
- 任务集 / 数据；
- primary metric；
- dependency / model version；
- 已知限制。

没有 baseline 的“优化”“提升”“更可靠”通常无法安全写进简历。

---

## 5. Evaluation before polishing

项目早期就定义：

- success metric；
- secondary metrics；
- sample / task set；
- failure taxonomy；
- 是否需要 repeated trials；
- 哪些变量需要固定；
- 哪些结果会被视为 failure。

先测对，再做漂亮。

如果结果不可量化，也至少要有可验证 outcome，例如：

- merged PR；
- deployed workflow；
- external review；
- user feedback；
- reproduced bug；
- working integration with tests。

---

## 6. Scope control

使用 [Mission Brief Template](references/mission-template.md)。

每个 2–7 天任务必须写：

### In scope

只保留直接服务 primary career claim 的内容。

### Non-goals

强制列出不会做的东西，例如：

- 不做完整登录系统；
- 不做漂亮 dashboard；
- 不支持所有模型；
- 不做 production-scale infra；
- 不做商业化。

Non-goals 是 Career Alpha 的重要部分，因为时间应该花在证据密度最高的地方。

---

## 7. 72h-first execution

默认先给 72h 版本，除非任务天然需要外部等待。

### Day 1 — Honest baseline

目标：先产生第一份 raw evidence。

常见动作：

- 建 repo；
- 固定数据 / tasks；
- 跑 baseline；
- 保存原始结果；
- 建 failure taxonomy；
- 写第一版 README。

**Exit criterion:** baseline 可重复，不靠口头解释。

### Day 2 — Intervention

- 实现最小核心改动；
- 跑相同 evaluation；
- 保存 raw outputs；
- 记录 regression；
- 不提前筛掉难看的结果。

**Exit criterion:** 能比较 before / after，哪怕结果没有提升。

### Day 3 — Interviewability

- ablation / failure analysis；
- architecture / decision log；
- README reproduction；
- cleanup；
- demo / screenshots；
- 明确 limitations。

**Exit criterion:** 另一个工程师能理解“问题—选择—证据—限制”。

---

## 8. Definition of Done

Definition of Done 必须可观察。

### Bad

- 项目基本完成；
- UI 比较完整；
- 效果不错。

### Good

- 50-task eval 从一条命令跑完；
- raw output 保存在 `results/`；
- README 写清 baseline 与 intervention；
- 至少 5 个 failure cases 分类；
- architecture diagram 存在；
- 所有结果能对应到 commit / version；
- 用户反馈有原始记录。

---

## 9. Evidence capture plan

在开始前规定需要保存：

- repo URL；
- commit hashes；
- changed files；
- benchmark / CSV；
- logs；
- model / dependency versions；
- screenshots / demo；
- test commands；
- user feedback；
- failed attempts；
- scope / ownership notes。

不要项目做完后再凭记忆补证据。

---

## 10. Failure is still evidence

Career Alpha 项目不是比赛作品，结果没有提升也可能有价值。

例如：

```text
Context compression reduced cost 22% but caused a measurable regression on long-horizon tasks.
```

这比无证据地写“optimized context efficiency”更能展示工程判断。

所以默认记录：

- what worked；
- what failed；
- regressions；
- unexpected behavior；
- next experiment。

---

## 11. Anti-demo rules

以下默认降级：

- 只换 prompt 的 ChatGPT clone；
- 无数据、无 evaluation 的普通 RAG；
- 照教程逐行复刻；
- 只有漂亮 landing page；
- “多 Agent 系统”但没有任务、metric 或 failure analysis；
- 一个大型平台，却没有任何用户或可复现结果；
- 自动生成大量代码，但用户无法解释关键 decision。

### Rescue path

如果用户已经有这种项目，不一定丢掉。尝试增加：

- benchmark；
- real user workflow；
- failure taxonomy；
- deployment；
- external contribution；
- cost / latency / quality tradeoff；
- architecture rationale。

---

## 12. Execution prompt for coding agents

当用户要交给 Codex / Claude Code 执行时，输出一个独立执行块，至少包含：

```text
Goal
Career claim to prove
Repository structure
Baseline
Implementation tasks
Evaluation
Definition of Done
Non-goals
Evidence to capture
Validation commands
Do not fabricate results
```

Coding agent 可以实现和测试，但不能预先写“提升 30%”之类尚未发生的结果。

---

## 13. Default output

### Mission Brief

- Career claim to prove
- User / problem
- Why now
- Project archetype
- Baseline
- Intervention
- Evaluation
- Scope
- Non-goals

### 72h / 7-day Plan

按 milestone + exit criterion 写，不只是 todo list。

### Repo / artifact plan

说明哪些文件最终构成证据。

### Definition of Done

必须全部可验证。

### Evidence Capture

提前列出要保存什么。

### Failure modes

预判 3–5 个可能让项目证据价值下降的风险。

### Coding-agent prompt

用户需要时输出。

---

## 14. Handoff to `/proof`

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 传递：

```yaml
career_claim:
verified_artifacts:
baseline:
results:
ownership:
failures:
limitations:
planned_but_not_completed:
recommended_next_skill: /proof
```

**未完成内容必须保留 `PLANNED` / `IN PROGRESS`，不能因为 Mission Brief 写得完整就当作已经做完。**
