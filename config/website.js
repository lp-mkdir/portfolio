const meta = {
  // Metadata
  siteTitle: `Luis Kunz | Frontend Web Developer`,
  siteDescription: `Your website description (Google Optimal: 50–160 characters, length will vary depending on the situation,)`,
  siteHeadline: `Headline`,
  siteTitleAlt: `Luis Kunz`,
  siteShortName: `Luis Kunz`,
  siteUrl: `https://nomatives.com`,
}

const social = {
  siteLogo: `${meta.siteUrl}/social/avatar.png`,
  siteLogoSmall: `${meta.siteUrl}/social/avatar_small.png`,
  siteBanner: `${meta.siteUrl}/social/banner_`, // Locale ending + filetype gets added in SEO component
  siteBannerWidth: `776`,
  siteBannerHeight: `382`,
  instagram: `nomatives`,
  facebook: `nomatives`,
  twitter: `nomatives`,
}

const website = {
  ...meta,
  ...social,
  googleAnalyticsID: `G-XXXXK2SZZZ`,

  // Manifest
  themeColor: `#1D4ED8`,
  backgroundColor: `#fff`,
}

module.exports = website
