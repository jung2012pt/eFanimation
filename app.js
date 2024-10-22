const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define a route that renders an EJS template
app.get('/', (req, res) => {
  res.render('index', { title: 'My Express & EJS App', message: 'Hello, EJS!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});