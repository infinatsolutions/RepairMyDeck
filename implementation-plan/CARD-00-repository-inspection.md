# CARD 00 — Repository Inspection and Safety Plan

## Current working directory

`/workspace/RepairMyDeck`

## Existing files/folders relevant to this project

The workspace is nearly empty. Relevant existing entries observed at repository root:

- `.git/` — Git metadata directory exists.
- `.gitkeep` — placeholder file exists.

No project scaffold folders for the 32-agent OpenClaw/Codex organization were present at inspection time.

## Git repository status

Git appears initialized.

- `git rev-parse --is-inside-work-tree` returned `true`.
- `git status --short` showed no tracked or untracked working tree changes before this Card 00 report was created.

## Godot project status

A Godot project does not appear to be present.

- No `project.godot` file was found within the inspected depth of the current workspace.

## Requested folder presence check

| Folder | Status |
| --- | --- |
| `openclaw/` | Missing |
| `openclaw-config-draft/` | Missing |
| `docs/` | Missing |
| `game/` | Missing |
| `assets/` | Missing |
| `tools/` | Missing |
| `scripts/` | Missing |
| `tests/` | Missing |
| `logs/` | Missing |
| `data/` | Missing |

## Potential overwrite risks

Low overwrite risk for Card 01 because the requested scaffold folders and root files do not currently exist, except for the repository-level `.gitkeep` file.

Specific risks to manage:

- If any files are added between Card 00 and Card 01, Card 01 must re-check before writing.
- If root files such as `README.md`, `AGENTS.md`, `.editorconfig`, `.gitignore`, or `LICENSE-NOTICE.md` appear before Card 01, they must not be overwritten without a timestamped backup.
- `logs/`, `build/`, and `dist/` are scaffold targets but are often ignored by Git; Card 01 should include placeholder files only if needed and should ensure ignore rules do not hide required reviewable scaffold content unintentionally.

## Recommended root project folder name

Recommended root project folder name: `RepairMyDeck`.

Rationale: the current workspace already exists at `/workspace/RepairMyDeck` and is initialized as a Git repository, so Card 01 should scaffold directly in this repository root unless Albert explicitly requests a different root.

## Safety assumptions

- No destructive commands should be run.
- Existing files must not be deleted.
- Existing files must not be overwritten unless a timestamped backup is created first.
- OpenClaw runtime permissions must not be activated.
- OpenClaw descriptors, when created in later cards, must remain draft desired-state files only and must be clearly marked `DRAFT / VERIFY BEFORE ACTIVATION`.
- No software should be installed.
- No third-party assets should be downloaded.
- No external services should be contacted, published to, or uploaded to.
- No secrets should be requested, stored, printed, or committed.
- Scripts created in later cards should be commented, non-destructive, idempotent where possible, print clear pass/fail output, and return nonzero exit codes on failure.
- macOS Apple Silicon compatibility should be maintained for generated scripts and documentation.

## Blockers

No blockers were identified for Card 01.

## Safe-to-proceed assessment

It is safe to proceed to Card 01, provided Card 01 performs a fresh existence check before creating any folder or file and creates timestamped backups before modifying any pre-existing file.

## Recommended next card

CARD 01 — Create Root Repository Scaffold

## Commands run

- `pwd`
- `rg --files -g 'AGENTS.md' -g '!node_modules' -g '!vendor'`
- `find .. -name AGENTS.md -print`
- `find . -maxdepth 2 -mindepth 1 -print | sort`
- `git rev-parse --is-inside-work-tree`
- `git status --short`
- `find . -maxdepth 3 -name project.godot -print`
- Folder presence checks for `openclaw/`, `openclaw-config-draft/`, `docs/`, `game/`, `assets/`, `tools/`, `scripts/`, `tests/`, `logs/`, and `data/`.

## Validation performed

- Confirmed Git repository presence.
- Confirmed no Godot `project.godot` file was found in the inspected workspace depth.
- Confirmed requested scaffold folders are missing.
- Confirmed only `implementation-plan/` and this report were created for Card 00.

## Files created

- `implementation-plan/CARD-00-repository-inspection.md`

## Files modified

- None.

## Backups created

- None; no existing files were modified or overwritten.

## Risks or assumptions

- The inspection used bounded-depth `find` commands for workspace contents and Godot detection. A deeper nested `project.godot` could exist outside the inspected depth, but no project root-level Godot project appears present.
- Repository state may change before Card 01; Card 01 must re-check before writing.
