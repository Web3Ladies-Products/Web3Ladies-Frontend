import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Badge from "../Badge";
import Button from "../buttons/Button";
import ArrowRight from "../icons/ArrowRight";
import styled from "styled-components";

const Featured = ({ featuredPost, imageLeft, ...props }) => {
  const router = useRouter();
  return (
    <FeaturedContainer imageLeft={imageLeft} {...props}>
      <div
        className={`container cta ${props.fullWidth ? "w-full" : ""}`}
        style={{ paddingTop: "0" }}
      >
        {!imageLeft && <h1 className="section-title bold">Featured</h1>}
        <div className="content">
          <div className="hero_content bootcamp">
            <Badge
              badgeText={featuredPost?.attributes?.category}
              badgeBackground={"#E7D2FF"}
            />
            <h2
              className="section-title semibold"
              style={{
                margin: "28px 0",
              }}
            >
              {featuredPost?.attributes?.title}
            </h2>

            <div className="button-container">
              <Button
                variant={"clear"}
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
    </FeaturedContainer>
  );
};

export default Featured;

const FeaturedContainer = styled.main`
  .content {
    ${({ imageLeft }) => imageLeft && "flex-direction: row-reverse;"}
  }
`;
