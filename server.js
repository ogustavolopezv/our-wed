const express = require('express');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const { google } = require('googleapis');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'rsvps.db');
const GS_CRED_PATH = path.join(DATA_DIR, 'gs-credentials.json');
const GS_SHEET_ID = process.env.GOOGLE_SHEET_ID || '';

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new sqlite3.Database(DB_PATH);
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS rsvps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    attend TEXT NOT NULL,
    note TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    ip TEXT
  )`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static site from project root so you can open http://localhost:3000
app.use(express.static(path.join(__dirname)));

async function appendToGoogleSheet(rowArray) {
  // rowArray should be an array of values matching the sheet columns
  try {
    if (!GS_SHEET_ID) {
      console.log('Google Sheet ID not configured; skipping Sheets append.');
      return;
    }
    if (!fs.existsSync(GS_CRED_PATH)) {
      console.log(`Google service account file not found at ${GS_CRED_PATH}; skipping Sheets append.`);
      return;
    }

    const serviceAccount = JSON.parse(fs.readFileSync(GS_CRED_PATH, 'utf8'));
    const jwtClient = new google.auth.JWT(
      serviceAccount.client_email,
      null,
      serviceAccount.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    await jwtClient.authorize();
    const sheets = google.sheets({ version: 'v4', auth: jwtClient });

    await sheets.spreadsheets.values.append({
      spreadsheetId: GS_SHEET_ID,
      range: 'A1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: { values: [rowArray] }
    });
    console.log('Appended RSVP to Google Sheet');
  } catch (err) {
    console.error('Failed to append to Google Sheet', err);
  }
}

app.post('/api/rsvp', (req, res) => {
  const { name, email, phone, attend, note } = req.body || {};
  if (!name || !attend) return res.status(400).json({ error: 'Faltan campos: name y attend son obligatorios' });

  const ip = req.ip || req.headers['x-forwarded-for'] || '';
  const stmt = db.prepare(`INSERT INTO rsvps (name,email,phone,attend,note,ip) VALUES (?,?,?,?,?,?)`);
  stmt.run(name, email || null, phone || null, attend, note || null, ip, function(err) {
    if (err) {
      console.error('DB insert error', err);
      return res.status(500).json({ error: 'Error al guardar' });
    }

    // Build row for Google Sheets: timestamp, name, email, phone, attend, note, ip
    const createdAt = new Date().toISOString();
    const sheetRow = [createdAt, name, email || '', phone || '', attend, note || '', ip];

    // Attempt to append to Google Sheets asynchronously; do not block response
    appendToGoogleSheet(sheetRow).catch(() => {});

    res.json({ success: true, id: this.lastID });
  });
});

app.listen(PORT, () => {
  console.log(`RSVP server listening on http://localhost:${PORT}`);
  if (GS_SHEET_ID) console.log('Google Sheets integration enabled for spreadsheet:', GS_SHEET_ID);
});
