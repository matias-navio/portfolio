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
        alt: { es: 'Catálogo de Belmora con decants, más vendidos y descuentos', en: 'Belmora catalog with decants, best sellers and discounts' },
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
        src: '/img/projects/belmora/estadisticas.webp',
        width: 1600,
        height: 797,
        alt: { es: 'Estadísticas del back office: más vendidos y ventas por mes (montos difuminados)', en: 'Back office stats: best sellers and monthly sales (amounts blurred)' },
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
        alt: { es: 'Panel de ventas con ticket, cajero, vendedor y tipo (clientes y montos difuminados)', en: 'Sales panel with ticket, cashier, seller and type (customers and amounts blurred)' },
      },
      {
        src: '/img/projects/100-moda/caja.webp',
        width: 1600,
        height: 790,
        alt: { es: 'Sesión de caja activa con ingresos, gastos y balance (montos difuminados)', en: 'Active cash session with income, expenses and balance (amounts blurred)' },
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
        alt: { es: 'Análisis RFM con segmentos y ranking (clientes y montos difuminados)', en: 'RFM analysis with segments and ranking (customers and amounts blurred)' },
      },
    ],
  },
  {
    slug: 'nicolino',
    title: 'Nicolino',
    kind: { es: 'Sistema de gestión', en: 'Management system' },
    role: { es: 'Backend completo', en: 'Full backend' },
    summary: {
      es: 'Sistema de gestión para una barbería con dos sucursales: operaciones, caja, clientes, sueldos y stock.',
      en: 'Management system for a two-branch barbershop: operations, cash register, customers, payroll and stock.',
    },
    context: {
      es: 'La barbería llevaba los cortes, la caja y los fiados en papel. Desarrollé el backend completo del sistema en la nube que hoy usan sus dos sucursales.',
      en: 'The barbershop tracked haircuts, cash and tabs on paper. I built the full backend of the cloud system both branches use today.',
    },
    stack: ['NestJS', 'TypeScript', 'Supabase', 'PostgreSQL', 'Docker', 'Nginx'],
    features: [
      {
        title: { es: 'Operaciones y cobros', en: 'Operations & payments' },
        body: {
          es: 'Cortes y ventas en efectivo, Mercado Pago, pago combinado o fiado.',
          en: 'Haircuts and sales paid in cash, Mercado Pago, split or on credit.',
        },
      },
      {
        title: { es: 'Caja y cuentas', en: 'Cash register & accounts' },
        body: {
          es: 'Apertura y cierre de caja, movimientos, depósitos y transferencias.',
          en: 'Opening and closing the register, movements, deposits and transfers.',
        },
      },
      {
        title: { es: 'Clientes y deudas', en: 'Customers & debts' },
        body: {
          es: 'Historial por cliente y sucursal, con cobro de deudas pendientes.',
          en: 'History per customer and branch, with collection of pending debts.',
        },
      },
      {
        title: { es: 'Productos y stock', en: 'Products & stock' },
        body: {
          es: 'Compras, ingreso de stock y venta de productos en el local.',
          en: 'Purchases, stock intake and in-store product sales.',
        },
      },
      {
        title: { es: 'Sueldos de barberos', en: 'Barber payroll' },
        body: {
          es: 'Sueldo calculado según los cortes de cada barbero en el período.',
          en: 'Pay calculated from each barber’s haircuts in the period.',
        },
      },
      {
        title: { es: 'Estadísticas', en: 'Statistics' },
        body: {
          es: 'Ingresos, servicios, productos vendidos y clientes por mes y sucursal.',
          en: 'Income, services, products sold and customers by month and branch.',
        },
      },
    ],
    engineering: [
      {
        icon: 'shield',
        title: { es: 'La plata, en la base', en: 'Money logic in the database' },
        points: [
          { es: 'Cierre de caja, cobro de deudas, sueldos y transferencias corren como funciones en Postgres.', en: 'Cash closing, debt collection, payroll and transfers run as Postgres functions.' },
          { es: 'El dashboard del dueño se arma en una sola consulta.', en: 'The owner dashboard is built in a single query.' },
        ],
        tags: ['Postgres RPC', 'Supabase'],
      },
      {
        icon: 'sync',
        title: { es: 'Tipos compartidos front y back', en: 'Shared types, front & back' },
        points: [
          { es: 'Un paquete común de DTOs, entidades y enums que usan la API y el frontend.', en: 'A common package of DTOs, entities and enums used by the API and the frontend.' },
          { es: 'Si cambia un contrato, el error aparece al compilar y no en producción.', en: 'If a contract changes, it fails at build time, not in production.' },
        ],
        tags: ['TypeScript', 'Monorepo'],
      },
      {
        icon: 'lock',
        title: { es: 'API con roles', en: 'Role-based API' },
        points: [
          { es: 'Autenticación con JWT y guards por rol en NestJS.', en: 'JWT authentication and role guards in NestJS.' },
          { es: 'Respuestas con formato uniforme mediante un interceptor.', en: 'Uniform responses through an interceptor.' },
        ],
        tags: ['JWT', 'Guards'],
      },
    ],
    modules: [
      { es: 'Operaciones', en: 'Operations' },
      { es: 'Visitas', en: 'Visits' },
      { es: 'Caja', en: 'Cash register' },
      { es: 'Cuentas', en: 'Accounts' },
      { es: 'Clientes', en: 'Customers' },
      { es: 'Productos', en: 'Products' },
      { es: 'Compras', en: 'Purchases' },
      { es: 'Empleados', en: 'Staff' },
      { es: 'Sueldos', en: 'Payroll' },
      { es: 'Sucursales', en: 'Branches' },
      { es: 'Estadísticas', en: 'Statistics' },
    ],
    images: [
      {
        src: '/img/projects/nicolino/cover.svg',
        width: 1600,
        height: 800,
        alt: {
          es: 'Ilustración: de una libreta de caja en papel a un panel en la nube con dos sucursales',
          en: 'Illustration: from a paper cash notebook to a cloud dashboard with two branches',
        },
      },
      {
        src: '/img/projects/nicolino/estadisticas.webp',
        width: 1600,
        height: 796,
        alt: { es: 'Estadísticas con ingresos mensuales y servicios realizados (montos difuminados)', en: 'Statistics with monthly income and services performed (amounts blurred)' },
      },
      {
        src: '/img/projects/nicolino/operaciones.webp',
        width: 1600,
        height: 795,
        alt: { es: 'Operaciones con barbero y método de pago (clientes y montos difuminados)', en: 'Operations with barber and payment method (customers and amounts blurred)' },
      },
      {
        src: '/img/projects/nicolino/caja.webp',
        width: 1600,
        height: 786,
        alt: { es: 'Caja abierta con movimientos de la sesión (montos difuminados)', en: 'Open register with session movements (amounts blurred)' },
      },
      {
        src: '/img/projects/nicolino/clientes.webp',
        width: 1600,
        height: 794,
        alt: { es: 'Listado de clientes con sucursal y deuda (datos personales y montos difuminados)', en: 'Customer list with branch and debt (personal data and amounts blurred)' },
      },
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
      es: 'Plataforma de finanzas personales: movimientos, gastos fijos y futuros, inversiones y un dashboard con alertas.',
      en: 'Personal finance platform: transactions, recurring and planned expenses, investments and a dashboard with alerts.',
    },
    context: {
      es: 'Proyecto propio para ordenar mis finanzas: una API en NestJS con Prisma sobre Supabase y una web en Next.js.',
      en: 'Personal project to organize my finances: a NestJS API with Prisma on Supabase and a Next.js web app.',
    },
    stack: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Next.js', 'Supabase Auth', 'Recharts'],
    features: [
      {
        title: { es: 'Movimientos', en: 'Transactions' },
        body: {
          es: 'Ingresos y gastos con categorías, filtros por mes, monto y notas.',
          en: 'Income and expenses with categories, filters by month, amount and notes.',
        },
      },
      {
        title: { es: 'Gastos fijos', en: 'Recurring expenses' },
        body: {
          es: 'Se generan solos cada mes y se puede saltear un mes puntual.',
          en: 'Generated automatically every month, with the option to skip one.',
        },
      },
      {
        title: { es: 'Gastos futuros', en: 'Planned expenses' },
        body: {
          es: 'Compras planificadas con rango de precio, prioridad y estado.',
          en: 'Planned purchases with price range, priority and status.',
        },
      },
      {
        title: { es: 'Inversiones', en: 'Investments' },
        body: {
          es: 'Depósitos, retiros, ajustes y rendimiento por semana, mes o trimestre.',
          en: 'Deposits, withdrawals, adjustments and returns by week, month or quarter.',
        },
      },
      {
        title: { es: 'Dashboard', en: 'Dashboard' },
        body: {
          es: 'Disponible, invertido, patrimonio, ingresos vs gastos y comparación mensual.',
          en: 'Available, invested, net worth, income vs expenses and monthly comparison.',
        },
      },
      {
        title: { es: 'Alertas', en: 'Alerts' },
        body: {
          es: 'Avisa de gastos fijos próximos y de días sin registrar movimientos.',
          en: 'Flags upcoming recurring expenses and days without new entries.',
        },
      },
    ],
    engineering: [
      {
        icon: 'shield',
        title: { es: 'Dinero en centavos', en: 'Money in cents' },
        points: [
          { es: 'Los montos se guardan como enteros en centavos: sin errores de redondeo.', en: 'Amounts are stored as integer cents: no rounding errors.' },
          { es: 'Los totales se suman en la base y el saldo se calcula en la API, nunca en el navegador.', en: 'Totals are summed in the database and the balance is computed in the API, never in the browser.' },
        ],
        tags: ['Prisma', 'PostgreSQL'],
      },
      {
        icon: 'bolt',
        title: { es: 'Dashboard rápido', en: 'Fast dashboard' },
        points: [
          { es: 'El resumen principal sale de una sola consulta SQL.', en: 'The main summary comes from a single SQL query.' },
          { es: 'Gráficos en endpoints separados y paginación real en movimientos.', en: 'Charts on separate endpoints and real pagination for transactions.' },
        ],
        tags: ['SQL', 'Performance'],
      },
      {
        icon: 'sync',
        title: { es: 'Gastos fijos automáticos', en: 'Automatic recurring expenses' },
        points: [
          { es: 'Una tarea diaria genera los gastos fijos de cada usuario.', en: 'A daily job generates each user’s recurring expenses.' },
          { es: 'Es idempotente: si corre dos veces, no duplica nada.', en: 'It is idempotent: running twice never duplicates.' },
        ],
        tags: ['Cron', 'NestJS'],
      },
    ],
    images: [
      {
        src: '/img/projects/mis-finanzas/dashboard.webp',
        width: 1600,
        height: 794,
        alt: { es: 'Dashboard con disponible, inversiones, patrimonio y gráfico de ingresos vs gastos (montos difuminados)', en: 'Dashboard with available, invested, net worth and income vs expenses (amounts blurred)' },
      },
      {
        src: '/img/projects/mis-finanzas/movimientos.webp',
        width: 1600,
        height: 798,
        alt: { es: 'Movimientos con filtros por mes, categoría, monto y notas (montos difuminados)', en: 'Transactions with filters by month, category, amount and notes (amounts blurred)' },
      },
      {
        src: '/img/projects/mis-finanzas/inversiones.webp',
        width: 1600,
        height: 787,
        alt: { es: 'Inversiones con rendimiento del período (montos difuminados)', en: 'Investments with period returns (amounts blurred)' },
      },
      {
        src: '/img/projects/mis-finanzas/gastos-futuros.webp',
        width: 1600,
        height: 786,
        alt: { es: 'Gastos futuros con prioridad y rango de precio (montos difuminados)', en: 'Planned expenses with priority and price range (amounts blurred)' },
      },
    ],
  },
];

export const projectPath = (lang: Lang, slug: string) =>
  lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`;
