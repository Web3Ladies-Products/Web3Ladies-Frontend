import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Button from "../../components/buttons/Button";
import HeadSeo from "../../components/HeadSeo";
import ArrowLeft from "../../components/icons/ArrowLeft";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import BaseInput from "../../components/UI/BaseInput";
// import siteMetadata from "../../lib/data/siteMetadata";
// import awardData from "../api/award.json";
import FreehandCard from "../../components/FreehandCard";
import { generateInputChangeHandler } from "../../helpers";
import { alertService, strapiService } from "../../services";
import BaseRadioInput from "../../components/UI/BaseRadioInput";
import AppLoader from "../../components/UI/AppLoader";
import markdownToHtml from "../../lib/markdownToHtml";
// import { strapiService } from "../../services";


const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
  gender: [],
};

const Slug = ({ nominee, notFound }) => {


  if (!nominee) {
    return <p>Award not found</p>;
  }

  const [voteData, setVoteData] = useState({
    full_name: "",
    email: "",
    gender: "",
  });
  const [showLoader, setShowLoader] = useState(false);
  const [errors, setErrors] = useState(DEFAULT_ERRORS);

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
          <p>{nominee.name} {nominee.surname}</p>
        </div>

        <div className="award__hero-img">
          <img src={nominee.image} alt="img" />
        </div>

        <div className="award__hero-title">
          <p className="title">{nominee.name}</p>
          <div className="location">
            <p>{nominee.company}</p>
            <p>{nominee.country}</p>
          </div>
        </div>

        <div className="award__about">
          <p className="title-about">About {nominee.name}</p>
          <p
            className="title-content"
            dangerouslySetInnerHTML={{
              __html: nominee.about,
            }}
          />
        </div>

        <div className="award__form">
          <p className="form-title">Vote for {nominee.name}</p>

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
                buttonText={showLoader ? "Voting..." : "vote"}
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


export async function getStaticPaths() {
  const response = await strapiService.getNominees();
  const paths = response?.data.map((nominee) => {
    return {
      params: {
        slug: nominee.attributes.slug,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await strapiService.getNomineeBySlug(params.slug);
    const data = response?.data[0]?.attributes;
    console.log(data)
    if (data) {
      const content = await markdownToHtml(data?.about || "");
      return {
        props: {
          nominee: {
            ...data,
            content,
          },
        },
      };
    }
    return {
      props: {
        nominee: null,
        notFound: true,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        nominee: null,
        notFound: true,
      },
    };
  }
}





export default Slug;
