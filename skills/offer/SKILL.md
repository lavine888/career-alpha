---
name: offer
description: Career Alpha 求职管线与机会复盘技能。用于管理投递、测评、面试、拒信、Offer、跟进动作与机会质量；当用户开始投递、需要整理招聘进度、比较机会、复盘拒信、分析不同定位的市场反馈，或决定下一步资源投入时使用。
---

# /offer — Career Pipeline & Market Feedback

`/offer` 的目标不是做一张漂亮的求职表，而是：

> **把每一次投递、回复、面试和拒绝，变成对 Career Alpha 假设的真实市场反馈。**

它是闭环的最后一层，也是下一轮 `/radar → /wedge → /build` 的输入。

---

## 1. Inputs

优先读取：

- 公司 / role；
- 来源渠道；
- 当前 stage；
- 联系人；
- 时间；
- next action；
- 使用了哪个 positioning version；
- 分享过哪些 proof；
- 面试 / HR / founder 的真实反馈；
- compensation / location / constraints（仅在需要时）。

如涉及私人邮件、联系人、薪资和未公开信息，默认 local/private，不写进公共仓库。

---

## 2. Normalize the pipeline

按 [Pipeline Schema](references/pipeline-schema.md) 使用统一状态：

- `TARGET`
- `OUTREACH`
- `APPLIED`
- `ASSESSMENT`
- `INTERVIEW`
- `FINAL`
- `WAITING`
- `OFFER`
- `REJECTED`
- `WITHDRAWN`

不要为了描述细节制造几十个近似 status；具体信息放 note / next action。

---

## 3. Every live opportunity needs a Next Action

### Bad

```text
Company A — Interviewing
```

### Better

```text
Company A
Stage: INTERVIEW
Next Action: prepare benchmark ablation story before Tuesday technical round
```

如果当前只能等待，也写清：

```text
WAITING until Sep 3; follow up Sep 4 if no response
```

Pipeline 是行动系统，不是历史档案。

---

## 4. Capture the positioning version

为了判断什么 narrative 有效，记录每次使用的版本：

- Safe Position；
- Strong Position；
- 特定行业版；
- 特定 wedge 版；
- Founder outreach 版。

如果用户频繁改 wording，却不记录版本，就无法判断变化和回复率是否有关。

---

## 5. Capture evidence shared

记录对方看过什么：

- resume；
- GitHub repo；
- benchmark；
- demo；
- PR；
- case study；
- portfolio；
- referral context。

这可以帮助判断：

> **真正产生兴趣的是哪一类 proof，而不是哪一句自我评价。**

---

## 6. Convert feedback into reusable signals

按 [Market Feedback Loop](references/feedback-loop.md) 分类：

### Positioning feedback → `/position`

- 对 role identity 困惑；
- 某版本回复率更高；
- founder 对某个 framing 更感兴趣。

### Evidence feedback → `/proof` / `/build` / `/contributor`

- repeatedly asks for production scale；
- benchmark 是强讨论点；
- 缺 external validation；
- open-source PR 提升可信度。

### Wedge feedback → `/wedge`

- 市场真正认可的是旁边另一个问题；
- 原 wedge 实际已经拥挤；
- 工作存在，但被归到别的岗位。

### Trend feedback → `/radar`

- 真实招聘并没有验证原 trend；
- 多家公司独立出现新的需求信号。

### Interview feedback → `/interview`

- 技术深度；
- ownership；
- behavioral story；
- metric defense；
- communication。

---

## 7. Preserve source and confidence

市场反馈也要 evidence-first。

记录：

```yaml
source: recruiter / engineer / founder / rejection email / interview
company_type:
date:
observation:
confidence:
```

区分：

- 对方明确说的事实；
- 用户对反馈的解释；
- Career Alpha 的 hypothesis。

不要把“没回复”自动解释成“方向错了”。

---

## 8. Small-sample discipline

求职数据样本通常很小。

避免：

> 投了 3 家，只有 1 家回，所以这个版本 reply rate 33.3%，证明不好。

更合理：

```text
Current observation: 1/3 replied. Sample too small for a stable rate.
Use as weak signal only.
```

可用粗略经验：

- 1 个观察 → anecdote；
- 2–3 个独立重复信号 → 值得测试的 pattern；
- 5+ 个一致反馈 → 更强 workflow signal，但仍考虑 sample bias。

---

## 9. Weekly review

每周或每个求职周期复盘：

### Funnel

- target → outreach；
- outreach → reply；
- applied → interview；
- interview → next round；
- final → offer。

### Signal quality

- 哪种公司最认可？
- 哪个 proof 最容易引发技术讨论？
- 哪个 positioning version 最容易被理解？
- 哪个 capability 反复被问？
- 哪个 objection 反复出现？
- 哪个 trend hypothesis 没得到支持？

### Do not optimize one metric blindly

例如提高 reply rate 但得到大量不匹配岗位，不一定是好结果。

同时看：role quality、learning、ownership、Career Alpha exposure。

---

## 10. Next 3 Actions

默认只给最重要的三个动作。

排序依据：

```text
impact × urgency × evidence value / effort
```

例如：

1. 为周二 technical interview 补 benchmark ablation；
2. follow up 一个 founder conversation；
3. 针对 repeated production-scale objection 设计下一份 `/build` proof。

不要把“继续投简历”当作唯一动作。

---

## 11. Offer / opportunity comparison

有多个机会时，根据用户目标比较：

- Learning rate；
- Career Alpha exposure；
- Ownership；
- Team quality；
- Manager / mentor quality；
- Brand / signaling；
- Technical depth；
- Optionality；
- Compensation；
- Location / lifestyle；
- Downside risk。

权重由用户目标决定。

### Career Alpha exposure

特别问：

> 这个岗位是否让我接近“未来会更值钱的问题”，还是只是在一个已经高度标准化的流程里执行？

这不是说新技术岗位一定更好，而是明确机会成本。

---

## 12. Rejection review

不要把拒绝都解释成个人能力不足。

分类可能原因：

- role mismatch；
- timing / headcount；
- evidence gap；
- interview knowledge gap；
- communication；
- seniority mismatch；
- location / compensation；
- competition；
- unknown。

只有有 evidence 时才下结论。

### Useful rejection output

```text
Known fact:
Likely interpretation:
Alternative explanations:
Actionable change:
What NOT to conclude:
```

---

## 13. Update the upstream thesis

每个周期明确选择：

### Keep

方向有真实 engagement，问题主要是可修复 gap。

### Refine

市场认可能力，但 role framing / wedge 需要变窄或变换 title。

### Pivot

重复反馈明显否定原 demand thesis，或者机会成本过高。

Route：

```text
trend wrong      → /radar
wedge wrong      → /wedge
proof weak       → /build /contributor /proof
position unclear → /position
interview weak   → /interview
```

---

## 14. Workbench integration

个人 pipeline 推荐保存在 [`assets/career-alpha-workbench.html`](../../assets/career-alpha-workbench.html) 或用户自己的私有文件中。

Workbench 支持：

- company；
- stage；
- next action；
- trend / wedge；
- claim ledger；
- interview risk；
- JSON import / export。

它默认 local-first，不自动上传到仓库。

---

## 15. Default output

### Pipeline

| Company | Role | Stage | Last Touch | Next Action | Deadline | Signal |
| --- | --- | --- | --- | --- | --- | --- |

### Weekly Signals

- Positive signals
- Negative signals
- Repeated objections
- Unexpected opportunities
- Sample-size caveat

### Funnel

数据足够时给比例；样本小时给 counts + caveat。

### Thesis Update

```text
KEEP / REFINE / PIVOT
Reason:
Evidence:
Confidence:
```

### Next 3 Actions

只给最高优先级。

---

## 16. Handoff

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md)：

```yaml
observation_window:
sample_size:
positioning_versions:
positive_signals:
negative_signals:
repeated_objections:
role_patterns:
company_patterns:
confidence:
thesis_update:
recommended_next_skill:
privacy_boundary:
```

真实市场反馈可以修正 Career Alpha，但必须保留来源、时间和不确定性。
