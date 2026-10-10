# CleanScene Ops — project brief for Claude Code

Read this first. It is the source of truth for decisions already made.

## The business
- CleanScene Inc. — residential and commercial cleaning and facilities services.
- Two regions: Richmond/Vancouver, BC and Yellowknife, NT. Owner: Adam (operations, quoting, contracts, client service).
- Ali is the main manager (also works shifts, $28/h) and logs crew hours. The rest of the crew are mostly floaters ($25/h). Only Adam and Ali may see hours and pay data.
- Pay is monthly (calendar month). Open shifts are manager-assigned, not first-come-first-served.

## The target system (decided)
| Layer | Tool | Notes |
| --- | --- | --- |
| CRM, quotes/contracts, schedule, timesheets, invoices, payments | Jobber | Single source of truth. "If it is not in Jobber, it did not happen." |
| Internal team communication | Slack | One workspace, 8 fixed channels (see `slack/channels.json`). Client conversations stay in Jobber. |
| Glue between apps | Zapier | Facebook Lead Ads -> Jobber request -> Slack #leads; quote approved -> #wins-and-issues. Specs in `zapier/zaps.md`. |
| Hours log (phase 1) and cross-check (phase 2) | Google Sheet "CleanScene Hours Tracker" | Built by `hours-tracker/build_tracker.py`. Manager enters shifts via the Apps Script form in `hours-tracker/apps-script/`. |
| Documents | Google Drive | Signed master agreements, HSE/site documents. |

Retire after rollout: the "2026 Cleans" monthly client tabs (keep as history), job posts in Google Calendar, checking Gmail to see who paid.

## Repository map
- `docs/SOP.md` — the operating SOP (mirrors the claude.ai doc "CleanScene Operating System SOP").
- `hours-tracker/` — workbook generator, the generated .xlsx, and the Apps Script shift-entry web form.
- `slack/` — channel definitions, live workspace IDs (`workspace.md`), and a bot-token fallback (`manifest.yml`, `setup_slack.py`). The live workspace was built 2026-10-10 via the claude.ai Slack connector.
- `zapier/zaps.md` — exact Zap specs (no-code; built in the Zapier UI).
- `jobber/` — Jobber settings checklist and a draft of standard quote terms.

Status (2026-10-10): all files above exist. Next: migrate the original hours .xlsx into `Hours Log` once it is saved as a Google Sheet.

## Conventions
- Hours Tracker tab and column names are fixed: `Hours Log` (A Date, B Employee, C Client / Site, D Start, E End, F Break (min), G Hours, H Region, I Week of (Mon), J Jobber visit # / note, K Check, L hidden visit helper), `Staff`, `Sites`, `Pay Period`, `Weekly`, `Start Here`. Formulas are pre-filled in rows 2–2001 of `Hours Log`; new shifts go in the first row where column A is empty, never appended after row 2001.
- Formulas must stay Google Sheets compatible: SUMIFS/COUNTIFS/INDEX/MATCH only; no XLOOKUP, FILTER, UNIQUE, spilling arrays.
- Copy style: tight, ready to send. No emojis in emails.
- Never store employee pay rates or client payment details anywhere except the Hours Tracker and Jobber.

## Open items / assumptions to confirm with Adam
- Floater names in the tracker are placeholders (rates are real: Ali $28, floaters $25).
- Whether BC work is running outside Jobber or paused (asked 2026-10-10, not yet answered).
- Confirm the Jobber plan includes time tracking and Zapier access.
- The original hours file (an .xlsx in Drive) has not been reviewed yet; existing records still need migrating into `Hours Log`.

## Jobber findings (pulled 2026-10-10)
- 183 invoices issued since 2026-07-01; every recent client is in Yellowknife. BC has only a few 2024 client records, so BC work is either not in Jobber or not active. Ask Adam.
- `hours-tracker/sites.json` holds the 79 clients invoiced 2026-08-12 to 2026-10-09 plus NACC; the tracker's Sites tab is built from it.
- Jobber's 40 "active" recurring jobs are 20 jobs entered twice (all created 2025-07-23, most marked late, $0 totals). Several of those clients have no invoice since mid-August. The Jobber schedule is not yet the real schedule: clean up duplicates and stale jobs before Week 4 of the rollout.
- NACC = Northern Arts and Cultural Centre (4701 52nd Ave, Yellowknife). Billed roughly monthly through July; last invoice #1487 (2026-07-24, $945) is unpaid and past due, and nothing was invoiced for August or September. Adam is checking.
- Saved services exist for most work (house, deep, move-in/out, office, floors, carpets, mats, commercial kitchen, school, remote camp), but House Clean, Move Out Clean and Deep Clean have $0 default prices.

## What is not code
Jobber settings, the Slack workspace itself, and Zaps are configured in each product's UI. This repo holds the exact specs and the scripts for the parts that can be automated.
