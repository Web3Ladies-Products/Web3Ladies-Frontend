import React from "react";

const Community = ({ our_numbers_title, our_numbers }) => {
  return (
    <section className="analytics">
      <div className="container">
        <h1
          className="analytics--heading section-title"
          dangerouslySetInnerHTML={{ __html: our_numbers_title }}
        />
        <ul className="analytics--container groups-container">
          {our_numbers?.map((number) => (
            <li key={number.title} className="group-item">
              <h3 className="section-title">{number.number}</h3>
              <h6 className="analytics--text"> {number.title} </h6>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Community;
