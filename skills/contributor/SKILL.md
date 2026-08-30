---
name: contributor
description: Career Alpha 开源贡献入口。用于根据目标岗位和职业 wedge 寻找与能力方向匹配、可以真实完成并留下可验证记录的开源贡献；当用户缺少真实协作经历、希望通过 GitHub PR 建立证据、想进入某个技术生态、或希望用外部 review 替代又一个自建 demo 时使用。
---

# /contributor — Verified Open-source Contribution

`/contributor` 的目标不是刷 PR 数量，而是获得：

> **真实代码库 + 外部约束 + 可验证改动 + review 反馈 + 明确 ownership。**

对学生 / 转行者来说，一次高相关、可解释的真实协作，往往比第 N 个独立 demo 更有证据价值。

---

## 1. Inputs

优先读取：

- 目标岗位；
- `/wedge` selected wedge；
- 技术栈；
- 每周可投入时间；
- 已有 GitHub / OSS 经验；
- 用户希望建立的 career claim；
- 目标公司或生态（如果有）。

如果来自 `/wedge`，保留 missing evidence 与 kill criteria。

---

## 2. Search strategy

寻找仓库时按 [Repository Selection Rubric](references/repo-selection.md) 筛选。

优先：

- 与目标 wedge 强相关；
- 近 30–90 天仍活跃；
- maintainers 会 review 外部 PR；
- contribution guide 清晰；
- issue / bug / docs / test 能独立验证；
- 用户能在本地跑起来；
- 改动能形成面试可讲的 decision / tradeoff。

不要为了“知名项目”强行选 scope 巨大、没人 review、用户无法理解的任务。

---

## 3. Build a contribution ladder

默认分两层：

### A. Quick Win

目标：建立贡献节奏与一份干净 external artifact。

可选：

- docs / example 修复；
- broken setup；
- test coverage；
- small reproducible bugfix；
- DX improvement。

Quick Win 也要和目标方向相关。不要批量向随机仓库提交 typo PR。

### B. Signature Contribution

目标：建立 interview depth。

可选：

- eval / benchmark case；
- integration adapter；
- system-behavior bug；
- feature + tests；
- tooling / reliability improvement；
- 需要真正读代码的技术文档改进。

推荐节奏：

```text
1–2 个低摩擦贡献 → 熟悉项目和 maintainer → 1 个更深 signature contribution
```

不是硬性要求；如果一开始就有高匹配 issue，可以直接做深贡献。

---

## 4. Candidate table

在选择仓库后输出：

| Repo | Issue / Area | Wedge Fit | Activity | Difficulty | Merge Friction | Evidence Value | Recommended |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |

每个推荐项必须解释：

- 为什么和 career thesis 相关；
- 用户将学到什么；
- 最终可以留下什么 public evidence；
- 最大风险是什么。

---

## 5. Pre-write checkpoint

**任何写操作前必须先展示拟改动。**

至少包括：

```text
Repository
Issue / context
Current behavior
Proposed change
Files likely affected
Validation plan
Risks / unknowns
Expected evidence value
```

如果任务涉及 fork、branch、push、PR 等外部写操作，在执行前遵循当前工具 / 平台所需的用户确认规则。

不要偷偷把“寻找贡献机会”升级成“已经替用户提交 PR”。

---

## 6. Implementation quality

贡献的目标是符合项目本身标准，不是为简历制造戏剧性。

遵循：

- repository contribution guide；
- existing style / tests；
- minimal diff；
- scoped commit；
- no unrelated refactor；
- reproduce before fixing when possible；
- run relevant tests；
- explain limitations。

### PR body

PR 描述保持正常工程沟通：

- problem；
- change；
- validation；
- screenshots / logs if needed。

不要在 PR 里写夸张求职叙事。

---

## 7. Review is part of the evidence

维护者反馈不是“阻碍”，而是协作证据。

按 [Contribution Evidence Capture](references/evidence-capture.md) 保存：

- reviewer concern；
- candidate response；
- revisions；
- disagreement / tradeoff；
- final status。

不要把 reviewer 提出的方案写成用户原本设计。

---

## 8. Exact contribution states

严格区分：

- `PLANNED` — 还没有工作产物；
- `IN PROGRESS` — 本地工作中；
- `PR OPEN` — PR 已提交但未合并；
- `CHANGES REQUESTED` — review 中；
- `MERGED` — 已合入目标分支；
- `CLOSED / NOT MERGED` — 不能写成 merged contribution。

这几个状态必须原样传给 `/proof`。

---

## 9. Integrity rules

### 可以说

> Submitted a PR that adds X and is currently under review.

> Contributed a merged test case reproducing X after maintainer review.

### 不可以说

- 把 open PR 写成 merged；
- 把 typo 写成核心架构贡献；
- 把 maintainer 的设计决定冒领为个人 ownership；
- 把 fork/star 当 contribution；
- 把自动生成的大量低质量 PR 当开源影响力。

### Small contributions can still be useful

多个真实小贡献可以总结共同能力，例如：

- developer experience；
- documentation quality；
- testing discipline；
- cross-project collaboration。

但 summary 必须能展开到具体 PR 和实际改动。

---

## 10. Evidence capture

每个 contribution 建一个 packet：

```yaml
repository:
issue:
pr:
status:
commits:
changed_files:
validation_commands:
review_feedback:
ownership:
result:
limitations:
```

优先保存：

- URL；
- commit；
- diff；
- tests；
- review；
- merge status；
- release / changelog mention（如有）。

---

## 11. Contribution selection examples

### Target wedge: Agent Evaluation

Higher evidence value:

- add eval case / metric / test to relevant agent framework；
- fix benchmark reproduction issue；
- improve evaluator behavior with tests。

Lower evidence value:

- unrelated README typo in random frontend project。

### Target wedge: Developer Experience

A setup / docs fix can be a **high-value** contribution if it requires reproduction, code reading and measurable improvement to onboarding.

Contribution depth should be judged relative to the intended claim, not by lines changed.

---

## 12. Default output

### Contribution Candidates

| Repo | Issue/Area | Why it fits | Difficulty | Merge friction | Evidence value |

### Recommended Sequence

说明为什么先做哪个、后做哪个。

### Pre-write Plan

展示 proposed diff / files / validation。

### Evidence Capture Plan

提前规定要记录哪些 links、tests 和 review 信息。

### Resume value boundary

说明每个贡献如果成功，最多能安全支持什么主张。

---

## 13. Handoff

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 传给 `/proof`：

```yaml
goal:
verified_facts:
contributions:
  - repository:
    issue:
    pr:
    status:
    commits:
    validation:
    review_feedback:
    ownership:
planned_work:
open_questions:
recommended_next_skill: /proof
privacy_boundary:
```

完成后：

```text
/contributor → /proof → /position
```

由 `/proof` 建 Evidence Card，再由 `/position` 把真实贡献翻译成岗位语言。
