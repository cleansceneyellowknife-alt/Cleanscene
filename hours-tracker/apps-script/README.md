# Log a Shift form (Apps Script)

A phone-friendly form the manager uses to add shifts to `Hours Log`. It writes the first empty row (rows 2-2001) and never touches formula columns. It accepts a whole crew in one submit and shows the last 10 shifts with their Check status.

## Install (once, about 10 minutes)
1. Open the Google Sheet "CleanScene Hours Tracker" (made from `CleanScene_Hours_Tracker.xlsx`: upload to Drive, open with Google Sheets, File > Save as Google Sheets).
2. Extensions > Apps Script. Delete the sample code.
3. Create files `Code.gs` and `Form.html` and paste in the contents from this folder.
4. Project Settings > tick "Show appsscript.json"; replace its contents with `appsscript.json` from this folder.
5. Project Settings > Script Properties > add `ALLOWED_EMAILS` = `adam@example.com,manager@example.com` (the two real Google accounts).
6. Deploy > New deployment > Web app. Execute as: **User accessing the web app**. Who has access: **Anyone with a Google account**. Deploy and approve the permissions.
7. Copy the web app URL. Send it to the manager; they add it to their phone home screen.

## Why it stays private
- The sheet itself is shared only with Adam and the manager (Share > Restricted).
- The form runs as the person opening it, so it can only write to the sheet if they already have edit access, and the `ALLOWED_EMAILS` check refuses anyone else.

## After code changes
Deploy > Manage deployments > edit > Version: New version. The URL stays the same.
