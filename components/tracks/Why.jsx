import React from "react";
const Why = ({ data }) => {
  return (
    <section className="why-study-blockchain">
      <div className="container ">
        <h2>{data.title}</h2>
        <div className="text">
          <p>{data.firstParagraph}</p>

          <p>{data.secondParagraph}</p>
        </div>
      </div>
    </section>
  );
};

export default Why;
