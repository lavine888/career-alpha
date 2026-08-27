---
name: proof
description: Career Alpha 证据层。用于把项目、PR、实习、比赛、研究或真实工作整理成可核验的 Evidence Card 和 Claim–Evidence Ledger；当用户希望把经历变得可证明、整理作品集证据、补齐简历强主张或为面试准备事实底稿时使用。
---

# /proof — Evidence Layer

目标：把“我做过”变成“这里有证据，而且我能解释”。

## Workflow

1. 收集原始材料：repo、commit、PR、截图、benchmark、日志、demo、文档、用户反馈、奖项、邮件等。
2. 按 `references/claim-evidence-ledger.md` 建立主张—证据映射。
3. 每条主张拆成：
   - Claim
   - Evidence
   - Result
   - Ownership
   - Confidence
   - Interview risks
4. 对数字做来源检查：来自真实测量、第三方结果还是用户主观估计。
5. 对 ownership 做边界检查：本人 / 团队 / 外部工具分别负责什么。
6. 找出证据缺口，并给最小补证动作。

## Confidence levels

- `VERIFIED`：有直接证据可核验。
- `SUPPORTED`：有材料支持，但不能完全外部验证。
- `SELF-REPORTED`：仅来自用户陈述。
- `PLANNED`：尚未完成，不得写成既成事实。

## Evidence Card template

```text
Claim:

Why it matters:

Evidence:
- URL / file / commit / screenshot

Result:

Ownership:

Confidence:

Resume-safe wording:

Interview risks:

Missing evidence:
```

## Audit rules

- 没有证据的百分比、用户量、性能提升不得自动补全。
- 奖项必须区分参赛、入围、获奖、赛道名次与总排名。
- “主导 / owner / founder / lead”必须能对应决策权、执行责任或结果责任。
- 项目 demo 与 production deployment 必须区分。
- AI 辅助完成不等于没有 ownership，但必须能解释自己的判断与验证。

## Default output

1. Evidence Summary
2. Claim–Evidence Ledger
3. Safe claims
4. Aggressive-but-defensible claims
5. Claims to remove
6. Missing evidence checklist

## Handoff

- 要写成求职语言：`/position`
- 要检验是否扛得住追问：`/interview`
