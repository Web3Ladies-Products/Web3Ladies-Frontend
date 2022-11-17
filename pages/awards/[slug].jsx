import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Button from "../../components/buttons/Button";
import HeadSeo from "../../components/HeadSeo";
import ArrowLeft from "../../components/icons/ArrowLeft";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import BaseInput from "../../components/UI/BaseInput";
import siteMetadata from "../../lib/data/siteMetadata";
import awardData from "../api/award.json";
import FreehandCard from "../../components/FreehandCard";

const Slug = ({
  showLoader,
  submitDonation,
  handleFormInputChange,
  formData,
  errors,
  ...props
}) => {
  const { query, push } = useRouter();
  const { awardSlug } = query;
  const award = awardData.find((award) => award.slug === awardSlug);

  const submitVote = (e) => {
    e.preventDefault();
    push("/awards/success");
  };
  return (
    <>
      <Navbar />

      <div className="award__nominee">
        <div className="award__nav">
          <ArrowLeft width={15} height={12} color={"black"} />{" "}
          <span>
            <Link href="/awards">Back</Link>
          </span>
        </div>

        <div className="award__hero-title">
          <p>{award.hero.title}</p>
        </div>

        <div className="award__hero-img">
          <img src={award.hero.image} alt="img" />
        </div>

        <div className="award__hero-title">
          <p className="title">{award.hero.name}</p>
          <div className="location">
            <p>{award.hero.company}</p>
            <p>{award.hero.country}</p>
          </div>
        </div>

        <div className="award__about">
          <p className="title-about">{award.about.aboutName}</p>
          <p
            className="title-content"
            dangerouslySetInnerHTML={{
              __html: award.about.description,
            }}
          />
        </div>

        <div className="award__form">
          <p className="form-title">Vote for {award.hero.name}</p>

          <form onSubmit={submitVote} {...props} className="form-input">
            <div className="input full-100">
              <BaseInput
                placeholder="Johanna Doe"
                label="Full name"
                name="full_name"
                // value={formData.full_name}
                onChange={handleFormInputChange}
                // errors={[errors.full_name]}
                autoFocus={true}
                required={true}
              />
            </div>
            <br />
            <div className="input mt-10 full-100">
              <BaseInput
                placeholder="example@web3ladies.com"
                label="Company’s email"
                name="company_email"
                // value={formData.company_email}
                onChange={handleFormInputChange}
                // errors={[errors.company_email]}
                required={true}
              />
            </div>

            {/* checkbox input */}
            <div className="award__radio ">
              <p>{award.gender.label}</p>
              {award.gender.genderOptions.map(({ label, value, index }) => {
                return (
                  <span key={index} className="radio__input">
                    <input
                      type="radio"
                      name="gender"
                      id={value}
                      value={value}
                    />
                    <label for={value}>{label}</label>
                  </span>
                );
              })}
            </div>

            <div className="award__btn">
              <Button
                buttonText={showLoader ? "Voting..." : `${award.button}`}
                variant={"primary"}
                disabled={showLoader}
                type="submit"
              ></Button>
            </div>
          </form>
        </div>
      </div>

      <FreehandCard />
      <div className="mb-large" />

      <Footer />
    </>
  );
};

export default Slug;
