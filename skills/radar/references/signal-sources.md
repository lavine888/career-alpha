# Radar Signal Sources

`/radar` 的目标不是整理热点，而是验证一个职业方向是否正在产生 **真实需求、稀缺供给与可进入窗口**。

## 1. Evidence hierarchy

按优先级使用信号。单一弱信号不应支撑强结论。

### Tier A — Direct demand signals

优先级最高：

- 真实招聘 JD：新出现的岗位标题、职责、重复技能要求；
- 公司官方产品 / API / platform 发布后出现的配套岗位；
- 招聘经理、创始人、技术负责人明确描述的 hiring need；
- 企业客户采购、付费产品、公开 customer case；
- 已上线生产系统暴露出的明确痛点。

这些信号回答：**真的有人愿意为这个问题付工资或付费吗？**

### Tier B — Builder adoption signals

- GitHub 新仓库 / issue / PR 活跃；
- SDK、框架、评测工具的 adoption；
- Hacker News / Reddit / Discord / X 中工程师反复讨论同一个生产问题；
- conference talk、工程博客、postmortem；
- 新 benchmark / eval suite 被多个团队引用。

这些信号回答：**工程师是不是已经开始认真解决它？**

### Tier C — Capital / organization signals

- 融资之后的具体招聘动作；
- 新团队、新部门、新产品线；
- 并购或战略合作；
- VC thesis 与 portfolio 变化。

资本本身不是需求，但可以提示资源正在向哪里移动。

### Tier D — Attention signals

- Google Trends；
- X / 小红书 / YouTube 热度；
- 搜索量；
- 媒体报道；
- KOL 讨论。

只能作为辅助。**注意力不是职业 Alpha。** 如果只有 Tier D，没有 A/B 信号，默认降低置信度。

---

## 2. Minimum evidence rule

对一个 Top Alpha Candidate，尽量满足至少：

- 1 个 Tier A 信号；
- 1 个独立 Tier A/B 信号；
- 1 个反证或风险信号。

如果做不到，应明确写：

```text
Confidence: LOW / HYPOTHESIS
Reason: demand evidence is still indirect
```

不要把“我看到很多人在讨论”改写成“市场需求爆发”。

---

## 3. Freshness

趋势是时效性事实。

记录：

- source date；
- observation date；
- region；
- sample size；
- whether the signal is first-party or commentary.

推荐时间窗口：

- fast-moving AI / crypto tooling: 30–90 days；
- hiring pattern: 60–180 days；
- durable infrastructure shift: 6–18 months.

如果使用更旧材料，要说明它是背景而不是“当前信号”。

---

## 4. Candidate-supply signals

不要只研究需求，还要研究供给。

可观察：

- 教程数量与复制难度；
- GitHub 同质项目数量；
- 简历 / 求职社区中该关键词是否已经泛滥；
- JD 是否从“加分项”变成“基础要求”；
- 是否出现成熟证书、训练营、标准课程；
- 一个新人是否能在 1–3 小时复制出看起来相似的作品。

供给越标准化，Alpha 越容易衰减。

---

## 5. Proofability signals

一个趋势值得职业下注，还要看能否形成证据。

优先方向通常满足至少一项：

- 可以 benchmark；
- 可以部署；
- 可以开源；
- 可以提交真实 PR；
- 可以获得用户反馈；
- 可以测量 latency / cost / quality / conversion；
- 可以展示 before / after。

纯观点型趋势即使很热门，也可能不适合作为 Career Alpha。

---

## 6. Negative evidence

每个趋势必须主动寻找至少一个可能推翻 thesis 的证据：

- 招聘量没有增加；
- 相关职责被现有岗位吸收；
- 工具自动化让该技能迅速商品化；
- 供给增长快于需求；
- 技术只在 demo 场景成立；
- 企业没有付费意愿；
- 地域与用户目标市场不匹配。

没有反证搜索的 Trend Radar 只是趋势营销。
