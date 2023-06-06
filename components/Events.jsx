import Image from "next/image";

import React from "react";
import Button from "./buttons/Button";

const EventsPage = ({ title, events_items }) => {
  return (
    <section className="events--white" id="events">
      <div className="container">
        <div className="highlights--heading">
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        <ul className="events-list">
          {events_items?.map((item, index) => (
            <li className="events-item" key={index}>
              <div className="events-item--image">
                <Image
                  src={item.image}
                  width={"635px"}
                  height={"405px"}
                  alt={item.title}
                  className="events-image"
                  objectFit="cover"
                />
              </div>
              <div className="events-item--text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Button
                  variant={"outline"}
                  buttonText={item.button_text}
                  handleClick={() => window.open(item.button_link, "_blank")}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventsPage;
