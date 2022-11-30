import React from "react";

const Registration = ({ registrationDetails }) => {
  return (
    <section className="registration-analytics">
      <div className="container">
        <ul className="card card--has-border registration-details">
          {registrationDetails.map((detail, index) => {
            return (
              <li className="registration-details--list" key={index}>
                <h5 className="primary-color">{detail.title}</h5>
                <span dangerouslySetInnerHTML={{ __html: detail.date }} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Registration;
