import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { caseStudySchema } from "./lib/projects.schema";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.md",
  }),
  schema: caseStudySchema,
});

export const collections = {
  projects,
};
