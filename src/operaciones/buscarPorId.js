// Función que busca un producto por su id
function buscarPorId(productos, id) {
    // find detiene la búsqueda cuando encuentra la coincidencia
    return productos.find((producto) => producto.id === id);
  }
  
  // Exportamos la función para usarla en otros archivos
  module.exports = buscarPorId;