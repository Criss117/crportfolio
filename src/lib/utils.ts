import type { Project } from "./constants";

type Options = {
  project: Project;
  branch: string;
  resource: string;
};

type ImageOptions = {
  name: string;
  ext: string;
  branch: string;
  project: Project;
};

export function getGithubRawPortfolioUrl(options: Options) {
  return `https://raw.githubusercontent.com/Criss117/${options.project}/refs/heads/${options.branch}/portfolio/${options.resource}`;
}

export function buildImageUrl(options: ImageOptions) {
  return `https://raw.githubusercontent.com/Criss117/${options.project}/refs/heads/${options.branch}/portfolio/images/${options.name}.${options.ext}`;
}
