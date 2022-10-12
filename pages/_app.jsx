import React from "react";
import HeadSeo from "../components/HeadSeo";
import siteMetadata from "../lib/data/siteMetadata";
import "../styles/styles.scss";
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    TagManager.initialize({ gtmId: "G-FMMXX7EJPE" });
  }, []);

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
