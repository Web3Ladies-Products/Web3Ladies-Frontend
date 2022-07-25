import React from "react";
import Image from "next/image";
import Link from "next/link";
import ChevronDown from "../icons/ChevronDown";
import Menu from "../icons/Menu";
import Close from "../icons/Close";
import { useRouter } from "next/router";
import ChevronUp from "../icons/ChevronUp";

const Navbar = () => {
  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const [navigationItems, setNavigationItems] = React.useState([
    {
      name: "About Us",
      route: "/",
      type: "dropdown",
      showDropdown: false,
      isActive: router.pathname === "/about-us",
      dropdown: [
        {
          name: "About Us",
          link: "/about-us",
          isActive: router.pathname === "/about-us",
        },
        {
          name: "Community",
          link: "/community",
          isActive: router.pathname === "/community",
        },
        {
          name: "Events",
          link: "/events",
          isActive: router.pathname === "/events",
        },
        {
          name: "Become a Contributor",
          link: "/contributors",
          isActive: router.pathname === "/contributors",
        },
      ],
    },
    {
      name: "Mentorship",
      route: "/",
      type: "dropdown",
      showDropdown: false,
      isActive: router.pathname === "/mentorship",
      dropdown: [
        {
          name: "Register for our cohort",
          link: "/cohorts/register",
          isActive: router.pathname === "/cohorts/register",
        },
        {
          name: "Join our community",
          link: "/community",
          isActive: router.pathname === "/community",
        },
        {
          name: "Become a Mentor",
          link: "/mentors",
          isActive: router.pathname === "/mentors",
        },
        {
          name: "Become a Contributor",
          link: "/contributors",
          isActive: router.pathname === "/contributors",
        },
      ],
    },
    {
      name: "Sponsorship",
      route: "/",
      type: "link",
      isActive: router.pathname === "/sponsorship",
    },
    {
      name: "Hire Talent",
      route: "/",
      type: "link",
      isActive: router.pathname === "/hire-talent",
    },
    {
      name: "Contact Us",
      route: "/",
      type: "link",
      isActive: router.pathname === "/contact-us",
    },
    {
      name: "Blog",
      route: "/",
      type: "link",
      isActive: router.pathname === "/blog",
    },
  ]);

  const showDropdown = (index) => {
    const newNavigationItems = [...navigationItems];
    newNavigationItems.forEach((item, i) => {
      if (i === index) {
        item.showDropdown = !item.showDropdown;
      } else {
        item.showDropdown = false;
      }
    });
    setNavigationItems(newNavigationItems);
  };

  return (
    <header>
      <div>
        <div id="header" className="nav-container nav-lg">
          <Link href="/">
            <a className="logo">
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
              {navigationItems.map((item, index) => {
                return (
                  <li key={index} className={item.isActive ? "active" : ""}>
                    {item.type === "link" ? (
                      <span className="header-list-item">
                        <Link href={item.route}>
                          <a href="#">{item.name}</a>
                        </Link>
                      </span>
                    ) : (
                      <span
                        className="header-list-item dropdown-item"
                        onMouseEnter={() => showDropdown(index)}
                        onMouseLeave={() => showDropdown(index)}
                      >
                        <div>
                          {item.name}
                          <ChevronDown
                            color={item.isActive ? "#0f0f0f" : "#0f0f0f7a"}
                            style={{ marginLeft: "4px" }}
                          />
                          {item.showDropdown && (
                            <div className="dropdown">
                              <ul>
                                {item.dropdown.map((subNavItem, i) => {
                                  return (
                                    <li key={i} className="dropdown-list-item">
                                      <Link href={subNavItem.link}>
                                        <a href="#"> {subNavItem.name}</a>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      </span>
                    )}
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
            <a className="logo">
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
                {navigationItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => setShowMobileNav(true)}
                      className={item.isActive ? "active" : ""}
                    >
                      {item.type === "link" ? (
                        <Link href={item.route}>
                          <a>
                            {item.name}
                            <div className="angle active-sign"></div>
                          </a>
                        </Link>
                      ) : (
                        <div
                          className="dropdown-item"
                          onClick={() => showDropdown(index)}
                        >
                          <div>
                            {item.name}
                            {item.showDropdown && (
                              <div className="dropdown">
                                <ul>
                                  {item.dropdown.map((subNavItem, idx) => {
                                    return (
                                      <li
                                        key={idx}
                                        className="dropdown-list-item"
                                      >
                                        <Link href={subNavItem.link}>
                                          <a href="#"> {subNavItem.name}</a>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </div>
                          <div className="dropdown-icon">
                            {item.showDropdown ? (
                              <ChevronUp color={"#7d0bfe"} />
                            ) : (
                              <ChevronDown color={item.isActive && "#7d0bfe"} />
                            )}
                          </div>
                        </div>
                      )}
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
