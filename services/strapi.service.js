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

const getCohortPageData = async () => {
  try {
    const cohortPage = await fetch(`${STRAPI_URL}/api/cohort-page`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return cohortPage;
  } catch (error) {
    console.error(error);
  }
};

const getTracks = async () => {
  try {
    const trackPage = await fetch(`${STRAPI_URL}/api/tracks`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return trackPage;
  } catch (error) {
    console.error(error);
  }
};

const getTracksBySlug = async (slug) => {
  try {
    const trackPage = await fetch(
      `${STRAPI_URL}/api/tracks?filters[slug][$eq]=${slug}`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return trackPage;
  } catch (error) {
    console.error(error);
  }
};

const getCurrentCohortBySlug = async (slug) => {
  try {
    const cohortPage = await fetch(
      `${STRAPI_URL}/api/present-cohorts?filters[slug][$eq]=${slug}`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);

    return cohortPage;
  } catch (error) {
    console.error(error);
  }
};

const getCurrentCohorts = async () => {
  try {
    const currentCohort = await fetch(`${STRAPI_URL}/api/present-cohorts`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return currentCohort;
  } catch (error) {
    console.error(error);
  }
};

const getPastCohortBySlug = async (slug) => {
  try {
    const cohortPage = await fetch(
      `${STRAPI_URL}/api/past-cohorts?filters[slug][$eq]=${slug}`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return cohortPage;
  } catch (error) {
    console.error(error);
  }
};

const getPastCohorts = async () => {
  try {
    const pastCohort = await fetch(`${STRAPI_URL}/api/past-cohorts`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return pastCohort;
  } catch (error) {
    console.error(error);
  }
};

const getUpcomingCohortBySlug = async (slug) => {
  try {
    const cohortPage = await fetch(
      `${STRAPI_URL}/api/Upcoming-cohorts?filters[slug][$eq]=${slug}`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return cohortPage;
  } catch (error) {
    console.error(error);
  }
};

const getUpcomingCohorts = async () => {
  try {
    const currentCohort = await fetch(`${STRAPI_URL}/api/Upcoming-cohorts`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return currentCohort;
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

// BLOG POST

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

// DONATIONS
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

//PLEDGE

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

//WAITINGLIST

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
    throw new Error(error?.error?.message);
  }
};

const getMentorshipSuccess = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/mentorship-success`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getAwardSuccess = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/award-success`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getMentorshipClosed = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/mentorship-closed`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

//AWARDS

const getAwardData = async () => {
  try {
    const award = await fetch(`${STRAPI_URL}/api/award`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return award;
  } catch (error) {
    console.error(error);
  }
};

const getNominees = async () => {
  try {
    const nominees = await fetch(`${STRAPI_URL}/api/award-nominees`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return nominees;
  } catch (error) {
    console.error(error);
  }
};

const getNomineeBySlug = async (slug) => {
  try {
    const nominee = await fetch(
      `${STRAPI_URL}/api/award-nominees?filters[slug][$eq]=${slug}`,
      {
        headers,
        method: "GET",
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return nominee;
  } catch (error) {
    console.error(error);
  }
};

// BOOT CAMP

const getBootCampPageData = async () => {
  try {
    const bootcampPage = await fetch(`${STRAPI_URL}/api/bootcamp-page`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return bootcampPage;
  } catch (error) {
    console.error(error);
  }
};

const getCurrentBootCampBySlug = async (slug) => {
  try {
    const bootcamp = await fetch(
      `${STRAPI_URL}/api/current-bootcamps?filters[slug][$eq]=${slug}`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return bootcamp;
  } catch (error) {
    console.error(error);
  }
};

const getCurrentBootCamp = async () => {
  try {
    const currentBoot = await fetch(`${STRAPI_URL}/api/current-bootcamps`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return currentBoot;
  } catch (error) {
    console.error(error);
  }
};

const getPastBootCampBySlug = async (slug) => {
  try {
    const pastBootCamp = await fetch(
      `${STRAPI_URL}/api/past-bootcamps?filters[slug][$eq]=${slug}`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return pastBootCamp;
  } catch (error) {
    console.error(error);
  }
};

const getPastBootCamps = async () => {
  try {
    const pastbootCamp = await fetch(`${STRAPI_URL}/api/past-bootcamps`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return pastbootCamp;
  } catch (error) {
    console.error(error);
  }
};

const getUpcomingBootCampsBySlug = async (slug) => {
  try {
    const upcomingbootCamp = await fetch(
      `${STRAPI_URL}/api/Upcoming-bootcamps?filters[slug][$eq]=${slug}`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return upcomingbootCamp;
  } catch (error) {
    console.error(error);
  }
};

const getUpcomingBootCamps = async () => {
  try {
    const currentBootCamp = await fetch(
      `${STRAPI_URL}/api/Upcoming-bootcamps`,
      {
        method: "GET",
        headers,
      }
    )
      .then(checkStatus)
      .then(parseJSON);
    return currentBootCamp;
  } catch (error) {
    console.error(error);
  }
};

const getFeaturedMentee = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/featured-mentee`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getFreeHand = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/free-hand`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);

    return res;
  } catch (error) {
    console.error(error);
  }
};

const getFQA = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/frequently-asked-question`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getJoinAsMentor = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/join-as-mentor`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getWorkAssistance = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/work-assistance`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getWhyLearn = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/why-learn`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getContactPage = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/contact-page`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getMentor = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/mentor`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const strapiService = {
  getBootCampPageData,
  getBlogPosts,
  getNomineeBySlug,
  getAwardData,
  getNominees,
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
  getCohortPageData,
  getCurrentCohortBySlug,
  getCurrentCohorts,
  getPastCohorts,
  getPastCohortBySlug,
  getUpcomingCohortBySlug,
  getUpcomingCohorts,
  getAwardSuccess,
  getCurrentBootCampBySlug,
  getCurrentBootCamp,
  getPastBootCampBySlug,
  getPastBootCamps,
  getUpcomingBootCamps,
  getUpcomingBootCampsBySlug,

  getMentorshipSuccess,
  getMentorshipClosed,
  getTracks,
  getTracksBySlug,
  getFeaturedMentee,
  getFreeHand,
  getFQA,
  getJoinAsMentor,
  getWorkAssistance,
  getWhyLearn,
  getContactPage,
  getMentor,
};
