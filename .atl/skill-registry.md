# Skill Registry

**Delegator use only.** Any agent that launches sub-agents reads this registry to resolve compact rules, then injects them directly into sub-agent prompts. Sub-agents do NOT read this registry or individual SKILL.md files.

See `_shared/skill-resolver.md` for the full resolution protocol.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| Creating a pull request, opening a PR, or preparing changes for review | branch-pr | /home/cristian/.config/opencode/skills/branch-pr/SKILL.md |
| When creating a GitHub issue, reporting a bug, or requesting a feature | issue-creation | /home/cristian/.config/opencode/skills/issue-creation/SKILL.md |
| When user says "judgment day", "review adversarial", "dual review", "doble review" | judgment-day | /home/cristian/.config/opencode/skills/judgment-day/SKILL.md |
| When user wants to create a new AI agent skill or add agent instructions | skill-creator | /home/cristian/.config/opencode/skills/skill-creator/SKILL.md |

## Compact Rules

Pre-digested rules per skill. Delegators copy matching blocks into sub-agent prompts as `## Project Standards (auto-resolved)`.

### branch-pr
- Every PR MUST link an approved issue — no exceptions
- Every PR MUST have exactly one `type:*` label
- Automated checks must pass before merge is possible
- Blank PRs without issue linkage will be blocked by GitHub Actions
- Use conventional commits only (feat, fix, chore, docs, style, refactor, perf, test, build, ci, revert)
- Branch names MUST match: `^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)\/[a-z0-9._-]+$`

### issue-creation
- Blank issues are disabled — MUST use a template (bug report or feature request)
- Every issue gets `status:needs-review` automatically on creation
- A maintainer MUST add `status:approved` before any PR can be opened
- Questions go to Discussions, not issues

### judgment-day
- Launch TWO independent blind judge sub-agents via delegate (parallel, async)
- Neither agent knows about the other — no cross-contamination
- Synthesize findings, apply fixes, re-judge until both pass or escalate after 2 iterations
- Follow Skill Resolver Protocol to inject project standards into both judges

### skill-creator
- Create SKILL.md following the Agent Skills spec
- Include frontmatter with name, description (with Trigger), license, metadata
- Document Critical Patterns — what the skill does and when to use
- Include code examples where relevant

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| None found | — | No AGENTS.md, CLAUDE.md, .cursorrules, GEMINI.md, or copilot-instructions.md in project |

Read the convention files listed above for project-specific patterns and all referenced paths. No additional convention files discovered in this project.