---
name: proof
description: Career Alpha 证据层。用于把项目、PR、实习、比赛、研究或真实工作整理成可核验的 Evidence Card 和 Claim–Evidence Ledger；当用户希望把经历变得可证明、整理作品集证据、补齐简历强主张、审计数字/ownership、或为面试准备事实底稿时使用。
---

# /proof — Evidence Layer

`/proof` 的目标是把：

> “我做过这个”

变成：

> **“这条主张由哪些证据支持、我本人负责什么、能安全说到哪一步、最容易在哪被追问穿。”**

它是 Career Alpha 的事实层。下游 `/position` 和 `/interview` 都不应该绕过它随意升级主张。

---

## 1. Collect raw material first

优先收集原始材料，而不是先写简历：

- repo / commit / branch；
- PR / issue / review；
- benchmark / CSV / logs；
- demo / deployment；
- architecture / design docs；
- screenshots；
- competition result；
- user / customer feedback；
- internal docs；
- emails / messages；
- timeline notes；
- 用户口述。

按 [Evidence Taxonomy](references/evidence-taxonomy.md) 区分：

- direct public evidence；
- direct private evidence；
- reproducible technical evidence；
- external review evidence；
- self-reported evidence；
- planned evidence。

不要把所有材料都视为同等强度。

---

## 2. Build atomic claims

不要直接审计一句漂亮 bullet，要先拆成 atomic claims。

例如：

```text
Led development of an agent platform that improved task completion by 28%.
```

至少包含：

1. 平台存在；
2. 用户承担 lead ownership；
3. task completion 被测量；
4. 数字是 28%；
5. 改进与该工作的关系成立。

每个 atomic claim 可以有不同 confidence。

完整规则见 [Claim Audit Protocol](references/claim-audit.md)。

---

## 3. Assign confidence

统一使用：

- `VERIFIED` — 有直接、足够强的证据支持该 atomic claim；
- `SUPPORTED` — 有材料支持，但仍有不能完全核验 / 因果 / ownership 不完整的部分；
- `SELF-REPORTED` — 目前主要来自用户陈述；
- `PLANNED` — 尚未完成。

### Important

一个项目可以是 `VERIFIED`，其中的“提升 28%”仍然只是 `SUPPORTED`。

Confidence 属于 **claim**，不是整个项目。

---

## 4. Numerical audit

所有精确数字优先审计：

- metric 定义；
- baseline；
- sample / denominator；
- measurement date；
- raw data；
- repeated trials；
- model / dependency version；
- percentage vs percentage-point；
- external vs internal benchmark；
- exact vs approximate。

### Unsafe pattern

```text
Improved accuracy by 32%.
```

但没有：baseline、metric、raw output。

### Safer pattern

```text
Observed completion increase from 61% to 78% on a fixed 50-task internal benchmark after introducing retry and context policies.
```

如果 causal evidence 不够，不要用过强的“caused / drove / improved because of”。

---

## 5. Ownership audit

把 ownership 拆开：

- problem definition；
- decision ownership；
- implementation；
- integration；
- coordination；
- evaluation；
- result responsibility；
- team contribution；
- AI / coding-tool assistance。

### Strong verbs

以下动词需要更高证据门槛：

- led；
- owned；
- architected；
- designed；
- drove；
- founded；
- managed。

AI 辅助写代码不自动取消 ownership。关键是用户是否能解释：

- 为什么这样定义问题；
- 为什么选这个架构；
- 怎么验收；
- 怎么 debug；
- 哪些方案被放弃；
- 如何判断结果可信。

---

## 6. Status audit

严格区分：

- planned；
- prototype；
- local demo；
- internal deployment；
- public deployment；
- PR open；
- PR merged；
- finalist；
- track placement；
- overall placement。

不要为了叙事顺畅把不同状态合并。

例如：

```text
PR open ≠ contributed a merged change
prototype ≠ production system
track #2 ≠ competition runner-up overall
```

---

## 7. Causal / scale audit

### Causal words

`improved / reduced / increased / drove / caused`

要求 baseline 或合理 comparison。

### Scale words

`production-grade / enterprise / large-scale / real-time / high-concurrency / autonomous`

要求具体 scale evidence。

如果证据不够，删掉形容词通常比补一个“听起来合理”的数字更好。

---

## 8. Create Evidence Cards

每条高价值 claim 形成：

```yaml
claim:
why_it_matters:
atomic_claims:
evidence:
  - type:
    reference:
result:
ownership:
confidence:
resume_safe_wording:
aggressive_but_defensible_wording:
strong_wording_requires:
interview_risks:
missing_evidence:
privacy_boundary:
```

需要结构化保存时，使用：

- [ledger template](../../assets/career-claim-ledger-template.json)
- [JSON Schema](../../references/claim-evidence-ledger.schema.json)
- [Claim–Evidence Ledger](../../references/claim-evidence-ledger.md)

模板默认 local-only。

---

## 9. Evidence conflicts

如果两个来源冲突：

1. 不要取平均；
2. 同时保留；
3. 判断哪个更接近原始事件；
4. 标记 unresolved；
5. 在解决前降低 claim 强度。

例如用户记得“约 40%”，benchmark CSV 显示 31.6%，优先使用原始数据，并说明口述与记录有差异。

---

## 10. Privacy

敏感材料包括：

- 招聘邮件；
- 私人联系方式；
- 内部链接；
- 未公开项目；
- 客户数据；
- 薪资；
- NDA 内容。

可以用于当前证据判断，但不要默认写进公开 repo、README 或 public ledger。

公开证据与私有证据分开记录。

---

## 11. Find missing evidence

每个 Strong / Future claim 都回答：

> **还差什么最小证据，才能提高一个 confidence level？**

示例：

```text
SUPPORTED → VERIFIED
Need: raw benchmark + pinned config + reproducible run command
```

```text
SELF-REPORTED ownership → SUPPORTED
Need: commit history / design doc / teammate-visible decision record
```

```text
PLANNED → actual evidence
Need: /build or /contributor
```

---

## 12. Claims to downgrade or remove

默认主动寻找：

- 过度精确数字；
- 无法证明的 ownership；
- team result 冒领；
- status 夸大；
- 无依据规模词；
- AI buzzword 堆叠；
- 跟目标岗位无关、占简历空间的弱 claim。

`/proof` 不应为了“让简历更强”保留一个无法防守的句子。

---

## 13. Default output

### A. Evidence Summary

哪些经历证据最强、哪些最弱。

### B. Claim–Evidence Ledger

| Claim | Evidence | Ownership | Confidence | Risk | Safe wording |
| --- | --- | --- | --- | --- | --- |

### C. Safe Claims

可以现在直接写。

### D. Aggressive-but-defensible Claims

可以使用，但必须明确边界。

### E. Claims to Downgrade / Remove

说明为什么。

### F. Missing Evidence Checklist

按 evidence ROI 排序，不要只说“再丰富项目”。

---

## 14. Handoff

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 传递：

```yaml
goal:
claims:
  - claim:
    evidence:
    ownership:
    confidence:
    safe_wording:
    strong_wording:
    interview_risks:
missing_evidence:
open_questions:
recommended_next_skill: /position | /interview | /build | /contributor
privacy_boundary:
```

规则：**下游 Skill 可以改写表达，但不能静默升级 confidence、ownership 或完成状态。**
