---
name: wedge
description: Career Alpha 错位竞争分析。用于把宏观趋势拆成具体职业楔子，寻找“需求增长速度 > 人才供给增长速度”的岗位、任务或细分能力；当用户问某方向怎么切入、自己该做什么项目、哪类岗位竞争更小或如何建立差异化时使用。
---

# /wedge — Opportunity Wedge

目标：不是找“最好”的岗位，而是找用户 **能进入、能证明、能继续放大** 的非对称切入口。

## Core question

> 在这个趋势里，哪一个问题已经有人愿意付钱解决，但真正做过的人还不多？

## Workflow

1. 读取 `/radar` 输出或用户指定方向。
2. 把方向拆成任务层，而不是只看岗位名称：
   - Build
   - Eval
   - Reliability
   - Data
   - Infra
   - Distribution
   - Workflow / Operations
3. 按 [Opportunity Scoring](../../references/opportunity-scoring.md) 评分：
   - Demand urgency
   - Talent scarcity
   - Entry friction
   - Proof speed
   - Transferability
   - Narrative leverage
4. 识别三类楔子：
   - **Skill Wedge**：某项新能力供给少；
   - **Problem Wedge**：某类问题刚成为痛点；
   - **Distribution Wedge**：懂技术又懂某个垂直行业/市场的人少。
5. 选 Top 1–3，给出进入路径。
6. 如果缺少可验证证据，转给 `/build` 或 `/contributor`。

## Anti-crowding check

必须主动检查候选是否已过度同质化。以下信号会降权：
- 大量教程可以 1 小时复刻；
- GitHub 上存在大量同模板项目；
- JD 已把能力写成基础要求而非加分项；
- 候选人普遍都能讲但少有深度差异。

## Default output

### Best Wedge
一句话说明“为什么是这个切口”。

### Opportunity Score
| Dimension | Score | Evidence / Reason |

### Entry Mission
- 7 天内做什么
- 30 天内做到什么
- 什么证据证明你不是只看过教程
- 哪类公司/团队最可能认可

### Kill Criteria
列出哪些事实出现后，应放弃这个楔子。

## Handoff

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 保留目标能力、证据缺口、进入摩擦和 kill criteria。

- 需要自己造项目：`/build`
- 适合通过真实协作建立证据：`/contributor`
- 已有项目但不会表达：`/position`
