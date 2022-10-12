import Image from "next/image";
import React from "react";

const Supporters = ({ indexPage, title }) => {
  return (
    <section className="support" style={{ paddingTop: "0" }}>
      <div className="container" style={{ paddingTop: "0" }}>
        <h1
          className="support--heading"
          dangerouslySetInnerHTML={{
            __html: title || indexPage.supporters_title,
          }}
        />
        <div className="groups-container">
          {indexPage.supporters_images?.map((supporter) => (
            <div
              className="group-item pointer-cursor"
              key={supporter.name}
              onClick={() => window.open(supporter.website_url, "_blank")}
            >
              <Image
                className="support-image"
                width={"165px"}
                height={"60px"}
                src={supporter.logo}
                alt={supporter.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
