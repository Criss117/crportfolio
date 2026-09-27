import { PROJECTS } from "@/lib/constants";
import { getGithubRawPortfolioUrl } from "@/lib/utils";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDir = path.join(process.cwd(), "src", "content", "projects");

async function getProjects() {
  await mkdir(outputDir, { recursive: true });

  await Promise.all(
    PROJECTS.map(async (p) => {
      const uri = getGithubRawPortfolioUrl({
        project: p.KEY,
        branch: "main",
        resource: "case-study.md",
      });

      const res = await fetch(uri);
      if (!res.ok) {
        console.error(
          `Error al descargar ${p.KEY}: ${res.status} ${res.statusText}`,
        );
        return;
      }

      const md = await res.text();
      const filePath = path.join(outputDir, `${p.KEY}.md`);
      await writeFile(filePath, md, "utf-8");
      console.log(`Guardado: ${filePath}`);
    }),
  );
}

getProjects();
