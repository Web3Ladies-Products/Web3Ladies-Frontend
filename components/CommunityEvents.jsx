import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import communityData from "../pages/api/community.json";
import Button from "../components/buttons/Button";

const CommunityEvents = () => {
  const communityHome = communityData.home;
  const router = useRouter();
  return (
    <section className="highlights">
    <div className="container">
     
        <div className="highlights--heading">
          <h2 className="section-title">{communityHome.events.title}</h2>
         
        </div>
  

      <ul className="highlights--container">
      {communityHome.events_items?.map((item, index) => (
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
