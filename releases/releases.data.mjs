import { createContentLoader } from "vitepress";

export default createContentLoader("releases/*.md", {
  transform(rawData) {
    return rawData
      .filter((page) => page.url !== "/releases/")
      .map((page) => {
        return {
          title: page.frontmatter.title,
          url: page.url,
          excerpt: page.frontmatter.description || "View release notes",
          version: page.frontmatter.title.replace(/Releases/i, "").trim(),
        };
      })
      .sort((a, b) => {
        return b.version.localeCompare(a.version, undefined, { numeric: true });
      });
  },
});
