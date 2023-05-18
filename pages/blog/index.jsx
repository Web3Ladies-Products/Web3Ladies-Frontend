import React, { useState } from "react";
import { useRouter } from "next/router";
import Tabs from "../../components/blog/Tabs";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Pagination from "../../components/Pagination";
import { strapiService } from "../../services";
import Article from "../../components/blog/Article";
import Banner from "../../components/blog/Banner";
import HeadSeo from "../../components/HeadSeo";
import siteMetadata from "../../lib/data/siteMetadata";
import NoData from "../../components/NoData";

const Blog = ({ blogData }) => {
  const router = useRouter();
  const tab = router.query.tab || "all";
  const [posts, setPosts] = React.useState([]);
  const [blogDataState, setBlogDataState] = React.useState(blogData);
  const [paginationData, setPaginationData] = React.useState(null);
  const [pageDetails, setPageDetails] = useState({});
  const [featuredPost, setFeaturedPost] = React.useState(null);
  function onChange(key) {
    router.push(`/blog?tab=${key}`);
  }

  const updateData = async (data) => {
    console.log(data);
    const fetchUpdate = await strapiService.getBlogPosts({
      page: data,
    });
    console.log(fetchUpdate);
    setBlogDataState(fetchUpdate);
  };

  const handleSearch = async (title) => {
    router.push(`/blog/search?keyword=${title}`);
  };

  React.useEffect(() => {
    async function handleRouteChange() {
      const blogTestData = await strapiService.getAllBlogPosts();
      console.log(blogTestData.meta.pagination);
      setPageDetails(blogTestData.meta.pagination);
    }
    handleRouteChange();

    window.scrollTo(0, 0);
    if (blogDataState?.data) {
      setPosts(blogDataState.data);
      setPaginationData(blogDataState.meta?.pagination);
      const featuredPost = blogDataState?.data?.filter(
        (item) => item["attributes"].isFeatured === true
      );
      if (featuredPost) {
        setFeaturedPost(featuredPost[0]);
      }
    } else {
      setPosts(blogDataState);
      setPaginationData(null);
      const featuredPost = blogDataState?.filter(
        (item) => item["attributes"].isFeatured === true
      );
      if (featuredPost) {
        setFeaturedPost(featuredPost[0]);
      }
    }
  }, [blogDataState, blogData]);

  return (
    <>
      <HeadSeo
        title={`${siteMetadata.companyName} | Blog`}
        description={siteMetadata.description}
        canonicalUrl={`${siteMetadata.siteUrl}`}
        ogImageUrl={`${siteMetadata.siteUrl}/assets/images/logo.jpg`}
        ogTwitterImage={`${siteMetadata.siteUrl}/assets/images/logo.jpg`}
        ogType={"website"}
      ></HeadSeo>

      <Navbar />
      <section
        className="blog"
        style={{ paddingTop: "0", minHeight: "calc(100vh - 530px)" }}
      >
        <div>
          <Tabs onChange={onChange} handleSearch={handleSearch} />
          {tab && tab !== "all" && (
            <Banner type={"category"} category={tab} />
          )}{" "}
          {posts?.length > 0 ? (
            <Article HIGHLIGHTS_ITEMS={posts} featuredPost={featuredPost} />
          ) : (
            <NoData
              imageSrc={"/assets/images/no-blog.svg"}
              title={"Nothing to read now"}
              description={"Please check back later"}
            />
          )}
          {posts?.length > 0 && paginationData && (
            <Pagination
              paginationData={paginationData}
              updateData={updateData}
              pageDetails={pageDetails}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;

Blog.getInitialProps = async (ctx) => {
  if (!ctx.query.tab || ctx.query.tab === "all") {
    const blogData = await strapiService.getBlogPosts(1, 10);
    return {
      blogData,
    };
  }

  const blogData = await strapiService.getPostsByCategory(1, 10, ctx.query.tab);
  return {
    blogData,
  };
};
