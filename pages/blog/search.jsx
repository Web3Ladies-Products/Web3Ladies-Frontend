import { useRouter } from "next/router";
import React from "react";
import { strapiService } from "../../services";

const Search = () => {
  return <div>search</div>;
};

export default Search;

// export async function getStaticProps(ctx) {
//   const keyword = ctx.query.keyword;
//   const blogData = await strapiService.searchBlogPosts(title);
//   return {
//     props: {
//       blogData,
//     },
//   };
// }
