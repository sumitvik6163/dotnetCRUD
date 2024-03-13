const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3306;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'company',
});

app.use(bodyParser.json());

app.get('/api/checkCredentials', (req, res) => {
    const { uname, pass } = req.query;
  
    // Check if uname and pass are provided
    if (!uname || !pass) {
      return res.status(400).json({ error: 'Both username and password are required.' });
    }
  
    // SQL query to check if the provided credentials exist in the database
    const sql = 'SELECT * FROM your_table WHERE uname = ? AND pass = ?';
    connection.query(sql, [uname, pass], (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Error checking credentials in the database.' });
      }
  
      // Check if any results were returned
      if (results.length > 0) {
        res.json({ success: true, message: 'Credentials are valid.' });
      } else {
        res.json({ success: false, message: 'Invalid credentials.' });
      }
    });
  });

app.post('/api/insertData', (req, res) => {
  const { uname, fname, lname, email, mobile, add, dob, pass } = req.body;

  const sql = 'INSERT INTO your_table (uname, fname, lname, email, mobile, add, dob, pass) VALUES (?, ?, ?)';
  connection.query(sql, [uname, fname, lname, email, mobile, add, dob, pass], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error inserting data into the database.' });
    } else {
      res.json({ success: true, message: 'Data inserted successfully.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
