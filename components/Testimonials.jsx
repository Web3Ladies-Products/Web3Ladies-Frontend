import Image from "next/image";
import React from "react";

const Testimonials = ({
  testimonial_title,
  testimonial_description,
  testimonial_items,
  hasMaxWidth,
}) => {
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

  return (
    <section className="testimonials">
      <div
        className="container"
        style={{ maxWidth: hasMaxWidth ? "" : "none" }}
      >
        <div className="testimonials--heading">
          <h1 className="section-title">Don’t take our word for it</h1>
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
            {testimonial_items[activeTestimonialTab].map((item) => (
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
