export const convertDateToWords = (date) => {
  // pattern: date/month/year e.g 12 May, 2022
  let dob = new Date(date);
  const dobArr = dob.toDateString().split(" ");
  const dobFormat = `${dobArr[2]} ${dobArr[1]}, ${dobArr[3]}`;
  return dobFormat;
};

export const getReadingTime = (textRef) => {
  const article = document.getElementById(textRef);
  // loop through textRef to get text from child nodes
  let text = "";
  for (let i = 0; i < article.childNodes.length; i++) {
    text += article.childNodes[i].textContent;
  }
  // split text into words
  const words = text.split(" ");
  // get number of words
  const wordCount = words.length;
  // get number of minutes
  const minutes = Math.round(wordCount / 200);
  // return number of minutes
  return minutes;
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

export const httpCall = async (requestDetails) => {
  const response = await fetch(requestDetails.url, {
    method: requestDetails.type,
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(requestDetails.data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return res;
};
