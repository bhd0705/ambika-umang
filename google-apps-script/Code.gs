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

  // Keep the RSVP sheet limited to the five fields we need.
  const requiredHeaders = [
    'Timestamp',
    'RSVP Confirmation',
    'Guest Name',
    'Arrival Date',
    'Contact No.'
  ];

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, requiredHeaders.length).setValues([requiredHeaders]);
    sheet.setFrozenRows(1);
    return;
  }

  // Remove the old Wedding column if this sheet was created with the previous version.
  const lastColumn = sheet.getLastColumn();
  if (lastColumn > 0) {
    const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
    for (let i = headers.length - 1; i >= 0; i--) {
      if (String(headers[i]).trim().toLowerCase() === 'wedding') {
        sheet.deleteColumn(i + 1);
      }
    }
  }

  // Ensure the first five headers are correct.
  const currentLastColumn = sheet.getLastColumn();
  if (currentLastColumn < requiredHeaders.length) {
    sheet.insertColumnsAfter(Math.max(currentLastColumn, 1), requiredHeaders.length - currentLastColumn);
  }
  sheet.getRange(1, 1, 1, requiredHeaders.length).setValues([requiredHeaders]);
  sheet.setFrozenRows(1);
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

    const confirmation = String(p.confirmation || '').trim();
    const guestName = String(p.guestName || '').trim();
    const arrivalDate = String(p.arrivalDate || '').trim();
    const contactNo = String(p.contactNo || '').trim();

    // Server-side validation so invalid submissions cannot be written by bypassing the website.
    if (!/^\\d{10}$/.test(contactNo)) {
      throw new Error('Contact No. must contain exactly 10 digits.');
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const arrival = new Date(arrivalDate + 'T00:00:00');
    if (!arrivalDate || isNaN(arrival.getTime()) || arrival <= today) {
      throw new Error('Arrival Date must be after today.');
    }

    sheet.appendRow([
      new Date(),
      confirmation,
      guestName,
      arrivalDate,
      contactNo
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
