import React from "react";
import Image from "next/image";
import siteMetadata from "../../lib/data/siteMetadata";
import {
  INSTAGRAM_URL,
  LINKEDIN_URL,
  SLACK_URL,
  TWITTER_URL,
} from "../../lib/constants";
import { getShareUrl } from "../../helpers/socialShareUrl";

const Success = ({
  title,
  description,
  children,
  badgeDetails,
  showSocials = true,
  shareToSocials,
}) => {
  return (
    <section>
      <div className="container">
        <div className="feedback-images">
          <div className="vector">
            <Image
              width={"100%"}
              height={"100%"}
              objectFit="contain"
              src="/assets/images/purple-pyramid.png"
              alt="pyramid-image"
            />
          </div>
          <div className="vector">
            <Image
              width={"100%"}
              height={"100%"}
              objectFit="contain"
              src="/assets/images/white-pyramid.png"
              alt="pyramid-image"
            />
          </div>
          <div>
            <Image
              width={"100%"}
              height={"100%"}
              objectFit="contain"
              src="/assets/images/celebration.png"
              alt="celebration-image"
            />
          </div>
        </div>

        <div className="feedback">
          <div className="feedback-content">
            <h1 className="section-title">{title}</h1>
            <p>{description}</p>
            {children}
            {showSocials && (
              <div>
                <p className="semibold">Follow us on our socials</p>
                <div className="icons-container">
                  <a href={INSTAGRAM_URL} rel="noreferrer" target="_blank">
                    <Image
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                      src="/assets/images/instagram.png"
                      alt="instagram-icon"
                    />
                  </a>
                  <a href={TWITTER_URL} rel="noreferrer" target="_blank">
                    <Image
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                      src="/assets/images/twitter.svg"
                      alt="twitter-icon"
                    />
                  </a>
                  <a href={LINKEDIN_URL} rel="noreferrer" target="_blank">
                    <Image
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                      src="/assets/images/linkedin.svg"
                      alt="linkedin-icon"
                    />
                  </a>
                  <a href={SLACK_URL} rel="noreferrer" target="_blank">
                    <Image
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                      src="/assets/images/slack.png"
                      alt="slack-icon"
                    />
                  </a>
                </div>
              </div>
            )}
            {shareToSocials && (
              <div>
                <p className="semibold">Share to your socials</p>
                <div className="icons-container">
                  <a
                    href={getShareUrl(badgeDetails, "instagram", "pledge")}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                      src="/assets/images/instagram.png"
                      alt="instagram-icon"
                    />
                  </a>
                  <a
                    href={getShareUrl(badgeDetails, "twitter", "pledge")}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                      src="/assets/images/twitter.svg"
                      alt="twitter-icon"
                    />
                  </a>
                  <a
                    href={getShareUrl(badgeDetails, "linkedin", "pledge")}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                      src="/assets/images/linkedin.svg"
                      alt="linkedin-icon"
                    />
                  </a>
                  <a
                    href={getShareUrl(badgeDetails, "slack")}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      className="icon"
                      width={"20px"}
                      height={"20px"}
                      src="/assets/images/slack.png"
                      alt="slack-icon"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="cylindrical-images">
          <div className="">
            <Image
              className=""
              width={"75px"}
              height={"93px"}
              src="/assets/images/purple-cylindrical.png"
              alt="purple-cylindrical-image"
            />
            <Image
              className=""
              width={"75px"}
              height={"93px"}
              src="/assets/images/cylindrical.png"
              alt="cylindrical-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
