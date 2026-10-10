# Jobber setup checklist

Jobber is the single source of truth: clients, requests, quotes, contracts, schedule, timesheets, invoices, payments. Tick each item in Jobber's Settings.

## 1. Company and brand (rebrand)
- [ ] Settings > Company: legal name "CleanScene Inc.", one phone, one email, website, GST number.
- [ ] Settings > Branding: new logo, brand colour, same logo on quotes, invoices, emails, Client Hub.
- [ ] Email templates (quote, invoice, visit reminder, receipt, follow-up): one signature, no emojis, tight copy (see section 8).
- [ ] Two locations/regions: tag every client and property `YK` or `BC`. Use the region tag in reports.

## 2. Team and permissions
- [ ] Adam: Admin.
- [ ] Manager: Dispatcher (schedule, timesheets, clients). Can see and approve timesheets; no access to company settings or banking.
- [ ] Crew: Limited worker. Sees only their own visits; can clock in/out and add notes/photos. Cannot see pricing.
- [ ] Turn on time tracking and require clock in/out on visits (Settings > Time sheets). Turn on GPS waypoints if the plan has it.

## 3. Lead capture (top of funnel)
- [ ] Online request form (Settings > Requests): same questions as the Facebook lead form (zapier/zaps.md). Put the link on the website, Google Business Profile and Facebook "Book now" button.
- [ ] Lead source custom field on clients: Facebook / Google / Referral / Repeat / Website / Other.
- [ ] Zapier connected (Apps & Integrations > Zapier). Confirm the plan includes it.

## 4. Products and services
- [ ] Give every saved service a real default price. Currently $0: **House Clean, Move Out Clean, Deep Clean**.
- [ ] Each service has a one-paragraph description of what is included (this prints on quotes).
- [ ] Remove or archive services no longer sold.

## 5. Quotes and contracts (automated)
- [ ] Quote template with the standard terms from `jobber/quote-terms.md` in the "Contract / Disclaimer" field.
- [ ] Require client signature on quote approval (the signed quote is the service agreement).
- [ ] Turn on automatic quote follow-ups: day 2 and day 7 after sending.
- [ ] Commercial clients with a master agreement: attach the PDF to the client, store the signed copy in Google Drive > CleanScene > Contracts > {Client}, and put the Drive link in the client notes.
- [ ] Optional deposit on move-out and deep cleans (Settings > Quotes > Deposit).

## 6. Schedule (the real schedule)
- [ ] Clean up the 40 "active" recurring jobs: they are 20 jobs entered twice (all created 2025-07-23, $0 totals). Close one copy of each, set real prices, and close jobs for clients who stopped.
- [ ] Every recurring client has one recurring job with the right frequency, price and assigned crew.
- [ ] Visit reminders to clients: on, 1 day before.
- [ ] Each property has access notes (keys, codes, alarm, pets, parking) and a checklist.

## 7. Invoicing and payments
- [ ] Invoice on visit completion (residential) or monthly batch on the 1st (commercial).
- [ ] Online card/ACH payments on; default terms: residential due on receipt, commercial net 15.
- [ ] Automatic invoice reminders: on the due date, +7 days, +14 days.
- [ ] Review Invoices > Past due every Monday. Stop checking Gmail to see who paid.
- [ ] NACC: check whether an invoice was missed (no invoice 2026-08-12 to 2026-10-09).

## 8. Message templates (paste into Jobber)
Quote email:
> Hi {first name}, thanks for reaching out. Your quote for {service} is attached. Approve it online with one click and we will confirm your first date within one business day. Questions: reply here or call {phone}. CleanScene

Visit reminder:
> Hi {first name}, a reminder that CleanScene is booked for {date} between {arrival window}. Please make sure we can get in. Reply to reschedule.

Invoice:
> Hi {first name}, thanks for choosing CleanScene. Your invoice for {date} is attached and can be paid online. Payment is due {terms}.

Follow-up (sent 2 days after a one-time clean):
> Hi {first name}, how did we do? If anything was missed, reply and we will fix it. If you were happy, a Google review helps a lot: {review link}. We also offer recurring cleans at a lower rate.
