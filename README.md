# Tueste Norte - Semana 4

Proyecto realizado durante la Semana 4 de la formación CodeNode.

En esta semana se ha desarrollado el frontend de Tueste Norte utilizando Astro y Tailwind CSS. El proyecto incluye varias páginas, componentes reutilizables, un catálogo de cafés generado a partir de datos locales y un blog creado mediante Content Collections y archivos Markdown.

El objetivo de esta semana es construir una interfaz moderna, reutilizable y responsive, manteniendo el contenido de forma estática. La conexión con WordPress mediante su API REST se realizará en una fase posterior.

## Tecnologías utilizadas

- Astro
- Tailwind CSS
- TypeScript
- Markdown
- Node.js y npm
- Git y GitHub

## Páginas principales

- **Inicio:** portada principal de Tueste Norte con presentación del proyecto y enlaces a las secciones principales.
- **Quiénes somos:** información sobre el tostador, la tienda física, las catas mensuales y los valores del proyecto.
- **Catálogo:** muestra los cuatro cafés disponibles mediante componentes reutilizables y datos locales.
- **Contacto:** contiene los datos de contacto y el horario de la tienda.
- **Blog:** muestra las recetas y métodos de preparación almacenados mediante Content Collections y archivos Markdown.

## Instalación y ejecución

Para instalar las dependencias del proyecto:

```bash
npm install
```

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

Para comprobar localmente la versión de producción:

```bash
npm run preview
```

## Decisiones técnicas

### Datos del catálogo

Los datos de los cafés se almacenan en `src/data/cafes.ts`. Se ha elegido esta ubicación para separar los datos del contenido visual de las páginas y evitar repetir información directamente en el HTML.

La página `catalogo.astro` recorre estos datos mediante `map()` y utiliza el componente reutilizable `CafeCard.astro` para mostrar cada café.

Durante esta semana los datos se mantienen de forma local y estática. La conexión con WordPress mediante la API REST se realizará posteriormente.

### Blog

El blog utiliza una Content Collection de Astro definida en `src/content.config.ts`. El esquema valida mediante Zod los campos `titulo`, `fecha` y `descripcion` de cada entrada.

Los artículos se almacenan como archivos Markdown en `src/content/blog`. La página `blog/index.astro` obtiene y muestra las entradas, mientras que `blog/[slug].astro` genera dinámicamente la página individual de cada artículo.

## Estructura principal del proyecto

- `src/components/`: componentes reutilizables como Header, Footer, Badge y CafeCard.
- `src/layouts/`: contiene BaseLayout, utilizado como estructura común de las páginas.
- `src/pages/`: contiene las páginas y rutas de la aplicación.
- `src/data/`: contiene los datos locales del catálogo de cafés.
- `src/content/`: contiene los archivos Markdown utilizados por las Content Collections.
- `src/styles/`: contiene los estilos globales del proyecto.
- `src/content.config.ts`: define y valida las colecciones de contenido.