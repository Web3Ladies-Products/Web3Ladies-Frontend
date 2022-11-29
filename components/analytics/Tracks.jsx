import React from "react";

const Tracks = ({ tracksDetails }) => {
  return (
    <section className="tracks-analytics">
      <div className="container">
        <ul className="tracks-details">
          {tracksDetails.map((detail, index) => {
            return (
              <li
                className="card card--has-border tracks-details--list d-flex flex-column justify-content-between"
                key={index}
              >
                <h5>{detail.title}</h5>
                <span>
                  {" "}
                  <span className="number bold">{detail.number} </span>Mentees
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Tracks;
