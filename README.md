# api-rest-tareas

API REST sencilla para la gestión de tareas, desarrollada con Node.js y Express.

## Cómo ejecutar el servidor

1. Instala las dependencias:
   ```sh
   npm install
   ```

2. Inicia el servidor:
   ```sh
   npm start
   ```
   El servidor estará disponible en `http://localhost:3000`.

## Endpoints disponibles

Todas las rutas están bajo el prefijo `/api`.

### Obtener todas las tareas
- **GET** `/api/tareas`

### Obtener una tarea por ID
- **GET** `/api/tareas/:id`

### Crear una nueva tarea
- **POST** `/api/tareas`
- **Body (JSON):**
  ```json
  {
    "nombre": "Nombre de la tarea"
  }
  ```

### Actualizar una tarea existente
- **PUT** `/api/tareas/:id`
- **Body (JSON):**
  ```json
  {
    "nombre": "Nuevo nombre"
  }
  ```

### Eliminar una tarea
- **DELETE** `/api/tareas/:id`

## Estructura del proyecto

- `index.js`: Punto de entrada de la aplicación.
- `routes/routes.js`: Define las rutas de la API.
- `controllers/controllers.js`: Contiene la lógica de cada endpoint.
- `package.json`: Configuración del proyecto y dependencias.
- `Procfile`: Archivo para despliegue en Heroku.

---

