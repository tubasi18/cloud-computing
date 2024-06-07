const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
const dbConfig = {
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'news_db'
};

const connectWithRetry = () =>{
  const connection = mysql.createConnection(dbConfig);

  connection.connect(err => {
    if (err) {
      console.error('Could not connect to database:', err);
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('Connected to database');
      app.get('/getUrgentNews', (req, res) => {
        connection.query('SELECT title, content FROM News', (err, results) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.json(results);
        });
      });

      app.listen(5000, () => {
        console.log('Server is running on port 5000');
      });
    }
  });

  connection.on('error', err => {
    console.error('Database error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connectWithRetry();
    } else {
      throw err;
    }
  });
};

connectWithRetry();
