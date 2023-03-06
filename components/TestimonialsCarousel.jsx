import Image from "next/image";
import React from "react";

const TestimonialsCarousel = ({ data }) => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="sub-section-title bold">Testimonials</h2>
        <div className="carousel">
          {data.map((testimonial) => (
            <div
              className="carousel-item card card--has-border"
              key={testimonial.id}
            >
              <div className="testimonial--header">
                <div className="testimonial--header-image">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                  />
                </div>
                <div>
                  <h5 className="testimonial-text">{testimonial.role}</h5>
                  <span className="testimonial-name">{testimonial.name}</span>
                </div>
              </div>
              <div className="testimonial--body">
                <p className="testimonial-text">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
