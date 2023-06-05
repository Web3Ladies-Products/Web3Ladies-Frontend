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
  portfolio_link: [],
  portfolio_file: [],
};

const requiredFields = [
  { field: "full_name", message: "Name cannot be empty" },
  { field: "email", message: "Email cannot be empty" },
  { field: "isactive", message: "Select an option" },
  { field: "phone_number", message: "Phone number cannot be empty" },
  { field: "slack_username", message: "Slack username cannot be empty" },
  { field: "linkedin_url", message: "Linkedin url cannot be empty" },
  { field: "hours", message: "Hours cannot be empty" },
  { field: "reason1", message: "Field cannot be empty" },
  { field: "reason2", message: "Field cannot be empty" },
];

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
    portfolio_link: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const [showLoader, setShowLoader] = React.useState(false);
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);

  const handleFormInputChange = generateInputChangeHandler(setFormData);
  const handleErrors = (field, errMsg) => {
    setErrors((prev) => {
      return {
        ...prev,
        [field]: errMsg,
      };
    });
  };
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
    if (
      !formData.full_name ||
      !formData.email ||
      !formData.isactive ||
      !formData.phone_number ||
      !formData.slack_username ||
      !formData.linkedin_url ||
      !formData.hours ||
      !formData.reason1 ||
      !formData.reason2 ||
      !selectedFile
    ) {
      for (const { field, message } of requiredFields) {
        if (!formData[field]) {
          handleErrors(field, [message]);
        } else {
          handleErrors(field, []);
        }
      }

      if (!selectedFile) {
        handleErrors("portfolio_file", ["Portfolio file is required"]);
      } else {
        handleErrors("portfolio_file", []);
      }

      return;
    }

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
        portfolio_link: "",
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
