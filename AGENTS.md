# Agent Safety Rules

These rules apply to agents working in this repository unless a more specific instruction file provides stricter guidance.

## Global Rules

- Do not delete files.
- Do not overwrite existing files without first creating a timestamped backup.
- Do not install software.
- Do not download third-party assets.
- Do not publish, upload, or contact external services.
- Do not request, store, print, or commit secrets.
- Do not activate OpenClaw runtime permissions.
- Generate OpenClaw descriptors as draft desired-state files only.
- Mark assumed OpenClaw schema as `DRAFT / VERIFY BEFORE ACTIVATION`.
- Keep scripts macOS Apple Silicon-compatible.
- Make scripts commented, non-destructive, idempotent where possible, clear about pass/fail output, and nonzero on failure.

## Human Approval Required

Human approval is required before destructive commands, installs/removals, network downloads/uploads, credential handling, OpenClaw activation, publishing/storefront submission, legal/license exceptions, release-candidate approval, or agent permission expansion.

## Reporting

Every card summary should list files created, files modified, backups created, commands run, validation performed, risks or assumptions, and the next recommended card.
