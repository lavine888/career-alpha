# Cross-skill Handoff Contract

Career Alpha 的 skill 可以单独使用，但跨 skill 组合时必须传递一个最小的
**Context Packet**。它是事实边界和工作状态的交接，不是让下一个 skill 重新猜测
用户经历的摘要。

## Context Packet

每次交接尽量包含以下字段；缺失字段明确写 UNKNOWN，不要用“看起来应该是”补齐：

    Goal:
    Verified facts:
    Hypotheses / freshness-sensitive signals:
    Planned work:
    Evidence references:
    Open questions:
    Recommended next skill:
    Privacy boundary:

字段含义：

- Goal：当前要解决的岗位、能力或求职阶段问题；
- Verified facts：来自用户材料或可访问来源、可以直接核对的事实；
- Hypotheses / freshness-sensitive signals：趋势判断、市场信号和待验证假设，必须标注来源与日期；
- Planned work：尚未完成的项目、PR、实验或投递动作，只能写计划/进行中；
- Evidence references：Claim ID、URL、commit、文件、benchmark、截图或其他定位信息；
- Open questions：会改变结论、措辞或下一步的未决问题；
- Recommended next skill：下一步入口及原因，不代表该入口已经执行；
- Privacy boundary：说明哪些材料只可留在本地，默认不写入公开仓库。

## State rules

1. PLANNED 只能交接为计划，不能在 /proof、/position 或 /interview 中升级为已完成。
2. SELF-REPORTED 可以作为工作底稿，但没有直接证据时不得自动生成精确数字或强 ownership。
3. SUPPORTED 需要保留材料来源；只有直接、可核验的证据才可标记 VERIFIED。
4. 下一个 skill 可以改写表达，但不能提升事实的 confidence，也不能扩大 ownership。
5. 用户未确认、未合并或未完成的事项必须在交接中继续保留其状态。

## Recommended routes

| Current skill | Handoff target | Minimum handoff evidence |
| --- | --- | --- |
| /radar | /wedge | trend signal, source/date, timing window, kill criteria |
| /wedge | /build or /contributor | target capability, entry mission, proof gap, entry friction |
| /build or /contributor | /proof | actual artifact, status, changed scope, validation result |
| /proof | /position or /interview | Claim ID, evidence locator, confidence, ownership boundary |
| /position | /interview or /offer | final wording, target role, unresolved claim risks |
| /offer | /radar, /wedge, /position | observed market signal, sample size, next action, uncertainty |

## Privacy default

招聘邮件、联系人、薪资、内部链接和未公开项目默认属于本地材料。可以在 Context
Packet 中记录“存在一份本地证据”，但不要把原文复制进公开 README、skill、示例或
提交历史。可公开的 URL、PR 和已确认结果也应只记录完成工作所需的最小信息。
