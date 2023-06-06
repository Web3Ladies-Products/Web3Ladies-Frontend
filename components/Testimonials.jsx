import Image from "next/image";
import React from "react";


const Testimonials = ({
  testimonial_title,
  testimonial_description,
  testimonial_items,
  hasMaxWidth,
}) => {
  const [activeTestimonialTab, setActiveTestimonialTab] = React.useState(
    Object.keys(testimonial_items)[0]
  );

  function getKeysAndTitles(data) {
    let keys = Object.keys(data);
    let testimonial_tabs = keys.map((val) => ({
      key: val,
      title: val.split("_").join(" ").toUpperCase(),
    }));
    return testimonial_tabs;
  }

  const TESTIMONIAL_TABS = getKeysAndTitles(testimonial_items);

  return (
    <section className="testimonials">
      <div
        className="container"
        style={{ maxWidth: hasMaxWidth ? "" : "none" }}
      >
        <div className="testimonials--heading">
          <h1 className="section-title">{testimonial_title}</h1>
          <p className="text-muted">{testimonial_description}</p>
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
            {testimonial_items[activeTestimonialTab]?.map((item, index) => (
              <div
                className="testimonials--container__content__item"
                key={index}
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
