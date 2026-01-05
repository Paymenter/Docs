import fs, { link } from "fs";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

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
  },

  versioning: {
    latestVersion: "1.0.0",
  },

  transformPageData(pageData) {
    if (pageData.params && pageData.params.name) {
      pageData.title = pageData.params.name;
      pageData.frontmatter.title = pageData.params.name;
      pageData.description = pageData.params.description;
      pageData.frontmatter.description = pageData.params.description;
    }
  },

  transformHead: ({ pageData }) => {
    const head = [];

    head.push([
      "meta",
      {
        property: "og:title",
        content:
          pageData.frontmatter.title &&
          pageData.frontmatter.title !== "Paymenter"
            ? pageData.frontmatter.title + " | Paymenter"
            : "Paymenter",
      },
    ]);
    head.push([
      "meta",
      {
        property: "og:description",
        content: pageData.frontmatter.description
          ? pageData.frontmatter.description
          : "Paymenter is an open source payment gateway for your hosting.",
      },
    ]);

    // If path is / use textlogo, else use generated image
    if (
      pageData.relativePath &&
      pageData.relativePath !== "index.md" &&
      pageData.filePath !== 'marketplace/[id].md'
    ) {
      head.push([
        "meta",
        {
          property: "image:title",
          content: pageData.frontmatter.title
            ? pageData.frontmatter.title
            : "Paymenter",
        },
      ]);
      head.push([
        "meta",
        {
          property: "image:description",
          content: pageData.frontmatter.description
            ? pageData.frontmatter.description
            : "Paymenter is an open source payment gateway for your hosting.",
        },
      ]);

      head.push([
        "meta",
        {
          property: "og:image",
          content: `/${pageData.relativePath.replace(".md", "")}/og-image.png`,
        },
      ]);
      head.push([
        "meta",
        {
          property: "twitter:image",
          content: `/${pageData.relativePath.replace(".md", "")}/og-image.png`,
        },
      ]);

      // Add structured data for marketplace items
      head.push([
        "script",
        {},
        JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Review",
          itemReviewed: {
            "@type": "Product",
            image: pageData.params.image,
            name: pageData.frontmatter.title,
            description: pageData.frontmatter.description,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: pageData.params.rating,
          },
          author: {
            "@type": "Person",
            name: pageData.params.author,
          },
          publisher: {
            "@type": "Organization",
            name: "Paymenter",
          },
        }),
      ]);
    } else if (
      pageData.filePath === 'marketplace/[id].md'
    ) {
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
      
    } else {
      head.push(["meta", { property: "og:image", content: "/textlogo.png" }]);
      head.push([
        "meta",
        { property: "twitter:image", content: "/textlogo.png" },
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
          text: "Index",
          items: [
            { text: "V1.4 Release", link: "/releases/v1.4-release" },
            { text: "V1.3 Release", link: "/releases/v1.3-release" },
            { text: "V1.2 Release", link: "/releases/v1.2-release" },
            { text: "V1.1 Release", link: "/releases/v1.1-release" },
            { text: "V1 Release", link: "/releases/v1-release" },
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
