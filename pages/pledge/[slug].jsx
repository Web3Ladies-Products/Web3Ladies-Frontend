import React from "react";
import HeadSeo from "../../components/HeadSeo";
import { WEB3LADIES_URL } from "../../lib/constants";
import siteMetadata from "../../lib/data/siteMetadata";

const PledgeBadge = ({ imageUrl, pageUrl }) => {
  return (
    <>
      <HeadSeo
        title={`Pledge Badge | ${siteMetadata.companyName} `}
        description={siteMetadata.description}
        // canonicalUrl={`${siteMetadata.siteUrl}/pledge/${article?.slug}`}
        ogImageUrl={decodeURIComponent(imageUrl)}
        ogType={"article"}
      >
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{"@context": "https://schema.org",
                      "@type": "Article",
                      "headline": "${article?.title}",
                      "image": [
                        "${decodeURIComponent(imageUrl)}"
                      ],
                      "datePublished": "${article?.publishedAt}",
                      "author": [{
                          "@type": "Person",
                          "name": "${article?.author}"
                        }]
                    }`,
          }}
        ></script> */}
      </HeadSeo>
      <div></div>
    </>
  );
};

export default PledgeBadge;

export async function getServersideProps(ctx) {
  const { data: imageUrl } = ctx.query;
  console.log(
    "🚀 ~ file: [slug].jsx ~ line 12 ~ getServersideProps ~ imageUrl",
    imageUrl
  );
  return {
    props: {
      imageUrl,
      pageUrl: `${WEB3LADIES_URL}/share/${imageUrl}`,
    },
  };
}
