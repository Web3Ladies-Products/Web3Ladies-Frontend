import React, {useState} from "react";
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
import { alertService } from "../../services";



const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
};

const Slug = () => {
  const [isRadio, setIsRadio] = useState("male");
  const [showLoader, setShowLoader] = useState(false);
  const [errors, setErrors] = useState(DEFAULT_ERRORS);
  const { query, push } = useRouter();
  const { awardSlug } = query;
  const award = awardData.find((award) => award.slug === awardSlug);
  
  const [voteData, setVoteData] = useState({
    full_name: "",
    company_email: "",
    gender: "",
  });


  function handleChange(event) {
      const {name, value, type, checked} = event.target
      setVoteData(prevVoteData => {
          return {
              ...prevVoteData,
              [name]: type === "checkbox" ? checked : value
          }
      })
  }

  const handleFormInputChange = generateInputChangeHandler(setVoteData);


  const submitVote = (e) => {
    e.preventDefault();
    console.log({ data: voteData });
    setShowLoader(true);
    try {
      //   const response = await strapiService.sendDonationRequest({
      //     data: formData,
      //   });
      // console.log(
      //   "🚀 ~ file: index.jsx ~ line 37 ~ submitDonation ~ response",
      //   response
      // );
      alertService.alertMethod(
        "success",
        "vote successful"
      );
    } catch (error) {
      console.error(error);
      alertService.alertMethod("error", "Voting not succesful");
    } finally {
      setShowLoader(false);
    }
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

          <form onSubmit={submitVote}  className="form-input">
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
                label="Company’s email"
                name="company_email"
                value={voteData.company_email}
                onChange={handleFormInputChange}
                errors={[errors.company_email]}
                required={true}
              />
            </div>

            {/* checkbox input */}
            <div className="award__radio ">
              <p>{award.gender.title}</p>

                  <span className="radio__input">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        checked={voteData.gender === "male"}
                      />
                      <label htmlFor="male">male</label>
                  </span>
                  <span className="radio__input">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        checked={voteData.gender === "female"}
                      />
                      <label htmlFor="female">Female</label>
                  </span>
                  <span className="radio__input">
                      <input
                        type="radio"
                        id="prefer-not-to-saymale"
                        name="gender"
                        value="prefer-not-to-say"
                        onChange={handleChange}
                        checked={voteData.gender === "prefer-not-to-say"}
                      />
                      <label htmlFor="male">Prefer not to say</label>
                  </span>
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
