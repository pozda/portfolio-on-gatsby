import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import headerImg from '../../../assets/images/headerImg.jpg'

const SEOComponent = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name={'description'} content={seo.description} />
      <meta name={'image'} content={seo.image} />

      {seo.url && <meta property={'og:url'} content={seo.url} />}

      {(article ? true : null) && <meta property={'og:type'} content={'article'} />}

      {seo.title && <meta property={'og:title'} content={seo.title} />}

      {seo.description && (
        <meta property={'og:description'} content={seo.description} />
      )}

      { headerImg && <meta property={'og:image'} content={seo.siteUrl + headerImg} /> }

      <meta name={'twitter:card'} content={'summary_large_image'} />
      {twitterUsername && (
        <meta name={'twitter:creator'} content={twitterUsername} />
      )}

      {seo.title && <meta name={'twitter:title'} content={seo.title} />}

      {seo.description && (
        <meta name={'twitter:description'} content={seo.image | seo.siteUrl + headerImg} />
      )}

      {seo.image && <meta name={'twitter:image'} content={seo.} />}
    </Helmet>
  )
}

export default SEOComponent

SEOComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
}

SEOComponent.defaultProps = {
  title: null,
  description: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        twitterUsername
      }
    }
  }
`