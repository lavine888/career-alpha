# Source Pack — Robotics / Physical AI

Use this pack when `/radar` or `/wedge` evaluates robotics, embodied AI, Physical AI, autonomy, manipulation or perception opportunities.

## Demand signals

Prioritize:

1. Robotics / autonomy job descriptions with concrete subsystem responsibilities.
2. First-party engineering posts describing deployment failures, sim-to-real gaps, calibration, recovery, latency or safety constraints.
3. Hardware / platform launches that create new integration or evaluation work.
4. Open-source robotics stacks with sustained issue and contributor activity.
5. Benchmark or competition results that expose reliability gaps rather than only peak capability.

## Useful capability clusters

- Perception evaluation
- Manipulation / planning reliability
- Recovery behavior
- Simulation and sim-to-real analysis
- Sensor calibration and data quality
- Robotics evaluation infrastructure
- Teleoperation / human fallback
- Edge inference and latency
- Safety / constraint monitoring
- Multimodal agent integration

## Saturation checks

Downgrade directions when:

- the artifact is only a simulation video with no metric;
- the candidate cannot explain the boundary between simulation and hardware evidence;
- success is demonstrated on one cherry-picked trajectory;
- the role requires hardware access that the candidate cannot realistically obtain and no simulation proxy exists.

## High-value proof

Prefer:

- fixed scenario benchmark;
- recovery / failure metrics;
- repeat trials, not one successful run;
- latency or resource measurement;
- explicit sim-to-real limitations;
- reproducible environment and configuration;
- public contribution to a robotics stack or evaluation tool.

## Example wedge questions

- Which robotics failures are common enough to create engineering budget?
- What can be evaluated credibly without owning expensive hardware?
- Which subsystem has a clear reproducibility gap that a student can attack?
- Can the project show recovery quality, not just successful completion?
