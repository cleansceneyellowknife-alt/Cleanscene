# CleanScene Operating System SOP

One page per part of the business. If it is not in Jobber, it did not happen.

## 0. The system at a glance

| Job to be done | Tool | Owner |
| --- | --- | --- |
| Leads, clients, quotes, contracts, schedule, crew clock-in, invoices, payments | **Jobber** | Adam |
| Team chat, schedule changes, open shifts, issues | **Slack** (8 channels) | Manager |
| Moving data between apps (Facebook leads, wins) | **Zapier** | Adam |
| Crew hours and pay review | **Google Sheet "CleanScene Hours Tracker"** (private) | Manager enters, Adam reviews |
| Signed agreements, HSE and site documents | **Google Drive** > CleanScene | Adam |

Funnel: **Lead -> Request -> Quote -> Signed (approved) -> Job -> Visit -> Hours -> Invoice -> Paid -> Review / Rebook**

Retired: monthly client tabs in "2026 Cleans" (kept read-only as history), job posts in Google Calendar, checking Gmail to see who paid.

---

## 1. Leads (top of funnel)
**Where leads come from:** Facebook Lead Ads, Jobber online request form (website, Google, Facebook "Book now"), phone/text, referrals.

1. Facebook leads arrive automatically: Zapier creates the client + request in Jobber and posts in Slack **#leads**.
2. Phone, text or email leads: Adam creates the Request in Jobber himself within the hour. Never leave a lead in a text thread.
3. In #leads, react :eyes: to claim. Call or text the lead within **1 business hour**.
4. Set Lead source on the client (Facebook / Google / Referral / Repeat / Website / Other).

Target: every lead quoted within 24 hours.

## 2. Quotes and contracts
1. Convert the Request to a Quote in Jobber. Use saved services with real prices (no $0 lines).
2. Site visit needed (commercial, move-out, post-construction)? Book it as an Assessment on the Request.
3. Send the quote from Jobber. The standard terms (`jobber/quote-terms.md`) are attached automatically.
4. The client approves and signs online. **The signed quote is the contract.**
5. Jobber follows up automatically on day 2 and day 7. Adam calls on day 3 for quotes over $1,000.
6. Commercial master agreements: sign, save PDF in Drive > CleanScene > Contracts > {Client}, put the link in the Jobber client notes.
7. When a quote is approved, Zapier posts in **#wins-and-issues**.

## 3. Scheduling
1. Approved quote -> **Convert to Job** the same day. One-off or recurring (weekly, bi-weekly, monthly).
2. Assign crew on each visit in Jobber. Add access notes and the checklist on the property.
3. By **6 pm** the manager confirms tomorrow's visits in Jobber and posts any changes in **#schedule**.
4. Crew see their visits only in the Jobber app. If Slack and Jobber disagree, Jobber wins.

## 4. Open shifts
1. Uncovered visit? Manager posts in **#open-shifts**: Region / Date / Time / Site (no full address) / Est. hours / Type of clean.
2. Staff reply "I'll take it" in the thread.
3. The shift is confirmed only when the manager reacts with a checkmark **and** assigns the person in Jobber.
4. Rule: first come, first served unless the manager says the shift needs a specific person. *(Adam to confirm.)*

## 5. Doing the work
1. Crew clock in and out on the visit in the Jobber app.
2. Follow the property checklist. Before/after photos on move-outs, deep cleans and every commercial first visit.
3. Something wrong (damage, lockout, missing supplies, unhappy client)? Post in **#wins-and-issues**: Site / What happened / Photo / What you did. Damage or injury: call the manager first.
4. Client tells you something (extra request, complaint, key change)? Tell the manager; the manager adds it to the client notes in Jobber.

## 6. Hours (manager, daily)
Private. Only Adam and the manager can open the Hours Tracker.

1. Every evening, open the **Log a Shift** form on your phone.
2. One entry per shift: Date, Employee(s), Client / Site, Start, End, Break minutes, Jobber visit # (optional). A crew at one site = pick everyone in one submit.
3. The form shows the last 10 shifts with a Check. Anything not **OK**, fix it the same day in the Hours Log tab.
4. New employee or new client: add to the **Staff** or **Sites** tab first, using the exact Jobber name.

## 7. Hours cross-check and payroll (Adam)
**Every Monday (15 minutes):**
1. Hours Tracker > **Weekly** tab, Weeks back = 1.
2. For each site with hours, enter last week's Jobber visit count and timesheet hours (Jobber > Timesheets / Visits report).
3. Clear every Flag: visit in Jobber with no hours, hours with no Jobber visit, or hours that differ by more than 30 minutes.

**Every pay period (bi-weekly):**
1. **Pay Period** tab, Periods back = 1 (the period just ended).
2. Rows flagged must be 0 for everyone.
3. Run payroll from the Hours and Gross pay columns.

## 8. Invoicing and payments
1. Residential: invoice from Jobber when the visit is completed. Due on receipt, pay online.
2. Commercial: batch invoice on the 1st of the month for last month's visits. Net 15.
3. Jobber sends reminders automatically (due date, +7, +14 days).
4. **Monday:** Adam reviews Jobber > Invoices > Past due and calls anything over 14 days late.
5. Who paid = Jobber invoice status. Do not use Gmail or bank emails to track it.

## 9. After the clean (retention)
1. Two days after a one-time clean, Jobber sends the follow-up (how did we do + Google review link + recurring offer).
2. Complaint: re-clean within 48 hours, note it on the client in Jobber, post the result in #wins-and-issues.
3. Every month: look at one-time clients from 60-90 days ago and offer a recurring clean.

## 10. Weekly rhythm
| When | Who | What |
| --- | --- | --- |
| Daily, 6 pm | Manager | Confirm tomorrow in Jobber, post changes in #schedule, post open shifts |
| Daily, end of day | Manager | Log shifts in the Hours Tracker form |
| Daily | Adam | Work #leads; send quotes |
| Monday | Adam | Weekly cross-check, past-due invoices, quote pipeline |
| Every 2nd Monday | Adam | Payroll from Pay Period tab |
| 1st of month | Adam | Commercial invoices |

## 11. Access and privacy
- Hours, pay rates and pay totals: Hours Tracker only (Adam + manager). Never in Slack, email or Jobber notes.
- Client payment details: Jobber only.
- Slack #leads and #management are private (Adam + manager).
- Crew have Jobber "limited worker" access: their own visits, no prices.

## 12. Rollout plan (4 weeks)
| Week | Do |
| --- | --- |
| 1 | Jobber branding, templates, service prices, quote terms, permissions (`jobber/settings-checklist.md`). Hours Tracker live; manager starts the form. |
| 2 | Slack workspace + 8 channels (`slack/setup_slack.py`); invite crew; pin rules. Migrate old hours into Hours Log. |
| 3 | Zapier: Facebook leads and quote-won Zaps (`zapier/zaps.md`). Facebook lead form updated. |
| 4 | Clean up duplicate and stale recurring jobs so the Jobber schedule is the real schedule. Crew clock in on Jobber. Turn on the weekly cross-check. Retire Calendar job posts and the monthly client tabs. |

## Open questions for Adam
1. Pay period: bi-weekly? Which Monday does it start on?
2. Open shifts: first come, first served, or manager-assigned?
3. BC: recent clients are all Yellowknife in Jobber. Is BC work running outside Jobber, or paused?
4. Does the Jobber plan include time tracking and Zapier?
5. NACC: no invoice since mid-August. Missed invoice or no work?
