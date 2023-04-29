import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
import { strapiService } from "../../services";

const FeaturedMentees = () => {
  const router = useRouter();

  const [featuredMentees, setFeaturedMentees] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const indexPage = await strapiService.getFeaturedMentee();
        setFeaturedMentees(indexPage.data.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <section className="featured-mentees-section">
      <div className="container">
        <div className="featured-mentees-header">
          <h1 className="section-title">{featuredMentees.title}</h1>
          <Button
            buttonText={featuredMentees?.btn_text}
            type="outline"
            handleClick={() => {
              router.push(featuredMentees?.btn_link);
            }}
            border="border__btn"
          />
        </div>

        <div className="mentee-card-wrapper">
          {featuredMentees.availableMentees?.map(
            ({ id, name, jobRole, company, imageURL }) => (
              <div key={id} className="featured-mentee-card">
                <Image
                  className="arrow-img"
                  width="100%"
                  height="274px"
                  objectFit="cover"
                  src={imageURL}
                  alt="A mentee"
                />
                <div className="featured-mentee-card-content">
                  <h2>{name}</h2>
                  <div>
                    <span>{jobRole}</span> &#124; <a href={company}>contact</a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentees;
