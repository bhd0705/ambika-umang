const SHEET_NAME = 'RSVP';

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  const headers = [
    'Timestamp',
    'RSVP Confirmation',
    'Guest Name',
    'Arrival Date',
    'Contact No.'
  ];

  // Remove any old columns after Contact No.
  // This removes the previous "Wedding" column and its old data.
  const lastColumn = sheet.getLastColumn();
  if (lastColumn > headers.length) {
    sheet.deleteColumns(headers.length + 1, lastColumn - headers.length);
  }

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  } else {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

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

    const confirmation = String(p.confirmation || '').trim();
    const guestName = String(p.guestName || '').trim();
    const arrivalDate = String(p.arrivalDate || '').trim();
    const contactNo = String(p.contactNo || '').trim();

    // Server-side validation.
    if (!confirmation || !guestName || !arrivalDate || !contactNo) {
      throw new Error('Please complete all RSVP fields.');
    }

    if (!/^\d{10}$/.test(contactNo)) {
      throw new Error('Contact No. must contain exactly 10 digits.');
    }

    // Arrival date must be after today.
    const today = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      'yyyy-MM-dd'
    );

    if (!/^\d{4}-\d{2}-\d{2}$/.test(arrivalDate) || arrivalDate <= today) {
      throw new Error('Arrival Date must be after today.');
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    // Remove any legacy columns after Contact No. before every RSVP write.
    // This also removes the old Wedding column from an existing sheet.
    const lastColumnBeforeWrite = sheet.getLastColumn();
    if (lastColumnBeforeWrite > 5) {
      sheet.deleteColumns(6, lastColumnBeforeWrite - 5);
    }

    // IMPORTANT: Only these five values are written.
    // There is deliberately NO Wedding field.
    sheet.appendRow([
      new Date(),
      confirmation,
      guestName,
      arrivalDate,
      contactNo
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        ok: true
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({
        ok: false,
        error: String(err)
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}