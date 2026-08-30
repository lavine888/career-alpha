---
name: radar
description: Career Alpha 趋势雷达。用于扫描 AI、Agent、Crypto、Quant、Robotics、Developer Tools 等方向中正在形成、但尚未完全成为共识的职业机会；当用户询问未来该学什么、什么方向值得提前布局、行业下一波机会或希望寻找职业 Alpha 时使用。对时效性趋势必须优先验证真实招聘、产品、采用与工程信号，而不是仅依赖社交媒体热度。
---

# /radar — Trend Radar

`/radar` 的任务不是回答“最近什么最火”，而是寻找：

> **需求已经出现、人才供给还没有完全追上、用户又来得及建立真实证据的方向。**

它输出的是 **career hypothesis**，不是未来保证，也不是投资建议。

---

## 1. Inputs

优先读取：

- 当前技能、教育、工作 / 项目背景；
- 已有作品、GitHub、比赛、开源和可验证证据；
- 目标行业、岗位族、地域和公司类型；
- 可投入时间（72h / 7d / 30d / 每周时长）；
- 风险偏好与机会成本；
- 明确不想走的方向。

信息不足时不要阻塞执行。先给 provisional radar，并把推断内容放在 `Assumptions`，不要把推断写成用户事实。

---

## 2. Signal collection

按 [Radar Signal Sources](references/signal-sources.md) 的证据层级收集信号。

### 优先顺序

1. **Tier A — Direct demand**
   - 招聘 JD；
   - first-party hiring statements；
   - 付费产品 / customer case；
   - 新团队与真实生产需求。
2. **Tier B — Builder adoption**
   - GitHub adoption；
   - 工程博客 / postmortem；
   - benchmark / eval；
   - SDK / framework 活跃度；
   - 工程社区持续出现的生产问题。
3. **Tier C — Organization / capital**
   - 融资后的具体 hiring；
   - 新部门、新产品线、战略投入。
4. **Tier D — Attention**
   - 搜索热度、媒体、X、小红书、YouTube、KOL。

Tier D 只能作为辅助。**讨论量大 ≠ 有职业需求。**

### Freshness

涉及“最近 / 当前 / 正在招聘 / 今年 / 新方向”等时效性判断时：

- 优先联网验证；
- 记录 source date 与 observation date；
- 区分 target region；
- 尽量说明 sample size；
- 把旧资料作为 background，不把它伪装成当前信号。

---

## 3. Build the candidate set

列出约 5–12 个候选方向。不要只用岗位标题，也可以是问题 / 能力层：

- Build / integration；
- Eval；
- Reliability / observability；
- Data / synthetic data；
- Infra；
- Context / memory；
- Security；
- Distribution / growth；
- Vertical workflow；
- Developer experience。

一个趋势太宽时先拆小。例如不要只写 `AI Agent`，应拆成 agent application、eval、reliability、browser / computer use、voice、context engineering 等可比较单元。

---

## 4. Score each direction

使用 [Trend Scoring Framework](../../references/trend-scoring-framework.md)，至少评估：

- Demand Momentum；
- Talent Scarcity；
- Proofability；
- Learning Cost；
- Timing Window；
- Durability；
- Personal Fit。

### Personal Fit 不能省略

同一个市场趋势对不同用户价值不同。

考虑：

- 是否能复用已有能力；
- 是否需要完全重学；
- 72h 内能不能得到第一份证据；
- 用户目标公司是否真的认可；
- 是否能和已有经历形成一个连续 narrative。

不要输出脱离用户的“万能趋势榜”。

---

## 5. Classify the market state

使用统一标签：

- `EARLY` — 有直接需求，供给仍薄；
- `GROWING` — 共识开始形成，但仍有差异化空间；
- `CONSENSUS` — 重要基础能力，但单独不构成 Alpha；
- `SATURATED` — tutorialization / 同质化已经明显压缩边际价值；
- `TOO_EARLY` — 技术信号存在，但真实需求不足；
- `HYPE` — attention 明显超过 verified demand。

不要把 `SATURATED` 理解成“没用”。例如 Generic RAG 仍可能是岗位基础，只是不适合作为主要差异点。

---

## 6. Anti-hype / anti-crowding checks

对每个高分候选主动检查：

### Supply check

- 是否大量教程 1 小时可复刻？
- GitHub 是否充斥同模板项目？
- 是否已经成为候选人简历标配？
- JD 是否从“加分项”变成“基础要求”？
- 是否出现成熟课程 / 证书 / 培训流水线？

### Demand check

- 真的有人招聘 / 付费吗？
- 还是只有开发者讨论？
- 需求是独立岗位，还是现有岗位的一项职责？
- 用户目标地域里是否存在，而不是只在硅谷少数团队？

### Automation check

- AI / 新工具是否正在迅速把这项能力商品化？
- 如果工具半年后成熟，这个能力剩下的价值是什么？

---

## 7. Search for negative evidence

每个 Top Candidate 至少主动寻找一个能推翻 thesis 的信号。

例如：

- 招聘没有实际增长；
- 企业把工作并入普通工程岗；
- 技术停留在 demo；
- 供给增长速度比需求更快；
- 用户目标公司并不认可；
- 无法形成可核验 Proof of Work。

如果反证很强，应降 confidence，不能为了给用户“方向”而硬选机会。

---

## 8. Minimum evidence standard

Top Alpha Candidate 尽量拥有：

- ≥1 个 Tier A direct-demand signal；
- ≥1 个独立 Tier A/B signal；
- ≥1 个 counter-signal / risk；
- 明确的 source date / freshness；
- 一条现实可执行的 proof path。

证据不足时使用：

```text
Confidence: LOW / HYPOTHESIS
```

禁止把 hypothesis 静默升级成 fact。

---

## 9. Default output

完整格式使用 [Radar Output Template](references/output-template.md)。

至少交付：

### A. Assumptions

明确当前分析依赖什么背景、地域与时间窗口。

### B. Trend Radar

| Direction | Demand | Scarcity | Proofability | Window | Durability | Personal Fit | Confidence | Verdict |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |

### C. Top 3 Alpha Candidates

每个说明：

- Why now；
- Why not consensus yet；
- real demand evidence；
- talent supply evidence；
- who might value it；
- 72h / 30d proof path；
- what could kill the thesis；
- missing prerequisites。

### D. Avoid / Low-marginal-value list

至少指出 1–3 个“看起来热门，但对这个用户边际价值较低”的方向，并说明什么情况下它仍然值得学。

### E. Open questions

把还没验证的问题显式保留。

---

## 10. Examples

在需要校准判断时读取 [Radar Examples](references/examples.md)。关键原则：

- `Generic RAG` 可能 Demand 高，但 Scarcity 低，因此只是 baseline；
- `Agent Eval` 可能岗位标题少，但职责需求增长，因此不能只按 title 搜；
- 一个方向对 backend engineer 是 Alpha，对完全不同背景的用户可能不是。

---

## 11. Handoff to `/wedge`

使用 [Cross-skill Handoff Contract](../../references/handoff-contract.md)，只传递最小 Context Packet：

```yaml
goal:
verified_facts:
fresh_signals:
hypotheses:
candidate_constraints:
top_trends:
recommended_next_skill: /wedge
privacy_boundary:
```

下游 `/wedge` 可以重新评估 thesis，但不能把 LOW-confidence signal 静默改成 VERIFIED fact。

默认结尾建议：

```text
/wedge <方向>
```

把趋势进一步拆成 **岗位任务、真实痛点、进入摩擦与最小 Proof of Work**。
