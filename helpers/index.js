export const convertDateToWords = (date) => {
  // pattern: date/month/year e.g 12 May, 2022
  let dob = new Date(date);
  const dobArr = dob.toDateString().split(" ");
  const dobFormat = `${dobArr[2]} ${dobArr[1]}, ${dobArr[3]}`;
  return dobFormat;
};

export const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
};

export const http = async (requestDetails) => {
  const response = await fetch(requestDetails.url, {
    method: requestDetails.type,
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(requestDetails.data),
  });
  const res = await response.json();
  return res;
};
