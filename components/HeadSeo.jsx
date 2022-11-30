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
  const year = new Date().getFullYear();

  return (
    <Head>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content="Web3Ladies" />
      <meta name="copyright" content={`${year} Web3Ladies`} />
      <meta name="keywords" content="community web3 ladies Africa" />
      {/* twitter metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={
          decodeURIComponent(ogTwitterImage || ogImageUrl) ||
          siteMetadata.siteLogoSquare
        }
      />

      {/* canonical link */}
      <link rel="canonical" href={canonicalUrl} />
      {/* open graph metadata */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:type" content={ogType} key="og-type" />
      <meta property="og:title" content={title} key="og-title" />
      <meta
        property="og:description"
        content={description}
        key="og-description"
      />
      <meta
        property="og:image"
        content={decodeURIComponent(ogImageUrl) || siteMetadata.siteLogoSquare}
        key="og-image"
      />
      <meta property="og:url" content={canonicalUrl} key="og-url" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
      {children}
    </Head>
  );
};

export default HeadSeo;
