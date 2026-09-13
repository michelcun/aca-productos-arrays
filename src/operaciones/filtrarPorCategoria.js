// Función que recibe productos y una categoría
// Devuelve solo los productos de esa categoría
function filtrarPorCategoria(productos, categoria = "Tecnología") {
    // filter deja solo los productos cuya categoría coincida
    return productos.filter((producto) => producto.categoria === categoria);
  }
  
  // Exportamos la función para usarla en otros archivos
  module.exports = filtrarPorCategoria;
  