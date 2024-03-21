const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Define a route handler for the root path
app.get('/', (req, res) => {
  // Use path module to get the absolute path of the HTML file
  const filePath = path.join(__dirname, 'EscapeMatric.html');
  // Send the HTML file to the client
  res.sendFile(filePath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
