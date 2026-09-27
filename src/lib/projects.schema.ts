// Si no lo usas dentro de Astro, cambia el import de arriba por:
// import { z } from "zod";

import { z } from "astro/zod";
import { PROJECTS } from "./constants";

// ── Helpers ──────────────────────────────────────────────────

/** YYYY-MM-DD */
const dateOnly = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato esperado: YYYY-MM-DD");

/** ISO datetime completo, ej. 2026-09-26T00:00:00Z */
const isoDateTime = z.iso.datetime({
  message: "Formato esperado: YYYY-MM-DDTHH:MM:SSZ",
});

/** URL válida o string vacío (campo opcional aún no definido) */
const optionalUrl = z.union([z.string().url(), z.literal("")]);

const imageExt = z.enum(["png", "jpg", "jpeg", "webp", "svg", "avif"]);

const imageMeta = z.object({
  ext: imageExt,
  alt: z.string().min(1, "alt no puede estar vacío"),
});

const galleryImage = imageMeta.extend({
  name: z.string().min(1),
  caption: z.string().default(""),
});

// ── Schema principal ─────────────────────────────────────────

export const caseStudySchema = z.object({
  // Identidad básica
  projectName: z.enum(PROJECTS),
  title: z.string().min(1),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "slug debe ser kebab-case"),
  summary: z.string().min(1),
  category: z.enum([
    "web",
    "mobile",
    "fullstack",
    "library",
    "cli",
    "api",
    "desktop",
    "otro",
  ]),
  date: dateOnly,
  lastUpdate: dateOnly,
  status: z.enum([
    "idea",
    "in-progress",
    "completed",
    "archived",
    "maintained",
  ]),
  featured: z.boolean(),
  priority: z.number().int(),

  // Contexto del proyecto
  type: z.enum([
    "personal",
    "freelance",
    "client",
    "opensource",
    "academic",
    "work",
  ]),
  role: z.string().min(1),
  team: z.object({
    size: z.number().int().positive(),
    solo: z.boolean(),
  }),

  // Links y stack
  links: z.object({
    repo: z.url(),
    demo: optionalUrl,
    docs: optionalUrl,
    npm: optionalUrl,
  }),
  stack: z
    .array(z.string().min(1))
    .min(1, "debe incluir al menos una tecnología"),

  // Highlights
  highlights: z.array(z.string().min(1)).default([]),

  // Imágenes
  images: z.object({
    hero: imageMeta,
    cover: imageMeta,
    gallery: z.array(galleryImage).default([]),
  }),

  // SEO
  seo: z.object({
    metaTitle: z.string().default(""),
    metaDescription: z.string().default(""),
  }),

  // Metadatos internos del agente
  generatedBy: z.enum(["agent", "manual"]),
  generatedAt: isoDateTime,
  schemaVersion: z.literal(1),
});

export type CaseStudy = z.infer<typeof caseStudySchema>;
