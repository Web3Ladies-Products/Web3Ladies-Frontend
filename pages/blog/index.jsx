import React from "react";
import Tabs from "../../components/blog/tabs";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <section
        className="blog-page"
        style={{ paddingTop: "0", minHeight: "calc(100vh - 530px)" }}
      >
        <div className="container">{/* <Tabs /> */}</div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
