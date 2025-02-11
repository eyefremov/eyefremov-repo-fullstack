const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

// Root route
app.get('/', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('Express Routing Exercise');
});

// /welcome route
app.get('/welcome', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>Welcome to the Express.js Routing Exercise!</h1>');
});

// /redirect route
app.get('/redirect', (req, res) => {
  res.redirect(302, '/redirected');
});

// /redirected route
app.get('/redirected', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>You have been redirected!</h1>');
});

// /cache route
app.get('/cache', (req, res) => {
  res.status(200);
  res.set({
    'Content-Type': 'text/html',
    'Cache-Control': 'max-age=86400', // Cache for a day (86400 seconds)
  });
  res.send('<h1>This resource was cached</h1>');
});

// /cookie route
app.get('/cookie', (req, res) => {
  res.status(200);
  res.set({
    'Content-Type': 'text/plain',
    'Set-Cookie': 'hello=world',
  });
  res.send('cookies... yummm');
});

// 404 route (catch-all for other routes)
app.use((req, res) => {
  res.status(404);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>404 - Page Not Found</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});