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

const Blog = ({}) => {
  const allPosts = blogData.blog;
  const router = useRouter();
  const tab = router.query.tab || "all";
  const paginationData = blogData.paginationData;
  const [activeTabContent, setActiveTabContent] = React.useState([]);

  const [featuredPost, setFeaturedPost] = React.useState(
    activeTabContent.filter((post) => post.featured)[0]
  );
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
    return res;
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
    const featuredPost = blogData.blog.filter((item) => item.featured === true);
    setFeaturedPost(featuredPost[0]);
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

export default Blog;
