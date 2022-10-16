import { STRAPI_URL } from "../lib/constants";

// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};

const headers = {
  "Content-Type": "application/json",
};

const getHomePageData = async () => {
  try {
    const homePage = await fetch(`${STRAPI_URL}/api/home-page`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return homePage;
  } catch (error) {
    console.error(error);
  }
};

const getSponsorshipData = async () => {
  try {
    const sponsorship = await fetch(`${STRAPI_URL}/api/sponsorship`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return sponsorship;
  } catch (error) {
    console.error(error);
  }
};

const getPledgePageData = async () => {
  try {
    const pledgePage = await fetch(`${STRAPI_URL}/api/pledge-page`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return pledgePage;
  } catch (error) {
    console.error(error);
  }
};

const getMentorshipPageData = async () => {
  try {
    const mentorshipPage = await fetch(`${STRAPI_URL}/api/mentorship-page`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return mentorshipPage;
  } catch (error) {
    console.error(error);
  }
};

const getBlogPosts = async ({ page, pageSize, category }) => {
  try {
    const blogPosts = await fetch(
      `${STRAPI_URL}/api/blogs?pagination[page]=${
        page ? page : 1
      }&pagination[pageSize]=${pageSize ? pageSize : 10}&filter[category]=${
        category ? category : ""
      }`,
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

const searchBlogPosts = async (page, keyword) => {
  try {
    const searchData = await fetch(
      `${STRAPI_URL}/api/blogs?filters[title][$containsi]=${keyword}&pagination[page]=${
        page ? page : 1
      }`,
      {
        headers,
        method: "GET",
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return searchData;
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

const getPostsByCategory = (page, pageSize, category) =>
  fetch(
    `${STRAPI_URL}/api/blogs?pagination[page]=${
      page ? page : 1
    }&pagination[pageSize]=${
      pageSize ? pageSize : 10
    }&filters[category][$eq]=${category}`,
    {
      headers,
      method: "GET",
    }
  )
    .then(checkStatus)
    .then(parseJSON)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });

const getSimilarPosts = (author) => {
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
};

export const strapiService = {
  getBlogPosts,
  getPostBySlug,
  getPostsByCategory,
  getSortedBlogPosts,
  searchBlogPosts,
  getSimilarPosts,
  getHomePageData,
  getSponsorshipData,
  getPledgePageData,
  getMentorshipPageData,
};
