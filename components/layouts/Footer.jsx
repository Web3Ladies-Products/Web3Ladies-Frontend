import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "/components/buttons/Button";

const Footer = () => {
  // get year util
  const getYear = () => new Date().getFullYear();

  const FOOTER_NAVIGATION = [
    {
      name: "About",
      route: "/",
    },
    {
      name: "Sponsor",
      route: "/",
    },
    {
      name: "Blog",
      route: "/",
    },
    {
      name: "Team",
      route: "/",
    },
    {
      name: "Career",
      route: "/",
    },
  ];

  const FOOTER_NAVIGATIONLINKS = [
    {
      name: "Token",
      route: "/",
    },
    {
      name: "Events",
      route: "/",
    },
    {
      name: "Mentorship",
      route: "/",
    },
    {
      name: "Community",
      route: "/",
    },
  ];

  const CONTACT_NAVIGATION_ONE = [
    {
      name: "Contact",
      route: "/",
    },
    {
      name: "Instagram",
      route: "/",
    },
    {
      name: "Twitter",
      route: "/",
    },
    {
      name: "Facebook",
      route: "/",
    },
  ];
  const CONTACT_NAVIGATION_TWO = [
    {
      name: "Discord",
      route: "/",
    },
    {
      name: "Medium",
      route: "/",
    },
    {
      name: "Youtube",
      route: "/",
    },
  ];

  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-content_form">
            <div className="footer-card">
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
                  {CONTACT_NAVIGATION_TWO.map((item, index) => {
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
            <Image
              src={"/assets/images/web3ladies-vector.png"}
              alt="Web3ladies-vector"
              width={"100%"}
              height={"100%"}
              objectFit="contain"
            />
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
