import React from "react";
import { useRouter } from "next/router";
import Featured from "../../components/blog/Featured";
import Tabs from "../../components/blog/Tabs";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Pagination from "../../components/Pagination";
import { strapiService } from "../../services";
import Article from "../../components/blog/Article";
import Banner from "../../components/blog/Banner";
import HeadSeo from "../../components/HeadSeo";
import siteMetadata from "../../lib/data/siteMetadata";

const Blog = ({ blogData }) => {
  const router = useRouter();
  const tab = router.query.tab || "all";
  const [activeTabContent, setActiveTabContent] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [paginationData, setPaginationData] = React.useState(null);

  const [featuredPost, setFeaturedPost] = React.useState(null);
  function onChange(key) {
    router.push(`/blog?tab=${key}`);
  }

  const updateData = (data) => {
    getBlogPosts(data, 10);
  };

  const handleSearch = async (title) => {
    await strapiService
      .searchBlogPosts(title)
      .then((res) => {
        setPosts(res.data);
        setPaginationData(res.meta?.pagination);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    if (!tab || tab === "all") {
      setActiveTabContent(posts);
    } else {
      const content = posts.filter(
        (post) => post["attributes"].category === tab
      );
      setActiveTabContent(content);
    }
  }, [tab, posts]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setPosts(blogData.data);
    setPaginationData(blogData.meta?.pagination);
    const featuredPost = blogData.data?.filter(
      (item) => item["attributes"].isFeatured === true
    );
    if (featuredPost) {
      setFeaturedPost(featuredPost[0]);
    }
  }, [blogData]);

  return (
    <>
      <HeadSeo
        title={`${siteMetadata.companyName} | Blog`}
        description={siteMetadata.description}
        canonicalUrl={`${siteMetadata.siteUrl}`}
        ogImageUrl={`${siteMetadata.siteUrl}/logo.jpg`}
        ogTwitterImage={`${siteMetadata.siteUrl}/logo.jpg`}
        ogType={"website"}
      ></HeadSeo>

      <Navbar />
      <section
        className="blog"
        style={{ paddingTop: "0", minHeight: "calc(100vh - 530px)" }}
      >
        <div>
          <Tabs onChange={onChange} handleSearch={handleSearch} />
          {tab && tab !== "all" && <Banner category={tab} />}
          <Featured featuredPost={featuredPost} />
          <Article HIGHLIGHTS_ITEMS={activeTabContent} />
          {activeTabContent && (
            <Pagination
              paginationData={paginationData}
              updateData={updateData}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const blogData = await strapiService.getBlogPosts(1, 20);
  return {
    props: {
      blogData,
    },
  };
}
