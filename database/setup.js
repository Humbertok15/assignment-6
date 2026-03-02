// database/setup.js
const sqlite3 = require('sqlite3').verbose();

// Create/connect to the database
const db = new sqlite3.Database('university.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to university.db');
  }
});

// Create the courses table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      courseCode TEXT NOT NULL,
      title TEXT NOT NULL,
      credits INTEGER NOT NULL,
      description TEXT,
      semester TEXT
    )
  `, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Courses table created successfully.');
    }
  });
});

// Close the database
db.close(() => {
  console.log('Database connection closed.');
});
