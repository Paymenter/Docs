import fs, { link } from "fs";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { generateOgImage } from "../scripts/generate-og.mjs";

export default {
  ignoreDeadLinks: true,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./theme/components"),
      },
    },
  },

  title: "Paymenter",

  description: "Paymenter is an open source payment gateway for your hosting.",

  cleanUrls: true,

  sitemap: {
    hostname: "https://paymenter.org",
    transformItems: (items) => {
      return items
        .map((item) => {
          var excludedPaths = ["anniversary/", "README", "CONTRIBUTING"];
          if (excludedPaths.includes(item.url)) {
            return null;
          }
          return item;
        })
        .filter((item) => item !== null);
    },
  },

  versioning: {
    latestVersion: "1.0.0",
  },

  srcExclude: ["README.md", "CONTRIBUTING.md"],

  transformPageData(pageData) {
    if (pageData.params && pageData.params.name) {
      pageData.title = pageData.params.name;
      pageData.frontmatter.title = pageData.params.name;
      pageData.description = pageData.params.description;
      pageData.frontmatter.description = pageData.params.description;
    }
  },

  transformHead: async ({ pageData }) => {
    const head = [];
    const title =
      pageData.frontmatter.title && pageData.frontmatter.title !== "Paymenter"
        ? pageData.frontmatter.title + " | Paymenter"
        : "Paymenter";
    const description = pageData.frontmatter.description
      ? pageData.frontmatter.description
      : "Paymenter is an open source payment gateway for your hosting.";
    head.push([
      "meta",
      {
        property: "og:title",
        content: title,
      },
    ]);
    head.push([
      "meta",
      {
        property: "og:description",
        content: description,
      },
    ]);

    // If path is / use textlogo, else use generated image
    if (
      pageData.relativePath &&
      pageData.filePath !== "marketplace/[id].md"
    ) {
      head.push([
        "meta",
        {
          property: "image:title",
          content: title,
        },
      ]);
      head.push([
        "meta",
        {
          property: "image:description",
          content: description,
        },
      ]);

      head.push([
        "meta",
        {
          property: "og:image",
          content: pageData.relativePath === `index.md` ? `/textlogo.png` : `/${pageData.relativePath.replace(".md", "")}/og-image.png`,
        },
      ]);
      head.push([
        "meta",
        {
          property: "twitter:image",
          content: pageData.relativePath === `index.md` ? `/textlogo.png` : `/${pageData.relativePath.replace(".md", "")}/og-image.png`,
        },
      ]);
      await generateOgImage(
        title,
        description,
        path.join(
          __dirname,
          "../.vitepress/dist",
          pageData.relativePath.replace(".md", ""),
          "og-image.png",
        ),
      );

      const url = `https://paymenter.org/${pageData.relativePath.replace(".md", "")}`;

      const discordEmbedSchema = {
        component: {
          type: 17,
          spoiler: false,
          accent_color: 4219135,
          components: [
            {
              type: 10,
              content: `### **[${title}](${url})**\n${description}`,
            },
            {
              type: 12,
              items: [
                {
                  media: {
                    url: pageData.relativePath === `index.md` ? `https://paymenter.org/textlogo.png` : `https://paymenter.org/${pageData.relativePath.replace(".md", "")}/og-image.png`,
                  },
                  description: "Image",
                },
              ],
            },
            {
              type: 1,
              components: [
                {
                  type: 2,
                  style: 5,
                  url: url,
                  label: "View",
                },
              ],
            },
            { type: 14 },
            {
              type: 10,
              content: `-# [Join our Discord](https://discord.gg/paymenter-882318291014651924) - [Visit GitHub](https://github.com/paymenter/Paymenter)`,
            }
          ],
        },
      };
      head.push([
        "script",
        { id: "discord:component-embed", type: "application/json" },
        JSON.stringify(discordEmbedSchema),
      ]);
    } else if (pageData.filePath === "marketplace/[id].md") {
      if (pageData.params.image) {
        head.push([
          "meta",
          { property: "og:image", content: pageData.params.image },
        ]);
        head.push([
          "meta",
          { property: "twitter:image", content: pageData.params.image },
        ]);
      }
      // Add structured data for marketplace items
      const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        image: pageData.params.image,
        name: pageData.frontmatter.title,
        description: pageData.frontmatter.description,
      };

      // Only add aggregateRating if values exist
      if (
        pageData.params.rating != null &&
        pageData.params.review_count != null
      ) {
        productSchema.aggregateRating = {
          "@type": "AggregateRating",
          ratingValue: pageData.params.rating,
          reviewCount: pageData.params.review_count,
        };
      }

      head.push([
        "script",
        { type: "application/ld+json" },
        JSON.stringify(productSchema),
      ]);

      const url =
        "https://paymenter.org/marketplace/" +
        pageData.params.id +
        "-" +
        pageData.params.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

      const discordEmbedSchema = {
        component: {
          type: 17,
          spoiler: false,
          accent_color: 4219135,
          components: [
            {
              type: 10,
              content: `### **[${title}](${url})**\n${pageData.frontmatter.description}`,
            },
            {
              type: 12,
              items: [
                {
                  media: {
                    url: pageData.params.image,
                  },
                  description: "Product image",
                },
              ],
            },
            {
              type: 1,
              components: [
                {
                  type: 2,
                  style: 5,
                  url: url,
                  label: "View",
                },
                {
                  type: 2,
                  style: 5,
                  url: pageData.params.url,
                  label:
                    pageData.params.price > 0
                      ? "Purchase ($" + pageData.params.price + ")"
                      : "Download",
                },
              ],
            },
            {
              type: 14,
            },
            {
              type: 10,
              content: `-# [Join our Discord](https://discord.gg/paymenter-882318291014651924) - [Visit GitHub](https://github.com/paymenter/Paymenter)`,
            },
          ],
        },
      };

      head.push([
        "script",
        { id: "discord:component-embed", type: "application/json" },
        JSON.stringify(discordEmbedSchema),
      ]);
    }
    return head;
  },

  themeConfig: {
    search: {
      provider: "local",
    },

    returnToTop: true, // Mobile only

    appearance: "dark",

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/installation/install" },
      { text: "Development", link: "/development/extensions/index.md" },
      { text: "Marketplace", link: "/marketplace" },
      {
        text: "About",
        activeMatch: `^/about/`,
        items: [
          { text: "Releases", link: "/releases" },
          { text: "Brand", link: "/brand" },
          { text: "Team", link: "/team" },
        ],
      },
    ],

    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg",
      alt: "Paymenter Logo",
    },

    siteTitle: false,

    sidebar: {
      "/docs/": [
        {
          text: "Getting Started",
          items: [
            {
              text: "Introduction",
              link: "/docs/getting-started/introduction",
            },
          ],
        },
        {
          text: "Setting Up",
          items: [
            {
              text: "Installation",
              link: "/docs/installation/install",
              collapsed: true,
              items: [
                { text: "Using Docker", link: "/docs/installation/docker" },
              ],
            },
            {
              text: "Webserver Setup",
              link: "/docs/installation/webserver",
              collapsed: true,
              items: [
                {
                  text: "Creating SSL Certificates",
                  link: "/docs/installation/ssl",
                },
              ],
            },
            { text: "Updating", link: "/docs/installation/updating" },
          ],
        },
        {
          text: "Guides",
          items: [
            {
              text: "Products",
              link: "/docs/guides/products/",
              collapsed: true,
              items: [
                {
                  text: "Config Options",
                  link: "/docs/guides/products/config-options",
                },
              ],
            },
            {
              text: "Servers",
              link: "/docs/guides/servers/",
              collapsed: false,
              items: [
                { text: "CPanel", link: "/docs/extensions/cpanel" },
                { text: "Convoy", link: "/docs/extensions/convoy" },
                { text: "DirectAdmin", link: "/docs/extensions/directadmin" },
                { text: "Enhance", link: "/docs/extensions/enhance" },
                { text: "Plesk", link: "/docs/extensions/plesk" },
                { text: "Proxmox", link: "/docs/extensions/proxmox" },
                { text: "Pterodactyl", link: "/docs/extensions/pterodactyl" },
                { text: "VirtFusion", link: "/docs/extensions/virtfusion" },
                { text: "Virtualizor", link: "/docs/extensions/virtualizor" },
              ],
            },
            {
              text: "Gateways",
              link: "/docs/guides/gateways/",
              collapsed: false,
              items: [
                { text: "Mollie", link: "/docs/extensions/mollie" },
                { text: "PayPal", link: "/docs/extensions/paypal" },
                { text: "Stripe", link: "/docs/extensions/stripe" },
              ],
            },
            {
              text: "Tickets",
              link: "/docs/guides/tickets/",
            },
            { text: "Single Sign On", link: "/docs/guides/OAuth.md" },
            { text: "WHMCS Importer", link: "/docs/guides/whmcs-importer" },
            { text: "Migrate Paymenter", link: "/docs/guides/migrate" },
            { text: "CLI", link: "/docs/guides/cli" },
            { text: "FAQ", link: "/docs/guides/FAQ.md" },
          ],
        },
        {
          text: "Contribute",
          items: [
            {
              text: "Help Build Paymenter",
              link: "/docs/contribute/how-to-help",
            },
            {
              text: "Docs and Translation",
              link: "/docs/contribute/docs-translations",
            },
          ],
        },
      ],
      "/releases/": [
        {
          text: "Releases",
          items: [
            { text: "v1.5 Release", link: "/releases/v1.5-release" },
            { text: "v1.4 Release", link: "/releases/v1.4-release" },
            { text: "v1.3 Release", link: "/releases/v1.3-release" },
            { text: "v1.2 Release", link: "/releases/v1.2-release" },
            { text: "v1.1 Release", link: "/releases/v1.1-release" },
            { text: "v1 Release", link: "/releases/v1-release" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API Reference",
          link: "/api/",
        },
      ],
      "/development/": [
        {
          text: "Extensions",
          items: [
            { text: "Extensions", link: "/development/extensions/index.md" },
            {
              text: "Configuration",
              link: "/development/extensions/configuration.md",
            },
            { text: "Event list", link: "/development/event-list.md" },
          ],
        },
        {
          text: "Types of Extensions",
          items: [
            {
              text: "Server Extension",
              link: "/development/extensions/server.md",
            },
            {
              text: "Gateway Extension",
              link: "/development/extensions/gateway.md",
            },
          ],
        },
        {
          text: "Themes",
          items: [
            { text: "Create a Theme", link: "/development/theme/index.md" },
            { text: "Building assets", link: "/development/theme/assets.md" },
          ],
        },
        {
          text: "OAuth",
          items: [{ text: "OAuth", link: "/development/OAuth.md" }],
        },
        {
          text: "API Reference",
          link: "/api/",
        },
      ],
    },

    markdown: {
      image: {
        lazyLoading: false,
      },
    },

    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.gg/paymenter-882318291014651924",
      },
      { icon: "github", link: "https://github.com/Paymenter" },
    ],
  },
  head: [
    [
      "link",
      {
        rel: "alternate",
        type: "application/json+oembed",
        href: "https://paymenter.org/home.json",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
    [
      "meta",
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      // theme color
      {
        name: "theme-color",
        content: "#4060ff",
      },
    ],
  ],
};
