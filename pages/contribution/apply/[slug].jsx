import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/layouts/Navbar";

import Footer from "../../../components/layouts/Footer";
import Button from "../../../components/buttons/Button";
import { alertService, strapiService } from "../../../services";
import AppLoader from "../../../components/UI/AppLoader";
import ApplyForm from "../../../components/contribution/ApplyForm";
import { generateInputChangeHandler } from "../../../helpers";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
  isactive: [],
  phone_number: [],
  slack_username: [],
  linkedin_url: [],
  hours: [],
  reason1: [],
  reason2: [],
  portfolio: [],
};
const Apply = ({ contributionPage }) => {
  const router = useRouter();
  const [job, setJob] = useState({});
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    isactive: "",
    phone_number: "",
    slack_username: "",
    linkedin_url: "",
    hours: "",
    reason1: "",
    reason2: "",
    portfolio: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const [showLoader, setShowLoader] = React.useState(false);
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  useEffect(() => {
    let slug = router.query.slug;
    console.log("router", slug);
    const fetchJob = async () => {
      try {
        const exactJob = contributionPage.jobs.find(
          (job) => job.id.toString() == slug
        );
        setJob(exactJob);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJob();
  }, []);

  const submitApplyForm = async (e) => {
    e.preventDefault();
    if (formData.isactive === "no") {
      formData.isactive = false;
    } else {
      formData.isactive = true;
    }
    formData["job_id"] = job.id.toString();
    formData["job_title"] = job.title;

    setShowLoader(true);

    try {
      await strapiService.jobApplicationRequest(formData, selectedFile);
      alertService.alertMethod(
        "success",
        "Waiting list request sent successfully"
      );
      setFormData({
        full_name: "",
        email: "",
        isactive: "",
        phone_number: "",
        slack_username: "",
        linkedin_url: "",
        hours: "",
        reason1: "",
        reason2: "",
        portfolio: "",
      });
      setSelectedFile(null);
      router.push("success");
      setShowLoader(false);
    } catch (error) {
      console.error(error, "here is the error");
      alertService.alertMethod(
        "error",
        "Application not submitted, bad format"
      );
      setShowLoader(false);
    }
  };
  return (
    <>
      {showLoader && <AppLoader />}
      <Navbar />
      {job ? (
        <>
          <div className="award__register">
            <h2>Apply to role</h2>

            <ApplyForm
              showLoader={showLoader}
              submitApplyForm={submitApplyForm}
              errors={errors}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              handleFormInputChange={handleFormInputChange}
              formData={formData}
            />
          </div>
        </>
      ) : (
        <AppLoader />
      )}
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const contributionData = await strapiService.getContrubutionPage();
  const paths = contributionData.data.attributes.jobs.map((job) => {
    return {
      params: {
        slug: job.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export default Apply;

export async function getStaticProps() {
  const contributionPage = await strapiService.getContrubutionPage();

  return {
    props: {
      contributionPage: contributionPage.data.attributes,
    },
  };
}
