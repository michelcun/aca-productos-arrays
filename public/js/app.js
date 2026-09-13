// Formatea un número como pesos colombianos (aprox.)
function formatoPesos(valor) {
    return "$" + valor.toLocaleString("es-CO");
  }
  
  // Convierte una lista de productos a HTML (ul/li)
  function listaProductos(productos) {
    const items = productos
      .map((p) => {
        return `<li>${p.nombre} — ${formatoPesos(p.precio)} — stock: ${p.stock}</li>`;
      })
      .join("");
  
    return `<ul>${items}</ul>`;
  }
  
  // Pinta en pantalla todos los resultados del API
  function mostrarResultados(data) {
    document.getElementById("precioMayor100000").innerHTML = listaProductos(
      data.precioMayor100000
    );
  
    document.getElementById("valorInventario").innerHTML =
      `<p class="destacado">${formatoPesos(data.valorInventario)}</p>`;
  
    const mayor = data.mayorStock;
    document.getElementById("mayorStock").innerHTML =
      `<p><strong>${mayor.nombre}</strong> (stock: ${mayor.stock})</p>`;
  
    document.getElementById("tecnologia").innerHTML = listaProductos(
      data.tecnologia
    );
  
    const producto = data.productoId3;
    document.getElementById("productoId3").innerHTML =
      `<p><strong>${producto.nombre}</strong> — ${producto.categoria}</p>`;
  
    // Object.entries convierte { Tecnologia: 4 } en [["Tecnologia", 4], ...]
    const categorias = Object.entries(data.porCategoria)
      .map(([nombre, cantidad]) => `<li>${nombre}: ${cantidad}</li>`)
      .join("");
  
    document.getElementById("porCategoria").innerHTML = `<ul>${categorias}</ul>`;
  }
  
  // Pedimos los datos al servidor y los mostramos
  async function iniciar() {
    try {
      const respuesta = await fetch("/api/resultados");
      const data = await respuesta.json();
      mostrarResultados(data);
    } catch (error) {
      console.error("Error al cargar resultados:", error);
      document.querySelector("main").innerHTML +=
        "<p>No se pudieron cargar los resultados.</p>";
    }
  }
  // Iniciamos la aplicación
  iniciar();