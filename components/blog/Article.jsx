import Image from "next/image";
import Link from "next/link";
import React from "react";
import Badge from "../Badge";

const Article = ({ HIGHLIGHTS_ITEMS }) => {
  return (
    <section className="highlights">
      <div className="container">
        <ul className="highlights--container">
          {HIGHLIGHTS_ITEMS.map((item) => (
            <Link href={`/blog/${item["attributes"].slug}`} key={item.id}>
              <a>
                <li className="highlight--container-item">
                  <div className="highlights--container-item--image">
                    <Image
                      src={item["attributes"].featured_image_url}
                      width={"400px"}
                      height={"220px"}
                      objectFit="cover"
                      alt="highlights-image"
                    />
                  </div>
                  <div className="highlights--container-item--text">
                    <Badge
                      badgeText={item["attributes"].category}
                      badgeBackground={"#E7D2FF"}
                    />
                    <h4>{item["attributes"].title}</h4>
                    <p>{item["attributes"].description}</p>
                  </div>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Article;
