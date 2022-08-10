import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Badge from "../Badge";
import Button from "../buttons/Button";
import ArrowRight from "../icons/ArrowRight";

const Featured = ({ featuredPost }) => {
  const router = useRouter();
  return (
    <main>
      <div className="container cta" style={{ paddingTop: "0" }}>
        <h1 className="section-title bold">Featured</h1>
        <div className="content">
          <div className="hero_content bootcamp">
            <Badge
              badgeText={featuredPost?.attributes?.category}
              badgeBackground={"#E7D2FF"}
            />
            <h2 className="section-title">{featuredPost?.attributes?.title}</h2>

            <div className="button-container">
              <Button
                type={"clear"}
                color={"primary"}
                buttonText={"Read more"}
                hasIcon
                handleClick={() => {
                  router.push(`/blog/${featuredPost?.attributes?.slug}`);
                }}
              >
                <span className="icon-right">
                  <ArrowRight width={10} height={10} color={"#7D0BFE"} />{" "}
                </span>
              </Button>
            </div>
          </div>

          <div className="hero_image featured">
            <div>
              <Image
                className="hero-image"
                width={"641px"}
                height={"445px"}
                src={
                  featuredPost?.attributes?.featured_image_url ||
                  featuredPost?.attributes?.image_url
                }
                alt="featured-image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Featured;
