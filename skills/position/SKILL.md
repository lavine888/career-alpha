---
name: position
description: Career Alpha 岗位定位与经历重组技能。用于根据目标岗位和真实证据，把项目、实习、比赛、开源贡献重组为可防守的岗位定位、简历要点、项目亮点、HR 开场白和 Founder / Hiring Manager outreach；当用户要求优化经历、做职业定位、写简历 bullet、联系招聘方，或判断“现在能把自己说到什么位置”时使用。
---

# /position — Position the Evidence

`/position` 负责把真实经历翻译成招聘市场能快速理解的语言，但不替用户创造事实。

它吸收“经历酥化”最有价值的部分，同时多做一步：

> **现在能安全站在哪个位置？想再往前一档，还缺什么证据？**

---

## 1. Inputs

优先读取：

- 目标岗位 / JD；
- 公司类型 / 行业 / 地域；
- `/proof` Claim–Evidence Ledger；
- 用户当前简历 / portfolio；
- 已有项目 / PR /比赛 / 工作材料；
- 用户希望使用的渠道：resume、HR、Founder、LinkedIn、portfolio、interview intro。

如果没有 `/proof`，可以先建立临时事实底稿，但对于强数字、ownership、奖项和 production claim，应建议回到 `/proof` 审计。

---

## 2. Build the positioning ladder

按 [Positioning Ladder](references/position-ladder.md) 同时给出：

### Safe Position

- 由当前证据直接支撑；
- 五分钟追问不容易让招聘方觉得被误导；
- 默认适合简历 headline / summary。

### Strong Position

- 更有差异化；
- 仍可防守；
- 必须说明边界；
- 可以用于目标更激进的岗位 / Founder outreach。

### Future Position

- 当前还不能当成事实；
- 明确要补的 evidence；
- 用来指导 `/build` / `/contributor`。

Future Position 是 roadmap，不是当前 title。

---

## 3. Match the JD at capability level

不要只做关键词覆盖。

从 JD 提取：

- core outcomes；
- system responsibilities；
- required evidence；
- recurring tools / stack；
- hidden seniority signals；
- nice-to-have differentiators。

然后建立：

| Target capability | User evidence | Confidence | Relevance | Gap |
| --- | --- | --- | --- | --- |

优先写“高 relevance + 高 confidence”的事实。

不要为了 ATS 把所有 JD 关键词硬塞进简历。

---

## 4. Rewrite from work to value

默认结构：

```text
Action → System / problem → Capability → Result / evidence → Ownership boundary
```

### Raw

> 做了一个 Agent 页面，接了 API，也做了 memory。

### Better

> Built a tool-using agent workflow with explicit memory and recovery paths, then evaluated failure modes across a fixed task set.

前提是这些事实真实存在。

---

## 5. Strong verbs require ownership alignment

常见动词按强度理解：

### Lower-risk

- built；
- implemented；
- contributed；
- analyzed；
- integrated；
- evaluated；
- coordinated。

### Higher-risk

- led；
- owned；
- drove；
- architected；
- founded；
- managed。

高强度动词必须与 `/proof` 的 ownership 一致。

如果用户实际承担的是产品收敛、集成和推进，也可以表达出 ownership，但应具体写清是**什么决策和什么交付责任**，而不是用一个模糊 title 替代事实。

---

## 6. Use numbers carefully

数字优先来自 `/proof`。

数字可以增强表达，但必须知道：

- metric；
- baseline；
- sample；
- measurement context；
- 时间；
- 是否可外部验证。

如果无法安全使用数字：

- 用真实定性结果；
- 用 artifact；
- 用 scope；
- 用 external validation；
- 用 decision / tradeoff。

不要为了“量化”制造一个估算百分比。

---

## 7. Channel-specific translation

读取 [Channel Templates](references/channel-templates.md)。同一份 ledger 可以产出不同版本，但事实必须一致。

### Resume

高密度、结果和 system capability 优先。

### 30-second intro

身份 → 反复解决的问题 → 一个 proof → 目标。

### HR / Recruiter opener

短，不塞架构细节。

### Hiring Manager / Founder DM

具体说对方的 problem + 自己已经做过的 relevant proof。

### GitHub / Portfolio

Problem → Build → Measure → Failure → Reproduce。

### Behavioral interview

事实一致，但强调 decision / constraint / learning。

---

## 8. Evidence-first “酥化”

Career Alpha 的“酥化”不是把小事写大，而是把底层动作翻译成更高层能力。

例如：

```text
写接口、接模型、做异常兜底
```

可能对应：

```text
AI workflow integration + failure handling + system delivery
```

但只有真的完成相关工作时才能这样归纳。

### 可以升级抽象层，不可以升级事实层

可以：

> 多个真实 docs / test PR → cross-project developer experience contribution

不可以：

> 一个 typo PR → led open-source developer experience strategy

---

## 9. Build a coherent narrative

简历不是经历仓库。

优先选择能形成一条连续 narrative 的经历：

```text
I repeatedly work on X problem
→ in project A I learned Y
→ in contribution B I validated it externally
→ in project C I measured Z
```

如果某段经历很强但和目标岗位完全无关，可以缩短，而不是必须全部展示。

---

## 10. Evidence-gap analysis

这是 `/position` 和普通 resume rewrite 最大的区别。

输出：

| Target capability | Current evidence | Gap | Confidence | Best next action |
| --- | --- | --- | --- | --- |

### Route gaps

- 自建可快速证明 → `/build`；
- 外部 collaboration 更值钱 → `/contributor`；
- claim 本身存疑 → `/proof`；
- 能写但讲不明白 → `/interview`。

不要只写“建议继续提升系统设计能力”。要给可形成证据的动作。

---

## 11. Default output

### A. One-line Positioning

- Safe
- Strong
- Future

### B. Resume Summary

2–4 行，突出目标方向、最强 evidence 和差异化。

### C. Experience / Project Rewrite

每段优先 2–4 条 bullet：

- strongest action；
- evidence；
- result / scope；
- ownership。

### D. Channel Pack

默认给：

- 超短 HR / Boss / 微信 opener；
- 30 秒 intro；
- Hiring Manager / Founder DM。

用户只要一种渠道时，不强制全部输出。

### E. Claim Audit Notes

指出哪些 bullet 需要：

- 保留；
- 降级；
- 删除数字；
- 补证据。

### F. Evidence Gap

明确下一步的最高 ROI 动作。

---

## 12. Dangerous patterns

主动避免：

- `AI-native / production-grade / enterprise` 形容词堆叠；
- title soup；
- 技术栈罗列代替成果；
- 把团队结果全部写成个人结果；
- 把比赛 track 名次升级成总排名；
- 把 prototype 写成 production；
- 把 Future Position 写进当前 headline；
- 为了显得 senior 增加无法解释的 architecture 词。

---

## 13. Handoff

交给 `/interview` 时保留：

```yaml
safe_position:
strong_position:
future_position:
resume_claims:
  - text:
    confidence:
    evidence:
    ownership:
    interview_risks:
evidence_gaps:
recommended_next_skill: /interview
```

交给 `/offer` 时额外保留 target role / company assumptions，方便用真实回复率和面试反馈验证 positioning。

**下游不能把 Future Position 当成已验证事实。**
