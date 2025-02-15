require('dotenv').config(); // load env variables
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;
const BACKEND_URL = process.env.BACKEND_URL; 

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on ${BACKEND_URL}`);
});