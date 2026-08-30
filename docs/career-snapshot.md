# Career Alpha Snapshot

`Career Alpha Snapshot` turns the private `.career-alpha/` workspace into a reviewable Markdown summary.

It is meant for:

- mentor / peer review;
- interview preparation;
- weekly career review;
- anonymized Career Alpha case submission;
- portfolio evidence review.

It is **not** an automatic privacy filter.

---

## Generate a snapshot

From the repository root:

```bash
npm run init
npm run snapshot
```

The command reads the local `.career-alpha/` workspace and writes:

```text
.career-alpha/snapshot.md
```

The export includes:

- Target role / region / weekly time;
- Current wedge;
- Trend Radar;
- Proof of Work;
- Claim–Evidence Ledger;
- Application Pipeline;
- Next-decision placeholders.

---

## Privacy rule

Before sharing, manually remove:

- recruiter / founder contact details;
- private email content;
- compensation details you do not want public;
- unreleased company or project information;
- private repository links;
- identifying user or customer data.

Career Alpha intentionally keeps `.career-alpha/` in `.gitignore` by default.

The snapshot command does not upload anything and does not call an external service.

---

## Suggested weekly use

```text
Monday
/radar or /wedge
↓
During the week
/build / contributor / proof
↓
Before interview
/position / interview
↓
After market feedback
/offer
↓
npm run snapshot
```

Then review:

1. What changed since the previous snapshot?
2. Which claim became stronger?
3. Which wedge lost evidence?
4. What market objection repeated?
5. What is the next highest-leverage missing fact?

---

## Case contribution

If you want to contribute a real Career Alpha case, export a snapshot, anonymize it, then use the repository's **Share a Career Alpha Case** issue template.

Do not publish private job-search material merely to make the case look more complete. Evidence quality matters more than volume.
