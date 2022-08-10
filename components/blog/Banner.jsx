import React from "react";

const Banner = ({ type, category }) => {
  return (
    <section className="banner">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h6 className="primary-color text-capitalize">{type}</h6>
        <h1 className="section-title primary-color text-capitalize">
          {category}
        </h1>
      </div>
    </section>
  );
};

export default Banner;
