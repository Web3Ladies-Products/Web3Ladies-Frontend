import { http } from "../helpers";
import { STRAPI_URL } from "../lib/constants";

const getBlogPosts = async () =>
  await http({
    // url: `${STRAPI_URL}/blogs`,
    url: `https://web3ladies-cms.herokuapp.com/api/blogs`,
    type: "GET",
  });

const getPostBySlug = async (slug) =>
  await http({
    url: `https://web3ladies-cms.herokuapp.com/api/blogs/${slug}`,
    type: "GET",
  });

export const strapiService = {
  getBlogPosts,
  getPostBySlug,
};
