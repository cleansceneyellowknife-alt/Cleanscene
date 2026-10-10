/**
 * CleanScene Hours Tracker - "Log a Shift" web form.
 * Bound to the Google Sheet "CleanScene Hours Tracker" (Extensions > Apps Script).
 *
 * Writes only the input columns (A-F, J) of the first empty row in Hours Log rows 2-2001.
 * Formula columns (G, H, I, K, L) are never touched.
 *
 * Access: only emails listed in the ALLOWED_EMAILS script property (comma separated)
 * can open the form. Set it to Adam's and the manager's Google account emails.
 */

var LOG_SHEET = 'Hours Log';
var FIRST_ROW = 2;
var LAST_ROW = 2001;

function doGet() {
  if (!isAllowed_()) {
    return HtmlService.createHtmlOutput('<p>Not authorised. Ask Adam for access.</p>');
  }
  return HtmlService.createTemplateFromFile('Form')
    .evaluate()
    .setTitle('CleanScene - Log a Shift')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function isAllowed_() {
  var email = (Session.getActiveUser().getEmail() || '').toLowerCase();
  var allowed = (PropertiesService.getScriptProperties().getProperty('ALLOWED_EMAILS') || '')
    .toLowerCase().split(',').map(function (s) { return s.trim(); }).filter(String);
  return email && allowed.indexOf(email) !== -1;
}

/** Dropdown data for the form: active staff and active sites. */
function getLists() {
  if (!isAllowed_()) throw new Error('Not authorised');
  var ss = SpreadsheetApp.getActive();
  return {
    staff: activeNames_(ss.getSheetByName('Staff'), 5),
    sites: activeNames_(ss.getSheetByName('Sites'), 4),
    recent: recentShifts_(10)
  };
}

function activeNames_(sheet, activeCol) {
  var last = sheet.getLastRow();
  if (last < 2) return [];
  return sheet.getRange(2, 1, last - 1, activeCol).getValues()
    .filter(function (r) { return r[0] !== '' && String(r[activeCol - 1]).toUpperCase() !== 'N'; })
    .map(function (r) { return String(r[0]); })
    .sort();
}

/**
 * shift = {date:'2026-10-10', employee, site, start:'08:00', end:'12:30', breakMin:30, note}
 * Accepts several employees for the same site/time (crew of 2+): shift.employees = [..].
 */
function submitShift(shift) {
  if (!isAllowed_()) throw new Error('Not authorised');
  var people = shift.employees && shift.employees.length ? shift.employees : [shift.employee];
  if (!shift.date || !shift.site || !shift.start || !shift.end || !people[0]) {
    throw new Error('Date, employee, site, start and end are required.');
  }
  var lock = LockService.getDocumentLock();
  lock.waitLock(20000);
  try {
    var sheet = SpreadsheetApp.getActive().getSheetByName(LOG_SHEET);
    var dates = sheet.getRange(FIRST_ROW, 1, LAST_ROW - FIRST_ROW + 1, 1).getValues();
    var written = [];
    var d = shift.date.split('-');
    var day = new Date(Number(d[0]), Number(d[1]) - 1, Number(d[2]));
    for (var p = 0; p < people.length; p++) {
      var idx = -1;
      for (var i = 0; i < dates.length; i++) {
        if (dates[i][0] === '') { idx = i; break; }
      }
      if (idx === -1) throw new Error('Hours Log is full (row 2001). Tell Adam.');
      var row = FIRST_ROW + idx;
      sheet.getRange(row, 1, 1, 6).setValues([[
        day, people[p], shift.site, toTime_(shift.start), toTime_(shift.end), Number(shift.breakMin) || 0
      ]]);
      sheet.getRange(row, 10).setValue(shift.note || '');
      dates[idx][0] = day;
      written.push(row);
    }
    SpreadsheetApp.flush();
    return {
      rows: written,
      checks: written.map(function (r) { return sheet.getRange(r, 11).getDisplayValue(); }),
      recent: recentShifts_(10)
    };
  } finally {
    lock.releaseLock();
  }
}

/** '08:30' -> time-of-day fraction, so the sheet treats it as a time. */
function toTime_(hhmm) {
  var parts = String(hhmm).split(':');
  return (Number(parts[0]) * 60 + Number(parts[1])) / 1440;
}

function recentShifts_(n) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(LOG_SHEET);
  var values = sheet.getRange(FIRST_ROW, 1, LAST_ROW - FIRST_ROW + 1, 11).getDisplayValues();
  var filled = values.filter(function (r) { return r[0] !== ''; });
  return filled.slice(-n).reverse().map(function (r) {
    return { date: r[0], employee: r[1], site: r[2], start: r[3], end: r[4], hours: r[6], check: r[10] };
  });
}
