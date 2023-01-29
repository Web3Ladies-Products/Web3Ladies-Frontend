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

const sendDonationRequest = async (data) => {
  try {
    const donationRequest = await fetch(`${STRAPI_URL}/api/donations`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then(checkStatus)
      .then(parseJSON);
    return donationRequest;
  } catch (error) {
    console.error(error);
  }
};

const sendPledge = async (data) => {
  try {
    const pledge = await fetch(`${STRAPI_URL}/api/pledges`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then(checkStatus)
      .then(parseJSON);
    return pledge;
  } catch (error) {
    console.error(error);
  }
};

const waitingList = async (data) => {
  try {
    const waitingList = await fetch(`${STRAPI_URL}/api/waiting-lists`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then(checkStatus)
      .then(parseJSON);
    return waitingList;
  } catch (error) {
    console.error(error);
    throw new Error(error?.error?.message);
  }
};

const contactRequest = async (data) => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
    throw new Error(error?.error?.message);
  }
};

const votingRequest = async (data) => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/award-votings`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
    throw new Error(error?.error?.message);
  }
};

const mentorshipRegisterRequest = async (formData, file) => {
  let data = new FormData();
  data.append("files.profile_image", file);
  data.append("data", JSON.stringify(formData));

  try {
    let reg = await fetch(`${STRAPI_URL}/api/mentorship-registrations`, {
      method: "POST",
      body: data,
    })
      .then(checkStatus)
      .then(parseJSON);
    return reg;
  } catch (error) {
    console.log(error.error);
    throw new Error(error?.error?.message);
  }
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
  sendDonationRequest,
  sendPledge,
  mentorshipRegisterRequest,
  waitingList,
  contactRequest,
  votingRequest,
};
