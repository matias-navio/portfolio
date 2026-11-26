import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: L;
}

export type EngineeringIcon = 'shield' | 'lock' | 'search' | 'sync' | 'check' | 'server' | 'bolt' | 'chart';

/** "Under the hood" backend details shown on the project page. */
export interface EngineeringNote {
  icon: EngineeringIcon;
  title: L;
  points: L[];
  tags: string[];
}

export interface Project {
  slug: string;
  title: string;
  featured?: boolean;
  url?: string;
  kind: L;
  role: L;
  summary: L;
  context: L;
  stack: string[];
  features: { title: L; body: L }[];
  modules?: L[];
  engineering?: EngineeringNote[];
  images?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: 'belmora',
    title: 'Belmora',
    featured: true,
    url: 'https://www.belmora-perfumes.site/',
    kind: { es: 'E-commerce', en: 'E-commerce' },
    role: { es: 'Producto completo', en: 'Whole product' },
    summary: {
      es: 'Perfumería online con catálogo, pedidos por WhatsApp, una asesora con IA y back office propio.',
      en: 'Online perfume store with catalog, WhatsApp ordering, an AI advisor and a custom back office.',
    },
    context: {
      es: 'La construí de punta a punta: el modelo de datos y la lógica en Supabase, el frontend en Next.js desarrollado con agentes de IA, y las herramientas internas para gestionar ventas y stock.',
      en: 'I built it end to end: the data model and logic on Supabase, the Next.js frontend built with AI agents, and the internal tools to manage sales and stock.',
    },
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Claude API', 'Tailwind CSS'],
    features: [
      {
        title: { es: 'Belia, asesora con IA', en: 'Belia, AI advisor' },
        body: {
          es: 'Recomienda solo perfumes del catálogo real, con respuestas en streaming.',
          en: 'Recommends only perfumes from the real catalog, with streamed replies.',
        },
      },
      {
        title: { es: 'Catálogo con filtros', en: 'Filterable catalog' },
        body: {
          es: 'Búsqueda y filtros por tipo, género, familia, precio y tamaño.',
          en: 'Search and filters by type, gender, family, price and size.',
        },
      },
      {
        title: { es: 'Votaciones', en: 'Voting' },
        body: {
          es: 'Los usuarios votan si les gusta y si lo tienen; los votos alimentan un panel de demanda.',
          en: 'Visitors vote on whether they like and own it; votes feed a demand panel.',
        },
      },
      {
        title: { es: 'Back office', en: 'Back office' },
        body: {
          es: 'Productos, ventas, clientes, demanda y estadísticas.',
          en: 'Products, sales, customers, demand and stats.',
        },
      },
    ],
    engineering: [
      {
        icon: 'shield',
        title: { es: 'Belia, protegida y económica', en: 'Belia, safe and cheap' },
        points: [
          { es: 'Límite por IP en la base y tope de 600 caracteres.', en: 'Per-IP limit in the database and a 600-character cap.' },
          { es: 'Catálogo cacheado, streaming y prompt caching.', en: 'Cached catalog, streaming and prompt caching.' },
        ],
        tags: ['Rate limiting', 'Prompt caching'],
      },
      {
        icon: 'lock',
        title: { es: 'Permisos por rol en Postgres', en: 'Role-based access in Postgres' },
        points: [
          { es: 'El público solo ve productos activos.', en: 'The public only sees active products.' },
          { es: 'Ventas, clientes y /admin, solo con sesión de admin.', en: 'Sales, customers and /admin require an admin session.' },
        ],
        tags: ['RLS', 'Supabase Auth'],
      },
      {
        icon: 'search',
        title: { es: 'SEO técnico', en: 'Technical SEO' },
        points: [
          { es: 'Datos estructurados de producto y precio.', en: 'Structured product and price data.' },
          { es: 'Sitemap desde el catálogo y llms.txt para buscadores con IA.', en: 'Catalog-driven sitemap and llms.txt for AI search.' },
        ],
        tags: ['JSON-LD', 'llms.txt'],
      },
    ],
    images: [
      {
        src: '/img/projects/belmora/home.webp',
        width: 1600,
        height: 794,
        alt: { es: 'Portada de Belmora con un frasco de perfume sobre fondo negro', en: 'Belmora homepage with a perfume bottle on a black background' },
      },
      {
        src: '/img/projects/belmora/catalogo.webp',
        width: 1600,
        height: 798,
        alt: { es: 'Catálogo de Belmora con banner de descuento y filtros', en: 'Belmora catalog with discount banner and filters' },
      },
      {
        src: '/img/projects/belmora/producto.webp',
        width: 1600,
        height: 796,
        alt: { es: 'Ficha de perfume con acordes, ocasiones y votaciones', en: 'Perfume page with accords, occasions and voting' },
      },
      {
        src: '/img/projects/belmora/carrito.webp',
        width: 1600,
        height: 798,
        alt: { es: 'Carrito con descuento automático del 15% y cierre por WhatsApp', en: 'Cart with automatic 15% discount and WhatsApp checkout' },
      },
      {
        src: '/img/projects/belmora/notas.webp',
        width: 1600,
        height: 798,
        alt: { es: 'Grilla de notas olfativas con buscador', en: 'Fragrance notes grid with search' },
      },
    ],
  },
  {
    slug: '100-moda',
    title: '100% Moda',
    kind: { es: 'Sistema de gestión', en: 'Management system' },
    role: { es: 'Backend completo', en: 'Full backend' },
    summary: {
      es: 'Sistema de gestión multi-sucursal para un mayorista de bijouterie: ventas, caja, stock, compras, clientes y Tiendanube.',
      en: 'Multi-branch management system for a jewelry wholesaler: sales, cash register, stock, purchasing, customers and Tiendanube.',
    },
    context: {
      es: 'El negocio operaba con un sistema viejo instalado en una sola computadora del local, sin backups y con funciones rotas, justo cuando abría su tercera sucursal. Construí todo el backend del reemplazo en la nube.',
      en: 'The business ran on an old system installed on a single in-store computer, with no backups and broken features, right as it opened its third branch. I built the entire backend of the cloud replacement.',
    },
    stack: ['NestJS', 'TypeScript', 'Supabase', 'PostgreSQL', 'JWT · Passport', 'Docker', 'Jest'],
    features: [
      {
        title: { es: 'Operación multi-sucursal', en: 'Multi-branch operations' },
        body: {
          es: 'Stock, ventas y caja por sucursal, con roles para cada empleado.',
          en: 'Stock, sales and cash register per branch, with roles per employee.',
        },
      },
      {
        title: { es: 'Caja y ventas', en: 'Cash register & sales' },
        body: {
          es: 'Sesiones de caja, devoluciones, gastos, cashback y crédito para empleados.',
          en: 'Cash sessions, refunds, expenses, cashback and employee credit.',
        },
      },
      {
        title: { es: 'Integración con Tiendanube', en: 'Tiendanube integration' },
        body: {
          es: 'El stock del local y el de la tienda online se mantienen sincronizados.',
          en: 'In-store and online store stock stay in sync.',
        },
      },
      {
        title: { es: 'Migración y reportes', en: 'Migration & reports' },
        body: {
          es: 'Datos migrados del sistema viejo, análisis RFM, Excel y etiquetas con código de barras.',
          en: 'Data migrated from the old system, RFM analysis, Excel exports and barcode labels.',
        },
      },
    ],
    engineering: [
      {
        icon: 'shield',
        title: { es: 'Operaciones atómicas', en: 'Atomic operations' },
        points: [
          { es: 'Ventas, devoluciones, cierres de caja y cashback corren como funciones transaccionales en Postgres.', en: 'Sales, refunds, cash closings and cashback run as transactional Postgres functions.' },
          { es: 'Todo o nada: nunca queda una venta a medias ni stock descontado de más.', en: 'All or nothing: no half-saved sale, no stock deducted twice.' },
        ],
        tags: ['Postgres RPC', 'Transactions'],
      },
      {
        icon: 'sync',
        title: { es: 'Sync con Tiendanube a prueba de fallos', en: 'Fault-tolerant Tiendanube sync' },
        points: [
          { es: 'Cola con reintentos y backoff ante límites de la API, y webhook de pedidos pagados.', en: 'Queue with retries and backoff on API limits, plus a paid-order webhook.' },
          { es: 'Los fallos se registran y una conciliación nocturna corrige el stock.', en: 'Failures are logged and a nightly reconciliation fixes the stock.' },
        ],
        tags: ['Webhooks', 'Cron'],
      },
      {
        icon: 'check',
        title: { es: 'Calidad y despliegue', en: 'Quality & delivery' },
        points: [
          { es: '35 migraciones versionadas y tests e2e sobre las funciones de la base.', en: '35 versioned migrations and e2e tests over the database functions.' },
          { es: 'Imagen Docker multi-stage; jobs nocturnos para RFM y cashback.', en: 'Multi-stage Docker image; nightly jobs for RFM and cashback.' },
        ],
        tags: ['Jest', 'Docker'],
      },
    ],
    modules: [
      { es: 'Ventas', en: 'Sales' },
      { es: 'Caja', en: 'Cash register' },
      { es: 'Productos y stock', en: 'Products & stock' },
      { es: 'Órdenes de compra', en: 'Purchase orders' },
      { es: 'Proveedores', en: 'Suppliers' },
      { es: 'Clientes', en: 'Customers' },
      { es: 'Devoluciones', en: 'Refunds' },
      { es: 'Cashback', en: 'Cashback' },
      { es: 'Empleados', en: 'Employees' },
      { es: 'Sucursales', en: 'Branches' },
      { es: 'Dashboard', en: 'Dashboard' },
      { es: 'Tiendanube', en: 'Tiendanube' },
    ],
    images: [
      {
        src: '/img/projects/100-moda/cover.svg',
        width: 1600,
        height: 800,
        alt: {
          es: 'Ilustración de la migración: del sistema viejo en una sola PC a una API en la nube con tres sucursales',
          en: 'Migration illustration: from an old single-PC system to a cloud API serving three branches',
        },
      },
      {
        src: '/img/projects/100-moda/ventas.webp',
        width: 1600,
        height: 798,
        alt: { es: 'Panel de ventas con ticket, cajero, vendedor y tipo de venta', en: 'Sales panel with ticket, cashier, seller and sale type' },
      },
      {
        src: '/img/projects/100-moda/caja.webp',
        width: 1600,
        height: 790,
        alt: { es: 'Sesión de caja activa con ingresos, gastos y balance', en: 'Active cash session with income, expenses and balance' },
      },
      {
        src: '/img/projects/100-moda/productos.webp',
        width: 1600,
        height: 793,
        alt: { es: 'Productos con variantes, categorías, proveedor y stock', en: 'Products with variants, categories, supplier and stock' },
      },
      {
        src: '/img/projects/100-moda/rfm.webp',
        width: 1600,
        height: 796,
        alt: { es: 'Análisis RFM con segmentos y ranking de clientes', en: 'RFM analysis with segments and customer ranking' },
      },
    ],
  },
  {
    slug: 'nicolino',
    title: 'Nicolino',
    kind: { es: 'Sistema de gestión', en: 'Management system' },
    role: { es: 'Backend completo', en: 'Full backend' },
    summary: {
      es: 'Sistema de control para una barbería: visitas, barberos, caja, clientes y sucursales.',
      en: 'Management system for a barbershop: visits, barbers, cash register, customers and branches.',
    },
    context: {
      es: 'Una barbería necesitaba controlar el trabajo diario de cada barbero, la caja y los clientes en más de una sucursal. Desarrollé el backend completo y su despliegue.',
      en: 'A barbershop needed to track each barber’s daily work, the cash register and customers across more than one branch. I built the full backend and its deployment.',
    },
    stack: ['NestJS', 'TypeScript', 'Supabase', 'PostgreSQL', 'Docker', 'Nginx'],
    features: [
      {
        title: { es: 'Visitas y servicios', en: 'Visits & services' },
        body: {
          es: 'Registro de cada visita con el barbero y los servicios realizados.',
          en: 'Each visit is recorded with the barber and the services performed.',
        },
      },
      {
        title: { es: 'Caja', en: 'Cash register' },
        body: {
          es: 'Apertura y cierre de caja con movimientos de ingreso y egreso.',
          en: 'Opening and closing the register, with income and expense movements.',
        },
      },
      {
        title: { es: 'Equipo y sucursales', en: 'Staff & branches' },
        body: {
          es: 'Gestión de barberos, cuentas y sucursales, con autenticación por roles.',
          en: 'Barbers, accounts and branches, with role-based authentication.',
        },
      },
      {
        title: { es: 'Dashboard', en: 'Dashboard' },
        body: {
          es: 'Resumen del negocio para el dueño: operaciones, caja y compras.',
          en: 'Business overview for the owner: operations, cash and purchases.',
        },
      },
    ],
    modules: [
      { es: 'Visitas', en: 'Visits' },
      { es: 'Operaciones', en: 'Operations' },
      { es: 'Caja', en: 'Cash register' },
      { es: 'Movimientos', en: 'Cash movements' },
      { es: 'Clientes', en: 'Customers' },
      { es: 'Productos', en: 'Products' },
      { es: 'Compras', en: 'Purchases' },
      { es: 'Personal', en: 'Staff' },
      { es: 'Sucursales', en: 'Branches' },
      { es: 'Dashboard', en: 'Dashboard' },
    ],
  },
  {
    slug: 'upfluent',
    title: 'UpFluent',
    url: 'https://upfluent.com.ar/',
    kind: { es: 'Landing', en: 'Landing page' },
    role: { es: 'Desarrollo completo', en: 'Full build' },
    summary: {
      es: 'Landing para un instituto de inglés online: método, planes, equipo y testimonios.',
      en: 'Landing page for an online English institute: method, plans, team and testimonials.',
    },
    context: {
      es: 'Un instituto de inglés remoto necesitaba una página rápida y clara para captar alumnos por WhatsApp. La construí con Astro y la desplegué en contenedor.',
      en: 'A remote English institute needed a fast, clear page to bring in students through WhatsApp. I built it with Astro and deployed it in a container.',
    },
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Docker', 'Nginx'],
    features: [
      {
        title: { es: 'Planes que llevan a WhatsApp', en: 'Plans that lead to WhatsApp' },
        body: {
          es: 'Elegís un plan y el botón arma el mensaje con las clases y el precio.',
          en: 'Pick a plan and the button builds the message with classes and price.',
        },
      },
      {
        title: { es: 'Rápida por diseño', en: 'Fast by design' },
        body: {
          es: 'HTML estático, imágenes en WebP y casi sin JavaScript.',
          en: 'Static HTML, WebP images and almost no JavaScript.',
        },
      },
      {
        title: { es: 'SEO técnico', en: 'Technical SEO' },
        body: {
          es: 'Sitemap, robots.txt y datos estructurados de la organización.',
          en: 'Sitemap, robots.txt and structured organization data.',
        },
      },
      {
        title: { es: 'Accesible en mobile', en: 'Accessible on mobile' },
        body: {
          es: 'Menú móvil con etiquetas accesibles y áreas táctiles amplias.',
          en: 'Mobile menu with accessible labels and large touch targets.',
        },
      },
    ],
    engineering: [
      {
        icon: 'server',
        title: { es: 'Despliegue con Docker y Nginx', en: 'Docker & Nginx deploy' },
        points: [
          { es: 'Build multi-stage: Node compila el sitio y Nginx lo sirve.', en: 'Multi-stage build: Node builds the site, Nginx serves it.' },
          { es: 'Redirección permanente de www al dominio canónico.', en: 'Permanent redirect from www to the canonical domain.' },
        ],
        tags: ['Docker', 'Nginx'],
      },
      {
        icon: 'bolt',
        title: { es: 'Caché y compresión', en: 'Caching & compression' },
        points: [
          { es: 'gzip y assets con hash cacheados por un año.', en: 'gzip and hashed assets cached for a year.' },
          { es: 'HTML y sitemap sin caché, para que cada cambio se vea al instante.', en: 'HTML and sitemap uncached, so every change shows up instantly.' },
        ],
        tags: ['Cache-Control', 'gzip'],
      },
      {
        icon: 'chart',
        title: { es: 'Métricas y SEO medibles', en: 'Measurable metrics & SEO' },
        points: [
          { es: 'Google Analytics 4 instalado en todo el sitio.', en: 'Google Analytics 4 across the whole site.' },
          { es: 'Conexión directa con Looker Studio (ex Data Studio) para analizar tráfico y SEO.', en: 'Direct connection to Looker Studio (formerly Data Studio) to analyze traffic and SEO.' },
        ],
        tags: ['GA4', 'Looker Studio'],
      },
    ],
    images: [
      {
        src: '/img/projects/upfluent/inicio.webp',
        width: 1600,
        height: 801,
        alt: { es: 'Inicio de UpFluent con el titular y una alumna en clase online', en: 'UpFluent homepage with the headline and a student in an online class' },
      },
      {
        src: '/img/projects/upfluent/equipo.webp',
        width: 1600,
        height: 796,
        alt: { es: 'Sección del equipo de profesoras', en: 'Teacher team section' },
      },
      {
        src: '/img/projects/upfluent/testimonios.webp',
        width: 1600,
        height: 795,
        alt: { es: 'Carrusel de testimonios de alumnos', en: 'Student testimonials carousel' },
      },
      {
        src: '/img/projects/upfluent/planes.webp',
        width: 1600,
        height: 797,
        alt: { es: 'Planes mensuales con selector de clases por semana', en: 'Monthly plans with a classes-per-week selector' },
      },
    ],
  },
  {
    slug: 'facturacion-arca',
    title: 'Facturación ARCA',
    kind: { es: 'Integración fiscal', en: 'Tax integration' },
    role: { es: 'Desarrollo completo', en: 'Full build' },
    summary: {
      es: 'Servicio que autentica con WSAA, emite comprobantes por WSFE y genera el PDF con QR.',
      en: "Service that authenticates with WSAA, issues invoices via WSFE and renders the PDF with QR code (Argentina's tax authority).",
    },
    context: {
      es: 'Integración con los web services de ARCA (ex AFIP) para facturación electrónica. Funciona de punta a punta; todavía no se usa para emitir facturas reales.',
      en: "Integration with ARCA's (formerly AFIP) web services for e-invoicing. It works end to end; it isn’t issuing real invoices yet.",
    },
    stack: ['NestJS', 'TypeScript', 'SOAP', 'node-forge', 'Supabase', 'Docker'],
    features: [
      {
        title: { es: 'Autenticación WSAA', en: 'WSAA authentication' },
        body: {
          es: 'Firma del ticket de acceso con certificado digital y manejo del token.',
          en: 'Access ticket signed with a digital certificate, with token handling.',
        },
      },
      {
        title: { es: 'Emisión por WSFE', en: 'WSFE issuing' },
        body: {
          es: 'Armado y envío de comprobantes al web service de facturación electrónica.',
          en: 'Builds and sends invoices to the e-invoicing web service.',
        },
      },
      {
        title: { es: 'PDF con QR', en: 'PDF with QR' },
        body: {
          es: 'Generación del comprobante en PDF con el código QR fiscal.',
          en: 'Renders the invoice as a PDF with the fiscal QR code.',
        },
      },
    ],
  },
  {
    slug: 'estacionapp',
    title: 'EstacionApp',
    kind: { es: 'MVP B2B', en: 'B2B MVP' },
    role: { es: 'Desarrollo completo', en: 'Full build' },
    summary: {
      es: 'Panel para operadores de playas de estacionamiento.',
      en: 'Dashboard for parking lot operators.',
    },
    context: {
      es: 'MVP para que las playas de estacionamiento gestionen su operación diaria. Lo armé como monorepo con un contrato de dominio compartido entre la API y la web.',
      en: 'MVP for parking lots to run their daily operation. Built as a monorepo with a domain contract shared between the API and the web app.',
    },
    stack: ['NestJS', 'React', 'Vite', 'Zod', 'Supabase', 'pnpm workspaces'],
    features: [
      {
        title: { es: 'Contrato compartido', en: 'Shared contract' },
        body: {
          es: 'Esquemas Zod en un paquete común que usan tanto la API como el frontend.',
          en: 'Zod schemas in a shared package used by both the API and the frontend.',
        },
      },
      {
        title: { es: 'Monorepo', en: 'Monorepo' },
        body: {
          es: 'API, web y paquete compartido en un mismo repositorio con pnpm workspaces.',
          en: 'API, web and shared package in one repository with pnpm workspaces.',
        },
      },
    ],
  },
  {
    slug: 'mis-finanzas',
    title: 'Mis Finanzas',
    kind: { es: 'Producto personal', en: 'Personal product' },
    role: { es: 'Desarrollo completo', en: 'Full build' },
    summary: {
      es: 'Plataforma de finanzas personales con API propia, gráficos y autenticación.',
      en: 'Personal finance platform with its own API, charts and authentication.',
    },
    context: {
      es: 'Proyecto propio para ordenar mis finanzas. API en NestJS con Prisma y una web en Next.js con gráficos.',
      en: 'Personal project to organize my finances. NestJS API with Prisma and a Next.js web app with charts.',
    },
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Next.js', 'Supabase Auth', 'Recharts'],
    features: [
      {
        title: { es: 'API propia', en: 'Own API' },
        body: {
          es: 'NestJS con Prisma, validación de JWT y tareas programadas.',
          en: 'NestJS with Prisma, JWT validation and scheduled jobs.',
        },
      },
      {
        title: { es: 'Web con gráficos', en: 'Web with charts' },
        body: {
          es: 'Next.js con formularios validados y gráficos de ingresos y gastos.',
          en: 'Next.js with validated forms and income/expense charts.',
        },
      },
    ],
  },
];

export const projectPath = (lang: Lang, slug: string) =>
  lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`;
