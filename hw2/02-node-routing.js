const http = require('http');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/welcome') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome to the Node.js Routing Exercise!</h1>');
    res.end();
  } else if (url === '/redirect') {
    res.writeHead(302, { 'Location': '/redirected' });
    res.end();
  } else if (url === '/redirected') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>You have been redirected!</h1>');
    res.end();
  } else if (url === '/cache') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Cache-Control': 'max-age=86400' // Cache for a day (86400 seconds)
    });
    res.write('<h1>This resource was cached</h1>');
    res.end();
  } else if (url === '/cookie') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Set-Cookie': 'hello=world'
    });
    res.write('cookies... yummm');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 - Page Not Found</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});