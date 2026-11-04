# Tueste Norte — Semana 5

Proyecto realizado durante la Semana 5 de la formación CodeNode.

## 1. Objetivo del proyecto

Durante esta semana se ha conectado el frontend de Tueste Norte, desarrollado con Astro y Tailwind CSS, con un backend WordPress mediante su API REST.

El objetivo es que los contenidos se administren desde WordPress y se muestren dinámicamente en Astro, utilizando una arquitectura **WordPress Headless**.

## 2. Tecnologías utilizadas

- Astro
- Tailwind CSS
- TypeScript
- WordPress
- API REST de WordPress
- Advanced Custom Fields (ACF)
- Node.js y npm
- XAMPP (Apache y MySQL)
- Git y GitHub

## 3. Arquitectura WordPress Headless

El proyecto separa dos partes:

**Backend — WordPress**

WordPress permite gestionar los cafés y las recetas desde su panel de administración.

**Frontend — Astro**

Astro se encarga de mostrar las páginas públicas y recuperar los contenidos mediante peticiones a la API REST.

De esta forma, los contenidos pueden actualizarse desde WordPress sin modificar manualmente el código de las páginas.

## 4. Catálogo dinámico de cafés

Se utiliza el Custom Post Type `cafe` creado en WordPress.

Cada café dispone de información como:

- Nombre y descripción.
- Origen.
- Notas de cata.
- Nivel de tueste.
- Precio.
- Imagen destacada.

En `src/lib/wp.ts` se encuentra la función `obtenerCafes()`, que recupera los datos desde la API REST.

La página `src/pages/cafes.astro` muestra el catálogo de cafés.

La ruta dinámica `src/pages/cafes/[slug].astro` permite visualizar la ficha individual de cada café.

## 5. Blog dinámico de recetas

Se han publicado tres recetas en WordPress, dentro de la categoría `Recetas`:

1. Cómo preparar café en cafetera italiana.
2. Cómo preparar café con prensa francesa.
3. Cómo preparar un café con leche cremoso en casa.

La función `obtenerRecetas()` consulta la API REST de WordPress y filtra los artículos por su categoría.

Se utiliza el parámetro `_embed` para recuperar las imágenes destacadas.

La página `src/pages/blog/index.astro` muestra las recetas con sus fotografías, títulos, fechas y descripciones.

La ruta dinámica `src/pages/blog/[slug].astro` muestra el contenido completo de cada receta.

Los archivos Markdown locales del antiguo blog se han sustituido por los contenidos gestionados desde WordPress.

## 6. Archivos principales

- `src/lib/wp.ts`: funciones de conexión con WordPress y tipos de datos.
- `src/pages/cafes.astro`: catálogo dinámico.
- `src/pages/cafes/[slug].astro`: fichas individuales de los cafés.
- `src/pages/blog/index.astro`: listado de recetas.
- `src/pages/blog/[slug].astro`: páginas individuales de las recetas.
- `src/components/CafeCard.astro`: componente reutilizable para mostrar cafés.
- `.env.example`: ejemplo de configuración de la conexión con WordPress.

## 7. Instalación y ejecución

Para ejecutar el proyecto es necesario disponer de WordPress funcionando y tener instalados Node.js y npm.

**Instalar las dependencias:**

```bash
npm install
```

**Configurar la conexión con WordPress:**

Crear un archivo `.env` a partir de `.env.example`.

Ejemplo de configuración:

```env
WP_API_URL=http://localhost/tueste-norte-wp/wp-json
```

**Iniciar el servidor de desarrollo:**

```bash
npm run dev
```

Abrir en el navegador:

`http://localhost:4321`

**Comprobar la compilación:**

```bash
npm run build
```

## 8. Pruebas realizadas

Durante el desarrollo se ha comprobado:

- La recuperación de cafés desde WordPress.
- El funcionamiento de las fichas individuales mediante rutas dinámicas.
- La visualización de descripciones, precios e imágenes de los cafés.
- La recuperación de las tres recetas desde WordPress.
- La visualización de las imágenes destacadas mediante `_embed`.
- La navegación entre el blog y las recetas individuales.
- La actualización de contenidos desde WordPress sin modificar el código de Astro.

## 9. Resultado final

El proyecto Tueste Norte ha evolucionado desde una web con contenidos locales hacia una aplicación que utiliza WordPress como gestor de contenidos y Astro como frontend.

Esta separación permite gestionar cafés y recetas desde WordPress y mostrar la información actualizada en la web pública mediante la API REST.