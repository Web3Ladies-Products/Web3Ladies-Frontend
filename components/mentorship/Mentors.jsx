import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
import { strapiService } from "../../services";
// TODO: edit the imageURL
const availableMentors = [
  {
    id: 1,
    name: " Nzewi OCultist ",
    jobRole: "Blockchain developer",
    company: "tramadol",
    imageURL: "/assets/images/available-mentor.png",
  },
  {
    id: 2,
    name: " Janet Jackson",
    jobRole: "Blockchain developer",
    company: "Binance",
    imageURL: "/assets/images/available-mentor.png",
  },
  {
    id: 3,
    name: " Mentor ",
    jobRole: "Blockchain developer",
    company: "forgo",
    imageURL: "/assets/images/available-mentor.png",
  },
  {
    id: 4,
    name: " Mentor ",
    jobRole: "Blockchain developer",
    company: "alegra",
    imageURL: "/assets/images/available-mentor.png",
  },
];

const Mentors = () => {
  const router = useRouter();
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const indexPage = await strapiService.getMentor();
        console.log(indexPage.data.attributes.availableMentors);
        setFetchData(indexPage.data.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      {fetchData && (
        <>
          <div className="help-mentor-section">
            <div>
              <div className="content-wrap">
                <h1 className="section-title text-uppercase">
                  {fetchData.title}
                </h1>
                <div>
                  <Button
                    handleClick={() => {
                      router.push(fetchData.btn1_link);
                    }}
                    buttonText="Become a Sponsor"
                    type="primary"
                  />
                  <Button
                    handleClick={() => {
                      router.push(fetchData.btn2_link);
                    }}
                    buttonText="Become a Mentor"
                    type="outline"
                  />
                </div>
              </div>

              <div className="image-wrap">
                <Image
                  className="arrow-img"
                  width="670px"
                  height="520px"
                  objectFit="contain"
                  src="/assets/images/help-mentor.png"
                  alt="arrow-vector"
                />
              </div>
            </div>
          </div>

          <section className="top-mentors-section">
            <div className="container">
              <h1 className="section-title">{fetchData.subtitle}</h1>
              <p className="section-description">{fetchData.description}</p>

              <div style={{ flexWrap: "wrap" }} className="mentor-card-wrapper">
                {fetchData.availableMentors?.map(
                  ({ id, name, jobRole, company, imageURL }) => (
                    <div key={id} className="top-mentors-card">
                      <Image
                        className="arrow-img"
                        width="100%"
                        height="266px"
                        objectFit="cover"
                        src={imageURL}
                        alt="arrow-vector"
                      />
                      <div className="top-mentors-card-content">
                        <h2>{name}</h2>
                        <div>
                          <span>{jobRole}</span> &#124; <span>{company}</span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Mentors;
