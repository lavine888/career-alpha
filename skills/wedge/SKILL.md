---
name: wedge
description: Career Alpha 错位竞争分析。用于把宏观趋势拆成具体职业楔子，寻找“需求增长速度 > 人才供给增长速度”的岗位任务、问题或细分能力；当用户问某方向怎么切入、自己该做什么项目、哪类岗位竞争更小、如何建立差异化或如何用最小成本验证职业方向时使用。
---

# /wedge — Opportunity Wedge

`/wedge` 不负责找“最好工作”，而是找到用户当前 **能进入、能证明、能继续放大** 的最小非对称切入口。

核心问题：

> **在这个趋势里，哪一个问题已经有人愿意付钱解决，但真正做过、又能拿出证据的人还不多？**

---

## 1. Inputs

优先读取：

- `/radar` 的 Top Trend 与 confidence；
- 用户指定的行业 / 岗位；
- 用户已经拥有的真实证据；
- 目标公司类型与地域；
- 时间预算；
- 可接受的学习成本；
- 当前求职反馈。

如果来自 `/radar`，保留其 verified facts / hypotheses / freshness，不得把低置信度趋势静默升级为事实。

---

## 2. Decompose the trend into task-level work

不要直接从“AI Agent 很火”跳到“去投 Agent Engineer”。

把方向拆成真实工作任务：

- Build / integration；
- Eval；
- Reliability / observability；
- Data / synthetic data；
- Context / memory；
- Infra / serving；
- Security / safety；
- Developer experience；
- Distribution / GTM；
- Workflow / operations；
- Vertical domain implementation。

岗位 title 只是一个弱标签。很多新的 Career Alpha 先以职责出现，之后才形成独立 title。

---

## 3. Generate wedge candidates

参考 [Wedge Pattern Catalog](references/wedge-patterns.md)，至少考虑：

- **Skill Wedge** — 新能力供给少；
- **Problem Wedge** — 新痛点开始产生预算；
- **Distribution Wedge** — 技术 × 市场 / 垂直知识组合稀缺；
- **Evidence Wedge** — 大家都说会，但很少人能 benchmark / deploy / show real users；
- **Organization Wedge** — 特定公司阶段需要非常规组合能力；
- **Contribution Wedge** — 通过真实开源协作进入生态。

一个方向通常可以生成 3–7 个 wedge，再比较，不要看到第一个看起来新鲜的能力就停止。

---

## 4. Opportunity scoring

按 [Opportunity Scoring](../../references/opportunity-scoring.md) 打分，至少考虑：

- Demand Urgency；
- Talent Scarcity；
- Entry Friction；
- Proof Speed；
- Transferability；
- Narrative Leverage；
- Personal Fit；
- Crowding Risk。

### 评分不是装饰

每个高分必须能解释：

- 谁在需要？
- 为什么现在需要？
- 为什么市场供给没有完全跟上？
- 用户凭什么进入？
- 72h 内可以形成什么证据？
- 如果做失败，损失多大？

没有这些解释的 8/10 没有意义。

---

## 5. Anti-crowding check

主动降权：

- 一小时教程即可复刻；
- GitHub 充斥同模板项目；
- 候选人简历普遍出现同一表述；
- JD 已经把它从加分项变成基础要求；
- “项目”只是换 UI 的 API wrapper；
- 作品无法展示真实 decision / tradeoff；
- 面试官很难从中继续追问出深度。

### Tutorial saturation test

问：

> 一个没有真正理解的人，能不能在 1–3 小时内做出一个看起来差不多的 Demo？

如果答案是“能”，则必须增加：benchmark、真实数据、生产约束、外部协作、用户反馈或独特 domain context。

---

## 6. Evidence ROI

Career Alpha 不是为了积累项目数量。

对候选 wedge 比较：

```text
Evidence ROI = credibility gained / time + learning cost + coordination cost
```

高 Evidence ROI 的动作包括：

- 一个真实合并 PR；
- 一次可复现 benchmark；
- 一个部署后的真实用户反馈；
- 一个清晰的 latency / cost / quality tradeoff；
- 一次和目标公司直接相关的小型 reproduction；
- 一篇带源码和数据的 failure analysis。

低 Evidence ROI：

- 第 5 个同类 CRUD / chatbot demo；
- 无用户、无 benchmark 的大型空壳平台；
- 只增加 buzzword、不增加可核验事实的项目。

---

## 7. Choose the cheapest uncertainty-reducing test

不要直接规划 30 天项目。

先问：**我们现在最不确定的是什么？**

可能是：

- 目标公司到底认不认可这个方向？
- 用户能不能在 3 天内做出非 trivial 结果？
- 用户是否缺 prerequisite？
- 市场是不是已经饱和？
- 能否形成 interview-depth？

然后设计一个 ≤72h 的 test。

例：

```yaml
question_to_test: Can agent reliability work create measurable engineering evidence?
72h_test: build a fixed-task harness benchmark
success_signal: reproducible result + meaningful failure taxonomy
failure_signal: only trivial retry improvements or no defensible metric
```

---

## 8. Kill criteria

每个 Best Wedge 必须列出可以让用户 **停止投入** 的事实。

例如：

- 10–20 个目标团队几乎不关心该问题；
- 学习前置成本远超用户窗口；
- 作品无法比教程 demo 多产生证据；
- 该能力快速被工具完全自动化；
- 更好的 wedge 用一半时间产生双倍证据；
- 用户真实求职反馈持续否定 thesis。

没有 kill criteria 的职业建议很容易变成 sunk-cost trap。

---

## 9. Select build vs contributor

### 适合 `/build`

- 问题可以独立 benchmark；
- 需要快速探索；
- 目标是产生架构 / evaluation / metric 证据；
- 外部项目没有合适入口。

### 适合 `/contributor`

- 外部 validation 比自建 demo 更重要；
- 存在活跃、相关的开源项目；
- 用户可以从 docs / test / bug / integration / eval 小贡献进入；
- 目标公司或生态会认可该项目。

### 适合直接 `/position`

- 用户已经拥有足够证据；
- 当前问题只是岗位语言、ownership 边界与叙事结构。

---

## 10. Default output

使用 [Wedge Output Template](references/output-template.md)。

至少输出：

### A. Candidate Wedges

| Wedge | Type | Demand | Scarcity | Entry | Proof Speed | Narrative | Crowding | Verdict |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |

### B. Best Wedge

一句话说明：

> 对这个用户，为什么它比“更热门”的方向更值得现在投入？

### C. Who values it

列出公司 / 团队类型，而不是凭空承诺具体公司一定招聘。

### D. Missing evidence

用户现在离这个定位还缺什么。

### E. Cheapest Test

≤72h，必须产生 artifact 或市场反馈。

### F. 7-day / 30-day path

不追求大而全，追求逐层增加 evidence strength。

### G. Kill Criteria

至少 2–4 条。

---

## 11. Example calibration

### Weak wedge

```text
Trend: AI Agents
Wedge: Build a ChatGPT clone
```

问题：拥挤、tutorialized、难证明系统判断。

### Stronger wedge

```text
Trend: Agent production adoption
Wedge: Agent Reliability / Evaluation
Proof: fixed-task benchmark + failure taxonomy + ablation
```

不是因为“Agent Reliability”这个词更酷，而是它能用较低成本产生更高质量证据。

---

## 12. Handoff

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 保留：

```yaml
goal:
selected_wedge:
verified_facts:
hypotheses:
current_evidence:
missing_evidence:
cheapest_test:
kill_criteria:
recommended_next_skill: /build | /contributor | /position
privacy_boundary:
```

下游 skill 可以更新 thesis，但不能把 planned work 写成 completed work。
