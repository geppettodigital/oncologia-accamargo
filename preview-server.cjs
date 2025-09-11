const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);
  
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './public/preview.html';
  } else if (!filePath.includes('.')) {
    // Try to serve from public directory
    filePath = './public' + req.url;
  } else if (filePath.startsWith('./')) {
    // Check if file exists in public
    const publicPath = './public' + req.url;
    if (fs.existsSync(publicPath)) {
      filePath = publicPath;
    }
  }

  // Security check
  filePath = path.resolve(filePath);
  const basePath = path.resolve('./');
  if (!filePath.startsWith(basePath)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Try dist directory
        const distPath = filePath.replace('/public/', '/dist/');
        fs.readFile(distPath, (distError, distContent) => {
          if (distError) {
            res.writeHead(404);
            res.end('Not Found');
          } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(distContent, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Preview Server running at:`);
  console.log(`   http://localhost:${PORT}/preview.html`);
  console.log(`   http://localhost:${PORT}/portals-showcase.html`);
  console.log(`   http://localhost:${PORT}/brand-customizer.html`);
  console.log(`\nPress Ctrl+C to stop\n`);
});