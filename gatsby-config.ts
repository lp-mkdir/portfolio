import {GatsbyConfig} from 'gatsby'

import websiteConfig from 'config/websiteConfig'

import linkResolver from './src/utils/linkResolver'
import htmlSerializer = require('./src/utils/htmlSerializer')
import homepage = require('./config/custom_types/homepage.json')
import about = require('./config/custom_types/about.json')
import project = require('./config/custom_types/project.json')
import blogpost = require('./config/custom_types/blogpost.json')
 
const { siteUrl, siteTitle, siteDescription, author, siteLogo, organization, ga4ID } = websiteConfig

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
    siteUrl: siteUrl,
    title: siteTitle,
    description: siteDescription,
    keywords: [`Front End Developer`, `UX Designer`, `React Developer`],
    author: author,
    canonicalUrl: siteUrl,
    image: siteLogo,
    organization: {
      name: organization,
      url: siteUrl,
      logo: siteLogo,
    },
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
        background_color: `#fff`,
        theme_color: `#1E40AF`,
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
        linkResolver,
        htmlSerializer: (type, element, content) =>
          htmlSerializer(type, element, content),
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
        trackingIds: [ga4ID],
        pluginConfig: {
          head: true,
          exclude: [`/404/*`, `/preview/*`, `/en/imprint`, `/impressum`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          siteInfo: site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({allSitePage: {nodes}}) =>
          nodes.map(page => ({...page})),
        serialize: ({path}) => {
          if (path.startsWith(`/blog/`)) {
            return {
              url: path,
              changefreq: `weekly`,
              priority: 0.7,
            }
          }
          if (path.startsWith(`/project/`)) {
            return {
              url: path,
              changefreq: `monthly`,
              priority: 0.7,
            }
          }
          return {
            url: path,
            changefreq: `monthly`,
            priority: 0.5,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: websiteConfig.ga4ID, // leave empty if you want to disable the tracker
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
