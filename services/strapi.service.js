import { STRAPI_URL } from "../lib/constants";

// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    console.log(
      "🚀 ~ file: strapi.service.js ~ line 9 ~ checkStatus ~ resp",
      resp
    );
    return resp;
  }

  return parseJSON(resp).then((resp) => {
    console.log(
      "🚀 ~ file: strapi.service.js ~ line 14 ~ returnparseJSON ~ resp",
      resp
    );
    throw resp;
  });
};

const headers = {
  "Content-Type": "application/json",
};

const getBlogPosts = async ({ page, pageSize }) => {
  try {
    const blogPosts = await fetch(
      `${STRAPI_URL}/api/blogs?pagination[page]=${
        page ? page : 1
      }&pagination[pageSize]=${pageSize ? pageSize : 1}`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return blogPosts;
  } catch (error) {
    console.error(error);
  }
};

const getSortedBlogPosts = async ({ page, pageSize }) => {
  try {
    const blogPosts = await fetch(
      `${STRAPI_URL}/api/blogs?pagination[page]=${
        page ? page : 1
      }&pagination[pageSize]=${pageSize ? pageSize : 10}`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return blogPosts;
  } catch (error) {
    console.error(error);
  }
};

const searchBlogPosts = async ({ title }) => {
  try {
    const entries = await strapi.db.query("api::blog.article").findMany({
      select: ["title", "description", "slug"],
      where: {
        title: {
          $containsi: title,
        },
      },
      orderBy: { publishedAt: "createdAt" },
      populate: { category: true },
    });
    return entries;
  } catch (error) {
    console.error(error);
  }
};

const getPostBySlug = (slug) =>
  fetch(`${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}`, {
    headers,
    method: "GET",
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });

const getSimilarPosts = (author) =>
  fetch(`${STRAPI_URL}/api/blogs?filters[author][$eq]=${author}`, {
    headers,
    method: "GET",
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });

export const strapiService = {
  getBlogPosts,
  getPostBySlug,
  getSortedBlogPosts,
  searchBlogPosts,
  getSimilarPosts,
};
