import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "/components/buttons/Button";
import {
  DISCORD_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MEDIUM_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../../lib/constants";

const Footer = () => {
  // get year util
  const getYear = () => new Date().getFullYear();

  const FOOTER_NAVIGATION = [
    {
      name: "About",
      route: "/#who-we-are",
    },
    {
      name: "Sponsor",
      route: "/#sponsor-us",
    },
    {
      name: "Blog",
      route: "/blog",
    },
    // {
    //   name: "Team",
    //   route: "#",
    // },
    // {
    //   name: "Career",
    //   route: "#",
    // },
  ];

  const FOOTER_NAVIGATIONLINKS = [
    // {
    //   name: "Token",
    //   route: "#",
    // },
    {
      name: "Events",
      route: "/#events",
    },
    {
      name: "Mentorship",
      route: "/#mentorship",
    },
    {
      name: "Community",
      route: "/#join-our-community",
    },
  ];

  const CONTACT_NAVIGATION_ONE = [
    {
      name: "Contact",
      link: "mailto:hello@web3ladies.com",
    },
    {
      name: "Instagram",
      link: INSTAGRAM_URL,
    },
    {
      name: "Twitter",
      link: TWITTER_URL,
    },
    {
      name: "Facebook",
      link: FACEBOOK_URL,
    },
  ];
  const CONTACT_NAVIGATION_TWO = [
    {
      name: "Discord",
      link: DISCORD_URL,
    },
    {
      name: "Medium",
      link: MEDIUM_URL,
    },
    {
      name: "Youtube",
      link: YOUTUBE_URL,
    },
  ];

  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-content_form">
            <div className="footer-card">
              <div className="logo">
                <Image
                  src="/assets/images/web3ladies-white.png"
                  width={"100px"}
                  height={"100px"}
                  objectFit="contain"
                  alt="web3ladies-logo"
                />
              </div>
              <p className="card-text">
                Get the latest updates about Web3Ladies activities and events.
              </p>
              <form action="">
                <div className="update-form">
                  <div className="input">
                    <label
                      htmlFor="user-email"
                      className="display-none"
                    ></label>
                    <input type="email" name="user-email" id="user-email" />
                  </div>
                  <div>
                    <Button
                      type={"primary"}
                      buttonText={"Submit"}
                      handleClick={() => null}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>quick links</h4>

              <ul className="footer-list quick-links">
                <div>
                  {FOOTER_NAVIGATION.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.route}>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </div>
                <div>
                  {FOOTER_NAVIGATIONLINKS.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.route}>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>

            <div className="contact">
              <h4 className="contact-links">reach out to us</h4>
              <ul className="footer-list quick-links">
                <div>
                  {CONTACT_NAVIGATION_ONE.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </div>
                <div>
                  {CONTACT_NAVIGATION_TWO.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="image-wrapper">
          <div className="vector">
            <Image
              src={"/assets/images/ethereum.png"}
              alt="ethereum-logo"
              width={"100%"}
              height={"100%"}
              objectFit="contain"
            />
          </div>

          <div className="vector">
            {/* <Image
              src={"/assets/images/web3ladies-vector.png"}
              alt="Web3ladies-vector"
              width={"100%"}
              height={"100%"}
              objectFit="contain"
            /> */}
          </div>

          <div className="vector">
            <Image
              src={"/assets/images/bitcoin.png"}
              alt="Bitcoin"
              width={"100%"}
              height={"100%"}
              objectFit="contain"
            />
          </div>
        </div>

        <section className="copyright-section">
          <div className="container">
            <p className="copyright-text">
              Copyright &copy; {getYear()} Ladies Do Tech. All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
