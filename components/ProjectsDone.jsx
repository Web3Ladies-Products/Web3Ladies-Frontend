import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import Button from "./buttons/Button";
import ArrowCircle from "./icons/ArrowCircle";

const ProjectsDone = ({ projects_done_details }) => {
  const CATEGORY_COLOR = {
    "blockchain-development": "#7D0BFE",
    "web-development": "#FE471F",
    "product-design": "#2652EF",
    "product-management": "#00B876",
  };

  return (
    <section className="projects-done">
      <div className="container">
        <div className="projects-done--heading">
          <h1 className="sub-section-title bold">Projects Done</h1>
          <Button
            buttonText="View More"
            variant="outline"
            handleClick={() => {}}
            border="border__btn"
          />
        </div>
        <ul className="projects-done--container">
          {projects_done_details.map((project) => (
            <li
              key={project.id}
              className="projects-done--item card card__black d-flex flex-column justify-content-between"
            >
              <div className="project-header d-flex align-items-center">
                <div className="project-header--image">
                  <Image
                    src={project.imageThumbnail}
                    alt={project.title}
                    width={35}
                    height={35}
                  />
                </div>
                <div className="title">
                  <h3>{project.projectName}</h3>
                </div>
              </div>
              <div className="about-project">
                <h5>{project.aboutTitle}</h5>
                <p>{project.aboutDescription}</p>
              </div>
              <div className="project-footer">
                <div className="project-footer--cta">
                  <Button
                    variant={"outline"}
                    buttonText={"View project"}
                    handleClick={() => window.open(project.ctaLink, "_blank")}
                    disabled={!!project.ctaLink}
                    hasIcon
                  >
                    <span className="icon-right d-flex align-items-center">
                      <ArrowCircle fillColor={"#FF9EDB"} />
                    </span>
                  </Button>
                </div>
                <div className="project-category">
                  <Badge
                    badgeText={project.category}
                    badgeBackground={CATEGORY_COLOR[project.id] || ""}
                    handleClick={() => null}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsDone;
