# 为 Career Alpha 做贡献

[English](CONTRIBUTING_en.md)

Career Alpha 欢迎新的真实案例、Skill references、routing cases、Evidence framework、Workbench 改进和工程工具。

我们更看重 **能让工作流更可验证、更可执行的贡献**，而不是文件数量。

## 最值得贡献什么？

### 1. 真实 Career Alpha 案例

最有价值的贡献之一，是一个经过脱敏的完整案例：

```text
背景
→ 原始职业假设
→ /radar 信号
→ /wedge 选择
→ 做了什么 Proof of Work
→ 留下什么 Evidence
→ 面试 / 市场怎么反馈
→ 哪个假设被证实或推翻
```

不要为了让案例好看而补不存在的 Offer、数字或结果。

敏感信息请删除：姓名、手机号、邮箱、招聘联系人、内部链接、薪资、NDA 内容和未公开公司数据。

### 2. Skill-local References

每个 Skill 可以拥有：

```text
skills/<skill>/references/
```

适合放：

- source hierarchy；
- output template；
- scoring rubric；
- good / bad examples；
- failure modes；
- decision protocol。

如果一份 framework 会被多个 Skill 共享，则放到根目录 `references/`。

### 3. Routing Cases

如果你发现：

- `/radar` 和 `/wedge` 容易混淆；
- `/proof` 和 `/position` 触发边界不清；
- 某种中文自然语言无法稳定路由；
- multi-skill flow 应该按不同顺序执行；

请补充：

```text
tests/skill-routing-cases.yaml
tests/routing-boundary-cases.yaml
```

### 4. Workbench

`assets/career-alpha-workbench.html` 是 local-first 的 Career Alpha 状态层。

欢迎改进：

- import / export；
- accessibility；
- mobile layout；
- pipeline view；
- evidence editing；
- schema compatibility；
- local privacy safeguards。

不要默认增加会自动上传求职数据的远程 analytics / telemetry。

---

## 新 Skill 的门槛

不要因为“这个功能也挺有用”就新增第 9 个 Skill。

一个新 Skill 应该满足：

1. 解决现有 8 个入口无法清晰覆盖的独立 Job-to-be-Done；
2. 有明确 trigger；
3. 有独立 decision process；
4. 有 evidence / integrity boundary；
5. 有默认 output contract；
6. 能说明与相邻 Skill 的 handoff；
7. 有 routing cases；
8. 最好有真实或 fictional operational example。

如果只是给 `/proof` 多一种 evidence 类型，更适合加 reference，而不是新 Skill。

---

## Skill 目录约定

```text
skills/<name>/
├── SKILL.md
├── agents/
│   └── openai.yaml
└── references/
    └── ...
```

`SKILL.md` 必须：

- frontmatter `name` 与目录一致；
- `description` 说明何时触发；
- 明确 inputs；
- 明确 workflow；
- 明确 integrity / evidence rules；
- 有 default output；
- 有 handoff。

---

## Evidence Standard

Career Alpha 使用四个统一 confidence：

- `VERIFIED`
- `SUPPORTED`
- `SELF-REPORTED`
- `PLANNED`

贡献不能静默升级：

```text
PLANNED → DONE
PR OPEN → MERGED
prototype → production
team result → personal ownership
track placement → overall ranking
```

如果一条主张缺证据，正确动作是：

- 降级 wording；
- 标记缺口；
- 添加验证动作；
- 或删除。

不是补一个“看起来合理”的数字。

---

## 写操作与隐私

Career Alpha 处理的内容可能包含求职隐私。

请默认：

- `.career-alpha/` 只留本地；
- 不提交私人邮箱 / 联系人；
- 不提交未脱敏招聘邮件；
- 不提交薪资与合同；
- 不提交 NDA / 内部公司材料；
- public case 只保留完成方法论验证所需的最小信息。

任何真实外部 fork / push / PR / message 操作，都应该在执行前让用户看见将发生什么。

---

## 本地校验

至少运行：

```bash
python3 scripts/validate_skills.py
python3 scripts/validate_package.py
```

如果安装了 Node，也可以：

```bash
npm run validate
```

校验会检查：

- 8 个 Skill 是否完整；
- frontmatter；
- `agents/openai.yaml`；
- local / shared references；
- plugin manifests；
- ledger schema / template；
- routing cases。

---

## Pull Request 应该说明什么？

请尽量回答：

### Problem

用户当前在哪里卡住？

### Why the existing workflow is insufficient

为什么不是改一个现有 reference 就够了？

### What changed

Skill / reference / Workbench / routing / validator 哪部分发生了变化？

### Evidence

如何验证？有无 case / test / screenshot / example？

### Boundary

有什么明确没解决？

### Privacy

有没有引入可能保存私人求职数据的新行为？

---

## 小贡献同样欢迎

高质量的小贡献可能比大型重构更有价值，例如：

- 一个真实 routing boundary case；
- 一个会导致数字误导的 claim audit 反例；
- 一个新的 wedge failure mode；
- 一处 Workbench accessibility 修复；
- 一个更好的 benchmark Mission Brief；
- 一条 validator regression test。

Career Alpha 的目标不是变得越来越大，而是 **越来越难胡说、越来越容易执行、越来越能被真实市场验证**。
