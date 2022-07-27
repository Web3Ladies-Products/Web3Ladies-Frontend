import React from "react";
import Image from "next/image";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Button from "../components/buttons/Button";

const waitlist = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="waitlist-images">
            <div className="vector">
              <Image
                width={"100%"}
                height={"100%"}
                objectFit="contain"
                src="/assets/images/purple-pyramid.png"
                alt="pyramid-image"
              />
            </div>
            <div className="vector">
              <Image
                width={"100%"}
                height={"100%"}
                objectFit="contain"
                src="/assets/images/celebration.png"
                alt="celebration-image"
              />
            </div>
            <div className="vector">
              <Image
                width={"100%"}
                height={"100%"}
                objectFit="contain"
                src="/assets/images/white-pyramid.png"
                alt="pyramid-image"
              />
            </div>
          </div>

          <div className="waitlist">
            <div className="waitlist-content">
              <h2>
              You're now on
the waitlist!
              </h2>
              <p>Join us on the Slack channel if you have not already, to get first hand update on our cohort programs </p>
            
              <Button
                    type={"grey"}
                    buttonText={"Join our Slack community"}
                    hasIcon={""}
                    handleClick={() => null}
                  />
              
            </div>
          </div>

          <div className="cylindrical-images">
            <div className="">
              <Image
                className=""
                width={"75px"}
                height={"93px"}
                src="/assets/images/purple-cylindrical.png"
                alt="purple-cylindrical-image"
              />
              <Image
                className=""
                width={"75px"}
                height={"93px"}
                src="/assets/images/cylindrical.png"
                alt="cylindrical-image"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default waitlist;
