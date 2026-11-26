export type Lang = 'es' | 'en';

export const contact = {
  email: 'naviomatias2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/matias-navio-69304a218',
  github: 'https://github.com/matias-navio',
};

export type StackGroup = 'java' | 'node' | 'front' | 'data' | 'infra' | 'integrations';

export const stack: { id: StackGroup; items: string[] }[] = [
  { id: 'java', items: ['Java 17', 'Spring Boot 3', 'Spring Cloud · Eureka', 'Microservices'] },
  { id: 'node', items: ['Node.js', 'NestJS', 'TypeScript', 'Express'] },
  { id: 'front', items: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Claude Code'] },
  { id: 'data', items: ['PostgreSQL', 'MySQL', 'Supabase · RLS'] },
  { id: 'infra', items: ['Docker', 'Dokploy', 'Vercel', 'Git · GitHub · GitLab', 'Scrum'] },
  { id: 'integrations', items: ['REST · Webhooks', 'MercadoPago', 'ARCA · WSAA/WSFE', 'Tiendanube', 'LLMs'] },
];

const es = {
  meta: {
    title: 'Matias Navio — Full stack con perfil backend',
    description:
      'Desarrollador full stack en Mendoza, con perfil backend: Java, Spring Boot y NestJS. Frontend construido con agentes de IA.',
  },
  nav: { projects: 'Proyectos', experience: 'Experiencia', stack: 'Stack', contact: 'Contacto', skip: 'Saltar al contenido' },
  hero: {
    status: 'Disponible · full-time · híbrido / remoto · Mendoza',
    title: 'Full stack developer, especializado en backend.',
    lead: 'Soy Matias Navio, desarrollador en Mendoza. Diseño y construyo backends con Java, Spring Boot y NestJS, y desarrollo el frontend con agentes de IA.',
    cta: 'Ver proyectos',
    secondary: 'Escribime',
    diagramLabel:
      'Diagrama con la foto de Matias Navio en el centro, conectada a React, MercadoPago, Tiendanube, Spring Boot, NestJS y PostgreSQL.',
    rails: { front: 'agentes IA' },
  },
  projects: {
    eyebrow: 'Trabajo seleccionado',
    heading: 'Proyectos',
    private: 'Repositorio privado',
    view: 'Ver proyecto',
    visit: 'Visitar sitio',
    back: 'Proyectos',
    role: 'Rol',
    kind: 'Tipo',
    stack: 'Stack',
    site: 'Sitio',
    context: 'Contexto',
    built: 'Qué construí',
    engineeringEyebrow: 'Bajo el capó',
    engineering: 'Detalles técnicos',
    zoom: 'Ampliar imagen',
    viewer: { dialog: 'Visor de imágenes', close: 'Cerrar', prev: 'Imagen anterior', next: 'Imagen siguiente' },
    modules: 'Módulos',
    gallery: 'Capturas',
    next: 'Siguiente proyecto',
  },
  experience: {
    eyebrow: 'Trayectoria',
    heading: 'Experiencia',
    rows: [
      {
        period: 'mar 2025 — hoy',
        role: 'Tech Lead',
        org: 'Malbecode',
        body: 'Agencia de software a medida, equipo de 4. Siete proyectos entregados: aseguradora, gimnasio, barbería, estaciones de servicio y más.',
      },
      {
        period: 'abr 2024 — abr 2025',
        role: 'Backend Developer',
        org: 'Cornerstone IT',
        body: 'Backend con Java 17 y Spring Boot 3 sobre MySQL: endpoints, módulos y validaciones. Microservicios con Spring Cloud (Eureka) y Docker, en Scrum.',
      },
      {
        period: '2022 — 2024',
        role: 'Analista Programador Universitario',
        org: 'Universidad Champagnat',
        body: 'Título en trámite.',
      },
    ],
  },
  stack: {
    eyebrow: 'Herramientas',
    heading: 'Stack',
    groups: {
      java: 'Backend Java',
      node: 'Backend Node',
      front: 'Frontend con IA',
      data: 'Datos',
      infra: 'Infra y flujo',
      integrations: 'Integraciones',
    },
  },
  footer: {
    eyebrow: 'Contacto',
    heading: '¿Trabajamos juntos?',
    body: 'Busco un rol full stack o backend, full-time, híbrido o remoto desde Mendoza.',
    cta: 'Enviar email',
    groups: { contact: 'Contacto', projects: 'Proyectos', site: 'Idioma' },
    rights: 'Mendoza, Argentina',
  },
  switchLabel: 'View in English',
};

type Dict = typeof es;

const en: Dict = {
  meta: {
    title: 'Matias Navio — Full stack, backend-focused',
    description:
      'Full stack developer in Mendoza, Argentina, with a backend focus: Java, Spring Boot and NestJS. Frontends built with AI agents.',
  },
  nav: { projects: 'Projects', experience: 'Experience', stack: 'Stack', contact: 'Contact', skip: 'Skip to content' },
  hero: {
    status: 'Available · full-time · hybrid / remote · Mendoza',
    title: 'Full stack developer, specialized in backend.',
    lead: "I'm Matias Navio, a developer in Mendoza, Argentina. I design and build backends with Java, Spring Boot and NestJS, and ship frontends with AI agents.",
    cta: 'See projects',
    secondary: 'Email me',
    diagramLabel:
      'Diagram with a photo of Matias Navio at the center, connected to React, MercadoPago, Tiendanube, Spring Boot, NestJS and PostgreSQL.',
    rails: { front: 'AI agents' },
  },
  projects: {
    eyebrow: 'Selected work',
    heading: 'Projects',
    private: 'Private repository',
    view: 'View project',
    visit: 'Visit site',
    back: 'Projects',
    role: 'Role',
    kind: 'Type',
    stack: 'Stack',
    site: 'Site',
    context: 'Context',
    built: 'What I built',
    engineeringEyebrow: 'Under the hood',
    engineering: 'Technical details',
    zoom: 'Enlarge image',
    viewer: { dialog: 'Image viewer', close: 'Close', prev: 'Previous image', next: 'Next image' },
    modules: 'Modules',
    gallery: 'Screenshots',
    next: 'Next project',
  },
  experience: {
    eyebrow: 'Track record',
    heading: 'Experience',
    rows: [
      {
        period: 'Mar 2025 — now',
        role: 'Tech Lead',
        org: 'Malbecode',
        body: 'Custom software agency, team of 4. Seven projects delivered: insurance, gym, barbershop, gas stations and more.',
      },
      {
        period: 'Apr 2024 — Apr 2025',
        role: 'Backend Developer',
        org: 'Cornerstone IT',
        body: 'Backend with Java 17 and Spring Boot 3 on MySQL: endpoints, modules and validations. Microservices with Spring Cloud (Eureka) and Docker, in Scrum.',
      },
      {
        period: '2022 — 2024',
        role: 'University Programming Analyst',
        org: 'Universidad Champagnat',
        body: 'Degree in process.',
      },
    ],
  },
  stack: {
    eyebrow: 'Toolbox',
    heading: 'Stack',
    groups: {
      java: 'Java backend',
      node: 'Node backend',
      front: 'Frontend with AI',
      data: 'Data',
      infra: 'Infra & workflow',
      integrations: 'Integrations',
    },
  },
  footer: {
    eyebrow: 'Contact',
    heading: 'Work together?',
    body: 'Looking for a full-time full stack or backend role, hybrid or remote from Mendoza, Argentina.',
    cta: 'Send email',
    groups: { contact: 'Contact', projects: 'Projects', site: 'Language' },
    rights: 'Mendoza, Argentina',
  },
  switchLabel: 'Ver en español',
};

export const ui: Record<Lang, Dict> = { es, en };
