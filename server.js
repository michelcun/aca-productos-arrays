const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const PUBLIC = path.join(__dirname, "public");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

const server = http.createServer((req, res) => {
  const filePath = path.join(
    PUBLIC,
    req.url === "/" ? "index.html" : req.url
  );

  const ext = path.extname(filePath);
  const type = MIME[ext] || "text/plain";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("No encontrado");
      return;
    }
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});