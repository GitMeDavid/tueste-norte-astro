export interface Cafe {
    nombre: string;
    slug: string;
    descripcion: string;
    origen: string;
    notas: string;
    tueste: string;
    precio: number;
    imagen?: string;
}

interface CafeWordPress {
    slug: string;
    title: {
        rendered: string;
    };

    content: {
        rendered: string;
    };

    acf: {
        origen: string;
        notas_de_cata: string;
        nivel_tueste: string;
        precio: number | string;
    };
    imagen_destacada?: string;
}

const API_URL = import.meta.env.WP_API_URL;

export async function obtenerCafes(): Promise<Cafe[]> {
    const respuesta = await fetch(`${API_URL}/wp/v2/cafes`);

    const datos = await respuesta.json();

    return datos.map((cafe: CafeWordPress) => ({
        nombre: cafe.title.rendered,
        slug: cafe.slug,
        descripcion: cafe.content.rendered,
        origen: cafe.acf.origen,
        notas: cafe.acf.notas_de_cata,
        tueste: cafe.acf.nivel_tueste,
        precio: Number(cafe.acf.precio),
        imagen: cafe.imagen_destacada,
    }));
}

export async function obtenerCafePorSlug(slug: string): Promise<Cafe | null> {
    const cafes = await obtenerCafes();

    const cafeEncontrado = cafes.find((cafe) => cafe.slug === slug);

    return cafeEncontrado ?? null;
}


export interface Receta {
    id: number;
    titulo: string;
    slug: string;
    descripcion: string;
    contenido: string;
    fecha: string;
    imagen?: string;
}


interface RecetaWordPress {
    id: number;
    slug: string;
    date: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };

    _embedded?: {
        "wp:featuredmedia"?: {
            source_url: string;
        }[];
    };

}


export async function obtenerRecetas(): Promise<Receta[]> {
    const respuesta = await fetch(`${API_URL}/wp/v2/posts?categories=7&_embed`);

    const datos: RecetaWordPress[] = await respuesta.json();

    return datos.map((receta) => ({
        id: receta.id,
        titulo: receta.title.rendered,
        slug: receta.slug,
        descripcion: receta.excerpt.rendered,
        contenido: receta.content.rendered,
        fecha: receta.date,
        imagen: receta._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
    }));
}


export async function obtenerRecetaPorSlug(slug: string): Promise<Receta | null> {
    const recetas = await obtenerRecetas();

    const recetaEncontrada = recetas.find((receta) => receta.slug === slug);

    return recetaEncontrada ?? null;
}



