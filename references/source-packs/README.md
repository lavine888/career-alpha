# Career Alpha Source Packs

Role-specific source packs help `/radar` and `/wedge` change their evidence strategy by career domain instead of applying one generic trend checklist everywhere.

## Available packs

| Domain | Pack | Typical focus |
| --- | --- | --- |
| AI Engineering / Agent Systems | [ai-engineering.md](ai-engineering.md) | eval, reliability, context, observability, inference, tool use |
| AI Product / Applied AI PM | [ai-product.md](ai-product.md) | workflow design, eval, human fallback, product outcomes, AI UX |
| Quant Research | [quant.md](quant.md) | reproducibility, costs, sensitivity, data, portfolio / research infra |
| Robotics / Physical AI | [robotics.md](robotics.md) | reliability, recovery, simulation, latency, perception / manipulation eval |

## Routing rule

When the target role clearly maps to one pack, load that pack before ranking trends.

When the target crosses domains, combine at most two packs and state the hybrid explicitly. Examples:

- AI Product + AI Engineering for technical AI PM;
- AI Engineering + Robotics for embodied-agent infrastructure;
- Quant + AI Engineering for research tooling or agentic research workflows.

Do not silently treat role-specific heuristics as universal market facts.

## Extension rule

A new source pack should define:

1. direct-demand sources;
2. capability clusters;
3. saturation checks;
4. high-value proof artifacts;
5. example wedge questions.

Avoid adding a source pack only to create more folders. Add one when the domain changes what counts as credible demand or credible proof.
