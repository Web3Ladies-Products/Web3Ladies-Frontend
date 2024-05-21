import React from "react";
import Button from "./buttons/Button";
import Image from "next/image";
const DualColorBanner = ({
  title,
  description,
  buttonText,
  buttonType,
  image,
  handleClick,
}) => {
  return (
    <div>
      <section className="call-for-sponsors" id="sponsor-us">
        <div className="call-for-sponsors--text">
          <div>
            <h1
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
            {description && (
              <p
                dangerouslySetInnerHTML={{
                  __html: { description },
                }}
              />
            )}

            <Button
              variant={buttonType}
              buttonText={buttonText}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="call-for-sponsors--image">
          <Image
            src={image}
            width={"532px"}
            height={"500px"}
            objectFit="contain"
            alt="call-for-sponsors-image"
          />
        </div>
      </section>
    </div>
  );
};

export default DualColorBanner;
