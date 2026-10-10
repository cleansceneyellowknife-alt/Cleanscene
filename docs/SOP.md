# CleanScene Operating System SOP

Version 2026-10-10. One section per part of the business. **If it is not in Jobber, it did not happen.**

## 0. The system at a glance

| Job to be done | Tool | Owner | Status |
| --- | --- | --- | --- |
| Clients, requests, quotes, signed contracts, invoices, payments | **Jobber** | Adam | Live |
| The schedule (who works where, when) | **Google Calendar invites today -> Jobber visits** | Ali | Moving: clients tagged `Move-to-Jobber-schedule` |
| Team chat, schedule changes, open shifts, issues | **Slack** (8 channels, Open Shifts list, Team Playbook) | Ali | Live |
| Crew hours and monthly pay | **CleanScene Hours** app (Ali logs hours; pay visible to Adam only) https://claude.ai/artifact/PWuK7VGthRHXqqd5bG61Aw | Ali checks, Adam pays | Live |
| Facebook leads -> Jobber -> #leads; quote won -> #wins-and-issues | **Zapier** | Adam | Specs ready (`zapier/zaps.md`) |
| Weekly review, monthly payroll, billing checks | **Google Calendar** reminders on Adam's calendar | Adam | Live |
| Signed agreements, HSE/site documents | **Google Drive** > CleanScene | Adam | |

Funnel: **Lead -> Request -> Quote -> Signed -> Job -> Visit -> Hours -> Invoice -> Paid -> Review / Rebook**

Team: **Ali** (manager, schedules and assigns all work, $28/h). **Floaters** (Ermalyn Villanueva; $25/h). Ali uses two calendar emails (chalijattbabu, alijan0987as); both count as Ali.

---

## 1. Leads
1. Facebook leads: Zapier creates the client and Request in Jobber and posts in **#leads**.
2. Phone, text, email or walk-in: Adam creates the Request in Jobber within the hour. No lead lives only in a text thread.
3. React :eyes: in #leads to claim. Contact within **1 business hour**, quote within **24 hours**.
4. Set Lead source on the client.

## 2. Quotes and contracts
1. Convert the Request to a Quote in Jobber using saved services with real prices (no $0 lines).
2. Commercial, move-out, post-construction: book an assessment first.
3. Send from Jobber. Standard terms (`jobber/quote-terms.md`) are attached; online approval = signed contract.
4. Jobber follows up on day 2 and day 7. Adam calls on day 3 for quotes over $1,000.
5. Commercial master agreements: signed PDF in Drive > CleanScene > Contracts > {Client}; link in Jobber client notes.

## 3. Scheduling
**Today:** Ali schedules jobs as Google Calendar events and invites the crew by email. Every event must have:
- Title: `Client name - type of clean (crew x hours)`. **Always include the client name** (this is what feeds hours and billing).
- Location, client phone, access notes, checklist in the description.
- Every crew member who works it invited.

**Moving to Jobber (Weeks 1-4):** every Monday review, move 3-5 clients tagged `Move-to-Jobber-schedule` into Jobber recurring jobs with crew assigned, delete their calendar series, remove the tag. When the tag list is empty, Calendar job posts stop.

By **6 pm** Ali confirms tomorrow's work and posts changes in **#schedule**.

## 4. Open shifts (manager-assigned)
1. Ali posts uncovered work in **#open-shifts** and adds it to the **Open Shifts** list.
2. Crew reply **Available**.
3. **Ali assigns.** Not first-come, first-served.
4. Booked only when it is on your calendar invite / Jobber app.

## 5. Doing the work
1. Follow the checklist. Before/after photos on move-outs, deep cleans, first commercial visits.
2. Problem on site: post in **#wins-and-issues** (Site / What happened / Photo / What you did). Damage or injury: call Ali first.
3. Client requests or complaints go to Ali, who notes them on the client in Jobber.
4. Once a client is in Jobber scheduling: clock in/out on the visit in the Jobber app.

## 6. Hours (Ali: 2 minutes a day)
Ali is shared as a **Contributor**: he sees clients (name and address), who worked, and hours. He never sees pay rates or pay. Open **CleanScene Hours**: https://claude.ai/artifact/PWuK7VGthRHXqqd5bG61Aw

A month calendar, like Google Calendar. Each day shows how many jobs, the hours, and who worked.
1. **Bring in from calendar** adds the month's calendar jobs so far. Pressing it twice never doubles anything.
2. Tap a day to see its jobs (client, address, times, who). **Add a job** for anything not on the calendar.
3. A **red dot** on a day means a job needs a fix. Tap it: pick the client, fix the times, or tap **Didn't happen**.
4. **List** shows the month as one row per day: date, jobs, hours, who worked, with the month total.
5. New client or new crew member: **Settings**.

## 7. Payroll (monthly) and cross-check
**1st of the month** (calendar reminder): open CleanScene Hours, **Pay**, go back one month (Adam only).
1. "Needs a look" must be 0 for everyone.
2. Pay from Hours and Gross.
3. **Hours by client**: every client with hours must have an invoice in Jobber for that month.

## 8. Invoicing and payments
1. Residential: invoice from Jobber when the visit is done. Due on receipt.
2. Commercial: invoice on the **1st** for last month's visits. Net 15.
3. Every recurring client on the calendar must have a matching monthly invoice. Clients tagged `Billing-check` in Jobber are the ones where calendar work and invoices do not match.
4. Jobber sends reminders (due, +7, +14). Monday: Adam calls anything 14+ days past due.
5. Who paid = Jobber invoice status. Not Gmail.

## 9. After the clean
1. Two days after a one-time clean: Jobber follow-up (how did we do + Google review + recurring offer).
2. Complaint: re-clean within 48 hours, note it in Jobber, post the result in #wins-and-issues.
3. Monthly: offer recurring service to one-time clients from 60-90 days ago.

## 10. Rhythm
| When | Who | What |
| --- | --- | --- |
| Daily by 6 pm | Ali | Confirm tomorrow; post changes in #schedule; post open shifts |
| Daily | Ali | Fix hours exceptions (2 min) |
| Daily | Adam | Work #leads; send quotes |
| Monday 9:00 | Adam (+Ali) | Weekly review: past-due, quotes, Billing-check, move 3-5 clients to Jobber, hours flags |
| 1st of month 9:00 | Adam | Payroll; commercial invoices |

## 11. Access and privacy
- Hours: CleanScene Hours (Adam + Ali). Pay rates and gross pay: Adam only (the app hides them from Ali). Never in Slack public channels, email, or Jobber notes.
- Client payment details: Jobber only.
- Slack #leads and #management: Adam + Ali only.
- Door codes and alarm codes: in the job's calendar event / Jobber property notes only. Never in Slack.

## 12. Where everything lives
- Slack workspace and channel IDs: `slack/workspace.md`
- Jobber settings checklist and message templates: `jobber/settings-checklist.md`
- Zap specs: `zapier/zaps.md`
- CleanScene Hours app source: `hours-app/index.html` (live at https://claude.ai/artifact/PWuK7VGthRHXqqd5bG61Aw). Spreadsheet backup and importer: `hours-tracker/`
