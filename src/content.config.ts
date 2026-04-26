import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      short_description: z.string(),
      stack: z.array(z.string()),
      long_description: z.string(),
      hero_image: image(),
      url: z.url().optional(),
      repository: z.url().optional(),
      order: z.number(),
    }),
});

export const collections = {
  projects,
};
