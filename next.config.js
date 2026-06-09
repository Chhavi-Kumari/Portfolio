const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGithubPages && repoName ? `/${repoName}` : "",
  assetPrefix: isGithubPages && repoName ? `/${repoName}/` : ""
};

export default nextConfig;
