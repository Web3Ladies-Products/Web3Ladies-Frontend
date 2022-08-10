import Image from "next/image";
import React from "react";

const NoData = ({ imageSrc, title, description }) => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ padding: "50px" }}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title}
          width={98}
          height={91}
          style={{ paddingBottom: "30px" }}
        />
      )}
      <h2 className="sub-section-title bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default NoData;
