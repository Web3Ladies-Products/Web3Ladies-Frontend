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
      isActive: ["/about", "/community", "/events", "/contribution"].includes(
        router.pathname
      ),
      dropdown: [
        {
          id: 1,
          name: "About Us",
          link: "/about",
          isActive: router.pathname === "/about",
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
          name: "Become a Contributor",
          link: "/contribution",
          isActive: router.pathname === "/contribution",
        },
      ],
    },
    {
      id: 6,
      name: "Mentorship",
      route: "/",
      type: "dropdown",
      showDropdown: false,
      isActive: [
        "/mentoship",
        "/cohorts",
        "/bootcamps",
        "/mentorship/#worktools",
      ].includes(router.pathname),
      dropdown: [
        {
          id: 1,
          name: "About",
          link: "/mentorship",
          isActive: router.pathname === "/mentorship",
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
      type: "dropdown",
      isActive: ["/sponsorship", "/partnership"].includes(router.pathname),
      dropdown: [
        {
          id: 1,
          name: "About Sponsorship",
          link: "/sponsorship",
          isActive: router.pathname === "/sponsorship",
        },
        {
          id: 4,
          name: "About Partnership",
          link: "/partnership",
          isActive: router.pathname === "/partnership",
        },
      ],
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
      id: 9,
      name: "Join Us Today",
      route: "/join-us-today",
      type: "dropdown",
      showDropdown: false,
      isActive: [
        "/mentorship/register",
        "/community",
        "/mentorship",
        "/certificate",
      ].includes(router.pathname),
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
          name: "Certificates",
          link: "/certificate",
          isActive: router.pathname === "/certificate",
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
                  <li key={item.id}>
                    {item.type === "link" ? (
                      <span className="header-list-item">
                        <Link href={item.route}>
                          <a
                            className={item.isActive ? "active__navbar" : ""}
                            href="#"
                          >
                            {item.name}
                          </a>
                        </Link>
                      </span>
                    ) : (
                      <span
                        className="header-list-item dropdown-item"
                        onMouseEnter={() => showDropdown(index)}
                        onMouseLeave={() => showDropdown(index)}
                      >
                        <div>
                          <span
                            className={item.isActive ? "active__navbar" : ""}
                          >
                            {item.name}
                          </span>
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
                                        <a
                                          className={
                                            subNavItem.isActive
                                              ? "active__navbar"
                                              : ""
                                          }
                                          href="#"
                                        >
                                          {" "}
                                          {subNavItem.name}
                                        </a>
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
          </nav>
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
              <ul style={{ overflow: "hidden" }}>
                {navigationItems.map((item, index) => {
                  return (
                    <li key={index} onClick={() => setShowMobileNav(true)}>
                      {item.type === "link" ? (
                        <Link href={item.route}>
                          <a className={item.isActive ? "active__navbar" : ""}>
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
                            <span
                              className={item.isActive ? "active__navbar" : ""}
                            >
                              {item.name}
                            </span>
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
                                          <a
                                            className={
                                              subNavItem.isActive
                                                ? "active__navbar"
                                                : ""
                                            }
                                            href="#"
                                          >
                                            {" "}
                                            {subNavItem.name}
                                          </a>
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
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
