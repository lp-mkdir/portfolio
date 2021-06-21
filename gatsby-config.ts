import { GatsbyConfig } from "gatsby"
import { site } from "./src/constants/meta"

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require(`./config/website`)
const linkResolver = require(`./src/utils/linkResolver`)
const htmlSerializer = require(`./src/utils/htmlSerializer`)
const homepage = require(`./config/custom_types/homepage.json`)
const about = require(`./config/custom_types/about.json`)
const project = require(`./config/custom_types/project.json`)
const blogpost = require(`./config/custom_types/blogpost.json`)

const gatsbyConfig: GatsbyConfig = {
  flags: {
    FAST_DEV: false,
    PRESERVE_WEBPACK_CACHE: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    FUNCTIONS: false,
    DEV_SSR: false,
  },
  siteMetadata: {
    siteTitle: site.title,
    siteTitleDefault: site.titleDefault,
    siteUrl: site.url,
    siteDescription: site.description,
    siteImage: site.image,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luis Kunz`,
        short_name: `Luis Kunz`,
        lang: `en-gb`,
        start_url: `/`,
        background_color: `#f0f0f0`,
        theme_color: `#2099d1`,
        display: `standalone`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `luiskunz`,
        accessToken: process.env.PRISMIC_API_KEY,
        linkResolver: (doc) => linkResolver(doc),
        htmlSerializer: (type, element, content) => htmlSerializer(type, element, content),
        schemas: {
          homepage,
          about,
          project,
          blog_post: blogpost,
          contac: {},
          homeapge: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [config.googleAnalyticsID],
        pluginConfig: {
          head: true,
          exclude: [`/404/*`, `/preview/*`, `/en/imprint`, `/impressum`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/en/offline-plugin-app-shell-fallback`, `/imprint`, `/en/imprint`],
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => site.url,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => allPages.map((page) => ({ ...page })),
        serialize: ({ path, modifiedGmt }) => ({
          url: path,
          // lastmod: modifiedGmt,
        }),
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: config.googleAnalyticsID, // leave empty if you want to disable the tracker
          cookieName: `gatsby-gdpr-google-analytics`, // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: [`production`, `development`],
      },
    },
    `gatsby-plugin-lodash`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-offline`,
  ],
}

export default gatsbyConfig
