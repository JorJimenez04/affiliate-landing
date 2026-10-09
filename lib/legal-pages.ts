import { siteConfig } from './site.config';

export interface LegalSection {
  heading?: string;
  paragraphs: string[];
}

export interface LegalPage {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
}

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: 'sobre-nosotros',
    title: 'Sobre nosotros',
    description: 'Quiénes escribimos en GetGreenRoutine y cómo elaboramos cada artículo.',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        paragraphs: [
          'GetGreenRoutine lo escribimos personas a las que de verdad nos gustan las plantas, la cocina y los hábitos sencillos — no un laboratorio ni una redacción médica.',
          'Cada autor o autora firma con su nombre real y cuenta su propia experiencia probando tés, recetas, rutinas de descanso o trucos de recuperación después de entrenar. Puedes leer la bio de quien escribe al final de cada artículo.',
        ],
      },
      {
        heading: 'Cómo construimos cada artículo',
        paragraphs: [
          'Partimos de tres fuentes: la tradición (lo que se usa desde hace generaciones en la cocina o la herboristería popular), la documentación (libros y estudios que explican por qué algo funciona) y, sobre todo, la experiencia propia de quien escribe.',
          'Si algo no lo hemos probado nosotros mismos, lo decimos claramente. Preferimos ser honestos a sonar más "expertos" de lo que somos.',
        ],
      },
    ],
  },
  {
    slug: 'como-trabajamos',
    title: 'Cómo trabajamos',
    description: 'Nuestra política editorial: cómo elegimos plantas y productos, y cómo corregimos errores.',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        heading: 'Cómo elegimos las plantas y los productos',
        paragraphs: [
          'Escribimos primero sobre plantas y hábitos que usamos de verdad en nuestro día a día. Los productos que recomendamos son los que compraríamos de todas formas — algunos los compramos nosotros mismos, y lo decimos cuando es así.',
          'No publicamos nada solo porque pague una comisión más alta. Si un producto no nos convence, simplemente no aparece aquí.',
        ],
      },
      {
        heading: 'Tres tipos de información, siempre diferenciados',
        paragraphs: [
          '"Uso tradicional": lo que dicen las costumbres populares o los textos clásicos de herbolaria, sin pretender que sea ciencia comprobada.',
          '"Lo que dice la documentación": estudios o publicaciones que respaldan (o matizan) ese uso tradicional.',
          '"Mi experiencia": lo que a la persona que escribe le ha funcionado probándolo en su propia rutina. Esto nunca se presenta como si fuera válido para todo el mundo.',
        ],
      },
      {
        heading: 'Cómo corregimos errores',
        paragraphs: [
          'Si detectamos (o nos avisan de) un dato equivocado o desactualizado, lo corregimos en el propio artículo y actualizamos la fecha de "Actualizado el…". No borramos artículos para esconder errores pasados.',
          `¿Viste algo que no cuadra? Escríbenos a ${siteConfig.contactEmail}.`,
        ],
      },
    ],
  },
  {
    slug: 'contacto',
    title: 'Contacto',
    description: 'Cómo escribirnos si tienes una pregunta, una corrección o una propuesta.',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        paragraphs: [
          `Puedes escribirnos directamente a ${siteConfig.contactEmail} para cualquier pregunta, corrección o propuesta de colaboración.`,
          'Intentamos responder todos los correos, aunque al ser un equipo pequeño puede que tardemos unos días.',
        ],
      },
    ],
  },
  {
    slug: 'aviso-importante',
    title: 'Aviso importante',
    description: 'Este contenido es informativo y de experiencia personal, no es consejo médico.',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        paragraphs: [
          'Todo lo que lees en GetGreenRoutine son recomendaciones basadas en tradición popular, en documentación disponible y, sobre todo, en nuestra propia experiencia probando cosas. No es consejo médico ni sustituye la opinión de un profesional de la salud.',
          'Cada persona es distinta: lo que a alguien le funciona de maravilla puede no hacerle nada a otra persona, o incluso no convenirle.',
        ],
      },
      {
        heading: 'Antes de probar algo nuevo',
        paragraphs: [
          'Consulta con un profesional de la salud si estás embarazada o en lactancia, si tomas alguna medicación, o si tienes una condición de salud diagnosticada — incluso cuando se trate de "solo una planta" o "solo un hábito".',
        ],
      },
    ],
  },
  {
    slug: 'aviso-de-afiliados',
    title: 'Aviso de afiliados',
    description: 'Cómo nos financiamos: enlaces de afiliado y cómo funcionan.',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        paragraphs: [
          'Algunos enlaces de este sitio son enlaces de afiliado. Si compras algo a través de ellos, podemos recibir una pequeña comisión, sin ningún costo adicional para ti.',
          'Solo recomendamos productos que de verdad usaríamos o usamos — esa relación comercial nunca cambia lo que escribimos.',
        ],
      },
      {
        heading: 'Programa de Afiliados de Amazon',
        paragraphs: [
          // TODO(legal-review): confirmar que el texto obligatorio de Amazon Associates está vigente y completo.
          'Como Afiliados de Amazon, obtenemos ingresos por las compras adscritas que cumplen los requisitos aplicables.',
        ],
      },
    ],
  },
  {
    slug: 'politica-de-privacidad',
    title: 'Política de privacidad',
    description: 'Cómo tratamos tus datos personales, conforme a la Ley 1581 de 2012 (Colombia) y al RGPD para visitantes de la UE.',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        paragraphs: [
          // TODO(legal-review): texto base pendiente de revisión por un profesional legal antes de publicar.
          `Esta política describe cómo ${siteConfig.name} recopila, usa y protege los datos personales de quienes visitan el sitio, en línea con la Ley 1581 de 2012 de Colombia y, para visitantes de la Unión Europea, con el Reglamento General de Protección de Datos (RGPD).`,
        ],
      },
      {
        heading: 'Qué datos recopilamos',
        paragraphs: [
          'Datos de navegación y analítica (solo si aceptas las cookies de analítica), y los datos que nos entregas voluntariamente al escribirnos o suscribirte a la newsletter (como tu correo electrónico).',
        ],
      },
      {
        heading: 'Tus derechos',
        paragraphs: [
          `Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a ${siteConfig.contactEmail}.`,
        ],
      },
    ],
  },
  {
    slug: 'politica-de-cookies',
    title: 'Política de cookies',
    description: 'Qué cookies usamos y cómo puedes configurarlas.',
    updatedAt: 'Octubre 2026',
    sections: [
      {
        paragraphs: [
          'Usamos tres categorías de cookies: necesarias (para que el sitio funcione), de analítica (para entender qué artículos son útiles) y de publicidad (solo si en algún momento activamos anuncios).',
          'Las cookies de analítica y de publicidad solo se activan si tú las aceptas. Puedes cambiar tu decisión en cualquier momento con el botón "Configurar cookies" del pie de página.',
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((page) => page.slug === slug);
}
