import { getCollection } from "astro:content";

export async function getAllProjects() {
  const projects = await getCollection("projects");

  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getAllProjects();
  return projects.find((p) => p.data.slug === slug);
}
