/**
 * Stack label → logo. Original full-color logos come from devicon (MIT, bundled
 * as asset URLs). Logos that are black or too dark for the sapphire canvas use the
 * simple-icons glyph (CC0) in pearl or in a lighter brand color instead.
 * Labels without an entry render as text only.
 */
import { siAstro, siExpress, siMercadopago, siMysql, siNextdotjs, siPrisma, siVercel, siZod } from 'simple-icons';

import claude from 'devicon/icons/claude/claude-original.svg?url';
import docker from 'devicon/icons/docker/docker-original.svg?url';
import git from 'devicon/icons/git/git-original.svg?url';
import java from 'devicon/icons/java/java-original.svg?url';
import jest from 'devicon/icons/jest/jest-plain.svg?url';
import jwt from 'devicon/icons/jwt/jwt-original.svg?url';
import nestjs from 'devicon/icons/nestjs/nestjs-original.svg?url';
import nginx from 'devicon/icons/nginx/nginx-original.svg?url';
import nodejs from 'devicon/icons/nodejs/nodejs-original.svg?url';
import pnpm from 'devicon/icons/pnpm/pnpm-original.svg?url';
import postgresql from 'devicon/icons/postgresql/postgresql-original.svg?url';
import react from 'devicon/icons/react/react-original.svg?url';
import spring from 'devicon/icons/spring/spring-original.svg?url';
import supabase from 'devicon/icons/supabase/supabase-original.svg?url';
import tailwind from 'devicon/icons/tailwindcss/tailwindcss-original.svg?url';
import typescript from 'devicon/icons/typescript/typescript-original.svg?url';
import vite from 'devicon/icons/vite/vite-original.svg?url';

/** `boost` lifts logos whose darkest parts get lost on the sapphire canvas. */
export type TechLogo = ({ src: string } | { path: string; color: string }) & { boost?: boolean };

const PEARL = '#f7f3ec';
const glyph = (icon: { path: string }, color = PEARL): TechLogo => ({ path: icon.path, color });

const byLabel: Record<string, TechLogo> = {
  // Original color logos
  'Claude API': { src: claude },
  'Claude Code': { src: claude },
  Docker: { src: docker },
  'Git · GitHub · GitLab': { src: git },
  'Java 17': { src: java, boost: true },
  Jest: { src: jest },
  'JWT · Passport': { src: jwt },
  NestJS: { src: nestjs },
  Nginx: { src: nginx },
  'Node.js': { src: nodejs },
  'pnpm workspaces': { src: pnpm },
  PostgreSQL: { src: postgresql },
  React: { src: react },
  'Spring Boot 3': { src: spring },
  'Spring Cloud · Eureka': { src: spring },
  Supabase: { src: supabase },
  'Supabase Auth': { src: supabase },
  'Supabase · RLS': { src: supabase },
  'Tailwind CSS': { src: tailwind },
  TypeScript: { src: typescript },
  Vite: { src: vite },

  // Dark brand marks → glyph on a readable color
  Astro: glyph(siAstro, `#${siAstro.hex}`),
  Express: glyph(siExpress),
  MercadoPago: glyph(siMercadopago, `#${siMercadopago.hex}`),
  MySQL: { ...glyph(siMysql, '#7db3e0'), boost: true },
  'Next.js': glyph(siNextdotjs),
  Prisma: glyph(siPrisma),
  Vercel: glyph(siVercel),
  Zod: glyph(siZod, '#7f9fe6'),
};

export const techLogo = (label: string): TechLogo | undefined => byLabel[label];
