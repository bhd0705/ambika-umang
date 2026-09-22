/**
 * Google Apps Script for the Ambika & Umang RSVP form.
 *
 * 1. Create a Google Sheet.
 * 2. Open Extensions → Apps Script.
 * 3. Paste this file into Code.gs.
 * 4. Replace SHEET_NAME if your tab has a different name.
 * 5. Deploy → New deployment → Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 6. Copy the Web app URL into public/config.js:
 *    rsvp.googleSheetEndpoint
 */
const SHEET_NAME = 'RSVP';

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'RSVP Confirmation',
      'Guest Name',
      'Arrival Date',
      'Contact No.',
      'Wedding'
    ]);
    sheet.setFrozenRows(1);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Ambika & Umang RSVP endpoint is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    setupSheet();

    const p = e && e.parameter ? e.parameter : {};
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      p.confirmation || '',
      p.guestName || '',
      p.arrivalDate || '',
      p.contactNo || '',
      p.wedding || 'Dr. Ambika & Dr. Umang'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
