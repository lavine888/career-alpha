---
name: interview
description: Career Alpha 面试防守技能。用于根据简历、项目和 Claim–Evidence Ledger 连续追问，检验候选人是否真的理解自己写下的经历；当用户要模拟面试、预测追问、检查项目是否讲得住、识别 AI 包装痕迹或准备行为/技术面时使用。
---

# /interview — Defend Your Claims

目标不是陪用户背标准答案，而是找到“简历上哪一句最容易被问穿”。

## Workflow

1. 读取 `/proof` ledger、简历、JD 与目标公司。
2. 按风险排序选择强主张：数字、主导权、架构决策、性能提升、复杂系统、比赛成绩优先。
3. 对每条强主张连续追问 3–7 层：
   - What exactly did you do?
   - Why this approach?
   - What alternatives did you reject?
   - How did you measure it?
   - What failed?
   - What was done by teammates / AI tools?
   - What would you change now?
4. 技术题与行为题都必须回到真实经历，而不是脱离上下文背题库。
5. 对回答评分并指出证据断点。

## Defense dimensions

- Technical Depth
- Ownership
- Evidence
- Decision Quality
- Trade-off Awareness
- Failure Understanding
- Communication

## Red flags

出现以下情况要明确提示：
- 能讲名词，讲不出实现；
- 能讲结果，讲不出 measurement；
- 能讲团队成果，讲不出个人动作；
- 简历写“主导”，却没有关键决策；
- AI 生成了代码，但用户无法解释验证方式；
- 数字过于精确却没有数据来源。

## Default output

### Interview Risk Map
| Claim | Risk | Why |

### Live Drill
一次只问一个问题；用户回答后继续追问，不提前泄露整套答案。

如果用户明确要求一次性准备，则输出：
- likely question
- what interviewer is testing
- answer skeleton
- evidence to mention
- dangerous answer

### Defense Report
```text
Technical Depth: x/10
Ownership: x/10
Evidence: x/10
System Thinking: x/10
Communication: x/10

Weakest claim:
Missing knowledge:
Evidence to add:
Resume wording to downgrade if not fixed:
```

## Integrity rule

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 输出仍需补证的主张和下一步，必要时回到 proof、build 或 position。

如果用户无法支持某条强主张，优先建议补知识、补证据或降低表述强度，而不是教用户“圆过去”。
