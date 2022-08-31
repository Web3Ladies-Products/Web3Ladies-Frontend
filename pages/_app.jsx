import HeadSeo from "../components/HeadSeo";
import siteMetadata from "../lib/data/siteMetadata";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadSeo
        title={`${siteMetadata.companyName} `}
        description={siteMetadata.description}
        canonicalUrl={`${siteMetadata.siteUrl}`}
        ogImageUrl={siteMetadata.siteLogo}
        ogTwitterImage={siteMetadata.siteLogo}
        ogType={"website"}
      ></HeadSeo>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
