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
import SearchResults from "../../components/blog/SearchResults";
import NoData from "../../components/NoData";

const Blog = ({ blogData }) => {
  const router = useRouter();
  const tab = router.query.tab || "all";
  const [posts, setPosts] = React.useState([]);
  const [paginationData, setPaginationData] = React.useState(null);
  const [searchResults, setSearchResults] = React.useState(null);
  const [isSearch, setIsSearch] = React.useState(false);

  const [featuredPost, setFeaturedPost] = React.useState(null);
  function onChange(key) {
    router.push(`/blog?tab=${key}`);
  }

  const updateData = (data) => {
    strapiService.getBlogPosts(data, 10);
  };

  const handleSearch = async (title) => {
    await strapiService
      .searchBlogPosts(title)
      .then((res) => {
        setIsSearch(true);
        setSearchResults(res.data);
        setPaginationData(res.meta?.pagination);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (blogData?.data) {
      setPosts(blogData.data);
      setPaginationData(blogData.meta?.pagination);
      const featuredPost = blogData?.data?.filter(
        (item) => item["attributes"].isFeatured === true
      );
      if (featuredPost) {
        setFeaturedPost(featuredPost[0]);
      }
    } else {
      setPosts(blogData);
      setPaginationData(null);
      const featuredPost = blogData?.filter(
        (item) => item["attributes"].isFeatured === true
      );
      if (featuredPost) {
        setFeaturedPost(featuredPost[0]);
      }
    }
  }, [blogData]);

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
          {!isSearch && (
            <Tabs onChange={onChange} handleSearch={handleSearch} />
          )}
          {tab && tab !== "all" && <Banner type={"category"} category={tab} />}
          {isSearch && searchResults ? (
            <>
              <SearchResults
                results={searchResults}
                handleSearch={() => {
                  setIsSearch(false);
                  setSearchResults(null);
                }}
              />
            </>
          ) : posts?.length > 0 ? (
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
