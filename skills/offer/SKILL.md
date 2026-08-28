---
name: offer
description: Career Alpha 求职管线与机会复盘技能。用于管理投递、测评、面试、拒信、Offer、跟进动作与机会质量；当用户开始投递、需要整理招聘进度、比较机会、复盘拒信或决定下一步资源投入时使用。
---

# /offer — Career Pipeline

目标：把求职从零散聊天和邮件变成可执行的机会管线，并持续反馈给 `/radar`、`/wedge` 和 `/position`。

## Workflow

1. 收集职位、公司、渠道、联系人、阶段、日期、下一步和备注。
2. 标准化状态：
   - Target
   - Applied
   - Assessment
   - Interviewing
   - Waiting
   - Offer
   - Rejected
   - Withdrawn
3. 每条机会必须有 `Next Action`，避免只有状态没有动作。
4. 记录反馈：面试题、拒信理由、HR 反应、薪资区间、岗位真实职责。
5. 每周做一次 pattern review：
   - 哪种定位回复率更高；
   - 哪类公司更认可现有证据；
   - 哪个能力反复被追问；
   - 哪些岗位需求与 `/radar` 假设不一致。
6. 把真实市场反馈回流：
   - 趋势判断错误 → `/radar`
   - 切入口错误 → `/wedge`
   - 证据不足 → `/build` / `/contributor`
   - 表达问题 → `/position`
   - 面试薄弱 → `/interview`

## Default output

### Pipeline
| Company | Role | Stage | Last Touch | Next Action | Deadline | Signal |

### Weekly Signals
- Positive signals
- Negative signals
- Repeated objections
- Unexpected opportunities

### Funnel
如果数据足够，统计：
- application → reply
- reply → interview
- interview → final
- final → offer

不把样本过小的数字当成稳定结论。

### Next 3 Actions
只给最重要的 3 个动作，按影响力排序。

## Opportunity review

比较 Offer 时，不只看薪资，还可根据用户偏好评估：
- Learning rate
- Career alpha exposure
- Ownership
- Team quality
- Brand / signaling
- Optionality
- Compensation
- Downside risk

## Handoff

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 将可复用的市场信号交给 radar、wedge 或 position；逐条标记来源、时间和 VERIFIED / SUPPORTED / SELF-REPORTED 状态。

## Privacy

招聘邮件、联系人和薪资等敏感信息只用于当前工作流，不建议默认写入公开作品集或 README。
