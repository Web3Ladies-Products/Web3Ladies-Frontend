import React from "react";

const Banner = ({ category }) => {
  return (
    <section className="banner">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h6 className="primary-color">Category</h6>
        <h1 className="section-title primary-color text-capitalize">
          {category}
        </h1>
      </div>
    </section>
  );
};

export default Banner;
