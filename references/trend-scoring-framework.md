# Trend Scoring Framework

用于 `/radar`。所有评分采用 1–5 分，并记录证据来源与不确定性。

## Dimensions

### 1. Demand Momentum
真实需求是否在增加？优先看招聘、采购、产品落地、API/开源使用等信号。

### 2. Talent Scarcity
真正做过的人是否明显少于“会说这个词”的人？

### 3. Proofability
个人能否在 2–30 天内做出公开、可验证的证据？

### 4. Learning Cost
达到“可面试展开”的门槛需要多久？成本越低、迁移性越高，得分越高。

### 5. Timing Window
现在进入是否还有提前量？已成为基础技能时不再算明显 Alpha。

### 6. Durability
趋势退潮后，留下的能力是否仍有价值？例如 eval、distributed systems、data engineering 通常比单一框架名更耐久。

## Suggested weighted score

```text
Trend Score =
0.25 * Demand Momentum +
0.20 * Talent Scarcity +
0.20 * Proofability +
0.10 * Learning Cost +
0.15 * Timing Window +
0.10 * Durability
```

## Verdict bands

- 4.2–5.0: Strong Alpha Candidate
- 3.5–4.1: Worth Testing
- 2.8–3.4: Watch / selective investment
- <2.8: Low priority

## Important

评分必须伴随反例和 kill criteria。一个“满分趋势”但没有反证条件，通常只是兴奋，而不是分析。
