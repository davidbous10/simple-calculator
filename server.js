// A minimal web server. Railway runs this file, and it serves the calculator.
const express = require('express');
const path = require('path');

const app = express();

// Serve everything inside the /public folder (our calculator page)
app.use(express.static(path.join(__dirname, 'public')));

// Railway tells us which port to use via an environment variable.
// Locally (on your own computer) it falls back to 3000.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Calculator running at http://localhost:${PORT}`);
});
