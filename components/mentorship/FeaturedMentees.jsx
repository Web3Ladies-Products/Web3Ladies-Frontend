import Image from "next/image";
import Button from "../buttons/Button";
import { useRouter } from "next/router";

const FeaturedMentees = ({ featuredMentees }) => {
  const router = useRouter();

  return (
    <section className="featured-mentees-section">
      {featuredMentees && (
        <div className="container">
          <div className="featured-mentees-header">
            <h1 className="section-title">{featuredMentees.title}</h1>
            <Button
              buttonText={featuredMentees?.btn_text}
              variant="outline-transparent"
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
                      <span>{jobRole}</span> &#124; <span>{company}</span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedMentees;
