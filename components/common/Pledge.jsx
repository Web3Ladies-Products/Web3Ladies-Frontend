import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const Pledge = ({ indexPage }) => {
  return (
    <section className="pledge">
      <div className="container card card__black">
        <div className="pledge--text">
          <h1
            className="section-title"
            dangerouslySetInnerHTML={{
              __html: indexPage.our_pledge_title,
            }}
          />
          <Button
            type={"outline"}
            buttonText={indexPage.our_pledge_button_text}
            handleClick={() => router.push(our_pledge_button_link)}
            disabled={!indexPage.our_pledge_button_link}
          />
        </div>
        <div className="pledge--image">
          <Image
            src={indexPage.our_pledge_image_url}
            width={"532px"}
            height={"500px"}
            objectFit="contain"
            alt="pledge-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Pledge;
