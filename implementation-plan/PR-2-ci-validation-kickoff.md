# PR #2 CI Validation Kickoff

> Status: DRAFT / VERIFY BEFORE ACTIVATION

## Purpose

Create the PR #2 shell for adding CI validation to the Phase 0 scaffold.

## Branch

`codex/ci-validation-baseline`

## Base Branch

`main`

## Scope

This kickoff establishes the PR #2 working branch and draft PR shell before implementation work begins.

No CI implementation work has been performed before PR creation.

## Planned Cards

1. Card 01 — Add GitHub Actions scaffold validation workflow
2. Card 02 — Add unified local validation runner
3. Card 03 — Harden validation scripts for CI compatibility
4. Card 04 — Add CI validation documentation
5. Card 05 — Add CI failure triage guide
6. Card 06 — Update README with CI validation instructions
7. Card 07 — Run local validation and record evidence
8. Card 08 — Update draft PR body
9. Card 09 — Final PR #2 merge-readiness report

## Safety Rules

- Do not delete files.
- Do not activate OpenClaw.
- Do not initialize a playable Godot game.
- Do not install software.
- Do not download assets.
- Do not publish or upload anything except the GitHub branch/PR creation required for this kickoff.
- Do not request, store, print, or commit secrets.
- Do not modify OpenClaw runtime permissions.
- Keep all OpenClaw files draft-only.
- Do not add third-party dependencies.
- Do not add the GitHub Actions workflow until Card 01.
- Do not update README until Card 06.
- Do not modify validation scripts until the appropriate card.

## Phase 0 Scaffold Assumption

PR #1 has been merged into `main`, so the Phase 0 scaffold is expected to exist on the base branch.

Expected scaffold anchors:

- `AGENTS.md`
- `scripts/validate_repository_safety.sh`
- `scripts/validate_repo_structure.sh`
- `scripts/validate_asset_registry.py`
- `scripts/validate_license_registry.py`
- `openclaw-config-draft/README.md`
- `implementation-plan/CARD-21-canonical-agent-name-audit.md`

## OpenClaw Activation Status

OpenClaw activation has not been performed.

OpenClaw activation is out of scope for PR #2.

## Next Recommended Card

Card 01 — Add GitHub Actions scaffold validation workflow.
