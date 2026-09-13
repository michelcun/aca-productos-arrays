// Función que calcula el valor total del inventario
// Se obtiene sumando (precio * stock) de cada producto
function calcularValorInventario(productos) {
    // reduce acumula el total empezando desde 0
    return productos.reduce((total, producto) => {
      return total + producto.precio * producto.stock;
    }, 0);
  }
  
  // Exportamos la función para usarla en otros archivos
  module.exports = calcularValorInventario;