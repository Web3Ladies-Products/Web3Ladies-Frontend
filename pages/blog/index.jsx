import React from "react";
import { useRouter } from "next/router";
import Featured from "../../components/blog/Featured";
import Tabs from "../../components/blog/Tabs";
import Highlights from "../../components/Highlights";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import blogData from "../api/blog.json";
import Pagination from "../../components/Pagination";
import { strapiService } from "../../services";
import Article from "../../components/blog/Article";

const Blog = () => {
  const allPosts = blogData.blog;
  const router = useRouter();
  const tab = router.query.tab || "all";
  const [activeTabContent, setActiveTabContent] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  // const paginationData = blogData.paginationData;
  const [paginationData, setPaginationData] = React.useState(null);

  const [featuredPost, setFeaturedPost] = React.useState(null);
  function onChange(key) {
    router.push(`/blog?tab=${key}`);
  }

  const updateData = (data) => {
    console.log("🚀 ~ file: index.jsx ~ line 25 ~ updateData ~ data", data);
    // setActiveTabContent(data);
  };

  const goToArticle = (slug) => {
    router.push(`/blog/${slug}`);
  };

  const getPosts = async () => {
    const res = await strapiService.getBlogPosts(tab);
    console.log("🚀 ~ file: index.jsx ~ line 38 ~ getPosts ~ res", res);
    setPosts(res.data);
    setPaginationData(res.meta.pagination);
    const featuredPost = res.data.filter(
      (item) => item["attributes"].isFeatured === true
    );
    console.log(
      "🚀 ~ file: index.jsx ~ line 44 ~ getPosts ~ featuredPost",
      featuredPost
    );
    setFeaturedPost(featuredPost[0]);
  };

  React.useEffect(() => {
    if (!tab || tab === "all") {
      setActiveTabContent(allPosts);
    } else {
      const content = allPosts.filter((post) => post.category === tab);
      setActiveTabContent(content);
    }
  }, [tab]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getPosts();
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="blog"
        style={{ paddingTop: "0", minHeight: "calc(100vh - 530px)" }}
      >
        <div>
          <Tabs onChange={onChange} />
          <Featured featuredPost={featuredPost} />
          <Article HIGHLIGHTS_ITEMS={posts} handleClick={goToArticle} />
          <Highlights
            title={""}
            HIGHLIGHTS_ITEMS={activeTabContent}
            handleClick={goToArticle}
          />
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

// Blog.getInitialProps = async (ctx) => {
//   try {
//     const blogPosts = await strapiService.getBlogPosts();
//     console.log(
//       "🚀 ~ file: index.jsx ~ line 89 ~ Blog.getInitialProps= ~ blogPosts",
//       blogPosts
//     );
//     return {
//       posts: blogPosts.data,
//       meta: blogPosts.meta,
//     };
//   } catch (error) {
//     return { error };
//   }
// };

export default Blog;

export async function getStaticPaths() {
  const blogPosts = await strapiService.getBlogPosts();
  console.log(
    "🚀 ~ file: index.jsx ~ line 89 ~ getStaticPaths= ~ blogPosts",
    blogPosts
  );
  const paths = blogPosts.data.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}
