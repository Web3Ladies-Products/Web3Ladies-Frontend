import Head from "next/head";
import siteMetadata from "../lib/data/siteMetadata";

const HeadSeo = ({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogImageUrl,
  ogType,
  children,
}) => {
  return (
    <Head>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      {/* twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={decodeURIComponent(ogTwitterImage)} />
      {/* canonical link */}
      <link rel="canonical" href={canonicalUrl} />
      {/* open graph metadata */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={decodeURIComponent(ogImageUrl)} />
      <meta property="og:url" content={canonicalUrl} />
      {children}
    </Head>
  );
};

export default HeadSeo;
