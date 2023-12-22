import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import websiteConfig from "config/websiteConfig"

import SchemaOrg from "~/components/seo/SchemaOrg"
import defaultMetaImage from "../../../static/images/metaImage.jpg"

function SEO({
  siteMetadata: seo,
  metaImage,
  isBlogPost,
  seoData = { data: {} },
  title = seoData.data.seoTitle || websiteConfig.siteTitle,
  description = seoData.seoDescription || seo.description,
  image = seoData.data.seoImage || `${seo.canonicalUrl}${metaImage || defaultMetaImage}`,
  url = seoData.url ? `${seo.canonicalUrl}${seoData.url}` : seo.canonicalUrl,
  datePublished = isBlogPost ? seoData.data.postDate : false,
}) {
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={seo.canonicalUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.title}
      />
    </>
  )
}

function SEOWithQuery(props) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          author
          organization {
            name
            url
            logo
          }
        }
      }
    }
  `)
  return <SEO siteMetadata={siteMetadata} {...props} />
}

export default SEOWithQuery
