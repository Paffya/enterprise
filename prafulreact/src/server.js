const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const path = require('path');
const fs = require('fs');

// Function to handle page requests
function handlePageRequest(pageName, pageTitle, pageDescription, pageImage) {
  return function (req, res) {
    console.log(`${pageName} page visited!`);
    const filePath = path.resolve(__dirname, './build', 'index.html');
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      data = data.replace(/\$OG_TITLE/g, pageTitle);
      data = data.replace(/\$OG_DESCRIPTION/g, pageDescription);
      data = data.replace(/\$OG_IMAGE/g, pageImage);
      res.send(data);
    });
  };
}

// Routes for different pages
app.get('/', handlePageRequest('Home', 'Home Page', 'Home page description', 'https://i.imgur.com/V7irMl8.png'));
app.get('/about', handlePageRequest('About', 'About Page', 'About page description', 'https://i.imgur.com/V7irMl8.png'));
app.get('/connect', handlePageRequest('Contact', 'Contact Page', 'Contact page description', 'https://i.imgur.com/V7irMl8.png'));

// Serve static files
app.use(express.static(path.resolve(__dirname, './build')));

// Fallback route
app.get('*', function (req, res) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  res.sendFile(filePath);
});

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}`));
