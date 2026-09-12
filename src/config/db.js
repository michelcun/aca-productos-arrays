const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const dataDir = path.join(__dirname, '..', '..', 'data');
const dbPath = path.join(dataDir, 'pedidos.db');

let db;

function initDb() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  db = new Database(dbPath);

  // Tabla lista para el CRUD (aún sin datos ni rutas)
  db.exec(`
    CREATE TABLE IF NOT EXISTS pedidos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cliente TEXT NOT NULL,
      plato TEXT NOT NULL,
      cantidad INTEGER NOT NULL DEFAULT 1,
      estado TEXT NOT NULL DEFAULT 'pendiente',
      created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
    )
  `);

  return db;
}

function getDb() {
  if (!db) {
    return initDb();
  }
  return db;
}

module.exports = { initDb, getDb };
