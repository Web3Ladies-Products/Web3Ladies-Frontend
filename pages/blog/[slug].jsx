import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import HeadSeo from "../../components/HeadSeo";
import Navbar from "../../components/layouts/Navbar";
import { convertDateToWords, getReadingTime } from "../../helpers";
import { useCopy } from "../../hooks/useCopy";
import siteMetadata from "../../lib/data/siteMetadata";
import Footer from "../../components/layouts/Footer";
import Badge from "../../components/Badge";
import markdownToHtml from "../../lib/markdownToHtml";
import { strapiService } from "../../services";
import Custom404Error from "../404";

const Slug = ({ article, notFound }) => {
  const src = (articleData) => {
    if (articleData?.imageUrl) {
      return articleData.imageUrl;
    } else {
      return "https://static.ghost.org/v3.0.0/images/ghost-logo.png";
    }
  };

  return notFound || !article ? (
    <Custom404Error customPageTitle={"Blog post"} />
  ) : (
    <>
      <HeadSeo
        title={`${article?.title} | ${siteMetadata.companyName} `}
        description={article?.description || siteMetadata.description}
        canonicalUrl={`${siteMetadata.siteUrl}/blog/${article?.slug}`}
        ogImageUrl={src(article)}
        ogType={"article"}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{"@context": "https://schema.org",
                          "@type": "Article",
                          "headline": "${article?.title}",
                          "image": [
                            "${src(article)}"
                          ],
                          "datePublished": "${article?.publishedAt}",
                          "author": [{
                              "@type": "Person",
                              "name": "${article?.author}"
                            }]
                        }`,
          }}
        ></script>
      </HeadSeo>
      <Navbar />
      <section>
        <div className="container" style={{ paddingTop: "0" }}>
          <>
            <div className="articles">
              <div className="article-header">
                <>
                  <div className="article-header--subscribe">
                    <Badge
                      badgeText={article.category}
                      textColor={"#FFFFFF"}
                      badgeBackground={"#7D0BFE"}
                    />
                    <span className="dot"></span>
                    <p>{article.readingTime}-min read</p>
                  </div>
                </>

                <div className="article-header--title">
                  <h1>{article?.title}</h1>
                </div>
                <div className="article-header--meta">
                  <span className="article-header--meta_title">
                    {article?.author}
                  </span>
                  <span className="dot"></span>
                  <span className="article-header--meta_date">
                    Published {convertDateToWords(article?.publishedAt)}
                  </span>
                </div>
              </div>
              <div className="article-body">
                <div className="article-body--image">
                  <figure>
                    <div className="image--wrapper">
                      <Image
                        loader={() => src(article)}
                        src={src(article)}
                        alt={article?.title}
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                        unoptimized={true}
                      />
                    </div>

                    <figcaption className="article-body--image_caption">
                      {article?.title}
                    </figcaption>
                  </figure>
                </div>
                <div className="article-body--content">
                  <div
                    id="article-content"
                    dangerouslySetInnerHTML={{
                      __html: article?.content,
                    }}
                  />
                </div>
              </div>
              <div className="article-footer">
                <div className="article-footer--subscribe">
                  {/* <h6>{article?.title}</h6> */}
                </div>
                <div className="article-footer--share">
                  {/* <span className="share-text">Share</span> */}
                  <ShareButtons article={article} style={{ display: "flex" }} />
                </div>
              </div>
            </div>
          </>

          {/* {similarArticles && similarArticles.length > 0 && (
            <>
              <div className="divider" />
              <div className="more-articles">
                <h2 className="more-acticles--title">
                  {article
                    ? `More posts from ${article?.author}`
                    : "Other Articles"}
                </h2>
                <ul className="more-acticles--list">
                  {similarArticles?.map((articleData) => (
                    <li
                      key={articleData.slug}
                      className="more-acticles--list_item"
                    >
                      <div className="more-acticles--list_item_image">
                        <Image
                          loader={() => src(articleData)}
                          src={src(articleData)}
                          alt={articleData?.title}
                          layout="fill"
                          objectFit="cover"
                          priority={true}
                          unoptimized={true}
                        />
                      </div>
                      <Link href={`/blog/${articleData.slug}`}>
                        <a>
                          <h2 className="more-acticles--list_item_title">
                            {articleData.title}
                          </h2>
                          <p className="more-acticles--list_item_description">
                            {articleData.description}
                          </p>
                          <div className="more-acticles--list_item_footer">
                            <span>{articleData.title}</span>
                            <span>
                              {convertDateToWords(articleData.publishedAt)}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )} */}
          {article && (
            <div className="floating-share-buttons">
              <ShareButtons article={article} />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

const ShareButtons = ({ article, style }) => {
  const { copyToClipBoard, copied } = useCopy();

  return (
    <div className="share-buttons-container" style={style}>
      <a
        href={`https://www.facebook.com/v5.0/dialog/share?app_id=542599432471018&href=${siteMetadata.siteUrl}/blog/${article?.slug}&display=page&quote=${article?.title}`}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src="/assets/images/facebook.svg"
          width={12}
          height={12}
          alt="facebook"
        />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${siteMetadata.siteUrl}/blog/${article?.slug}/%0A&text=${article?.title}%0A&via=${siteMetadata.twitterHandle}`}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src="/assets/images/twitter.svg"
          width={12}
          height={12}
          alt="twitter"
        />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?url=${siteMetadata.siteUrl}/blog/${article?.slug}&title=${article?.title}&summary=${article?.description}&source=${siteMetadata.siteUrl}`}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src="/assets/images/linkedin.svg"
          width={12}
          height={12}
          alt="linkedin"
        />
      </a>
      <span className="link" onClick={() => copyToClipBoard(location.href)}>
        {copied ? (
          <Image
            src="/assets/images/check-line.svg"
            width={12}
            height={12}
            alt="copy"
          />
        ) : (
          <Image
            src="/assets/images/link.svg"
            width={12}
            height={12}
            alt="copy"
          />
        )}
      </span>
    </div>
  );
};

export default Slug;

export async function getStaticPaths() {
  const response = await strapiService.getBlogPosts(1000);
  const paths = response.data.map((article) => {
    return {
      params: {
        slug: article.attributes.slug,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await strapiService.getPostBySlug(params.slug);
    const data = response[0]?.attributes;

    if (data) {
      const content = await markdownToHtml(data?.content || "");
      const imageUrl = data?.featured_image_url;
      const readingTime = getReadingTime(data?.content);
      return {
        props: {
          article: {
            ...data,
            content,
            imageUrl,
            readingTime,
          },
        },
      };
    }
    return {
      props: {
        article: null,
        notFound: true,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        article: null,
        notFound: true,
      },
    };
  }
}
