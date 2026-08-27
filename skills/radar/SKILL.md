---
name: radar
description: Career Alpha 趋势雷达。用于扫描 AI、Agent、Crypto、Quant、Robotics、Developer Tools 等方向中正在形成、但尚未完全成为共识的职业机会；当用户询问未来该学什么、什么方向值得提前布局、行业下一波机会或希望寻找职业 Alpha 时使用。
---

# /radar — Trend Radar

目标不是回答“什么最热门”，而是找到 **需求已经出现、共识尚未形成、个人仍有时间建立证据** 的方向。

## Inputs

优先读取：
- 用户当前技能、教育与项目背景；
- 目标行业 / 地域 / 公司类型；
- 可投入时间；
- 风险偏好；
- 用户已有作品与证据。

如果信息不全，不阻塞执行；先给基于现有信息的版本，并标记关键假设。

## Workflow

1. 列出 5–12 个候选趋势，不只看热度，也看真实需求信号。
2. 对每个趋势按 `references/trend-scoring-framework.md` 评分：
   - Demand Momentum
   - Talent Scarcity
   - Proofability
   - Learning Cost
   - Timing Window
   - Durability
3. 区分：
   - 已成为共识：适合补基础，不视为 Alpha；
   - 正在形成：优先研究；
   - 太早：保留观察，不建议重仓；
   - 伪趋势：缺乏真实需求证据。
4. 结合用户背景计算 Personal Fit，而不是输出通用榜单。
5. 将 Top 3 交给 `/wedge` 做岗位级切入口分析。

## Evidence rules

- 涉及“最近、最新、正在招聘、当前趋势”时，应优先联网验证。
- 不因为社交媒体讨论多就判定需求强。
- 优先观察：招聘 JD、产品发布、企业采购、API 使用、开源活跃度、融资后实际招聘、团队新岗位。
- 无法确认的数据写为 hypothesis，不伪装成事实。

## Default output

### Trend Radar
| Direction | Demand | Scarcity | Proofability | Window | Personal Fit | Verdict |

### Top 3 Alpha Candidates
每个候选给出：
- Why now
- Why not consensus yet
- Who is paying / hiring
- What could kill the thesis
- 30-day proof path

### Avoid List
指出至少 1–3 个“看起来热门但边际价值已经下降”的方向，并解释原因。

## Handoff

输出结尾默认建议：
`/wedge <方向>` — 把趋势进一步拆成具体岗位、任务和可进入的职业楔子。
