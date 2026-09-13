# ACA Productos Arrays

Ejercicio de operaciones con arrays de productos en JavaScript.
Incluye una interfaz web sencilla que muestra los resultados.

## Cómo arrancar

```bash
npm start
```

Abre http://localhost:3000

También puedes ver el JSON en:
http://localhost:3000/api/resultados

## Operaciones del enunciado

1. Productos con precio mayor a $100.000 (`filter`)
2. Valor total del inventario precio × stock (`reduce`)
3. Producto con mayor stock (`reduce`)
4. Productos de categoría Tecnología (`filter`)
5. Buscar producto por id (`find`)
6. Cantidad de productos por categoría (`reduce`)

## Estructura

```text
aca-productos-arrays/
  ACA/ejemplo.txt          # Enunciado
  public/                  # HTML, CSS y JS del front
  src/data/productos.js    # Array de productos
  src/operaciones/         # Una función por operación
  server.js                # Servidor Node + API
```
