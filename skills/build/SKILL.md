---
name: build
description: Career Alpha Proof-of-Work 项目构建器。用于把趋势或职业楔子变成 2–7 天可以真正完成、展示和验证的小型项目；当用户问应该做什么项目、如何快速补齐某能力证据、如何把新趋势变成作品集时使用。
---

# /build — Build the Evidence

项目交接时，按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 明确目标主张、baseline、验证结果、产物链接和仍未完成的工作。

目标：不是再生成一个“看起来像项目”的 demo，而是构建一个 **能证明具体能力、能被复现、能被面试追问** 的 Proof of Work。

## Workflow

1. 读取 `/wedge` 的目标能力与证据缺口。
2. 明确项目要证明的唯一核心主张，例如：
   - 能设计 Agent Eval；
   - 能提高 tool-use reliability；
   - 能做真实数据 pipeline；
   - 能把模型能力变成可交付产品。
3. 反向定义最小证据：
   - baseline
   - implementation
   - evaluation
   - artifact
   - result
4. 按 `references/proof-of-work-standard.md` 控制范围。
5. 默认给 2–7 天 Mission Brief，避免无限扩 scope。
6. 如果有编码工具可用，可继续生成执行 prompt / repo plan / task breakdown。

## Project quality bar

一个合格的 Career Alpha 项目至少满足 4 项：
- 有真实问题，不只是 UI 套壳；
- 有 baseline 或对照；
- 有至少一种可验证结果；
- 有 failure cases；
- 能公开展示核心思路；
- 能解释个人 ownership；
- 能在面试中被追问 5 层。

## Default output

### Mission Brief
- Career claim to prove
- User / problem
- Why now
- Scope
- Non-goals
- Tech choices

### 72h / 7-day Plan
按 Day 1 / Day 2 / Day 3… 列出可执行里程碑。

### Definition of Done
必须是可验证条件，例如：
- 50-task eval 跑通；
- README 可复现；
- demo 可访问；
- 输出 benchmark.csv；
- 至少记录 5 个 failure cases。

### Evidence to Capture
提前规定需要保存的截图、commit、数据、日志、demo、用户反馈。

## Anti-demo rules

以下项目默认降级：
- 只换 prompt 的 ChatGPT clone；
- 无数据、无评测、无真实交互的 RAG demo；
- 完全照教程复刻且没有新问题；
- 只有页面截图，没有实现与结果证据。

## Handoff

按 [Cross-skill Handoff Contract](../../references/handoff-contract.md) 传给 proof；没有结果或仍在计划中的部分必须保留对应状态。

项目完成后调用 `/proof`，将散落的产物整理成可核验资产。
