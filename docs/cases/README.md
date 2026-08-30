# Career Alpha Case Library

The case library demonstrates how the same Career Alpha loop changes across roles.

| Role | Career wedge | What makes the evidence hard to fake |
| --- | --- | --- |
| [Agent Engineer](../agent-engineer-end-to-end.md) | Agent Reliability / Evaluation | fixed-task benchmark, failure taxonomy, ablation, evidence boundaries |
| [AI Product Manager](ai-product-manager.md) | AI Workflow + Evaluation PM | baseline workflow, eval rubric, human fallback, outcome metrics |
| [Quant Researcher](quant-researcher.md) | Robustness-first Systematic Research | data contract, cost model, sensitivity analysis, failure regimes |
| [Robotics / Physical AI](robotics-engineer.md) | Evaluation + Failure Recovery | fixed scenarios, recovery benchmark, simulation boundary, failure taxonomy |

## Workbench bundles

Each case also has a directly importable Workbench state under [`examples/workbench/`](../../examples/workbench/README.md).

The cases are intentionally different. Career Alpha should not collapse every role into the same “build an AI demo” advice. The reusable logic is:

```text
fresh signal
  → asymmetric wedge
  → minimum proof
  → claim audit
  → position
  → interview defense
  → market feedback
```

A case is successful when it shows **what evidence is specific to that profession**, not when every profession ends up with the same project.
