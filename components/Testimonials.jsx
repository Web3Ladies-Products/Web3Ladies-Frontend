import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const [activeTestimonialTab, setActiveTestimonialTab] =
    React.useState("shoutouts");

  const TESTIMONIAL_TABS = [
    {
      key: "shoutouts",
      title: "Shoutouts",
    },
    {
      key: "community",
      title: "Community",
    },
    {
      key: "past_mentees",
      title: "Past Mentees",
    },
  ];

  const TESTIMONIAL_ITEMS = {
    shoutouts: [
      {
        name: "Student",
        role: "Web3 Designer",
        image: "/assets/images/testimonial-image.png",
        quote:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
      {
        name: "Student",
        role: "Web3 Designer",
        image: "/assets/images/testimonial-image.png",
        quote:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities! I am gratefully for the support I received whilst starting my journey into tech. I hope other women get the same experience with LDT",
      },
      {
        name: "Student",
        role: "Web3 Designer",
        image: "/assets/images/testimonial-image.png",
        quote:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities! I am gratefully for the support I received whilst starting my journey into tech. I hope other women get the same experience with LDT.  I hope other women get the same experience with LDT",
      },
      {
        name: "Student",
        role: "Web3 Designer",
        image: "/assets/images/testimonial-image.png",
        quote:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities! I am gratefully for the support I received whilst starting my journey into tech. I hope other women get the same experience with LDT",
      },
    ],
    community: [],
    past_mentees: [],
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials--heading">
          <h1>Don’t take our word for it</h1>
          <p className="text-muted">
            See what people have to say about their experience with Web3Ladies
          </p>
        </div>
        <div className="testimonials--container">
          <div className="testimonials--container__sidebar">
            {TESTIMONIAL_TABS.map((item) => (
              <div
                className={`testimonials--container__sidebar__item ${
                  item.key === activeTestimonialTab ? "active" : ""
                }`}
                key={item.key}
                onClick={() => setActiveTestimonialTab(item.key)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="testimonials--container__content">
            {TESTIMONIAL_ITEMS[activeTestimonialTab].map((item) => (
              <div
                className="testimonials--container__content__item"
                key={item.title}
              >
                <div className="testimonials--container__content__item__heading">
                  <Image
                    src={item.image}
                    width={"60px"}
                    height={"60px"}
                    alt="testimonial-image"
                    objectFit="contain"
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <h5>{item.role}</h5>
                  </div>
                </div>

                <div className="testimonials--container__content__item__text">
                  <p>{item.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
