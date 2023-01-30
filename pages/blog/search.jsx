import { useRouter } from "next/router";
import React from "react";
import SearchResults from "../../components/blog/SearchResults";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Pagination from "../../components/Pagination";
import { strapiService } from "../../services";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const keyword = router.query.keyword;
  const [posts, setPosts] = React.useState([]);
  const [paginationData, setPaginationData] = React.useState(null);

  React.useEffect(() => {
    setPosts(searchResults.data);
    setPaginationData(searchResults.meta?.pagination);
  }, [searchResults]);

  const updateData = async (data) => {
    const searchResults = await strapiService.searchBlogPosts(data, keyword);
    setPosts(searchResults.data);
    setPaginationData(searchResults.meta?.pagination);
  };

  return (
    <>
      <Navbar />
      <SearchResults
        results={posts}
        handleSearch={() => router.push("/blog")}
      />
      {posts.length > 0 && paginationData && (
        <Pagination
          paginationData={searchResults.meta.pagination}
          updateData={updateData}
        />
      )}
      <Footer />
    </>
  );
};

export default Search;

Search.getInitialProps = async (ctx) => {
  const searchResults = await strapiService.searchBlogPosts(
    1,
    ctx.query.keyword
  );
  return {
    searchResults,
  };
};
