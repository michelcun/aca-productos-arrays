// Función que encuentra el producto con mayor stock
// Recorre el array y se queda con el que tenga más unidades
function productoMayorStock(productos) {
    // reduce compara el stock de cada producto
    // y va dejando el que tenga el valor más alto
    return productos.reduce((mayor, producto) => {
      return producto.stock > mayor.stock ? producto : mayor;
    });
  }
  
  // Exportamos la función para usarla en otros archivos
  module.exports = productoMayorStock;