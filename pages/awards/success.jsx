import React from "react";
import Link from "next/link";

import ArrowLeft from "../../components/icons/ArrowLeft";
import Button from "../../components/buttons/Button";
import Image from "next/image";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import { strapiService } from "../../services";

const Success = ({ successPage }) => {
  return (
    <>
      <Navbar />
      <section className="mentorship__success">
        <div>
          <div className="feedback">
            <div className="vote_nav">
              <ArrowLeft width={15} height={12} color={"black"} />{" "}
              <span>
                <Link href="/awards">Back</Link>
              </span>
            </div>
            <div className="border">
              <div>
                <div className="award__header-vector4">
                  <Image
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    src="/assets/images/awardvector4.png"
                  />
                </div>

                <div className="vector">
                  <Image
                    width={"60px"}
                    height={"60px"}
                    objectFit="contain"
                    src="/assets/images/celebration.png"
                    alt="celebration-image"
                  />
                </div>

                <div className="vote-center">
                  <h2
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: successPage.title,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className=" d-flex vote-button__section">
              <Button
                className="vote__btn"
                variant={"primary"}
                buttonText={successPage.button_one}
                handleClick={() => {}}
              />
              <Button
                variant={"outline"}
                buttonText={successPage.button_two}
                handleClick={() => {}}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const successPage = await strapiService.getAwardSuccess();
  return {
    props: {
      successPage: successPage.data.attributes,
    },
  };
}

export default Success;
