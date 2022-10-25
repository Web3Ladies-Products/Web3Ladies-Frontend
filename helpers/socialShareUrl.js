import siteMetadata from "../lib/data/siteMetadata";

export const getShareUrl = (article, platform, page) => {
  let shareUrl;
  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/v5.0/dialog/share?app_id=542599432471018&href=${siteMetadata.siteUrl}/${page}/${article?.slug}&display=page&quote=${article?.title}`;
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${siteMetadata.siteUrl}/${page}/${article?.slug}/%0A&text=${article?.title}%0A&via=${siteMetadata.twitterHandle}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/shareArticle?url=${siteMetadata.siteUrl}/${page}/${article?.slug}&title=${article?.title}&summary=${article?.description}&source=${siteMetadata.siteUrl}`;
      break;
    case "whatsapp":
      shareUrl = `https://api.whatsapp.com/send?text=${article?.title}%0A${siteMetadata.siteUrl}/${page}/${article?.slug}`;
      break;
    case "instagram":
      shareUrl = `https://www.instagram.com/${siteMetadata.instagramHandle}`;
    default:
      shareUrl = `${siteMetadata.siteUrl}/${page}/${article?.slug}`;
  }
  return shareUrl;
};
