import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";
import ChevronDown from "../icons/ChevronDown";
import Menu from "../icons/Menu";
import Close from "../icons/Close";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const NAVIGATION_ITEMS = [
    {
      name: "About Us",
      route: "/",
    },
    {
      name: "Mentorship",
      route: "/",
    },
    {
      name: "Sponsorship",
      route: "/",
    },
    {
      name: "Hire Talent",
      route: "/",
    },
    {
      name: "Contact Us",
      route: "/",
    },
    {
      name: "Blog",
      route: "/",
    },
  ];

  return (
    <header>
      <div>
        <div id="header" className="nav-container nav-lg">
          <Link className="logo" href="/">
            <a>
              <Image
                src={"/assets/images/web3ladies-logo.svg"}
                width={"120px"}
                height={"50px"}
                alt="web3ladies-logo"
                className="logo"
              />
            </a>
          </Link>

          <nav className="nav">
            <ul className="header-list">
              {NAVIGATION_ITEMS.map((item, index) => {
                return (
                  <li key={index}>
                    <span className="header-list-item">
                      <Link href={item.route}>
                        <a href="#">{item.name}</a>
                      </Link>
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="nav-cta">
              <a href="/" target="_blank" className="button outline">
                Join Us Today
                <ChevronDown />
              </a>
            </div>
          </nav>
        </div>
        <div className="nav-cta">
          <a href="/" target="_blank" className="button outline">
            Join Us Today
            <ChevronDown style={{ marginLeft: "4px" }} />
          </a>
        </div>

        <div id="header" className="nav-container nav-sm">
          <Link href="/">
            <a>
              <Image
                src={"/assets/images/web3ladies-logo.svg"}
                width={"70px"}
                height={"40px"}
                alt="web3ladies-logo"
                className="logo"
              />
            </a>
          </Link>
          {!showMobileNav && (
            <Menu
              className="menu-icon"
              handleClick={() => setShowMobileNav(true)}
            />
          )}

          {showMobileNav && (
            <nav className="nav">
              <Close
                className="close-icon"
                handleClick={() => setShowMobileNav(false)}
              />
              <div className="hline"></div>
              <ul>
                {NAVIGATION_ITEMS.map((item, i) => {
                  return (
                    <li key={i} onClick={() => setShowMobileNav(true)}>
                      <Link href={item.route}>
                        <a>
                          {item.name}
                          <div className="angle active-sign"></div>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="nav-cta">
                <a href="/" target="_blank" className="button outline">
                  Join Us Today
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
