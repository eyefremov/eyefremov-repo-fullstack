const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to serve the form
app.get('/form', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`
    <form action="/submit" method="POST">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name"><br><br>

      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>

      <label for="comments">Comments:</label><br>
      <textarea id="comments" name="comments"></textarea><br><br>

      <label for="newsletter">Subscribe to newsletter:</label>
      <input type="checkbox" id="newsletter" name="newsletter" value="yes"><br><br>

      <input type="submit" value="Submit">
    </form>
  `);
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, email, comments, newsletter } = req.body;

  // Customize the newsletter response
  const newsletterResponse = newsletter === 'yes' 
    ? 'Yes, sign me up for the newsletter.' 
    : 'No, thank you.';

  // Display the submitted data on a white page
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Comments: ${comments}</p>
    <p>Newsletter: ${newsletterResponse}</p>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});