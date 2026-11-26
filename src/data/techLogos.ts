/**
 * Stack label → brand glyph (simple-icons, CC0). Resolved at build time only.
 * Labels without a matching logo render as text.
 */
import {
  siAstro,
  siClaude,
  siDocker,
  siJest,
  siJsonwebtokens,
  siNestjs,
  siNextdotjs,
  siNginx,
  siPnpm,
  siPostgresql,
  siPrisma,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVite,
  siZod,
} from 'simple-icons';

const byLabel: Record<string, { path: string; title: string }> = {
  Astro: siAstro,
  'Claude API': siClaude,
  Docker: siDocker,
  Jest: siJest,
  'JWT · Passport': siJsonwebtokens,
  NestJS: siNestjs,
  'Next.js': siNextdotjs,
  Nginx: siNginx,
  'pnpm workspaces': siPnpm,
  PostgreSQL: siPostgresql,
  Prisma: siPrisma,
  React: siReact,
  Supabase: siSupabase,
  'Supabase Auth': siSupabase,
  'Tailwind CSS': siTailwindcss,
  TypeScript: siTypescript,
  Vite: siVite,
  Zod: siZod,
};

export const techLogo = (label: string) => byLabel[label]?.path;
