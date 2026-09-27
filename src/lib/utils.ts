import type { Project } from "./constants";

type Options = {
  project: Project;
  branch: string;
  resource: string;
};

export function getGithubRawPortfolioUrl(options: Options) {
  return `https://raw.githubusercontent.com/Criss117/${options.project}/refs/heads/${options.branch}/portfolio/${options.resource}`;
}
