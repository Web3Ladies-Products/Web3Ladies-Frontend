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
      id: 5,
      name: "About Us",
      route: "/",
      type: "dropdown",
      showDropdown: false,
      isActive: router.pathname === "/about-us",
      dropdown: [
        {
          id: 1,
          name: "About Us",
          link: "/#who-we-are",
          isActive: router.pathname === "/about-us",
        },
        {
          id: 2,
          name: "Community",
          link: "/community",
          isActive: router.pathname === "/community",
        },
        {
          id: 3,
          name: "Events",
          link: "/events",
          isActive: router.pathname === "/events",
        },
        {
          id: 4,
          name: "Become a Partner",
          link: "/partnership",
          isActive: router.pathname === "/partnership",
        },
      ],
    },
    {
      id: 6,
      name: "Mentorship",
      route: "/mentorship",
      type: "dropdown",
      showDropdown: false,
      isActive: router.pathname === "/mentorship",
      dropdown: [
        {
          id: 1,
          name: "About",
          link: "/#who-we-are",
          isActive: router.pathname === "/about-us",
        },
        {
          id: 2,
          name: "Cohorts",
          link: "/cohorts",
          isActive: router.pathname === "/cohorts",
        },
        {
          id: 3,
          name: "Bootcamps",
          link: "/bootcamps",
          isActive: router.pathname === "/bootcamps",
        },
        {
          id: 4,
          name: "Worktool",
          link: "/mentorship/#worktools",
          isActive: router.pathname === "/mentorship/#worktools",
        },
      ],
    },

    {
      id: 2,
      name: "Sponsorship",
      route: "/sponsorship",
      type: "link",
      isActive: router.pathname === "/sponsorship",
    },
    {
      id: 7,
      name: "Hire Talent",
      route: "/hiretalent",
      type: "link",
      isActive: router.pathname === "/hiretalent",
    },
    {
      id: 8,
      name: "Contact Us",
      route: "/contact",
      type: "link",
      isActive: router.pathname === "/contact",
    },
    {
      id: 3,
      name: "Blog",
      route: "/blog",
      type: "link",
      isActive: router.pathname.includes("/blog"),
    },
    {
      id: 6,
      name: "Join Us Today",
      route: "/join-us-today",
      type: "dropdown",
      showDropdown: false,
      isActive: router.pathname === "/join-us-today",
      dropdown: [
        {
          id: 1,
          name: "Register for our cohort",
          link: "/mentorship/register",
          isActive: router.pathname === "/mentorship/register",
        },
        {
          id: 2,
          name: "Join our community",
          link: "/community",
          isActive: router.pathname === "/community",
        },
        {
          id: 3,
          name: "Become a Mentor",
          link: "/mentorship",
          isActive: router.pathname === "/mentorship",
        },
        {
          id: 4,
          name: "Become a Contributor",
          link: "/contribution",
          isActive: router.pathname === "/contribution",
        },
      ],
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
                  <li key={item.id} className={item.isActive ? "active" : ""}>
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
            {/* <div className="nav-cta">
              <a href="/" target="_blank" className="button outline">
                Join Us Today
                <ChevronDown />
              </a>
            </div> */}
          </nav>
        </div>
        {/* <div className="nav-cta">
          <a href="/" target="_blank" className="">
            Join Us Today
            <ChevronDown style={{ marginLeft: "4px" }} />
          </a>
        </div> */}

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
              <ul style={{ overflow: "hidden" }}>
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
                                <ul style={{ overflow: "hidden" }}>
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
              {/* <div className="nav-cta">
                <a href="/" target="_blank" className="button outline">
                  Join Us Today
                </a>
              </div> */}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
