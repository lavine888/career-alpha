# Opportunity Scoring

用于 `/wedge` 将趋势拆成可执行职业切口。评分 1–5。

## Dimensions

- **Demand Urgency**：团队是否正在被这个问题卡住，还是只是“以后可能需要”。
- **Talent Scarcity**：真正解决过的人是否稀缺。
- **Entry Friction**：个人进入需要的权限、数据、算力、行业牌照是否可承受。
- **Proof Speed**：能否快速做出第三方看得懂的证据。
- **Transferability**：该能力能否迁移到其他岗位/行业。
- **Narrative Leverage**：一份证据能否同时服务简历、GitHub、内容、面试和 networking。

## Wedge Score

```text
Wedge Score =
0.25 * Demand Urgency +
0.20 * Talent Scarcity +
0.20 * Proof Speed +
0.15 * Transferability +
0.10 * Narrative Leverage +
0.10 * Entry Friction
```

Entry Friction 的高分代表“容易进入”，不是壁垒高。

## Wedge archetypes

### Skill Wedge
新能力供给少，例如某类 eval、agent reliability、domain-specific tooling。

### Problem Wedge
岗位名字可能不新，但刚出现了一个新痛点。

### Distribution Wedge
技术能力与某个行业、语言、地域或渠道组合后形成稀缺交叉点。

## Anti-crowding signals

以下情况要降权：
- 一小时教程就能完成同类 demo；
- 候选人作品高度模板化；
- 岗位把该能力当“基础项”而非稀缺项；
- 需求只存在于社交媒体讨论，没有付费/招聘信号。
