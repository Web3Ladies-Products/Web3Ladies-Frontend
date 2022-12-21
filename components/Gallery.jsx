import Image from "next/image";
import React from "react";

const Gallery = ({ gallery_details }) => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery--heading">
          <h1 className="sub-section-title bold">Gallery</h1>
        </div>
        <ul className="gallery--container">
          {gallery_details?.map((item, index) => (
            <li className="gallery--container-item" key={index}>
              <div className="gallery--container-item--image">
                <Image
                  src={item.image}
                  width={"415px"}
                  height={"314px"}
                  objectFit="contain"
                  alt="gallery-image"
                />
              </div>
              <div className="gallery--container-item--text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
