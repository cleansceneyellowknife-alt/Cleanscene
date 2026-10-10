# Zapier specs

Built by hand in the Zapier UI. Connect three accounts first: Facebook Lead Ads (the CleanScene Page), Jobber (Adam's admin login), Slack (as the CleanScene Ops app or Adam).
Name each Zap exactly as below so it is easy to find. Turn on "Autoreplay" and error emails to Adam.

Before building: confirm the Jobber plan includes the Zapier integration. If the exact trigger or action names differ in your Jobber app version, pick the closest one and keep the field mapping.

---

## Zap 1 - "FB Lead -> Jobber Request -> #leads"
Goal: every Facebook lead lands in Jobber within a minute and the team sees it.

| Step | App / event | Settings |
| --- | --- | --- |
| 1 | Facebook Lead Ads - New Lead | Page: CleanScene. Form: each active lead form (one Zap covers all forms if you choose "All forms"). |
| 2 | Formatter - Text - Split / Title case | Title-case first and last name. If the form has one "Full name" field, split on the first space. |
| 3 | Formatter - Phone - Format | Format: +1 (###) ###-####. |
| 4 | Jobber - Find Client (search by email) | Email = lead email. Tick "Create Jobber Client if it doesn't exist yet": First name, Last name, Email, Phone, Lead source = "Facebook". Tag: `Lead-Facebook` plus the region tag (`YK` or `BC`) from the form's city question. |
| 5 | Jobber - Create Request | Client = step 4 ID. Title = "{Service type} - {City}". Details: every form answer (service type, home size / sq ft, preferred date, address, notes). |
| 6 | Slack - Send Channel Message | Channel: #leads (private, ID C0C871V9WF8; add the Zapier app to the channel first). Message (below). Bot name "CleanScene Ops". |

Message:
```
New lead: {First} {Last} ({City})
Service: {Service type}  |  Size: {Size}  |  Wanted: {Preferred date}
Phone: {Phone}
Open in Jobber: {Request URL from step 5}
Quote within 24 hours. React :eyes: to claim.
```

Facebook lead form questions (set in Meta Ads Manager so the Zap has clean fields): Full name, Email, Phone, City (Yellowknife / Richmond / Vancouver / Other), Service type (Regular house clean / Deep clean / Move-in or move-out / Office or commercial / Post-construction / Other), Home size or sq ft, Preferred date, Anything else we should know.

Test: submit the form with the Meta Lead Ads Testing Tool; confirm the client, request and Slack post appear.

---

## Zap 2 - "Quote approved -> #wins-and-issues"
| Step | App / event | Settings |
| --- | --- | --- |
| 1 | Jobber - Quote Approved | (If not available: "Quote Updated" + Filter step: Status equals "approved".) |
| 2 | Slack - Send Channel Message | Channel: #wins-and-issues. |

Message:
```
Quote won: {Client name} - {Quote title} - ${Quote total}
Next: manager converts to a job and schedules the first visit in Jobber today.
```
(The quote total is a sale amount, not client payment details; it is fine in Slack.)

---

## Zap 3 - "Website/Client Hub request -> #leads"
Catches requests that did not come from Facebook (Jobber online booking form, Client Hub, manual entry).

| Step | App / event | Settings |
| --- | --- | --- |
| 1 | Jobber - New Request | |
| 2 | Filter | Only continue if Client tags does not contain `Lead-Facebook` (those were posted by Zap 1). |
| 3 | Slack - Send Channel Message | Channel: #leads. Message: `New request: {Client name} - {Title}. Open in Jobber: {Request URL}` |

---

## Zap 4 (optional, after rollout) - "New job -> #schedule"
| Step | App / event | Settings |
| --- | --- | --- |
| 1 | Jobber - New Job | |
| 2 | Slack - Send Channel Message | Channel: #schedule. `New job booked: {Client name} - {Job title} - starts {Start date}. Assign crew in Jobber.` |

## Not automated on purpose
- Payments and invoice balances are never posted to Slack. Check them in Jobber (Invoices > Awaiting payment / Past due).
- Hours are never posted to Slack. They live in the Hours Tracker.
