import React from "react"
import { Helmet } from "react-helmet"

type HeadTypes = {
  title?: string
  description?: string
  siteUrl?: string
  type?: string
  image?: string
  path?: string
  keywords?: string[]
  lang?: string
  defaultTitle?: string
}

const DocumentHead: React.FC<HeadTypes> = ({
  title,
  description,
  siteUrl,
  path,
  image,
  type,
  keywords,
  lang = "en",
  defaultTitle,
}) => {
  let optionalProps = {}
  if (defaultTitle) {
    optionalProps = { defaultTitle }
  }
  return (
    <Helmet
      title={title}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${siteUrl}/images/favicon-16x16.png`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${siteUrl}/images/favicon-32x32.png`,
        },
      ]}
      {...optionalProps}
    >
      <html lang={lang} />
      <meta name="gatsby-theme" content="@hawkstein/gatsby-theme-schedule" />
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}
      {image && <meta name="image:alt" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      {/** It might be a bit slap dash but I'm going to assume if you've set 'type' then you want social media output */}
      {type && (
        <>
          <meta property="og:type" content={type} />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={`${siteUrl}${path ? path : ""}`} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:image:alt" content={description}></meta>

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:url" content={`${siteUrl}${path ? path : ""}`} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content={description}></meta>
        </>
      )}
    </Helmet>
  )
}

export default DocumentHead
