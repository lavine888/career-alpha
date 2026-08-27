# Claim–Evidence Ledger

共享于 `/contributor`、`/build`、`/proof`、`/position`、`/interview`。

它是 Career Alpha 的事实底座：先记录发生了什么，再决定如何表达。

## Ledger schema

| Field | Meaning |
| --- | --- |
| Claim ID | 稳定编号，如 CA-001 |
| Claim | 想表达的主张 |
| Context | 项目 / 公司 / 比赛 / 开源仓库 |
| Evidence | URL、commit、数据、截图、文档等 |
| Result | 可验证结果 |
| Ownership | 本人 / 团队 / 外部工具分别负责什么 |
| Confidence | VERIFIED / SUPPORTED / SELF-REPORTED / PLANNED |
| Safe Wording | 当前可安全使用的表达 |
| Strong Wording | 需要额外证据才建议使用的表达 |
| Interview Risks | 最可能被追问的位置 |
| Missing Evidence | 最小补证动作 |

## Confidence rules

### VERIFIED
有直接可核验证据，例如公开 PR、repo、官方成绩、benchmark 文件、已部署产品。

### SUPPORTED
有较强材料支持，但第三方无法完全独立验证，例如内部文档、截图、会议记录。

### SELF-REPORTED
仅来自用户叙述。可以使用，但不要自动加精确数字或强 ownership。

### PLANNED
尚未完成。只能写计划、进行中或目标，不能改写成已完成。

## Strong-claim audit

以下词默认触发审计：
- 主导 / led
- owner / 负责人
- founder / co-founder
- 从 0 到 1
- 提升 X%
- 降低 X%
- 服务 X 用户
- 第一 / Top N / 获奖
- production / deployed

审计要问：
1. 证据在哪里？
2. 数字怎么算？
3. 用户本人做了什么？
4. 谁做了其他部分？
5. 面试官追问 5 层还能解释吗？

## Example

```text
Claim ID: CA-017
Claim: Improved agent task success from 61% to 78%.
Evidence: benchmark.csv, commit abc123, eval script
Ownership: designed eval + retry policy; UI by teammate
Confidence: VERIFIED
Safe Wording: Improved task success from 61% to 78% on a 50-task internal benchmark by implementing retry and context policies.
Interview Risks: benchmark design, contamination, statistical significance
Missing Evidence: publish task definitions and failure cases
```
