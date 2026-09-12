# CRUD Pedidos Restaurante

Base de un proyecto de **Ingeniería Web** en Node.js.
CRUD sencillo de pedidos de restaurante (por implementar paso a paso).

## Stack

- Node.js + Express
- SQLite (`better-sqlite3`)
- EJS (vistas)
- Bootstrap 5 (CDN)

## Cómo arrancar

```bash
npm install
cp .env.example .env
npm start
```

Abre http://localhost:3000

Para desarrollo con recarga automática:

```bash
npm run dev
```

## Estructura

```
src/
  server.js          # Entrada de la app
  config/db.js       # Conexión SQLite + tabla pedidos
  routes/            # Rutas Express
  controllers/       # Lógica de cada ruta
  models/            # (aquí irá el modelo de Pedido)
views/               # Plantillas EJS
public/              # CSS/JS estáticos
data/                # Base SQLite (se crea al iniciar)
```

## Qué ya está listo

- Servidor Express + EJS + Bootstrap
- SQLite con tabla `pedidos` (vacía)
- Página de inicio

## Qué vas a construir tú

1. Modelo de Pedido
2. Listar pedidos
3. Crear pedido
4. Editar pedido
5. Eliminar pedido
