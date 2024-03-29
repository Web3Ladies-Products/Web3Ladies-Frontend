import Image from "next/image";

import React from "react";

const CommunityEvents = ({ title, events_items }) => {
  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights--heading">
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        <ul className="highlights--container">
          {events_items?.map((item, index) => (
            <li
              key={index}
              className="highlight--container-item"
              onClick={() => handleClick(item.slug)}
            >
              <div className="highlights--container-item--image">
                <Image
                  src={item.image}
                  width={400}
                  height={220}
                  objectFit="cover"
                  alt="highlights-image"
                />
              </div>
              <div className="highlights--container-item--text">
                <h4 className="item-text">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CommunityEvents;
