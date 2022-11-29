import React, { useState } from "react";
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
import { generateInputChangeHandler } from "../../helpers";
import { alertService, strapiService } from "../../services";
import BaseRadioInput from "../../components/UI/BaseRadioInput";
import AppLoader from "../../components/UI/AppLoader";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
  gender: [],
};

const Slug = () => {
  const [voteData, setVoteData] = useState({
    full_name: "",
    email: "",
    gender: "",
  });
  const [showLoader, setShowLoader] = useState(false);
  const [errors, setErrors] = useState(DEFAULT_ERRORS);

  const { query, push } = useRouter();
  const { awardSlug } = query;
  const award = awardData.find((award) => award.slug === awardSlug);

  const handleFormInputChange = generateInputChangeHandler(setVoteData);

  const submitVote = async (e) => {
    e.preventDefault();

    console.log({ data: voteData });
    voteData["nominee_name"] = "Jenet";
    setShowLoader(true);
    try {
      const response = await strapiService.votingRequest({
        data: voteData,
      });
      console.log(
        "🚀 ~ file: index.jsx ~ line 37 ~ submitDonation ~ response",
        response
      );
      alertService.alertMethod("success", "vote successful");
      setVoteData({
        full_name: "",
        email: "",
        gender: "",
      });
      push("/awards/success");
    } catch (error) {
      console.error(error);
      alertService.alertMethod("error", "Voting not succesful");
    } finally {
      setShowLoader(false);
    }
  };
  return (
    <>
      {showLoader && <AppLoader />}
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

          <form onSubmit={submitVote} className="form-input">
            <div className="input full-100">
              <BaseInput
                placeholder="Johanna Doe"
                label="Full name"
                name="full_name"
                value={voteData.full_name}
                onChange={handleFormInputChange}
                errors={[errors.full_name]}
                autoFocus={true}
                required={true}
              />
            </div>
            <br />
            <div className="input mt-10 full-100">
              <BaseInput
                placeholder="example@web3ladies.com"
                label="Email* "
                name="email"
                type="email"
                value={voteData.email}
                onChange={handleFormInputChange}
                errors={[errors.email]}
                required={true}
              />
            </div>

            {/* checkbox input */}
            <div className="d-flex register-joinedfield mb-20">
              <div>
                <p>Gender</p>
                <div className="d-flex register-joinedfield_checkbox">
                  <BaseRadioInput
                    label="Male"
                    name="gender"
                    onChange={handleFormInputChange}
                    value="male"
                    checked={voteData.gender === "male"}
                    type="radio"
                  />

                  <BaseRadioInput
                    label="Female"
                    onChange={handleFormInputChange}
                    value="female"
                    name="gender"
                    checked={voteData.gender === "female"}
                    type="radio"
                  />
                  <BaseRadioInput
                    label="Prefer not to say"
                    onChange={handleFormInputChange}
                    value="none"
                    name="gender"
                    checked={voteData.gender === "none"}
                    type="radio"
                  />
                </div>
              </div>
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
