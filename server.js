const express = require('express');
const { Pool } = require('pg');
const app = express();
const cors = require('cors'); 

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(cors());
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'recipeBook',
  password: 'seq@123',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

app.get('/api/recipes', (req, res) => {
    pool.query('SELECT * FROM recipes', (err, result) => {
      console.log(result);
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(result.rows);
      }
    });
  });
  
  app.post('/api/recipes/add-recipe', (req, res) => {
    // const { name, description } = req.body;
    const recipe_name = 'll';
    const ingredients = {};
    pool.query(
      'INSERT INTO recipes(recipe_name) VALUES ($1) RETURNING *',
      [recipe_name],
      (err, result) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json(result.rows[0]);
        }
      }
    );
  });