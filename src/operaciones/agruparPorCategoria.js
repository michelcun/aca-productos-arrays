// Función que genera un objeto con la cantidad
// de productos agrupados por categoría
function agruparPorCategoria(productos) {
    // reduce construye un objeto { categoria: cantidad }
    return productos.reduce((acumulado, producto) => {
      const categoria = producto.categoria;
  
      // Si la categoría aún no existe, la iniciamos en 0
      if (!acumulado[categoria]) {
        acumulado[categoria] = 0;
      }
  
      // Sumamos 1 por cada producto de esa categoría
      acumulado[categoria] += 1;
  
      return acumulado;
    }, {});
  }
  
  // Exportamos la función para usarla en otros archivos
  module.exports = agruparPorCategoria;