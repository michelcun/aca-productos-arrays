const http = require("http");
const fs = require("fs");
const path = require("path");

const productos = require("./src/data/productos");
const operaciones = require("./src/operaciones");
// Puerto y directorio de archivos estáticos
const PORT = 3000;
const PUBLIC = path.join(__dirname, "public");
// Mapeo de extensiones a tipos MIME
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

const server = http.createServer((req, res) => {
  // Endpoint que ejecuta todas las operaciones y devuelve JSON
  if (req.url === "/api/resultados") {
    const resultados = {
      precioMayor100000: operaciones.filtrarPorPrecio(productos),
      valorInventario: operaciones.calcularValorInventario(productos),
      mayorStock: operaciones.productoMayorStock(productos),
      tecnologia: operaciones.filtrarPorCategoria(productos, "Tecnología"),
      productoId3: operaciones.buscarPorId(productos, 3),
      porCategoria: operaciones.agruparPorCategoria(productos),
    };

    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(resultados, null, 2));
    return;
  }

  // Archivos estáticos de public/
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
// Iniciamos el servidor
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});