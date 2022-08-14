import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";
import ChevronLeft from "../icons/ChevronLeft";
import NoData from "../NoData";
import Banner from "./Banner";
import SearchField from "./SearchField";

const SearchResults = ({ results, handleSearch }) => {
  return (
    <section>
      <div className="container" style={{ paddingTop: "0" }}>
        <Banner type={""} category={"search results"}>
          <SearchField handleChange={handleSearch} isSearch={true} />
        </Banner>
        <div style={{ margin: "0 auto", maxWidth: "70%" }}>
          <Button className="clear" onClick={handleSearch} hasIcon>
            <span className="icon-right">
              <ChevronLeft color={"#000000"} />
            </span>
            <span style={{ fontWeight: "400" }}>Back to blog</span>
          </Button>
          <ul className="list-group" style={{ marginTop: "16px" }}>
            {results ? (
              results.map((result, index) => {
                return (
                  <li key={index} className="list-group-item">
                    <a href={result.attributes.slug}>
                      <h2 className="sub-section-title bold">
                        {result.attributes.title}
                      </h2>
                      <p>{result.attributes.description}</p>
                    </a>
                  </li>
                );
              })
            ) : (
              <NoData
                imageSrc={"/assets/images/no-blog.svg"}
                title={"No posts available"}
                description={"Please check back later"}
              />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;