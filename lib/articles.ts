export interface ProductRecommendation {
  id: string;
  name: string;
  description: string;
  priceEstimate?: string;
  rating?: number;
  affiliateUrl: string;
  badge?: string;
}

export interface Article {
  slug: string;
  /**
   * Idioma del artículo. El sitio se publica solo en español ('es'); los
   * artículos marcados 'en' son contenido original pendiente de traducir
   * (ver content/_archive/en/ para el respaldo de todos los originales).
   * No hay rutas /en todavía — es solo el modelo de datos, preparado para
   * i18n a futuro.
   */
  lang: 'es' | 'en';
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  image: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string[];
      tip?: string;
    }[];
    conclusion: string;
  };
  recommendations: ProductRecommendation[];
}

// Línea editorial de GetGreenRoutine (todo público, tono cercano — mantener en cada artículo, actual o nuevo):
// - Habla de tú a tú, como le contarías un consejo a un amigo cercano — nada de lenguaje clínico/médico ni nombres científicos en latín.
// - Párrafos cortos, encabezados claros y un `tip` rápido por sección para que se lea fácil en el celular.
// - Sé práctico: ¿cómo ayuda esta planta o hábito a dormir mejor, tener más energía o sentirse más tranquilo en el día a día?
// - Lenguaje seguro (Fase 1.3): nunca "cura/curar", "garantizado", "milagroso", "sin efectos secundarios" ni "sustituye/reemplaza el medicamento".
//   En su lugar: "tradicionalmente se usa para…", "a mí me ayuda a…", "muchas personas la toman para…", "puede ayudar a…".
export const ARTICLES: Article[] = [
  {
    slug: "tes-para-dormir-mejor",
    lang: "es",
    title: "¿No Logras Apagar la Mente en la Noche? Estos 5 Tés Cambiaron Mis Noches",
    excerpt: "Antes me quedaba despierta viendo el celular hasta la 1am. Estos son los cinco tés de hierbas que de verdad me ayudaron a soltar el teléfono y acostarme más temprano, sin gomitas de melatonina.",
    category: "Rituales Nocturnos 🌙",
    readTime: "5 min de lectura",
    publishedAt: "Octubre 2026",
    author: {
      name: "Sophia Vance",
      role: "Vida Holística y Entusiasta de las Plantas",
      bio: "Estoy obsesionada con los remedios de hierbas desde que la cocina de mi abuela olía a manzanilla cada invierno. Hoy en día pruebo un ritual de sueño nuevo cada mes para que tú no tengas que hacerlo — considérame tu conejillo de indias con demasiada cafeína (la ironía no se me escapa)."
    },
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "Hablemos en serio: ¿tú también eres de los que se quedan en la cama \"solo revisando una cosa más\" en el celular hasta que de repente ya es la 1am? Igual que yo. Durante años mis noches fueron un caos de luz azul y pensamientos acelerados, hasta que empecé a apoyarme en un puñado de tés de hierbas que mi abuela juraba que funcionaban. Resulta que la naturaleza ya tenía esto resuelto mucho antes de que existieran las apps para dormir.",
      sections: [
        {
          heading: "1. Manzanilla y Lavanda: Mi Dúo Nocturno Innegociable 🌙",
          body: [
            "Esta es la combinación a la que recurro las noches en que la mente simplemente no se quiere callar. Manzanilla y lavanda juntas se sienten como una cobija pesada para el sistema nervioso — de verdad deshacen una tensión en los hombros que ni sabía que tenía.",
            "La preparo unos 30 minutos antes de la hora en que realmente quiero estar dormida (no solo acostada, es una gran diferencia), y en las noches difíciles me salto la miel porque el azúcar tiende a despabilarme otra vez."
          ],
          tip: "Tapa tu taza mientras reposa por 5 minutos — ¡perdí años sin saber que lo bueno se escapaba con el vapor!"
        },
        {
          heading: "2. Raíz de Valeriana y Pasiflora: Para las Noches Realmente Aceleradas",
          body: [
            "Voy a ser honesta, el olor me costó acostumbrarme. Pero cuando mi mente está en modo espiral total, esta combinación es la que de verdad le da un toquecito en el hombro a mi cuerpo y le dice \"oye, ya es hora de bajar el ritmo\"."
          ]
        },
        {
          heading: "3. Toronjil (Melisa): La Suave que No Esperaba que Me Encantara",
          body: [
            "Esta fue una sorpresa entre mis favoritos. Más allá de que huele delicioso, me calma el estómago en silencio después de una cena pesada, lo cual, resulta, era la mitad de la razón por la que no podía dormirme."
          ]
        }
      ],
      conclusion: "Nada de esto es una solución mágica, y todavía hay noches que se me escapan. Pero cambiar aunque sea tres noches a la semana de estar en el celular por una taza caliente y cinco minutos de calma de verdad cambió cómo me siento en las mañanas. Un ritual pequeño, una diferencia más grande de lo que esperaba."
    },
    recommendations: [
      {
        id: "rec-1",
        name: "Selección de Tés de Hierbas Orgánicos (Kit Premium)",
        description: "Este es exactamente el pack variado que tengo en la repisa de mi cocina ahora mismo. Voy rotando según el ánimo del día, y el empaque de verdad mantiene el aroma encerrado — un detalle pequeño que importa más de lo que esperaba.",
        priceEstimate: "$24.99",
        rating: 4.8,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE1?tag=your-affiliate-tag-20",
        badge: "Mi Favorito"
      },
      {
        id: "rec-2",
        name: "Hervidor Eléctrico con Control de Temperatura de Precisión",
        description: "Era escéptica de que un hervidor pudiera \"cambiarlo todo\", pero el agua demasiado caliente de verdad quema las hierbas delicadas y arruina el sabor. Este salvó mi té de saber amargo, y ahora lo uso todos los días.",
        priceEstimate: "$39.99",
        rating: 4.7,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE2?tag=your-affiliate-tag-20",
        badge: "Vale Cada Peso"
      }
    ]
  },
  {
    slug: "hidratacion-matutina-energia",
    lang: "es",
    title: "Dejé de Tomar Café Como Primera Cosa del Día — Esto es lo que Bebo Ahora",
    excerpt: "Cuatro hábitos de hidratación matutina ridículamente simples que me despejaron la mente más rápido que mi vieja rutina de tres tazas de café.",
    category: "Energía Matutina ☕",
    readTime: "4 min de lectura",
    publishedAt: "Octubre 2026",
    author: {
      name: "Liam Carter",
      role: "Vida Consciente y Estratega de Rutinas",
      bio: "Adicto en recuperación a la cafeína-antes-que-agua. Pasé un mes anotando cómo me sentía cada mañana según lo que bebía primero — esta es la rutina que se quedó, y de la que mis amigos ya están cansados de escucharme hablar."
    },
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "Pregunta rápida: ¿qué es lo primero que tomas al despertar? Durante años, la mía fue café, directo, sin excepciones. Luego aprendí que después de 7-8 horas dormido tu cuerpo ya está levemente deshidratado — y el café encima de eso me subía las hormonas de estrés en silencio cada mañana. Así que probé algo vergonzosamente simple en su lugar.",
      sections: [
        {
          heading: "1. Agua a Temperatura Ambiente con Limón Fresco 🍋",
          body: [
            "Lo sé, lo sé — suena al consejo de bienestar más básico que existe. Pero un vaso grande de esto antes que cualquier otra cosa de verdad despierta mi digestión, y siento la mente menos nublada para cuando me siento en el escritorio."
          ],
          tip: "Evita el agua helada a primera hora — noté que mi cuerpo parecía esforzarse más en procesar la temperatura que en hidratarme de verdad."
        },
        {
          heading: "2. Una Pizca de Sal Rosa del Himalaya y Minerales Traza",
          body: [
            "Esta me pareció una tontería la primera vez que la probé, pero una pizca pequeña disuelta de verdad ayuda a que el agua se absorba en vez de pasar de largo. Mi bajón de energía de las 10am se hizo notablemente más pequeño."
          ]
        }
      ],
      conclusion: "No estoy diciendo que dejes el café para siempre (yo definitivamente no lo hice). Pero darle a tu cuerpo hidratación real en esos primeros 15 minutos antes que cualquier otra cosa ha hecho que mis mañanas se sientan menos como control de daños y más como que de verdad arranco el día con ventaja."
    },
    recommendations: [
      {
        id: "rec-3",
        name: "Botella de Agua Aislada de Acero Inoxidable",
        description: "Esta ha vivido en mi mesa de noche por meses. Mantiene mi agua con limón con un sabor limpio en vez de a plástico, y honestamente solo verla ahí me recuerda que debo tomarla.",
        priceEstimate: "$21.99",
        rating: 4.9,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE3?tag=your-affiliate-tag-20",
        badge: "Vive en mi Mesa de Noche"
      }
    ]
  },
  {
    slug: "espacio-trabajo-calmado",
    lang: "es",
    title: "Mi Escritorio en Casa Me Estaba Estresando — Así que lo Rediseñé Pensando en la Naturaleza",
    excerpt: "Unos pocos cambios pequeños, casi todos gratis, que convirtieron mi escritorio desordenado y lleno de reflejos de pantalla en un lugar de verdad calmado para sentarme cada día.",
    category: "Espacio de Trabajo Calmado 🌿",
    readTime: "6 min de lectura",
    publishedAt: "Septiembre 2026",
    author: {
      name: "Maya Lin",
      role: "Ergonomía de Espacios y Diseño Biofílico",
      bio: "Escribo en este escritorio para vivir, así que cuando empezó a darme pereza sentarme, traté el rediseño como un experimento sobre mí misma. Esto es lo que de verdad hizo la diferencia, sin el relleno perfecto de Pinterest."
    },
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "¿Alguna vez notaste cómo algunos cuartos simplemente te agotan, y otros se sienten como si pudieras respirar? No le daba muchas vueltas hasta que me di cuenta de que me daba pereza sentarme en mi propio escritorio cada mañana. Resulta que mi entorno influía mucho más en mi concentración de lo que yo le reconocía — así que empecé a cambiarlo, una cosa pequeña a la vez.",
      sections: [
        {
          heading: "1. Una Planta de Bajo Mantenimiento (Ni Yo Pude Matarla) 🌱",
          body: [
            "He matado muchas plantas. La lengua de suegra y el potus son las primeras que de verdad sobrevivieron en mi escritorio, y tener algo verde en mi línea de visión suaviza el brillo duro del monitor más de lo que esperaba."
          ],
          tip: "Ponla en un lugar donde de verdad la vayas a mirar durante el día — la mía está justo al lado de mi segundo monitor, así mis ojos descansan un poco cada vez que la miro."
        },
        {
          heading: "2. Aprovechar la Luz Natural en Vez de Pelear con Ella",
          body: [
            "Mover mi escritorio de forma perpendicular a la ventana (en vez de quedar de frente a ella) eliminó el reflejo en mi pantalla y aun así dejó entrar suficiente luz del día para que no me sintiera un vampiro a las 3pm."
          ]
        }
      ],
      conclusion: "Nada de esto costó mucho, y no lo hice todo en un fin de semana. Pero poco a poco, mi escritorio pasó de ser un lugar que evitaba a ser el rincón de mi apartamento desde el que de verdad disfruto trabajar. Si tu espacio también te está agotando, empieza con una sola planta."
    },
    recommendations: [
      {
        id: "rec-4",
        name: "Soporte de Bambú Ergonómico para Laptop con Organizador de Escritorio",
        description: "Lo compré sobre todo por el desorden, pero mi dolor de cuello también desapareció en silencio después de unas semanas. Ahora lo noto cuando viajo y no lo tengo.",
        priceEstimate: "$29.99",
        rating: 4.7,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE4?tag=your-affiliate-tag-20",
        badge: "La Sorpresa del Año"
      }
    ]
  },
  {
    slug: "tonico-curcuma-jengibre",
    lang: "es",
    title: "El Tónico de Cúrcuma y Jengibre de 5 Minutos que Preparo Cada Mañana",
    excerpt: "Un tónico sencillo de raíces y especias basado en la herbolaria tradicional, más un truco práctico respaldado por la ciencia que de verdad lo hace funcionar mejor.",
    category: "Recetas con Plantas 🍲",
    readTime: "4 min de lectura",
    publishedAt: "Octubre 2026",
    author: {
      name: "Elena Ross",
      role: "Herbolaria y Desarrolladora de Recetas",
      bio: "Formada en fitoterapia tradicional, pero vivo en una cocina de verdad con una licuadora de verdad, no en una botica. Mi regla: si un remedio toma más de cinco minutos o seis ingredientes, no lo voy a preparar una segunda vez — así que esa es la vara para todo lo que publico."
    },
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "La cúrcuma y el jengibre se han combinado en la herbolaria tradicional durante siglos, mucho antes de que \"antiinflamatorio\" fuera una palabra de moda en el bienestar. Empecé a preparar este tónico durante una temporada de resfriados particularmente dura, y se ha vuelto, en silencio, el único ritual que nunca me salto — sobre todo porque toma menos tiempo del que tarda en prepararse mi café.",
      sections: [
        {
          heading: "1. La Base: Raíz Fresca, No Solo en Polvo 🌱",
          body: [
            "Uso un trozo de raíz de cúrcuma fresca del tamaño de un dedo pulgar y una cantidad similar de jengibre, rallados directamente en una olla pequeña con agua. El polvo funciona en caso de apuro, pero la raíz fresca da un sabor notablemente más vivo y menos terroso — y es lo que de verdad pide la preparación tradicional.",
            "Lo dejo hervir a fuego suave unos 8-10 minutos. Más tiempo y el jengibre se vuelve amargo; menos tiempo y sabe a agua tibia con arrepentimientos."
          ],
          tip: "Agrega un poco de pimienta negra molida al final — la piperina que contiene aumenta de forma medible cuánta curcumina (el compuesto activo de la cúrcuma) absorbe tu cuerpo. Este simple truco es la diferencia entre 'un té agradable' y que el tónico realmente aporte algo."
        },
        {
          heading: "2. Una Cucharada de Miel Cruda, Fuera del Fuego",
          body: [
            "Agrego la miel solo después de colar y retirar la olla del fuego — hervir la miel descompone parte de sus enzimas naturales, así que añadirla al final conserva mejor sus propiedades calmantes para la garganta irritada."
          ]
        },
        {
          heading: "3. Prepáralo una Vez, Tómalo Toda la Semana",
          body: [
            "Los domingos preparo una versión concentrada — el doble de raíz, la mitad de agua — y la guardo en la nevera. Cada mañana solo diluyo un poco con agua caliente en vez de rallar todo desde cero cada día."
          ]
        }
      ],
      conclusion: "Esto no soluciona nada por sí solo, y no pretendo que sustituya una buena alimentación o el descanso. Pero como ritual de cinco minutos basado en una práctica herbal genuinamente antigua, se ha ganado un lugar permanente en mi estufa — y mis defensas tampoco se han quejado."
    },
    recommendations: [
      {
        id: "rec-5",
        name: "Combo Orgánico de Raíz Fresca de Cúrcuma y Jengibre",
        description: "Tener ambas raíces a la mano sin la cacería semanal en la sección de frutas y verduras es la única razón por la que sigo preparando esto con constancia. Se conserva bien en la nevera toda la semana.",
        priceEstimate: "$18.99",
        rating: 4.7,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE5?tag=your-affiliate-tag-20",
        badge: "Básico de la Semana"
      },
      {
        id: "rec-6",
        name: "Rallador Fino Microplane para Raíces y Especias",
        description: "Un rallador normal convertía esto en una tarea de 15 minutos. Este ralla la raíz en segundos y de verdad se puede lavar en el lavaplatos, lo cual importa más de lo que esperaba un lunes por la mañana.",
        priceEstimate: "$14.50",
        rating: 4.8,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE6?tag=your-affiliate-tag-20"
      }
    ]
  },
  {
    slug: "plantas-recuperacion-postentreno",
    lang: "es",
    title: "Cambié mi Hábito del Ibuprofeno por Estos 3 Trucos de Recuperación con Plantas",
    excerpt: "Tres cambios prácticos y sencillos, basados en la fitoterapia tradicional, que de verdad cambiaron qué tan adolorido me siento el día después de entrenar.",
    category: "Recuperación Activa 🏃",
    readTime: "5 min de lectura",
    publishedAt: "Octubre 2026",
    author: {
      name: "Marcus Oyelaran",
      role: "Entrenador de Fuerza y Escritor de Recuperación Natural",
      bio: "Entreno a levantadores de pesas para vivir, y antes tomaba ibuprofeno como si fuera un suplemento pre-entreno. Un problema de estómago persistente me obligó a buscar otras formas de manejar el dolor muscular — estos son los tres que de verdad se quedaron, respaldados tanto por la práctica herbal antigua como por la investigación más reciente sobre ellos."
    },
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "Tomarme un ibuprofeno después de cada día de pierna se sintió normal durante años, hasta que mi estómago empezó a pagar las consecuencias. Resulta que unas pocas herramientas vegetales — algunas usadas en la medicina tradicional durante siglos, hoy respaldadas por investigación real — cubren una sorprendente parte de lo que yo usaba analgésicos para lograr.",
      sections: [
        {
          heading: "1. Gel Tópico de Árnica Montana para el Dolor Localizado",
          body: [
            "El árnica se ha usado de forma tópica en la medicina popular europea para golpes y dolor muscular durante generaciones. Me la aplico en el grupo muscular que más sufrió dentro de la hora siguiente al entreno, y la rigidez del día siguiente es notablemente menos intensa — sobre todo en los días pesados de piernas."
          ],
          tip: "Nunca tomes árnica por vía oral a menos que sea una preparación homeopática diluida hecha para eso — la planta cruda es solo para uso tópico."
        },
        {
          heading: "2. Extracto de Cereza Ácida la Noche Antes de una Sesión Dura",
          body: [
            "Las cerezas ácidas tienen naturalmente un alto contenido de antocianinas, y un concentrado tomado la noche antes de una sesión intensa ha hecho que el dolor del día siguiente se sienta notablemente más llevadero — este es uno de los pocos remedios populares que cuenta con un buen número de estudios de ciencia del deporte detrás."
          ]
        },
        {
          heading: "3. Un Baño Tibio de Magnesio y Lavanda",
          body: [
            "Veinte minutos en una tina tibia con copos de magnesio y unas gotas de aceite de lavanda se han vuelto mi ritual innegociable del domingo después de una semana pesada de entreno. Ya sea el magnesio, el calor, o simplemente obligarme a quedarme quieto por una vez, mis piernas se sienten claramente menos destrozadas para el lunes."
          ]
        }
      ],
      conclusion: "Nada de esto sustituye una buena planificación de entreno, el descanso, o la opinión de un médico si algo realmente duele y no solo se siente trabajado. Pero cambiar mi hábito reflejo del ibuprofeno por estas tres herramientas vegetales ha hecho que la recuperación se sienta como algo que hago activamente, no solo algo que espero que pase."
    },
    recommendations: [
      {
        id: "rec-7",
        name: "Gel de Recuperación Tópico de Árnica Montana",
        description: "Este es exactamente el tubo que tengo en mi maleta del gym. Con poco rinde mucho, y no deja ese residuo grasoso que sí dejan algunos bálsamos más baratos.",
        priceEstimate: "$12.99",
        rating: 4.6,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE7?tag=your-affiliate-tag-20",
        badge: "Básico de la Maleta del Gym"
      },
      {
        id: "rec-8",
        name: "Cápsulas Concentradas de Extracto de Cereza Ácida",
        description: "Tomo dos de estas la noche antes de una sesión pesada. Es más fácil mantener la constancia que preparar jugo de cereza ácida desde el concentrado cada vez.",
        priceEstimate: "$22.00",
        rating: 4.5,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE8?tag=your-affiliate-tag-20"
      }
    ]
  },
  {
    slug: "manzanilla-digestion",
    lang: "es",
    title: "Por Qué el Agua de Manzanilla Después de Comer Es Mi Secreto Favorito para la Pesadez de Estómago",
    excerpt: "El ritual después de cenar que le robé directo a la cocina de mi abuela — una taza tibia de manzanilla que se lleva esa sensación de pesadez e inflamación sin antiácidos fuertes.",
    category: "Rituales Digestivos 🍵",
    readTime: "4 min de lectura",
    publishedAt: "Octubre 2026",
    author: {
      name: "Sophia Vance",
      role: "Vida Holística y Entusiasta de las Plantas",
      bio: "Estoy obsesionada con los remedios de hierbas desde que la cocina de mi abuela olía a manzanilla cada invierno."
    },
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1000",
    content: {
      introduction: "A todos nos ha pasado: terminas una cena abundante y esa sensación de pesadez y pereza se instala antes de que te levantes de la mesa. En vez de ir directo a los antiácidos, adopté un truco directo de la cocina de mi abuela — una taza tibia de manzanilla justo después de comer.",
      sections: [
        {
          heading: "1. Por Qué una Taza Tibia Funciona Tan Bien 🌼",
          body: [
            "La manzanilla ha sido un básico en las cocinas de las abuelas por generaciones, y no es solo un cuento de abuela — la infusión tibia calma suavemente el estómago y ayuda al cuerpo a procesar una comida pesada en vez de dejarla ahí sentada como un ladrillo.",
            "Empecé a tomarla después de cenar más por curiosidad, pero después de unas semanas noté que ya no me despertaba sintiéndome inflamada. Un cambio pequeño, una diferencia sorprendentemente grande."
          ],
          tip: "Tapa tu taza mientras reposa de 5 a 7 minutos — así lo bueno no se escapa con el vapor. Luego tómala despacio, unos 15 minutos después de comer, ni helada ni de un solo trago."
        },
        {
          heading: "2. Hazla Parte de tu Momento de Calma, No una Obligación",
          body: [
            "Mantengo una lata de manzanilla suelta justo al lado de la tetera para que no haya excusa para saltármela. Se ha vuelto menos \"un remedio\" y más una pausa acogedora de cinco minutos al final de la cena — lo cual, honestamente, podría ser la mitad de la razón por la que funciona tan bien."
          ]
        }
      ],
      conclusion: "Esto no va a deshacer un plato gigante de pasta, y algunas noches ni el té me salva del todo. Pero cambiar el antiácido después de cenar por una taza tibia de manzanilla ha hecho que las cenas pesadas sean mucho más fáciles de llevar — y las mañanas notablemente más ligeras también."
    },
    recommendations: [
      {
        id: "rec-9",
        name: "Lata de Flor Entera de Manzanilla Orgánica",
        description: "Esta es la lata que tengo siempre al lado de la tetera. Flores enteras en vez de polvo en una bolsita, y solo el aroma hace que el ritual después de cenar se sienta como un gusto de verdad y no una obligación.",
        priceEstimate: "$14.99",
        rating: 4.8,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE-CHAMOMILE?tag=your-affiliate-tag-20",
        badge: "Favorita para Digerir"
      }
    ]
  },
  {
    slug: "ajo-remedio-tradicional",
    lang: "es",
    title: "Por Qué los Herbolarios Tradicionales Llamaban al Ajo 'La Farmacia de la Cocina'",
    excerpt: "El básico de cocina que mi abuela juraba que servía para todo, desde la nariz tapada hasta el estómago pesado — y la forma ridículamente simple en que ella lo usaba.",
    category: "Remedios con Plantas 🧄",
    readTime: "5 min de lectura",
    publishedAt: "Octubre 2026",
    author: {
      name: "Sophia Vance",
      role: "Vida Holística y Entusiasta de las Plantas",
      bio: "Explorando prácticas herbales tradicionales y traduciendo remedios clásicos en rutinas diarias simples para la vida moderna."
    },
    image: "/images/garlic-elixir.jpg",
    content: {
      introduction: "Mucho antes de que hubiera una farmacia en cada esquina, la mayoría de los hogares simplemente recurría a lo que ya tenían en la cocina. En mi familia, eso significaba ajo — mi abuela lo trataba como el remedio para todo, desde un estómago pesado después de cenar hasta el primer estornudo de un resfriado. Resulta que los herbolarios tradicionales lo han usado exactamente igual durante siglos.",
      sections: [
        {
          heading: "1. El Ayudante Digestivo de Todos los Días 🧄",
          body: [
            "El truco es ridículamente simple: ajo crudo, picado fino, mezclado directo en la comida. Sin preparación elaborada, sin cápsulas — solo un diente incorporado a lo que ya estés cocinando.",
            "Mi abuela siempre decía que \"despierta\" un estómago pesado después de una comida abundante, y sea folclor antiguo o no, noto mucho menos esa sensación de pesadez y llenura cuando de verdad me acuerdo de agregarlo."
          ],
          tip: "Pica o machaca tu ajo y déjalo reposar unos 10 minutos antes de comerlo — esa pequeña pausa es, al parecer, cuando mejor actúa, según cómo se prepara tradicionalmente."
        },
        {
          heading: "2. El Recurso de Siempre para la Garganta Irritada y la Nariz Tapada",
          body: [
            "En temporada de resfriados, un caldo tibio de ajo era innegociable cuando era niña. No sustituye la opinión de un médico, pero hay algo genuinamente reconfortante en un caldo tibio y sabroso cuando el pecho se siente apretado y la nariz no para de moquear."
          ]
        }
      ],
      conclusion: "La ciencia todavía está alcanzando mucho de lo que las abuelas han sabido desde siempre, pero mantener un ingrediente simple como el ajo en la rotación diaria es una forma muy fácil de tomar un poco de esa sabiduría de antes — sin necesidad de ir a la farmacia."
    },
    recommendations: [
      {
        id: "rec-garlic-1",
        name: "Prensa y Picador de Ajo de Acero Inoxidable",
        description: "La forma más fácil de preparar ajo fresco para tu cocina diaria y tus remedios sin ensuciarte las manos.",
        priceEstimate: "$15.99",
        rating: 4.8,
        affiliateUrl: "https://amazon.com/dp/EXAMPLE-GARLIC?tag=your-affiliate-tag-20",
        badge: "Esencial de Cocina"
      }
    ]
  }
];