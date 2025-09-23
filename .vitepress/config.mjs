import fs, { link } from 'fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default {
  ignoreDeadLinks: true,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './theme/components')
      }
    }
    /* Use only in development
    server: {
      proxy: {
        '/api': {
          target: 'https://api.paymenter.org',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    */
  },

  title: 'Paymenter',

  description: 'Paymenter is an open source payment gateway for your hosting.',

  cleanUrls: true,

  versioning: {
    latestVersion: '1.0.0'
  },

  themeConfig: {
    search: {
      provider: 'local'
    },

    returnToTop: true, // Mobile only

    appearance: 'dark',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/installation/install' },
      { text: 'Blog', link: '/blog/v1.3-release' },
      { text: 'API', link: '/api/' },
      { text: 'Development', link: '/development/extensions/index.md' },
      { text: 'Marketplace', link: '/marketplace' }
    ],

    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'Paymenter Logo'
    },

    siteTitle: false,

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/docs/getting-started/introduction' }
          ]
        },
        {
          text: 'Setting Up',
          items: [
            {
              text: 'Installation',
              link: '/docs/installation/install',
              collapsed: true,
              items: [
                { text: 'Using Docker', link: '/docs/installation/docker' }
              ]
            },
            { text: 'Webserver Setup', link: '/docs/installation/webserver' },
            { text: 'Updating', link: '/docs/installation/updating' }
          ]
        },
        {
          text: 'Guides',
          items: [
            {
              text: 'Products',
              link: '/docs/guides/products/',
              collapsed: true,
              items: [
                {
                  text: 'Config Options',
                  link: '/docs/guides/products/config-options'
                }
              ]
            },
            {
              text: 'Servers',
              link: '/docs/guides/servers/',
              collapsed: false,
              items: [
                { text: 'CPanel', link: '/docs/extensions/cpanel' },
                { text: 'Convoy', link: '/docs/extensions/convoy' },
                { text: 'DirectAdmin', link: '/docs/extensions/directadmin' },
                { text: 'Enhance', link: '/docs/extensions/enhance' },
                { text: 'Plesk', link: '/docs/extensions/plesk' },
                { text: 'Proxmox', link: '/docs/extensions/proxmox' },
                { text: 'Pterodactyl', link: '/docs/extensions/pterodactyl' },
                { text: 'VirtFusion', link: '/docs/extensions/virtfusion' },
                { text: 'Virtualizor', link: '/docs/extensions/virtualizor' }
              ]
            },
            {
              text: 'Gateways',
              link: '/docs/guides/gateways/',
              collapsed: false,
              items: [
                { text: 'Mollie', link: '/docs/extensions/mollie' },
                { text: 'PayPal', link: '/docs/extensions/paypal' },
                { text: 'Stripe', link: '/docs/extensions/stripe' }
              ]
            },
            { text: 'Single Sign On', link: '/docs/guides/OAuth.md' },
            { text: 'Creating SSL Certificates', link: '/docs/guides/SSL.md' },
            {
              text: 'Migration from version 0.x to 1.0',
              link: '/docs/guides/v0-migration.md'
            },
            { text: 'FAQ', link: '/docs/guides/FAQ.md' }
          ]
        },
        {
          text: 'Contribute',
          items: [
            {
              text: 'Help Build Paymenter',
              link: '/docs/contribute/how-to-help'
            },
            {
              text: 'Docs and Translation',
              link: '/docs/contribute/docs-translations'
            }
          ]
        }
      ],
      '/blog/': [
        {
          text: 'Index',
          items: [
            { text: 'V1.3 Release', link: '/blog/v1.3-release' },
            { text: 'V1.2 Release', link: '/blog/v1.2-release' },
            { text: 'V1.1 Release', link: '/blog/v1.1-release' },
            { text: 'V1 Release', link: '/blog/v1-release' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          link: '/api/'
        }
      ],
      '/development/': [
        {
          text: 'Extensions',
          items: [
            { text: 'Extensions', link: '/development/extensions/index.md' },
            {
              text: 'Create a Server Extension',
              link: '/development/extensions/server.md'
            },
            {
              text: 'Create a Gateway Extension',
              link: '/development/extensions/gateway.md'
            }
          ]
        },
        {
          text: 'Themes',
          items: [
            { text: 'Create a Theme', link: '/development/theme/index.md' },
            { text: 'Building assets', link: '/development/theme/assets.md' }
          ]
        },
        {
          text: 'Events',
          items: [{ text: 'Event list', link: '/development/event-list.md' }]
        },
        {
          text: 'OAuth',
          items: [{ text: 'OAuth', link: '/development/OAuth.md' }]
        }
      ]
    },

    markdown: {
      image: {
        lazyLoading: false
      }
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/Paymenter/Paymenter/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2025 Paymenter. All Rights Reserved.'
    },

    socialLinks: [
      {
        icon: 'discord',
        link: 'https://discord.gg/paymenter-882318291014651924'
      },
      { icon: 'github', link: 'https://github.com/Paymenter' }
    ]
  },
  head: [
    [
      'meta',
      {
        property: 'og:image',
        content: '/textlogo.png'
      }
    ],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/json+oembed',
        href: 'https://paymenter.org/home.json'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: '/textlogo.png'
      }
    ]
  ]
}
