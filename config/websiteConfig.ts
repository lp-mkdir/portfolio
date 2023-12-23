const websiteConfig = {
  siteTitle: `Luis Pacheco - Front-End Developer & UX Designer`, // Navigation and Site Title
  siteTitleAlt: `The personal website of Luis Pacheco`, // Alternative Site title for SEO
  siteTitleShort: `luispacheco`, // short_name for manifest
  siteUrl: process.env.ROOT_URL || `https://lpmkdir.com`, // Domain of your site. No trailing slash!
  lang: `en`, // Language Tag on <html> element
  pathPrefix: `/`,
  siteLogo: `images/logo.png`, // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription: `Contact Luis to co-create or create and design your Website/ Landing Page or simply get in touch with him for new project ideas and expand the network`,
  author: `Luis Pacheco`, // Author for schemaORGJSONLD
  organization: `Luis Pacheco`,

  ogSiteName: `Luis Pacheco`, // Facebook Site Name
  ogLanguage: `en_US`,

  // Manifest and Progress color
  themeColor: `#3B82F6`,
  backgroundColor: `#fafafa`,

  // Social component
  github: `https://github.com/lp-mkdir/`,
  linkedin: `https://www.linkedin.com/in/luis-eduardo-pacheco/`,

  // Google Analytics
  ga4ID: `G-ZGGBNLYQ2Q`,
};

export default websiteConfig;
