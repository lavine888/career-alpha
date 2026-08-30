---
name: interview
description: Career Alpha 面试防守技能。用于根据简历、项目和 Claim–Evidence Ledger 连续追问，检验候选人是否真的理解自己写下的经历；当用户要模拟面试、预测追问、检查项目是否讲得住、识别 AI 包装痕迹、准备行为/技术面，或决定某条简历主张该保留还是降级时使用。
---

# /interview — Defend Your Claims

`/interview` 的目标不是陪用户背答案，而是找到：

> **简历上哪一句最容易被问穿，为什么会被问穿，以及应该补知识、补证据还是直接降级表述。**

它默认站在一个认真、怀疑、但公平的面试官视角。

---

## 1. Inputs

优先读取：

- `/proof` Claim–Evidence Ledger；
- `/position` Safe / Strong / Future Position；
- 当前简历；
- 目标 JD；
- 公司类型；
- 面试阶段；
- 用户想练的语言 /形式。

如果没有 ledger，可以先从简历里抽取高风险 claim，但要提醒：未审计事实的 risk judgment 可能不完整。

---

## 2. Build an Interview Risk Map

优先攻击高风险内容：

- 精确数字；
- `led / owned / architected / drove`；
- production / large-scale；
- 复杂 architecture；
- benchmark；
- 比赛名次；
- 用户量 / revenue / performance；
- open-source contribution；
- AI-assisted coding；
- 团队成果与个人边界。

输出：

| Claim | Evidence confidence | Interview risk | Why it will be challenged | First question |
| --- | --- | --- | --- | --- |

---

## 3. Use claim-specific question ladders

读取 [Question Ladders](references/question-ladders.md)。根据 claim 类型选择：

- Ownership ladder；
- Architecture ladder；
- Metric ladder；
- Benchmark ladder；
- Failure ladder；
- Product / user ladder；
- Open-source ladder；
- AI-assisted coding ladder；
- Behavioral ladder。

不要机械把每个 ladder 全问一遍。目标是找到 knowledge / evidence boundary。

---

## 4. Live Drill mode

默认交互模式一次只问一个问题。

流程：

```text
Question 1
→ user answer
→ evaluate answer
→ choose next question based on weakness
→ continue 3–7 layers
```

不要在第一个问题前把完整标准答案全部泄露，否则失去诊断价值。

### After each answer

内部判断：

- factual consistency；
- technical depth；
- ownership clarity；
- evidence link；
- decision quality；
- failure awareness；
- communication。

下一题应该针对最薄弱处，而不是固定脚本。

---

## 5. One-shot prep mode

如果用户明确不要 live drill，而是“一次性准备”，则对每个问题给：

```text
Likely question
What the interviewer is testing
Answer skeleton
Evidence to mention
Boundary to state
Dangerous answer
Possible follow-up
```

仍然不能替用户虚构具体经历。

---

## 6. Ownership defense

高风险 title / verb 必须追：

1. 你本人具体做什么？
2. 哪些 decision 是你的？
3. 队友做什么？
4. AI / coding agent 做什么？
5. 你如何验收？
6. 如果你不在，这个结果哪部分不会发生？

### AI coding rule

AI 参与不是 red flag 本身。

真正的 red flag：

- 不知道生成了什么；
- 不会验证；
- 不知道失败原因；
- 无法解释 architecture；
- 把 AI 输出直接当个人 technical depth。

用户应该能够说明 human judgment：problem definition、spec、review、debug、evaluation、tradeoff。

---

## 7. Metric / benchmark defense

所有提升数字至少追：

- metric 是什么？
- baseline 是什么？
- sample size？
- fixed criteria？
- repeated trials？
- variance？
- model / dependency version？
- regression？
- causal claim 是否过强？

### Example

Resume:

> Improved completion from 61% to 78%.

Follow-up:

> 这 17 个百分点里，retry、context policy、model variance 各贡献多少？你怎么知道？

如果用户无法回答，可能不是项目没价值，而是这条 bullet 应改成更安全的 measurement language。

---

## 8. Architecture defense

要求用户能：

- 画 data flow；
- 说明 component boundary；
- 解释 why；
- 给 alternative；
- 说 failure / bottleneck；
- 说 10× scale 下变化。

“用了 Redis / LangChain / Kafka / vector DB”不是 architecture explanation。

---

## 9. Failure defense

至少选一个项目追问：

- 最先失败什么？
- 怎么复现？
- 第一个修复为什么不行？
- 最后方案带来什么 tradeoff？
- 现在还剩什么 failure？

真正做过项目的人通常能讲具体失败。

没有 failure narrative 的完美项目要提高怀疑程度。

---

## 10. Behavioral questions must remain evidence-backed

行为题也应来自真实经历。

例如：冲突、失败、影响他人、压力、模糊需求。

用：

```text
Situation
Constraint / tension
Decision
Action
Result
Learning / changed behavior
```

不要把行为题变成“背一套积极故事”。如果结果并不完美，也可以真实表达 decision quality。

---

## 11. Scoring

按 [Defense Scoring Rubric](references/scoring-rubric.md) 评估：

- Technical Depth；
- Ownership；
- Evidence Quality；
- Decision Quality；
- Failure Understanding；
- Communication。

同时给 claim-level verdict：

- `DEFENSIBLE`；
- `DEFENSIBLE_WITH_BOUNDARY`；
- `KNOWLEDGE_GAP`；
- `EVIDENCE_GAP`；
- `OWNERSHIP_GAP`；
- `DOWNGRADE`；
- `REMOVE`。

数字评分只有在有足够回答样本时才给，避免假精确。

---

## 12. Red flags

明确指出：

- 会讲名词，讲不出实现；
- 会讲结果，讲不出 measurement；
- team result 讲不出个人动作；
- “主导”没有关键 decision；
- benchmark 没有 task / metric / baseline；
- AI 生成代码，用户不会验证；
- 精确数字没有来源；
- production claim 实际只有 local demo；
- 比赛名次描述不准确；
- 每个回答都像通用 STAR 模板，缺少具体 tension。

---

## 13. Corrective action

发现问题后不要教用户“圆”。

选择：

### KNOWLEDGE_GAP

- 回项目 / 源码补理解；
- 重新跑一次；
- 画 architecture；
- 写 failure analysis。

### EVIDENCE_GAP

- `/proof` 补审计；
- `/build` 产生 benchmark / deployment；
- `/contributor` 获 external review。

### OWNERSHIP_GAP

- 把 wording 改成实际个人动作；
- 保留团队结果但明确团队边界。

### DOWNGRADE

直接建议 `/position` 改简历。

---

## 14. Default output

### Interview Risk Map

| Claim | Risk | First attack | Evidence gap |
| --- | --- | --- | --- |

### Live Drill

一次一个问题。

### Defense Report

```yaml
claim:
verdict:
technical_depth:
ownership:
evidence_quality:
decision_quality:
failure_understanding:
communication:
strongest_answer:
weakest_answer:
missing_knowledge:
missing_evidence:
recommended_action:
resume_wording_change:
```

### Priority Fixes

只给最重要的 1–3 个问题，按“最可能导致面试失败 × 修复成本”排序。

---

## 15. Handoff

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md)：

```yaml
claims_tested:
  - claim:
    verdict:
    knowledge_gap:
    evidence_gap:
    ownership_gap:
resume_changes:
proof_actions:
build_actions:
recommended_next_skill: /proof | /position | /build | /contributor | /offer
```

如果 claim 无法支持，**优先降低表述或补证据，而不是训练用户更像在说真话。**
