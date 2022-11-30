import React from "react";
import Success from "../../components/common/Success";
import Vector from "../../components/icons/Vector";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import markdownToHtml from "../../lib/markdownToHtml";
import { alertService, strapiService } from "../../services";
import PledgeForm from "./../../components/pledge/PledgeForm";
import domtoimage from "dom-to-image";
import Button from "../../components/buttons/Button";
import Download from "../../components/icons/Download";
import AppLoader from "../../components/UI/AppLoader";

const Pledge = ({ content, title }) => {
  const [showLoader, setShowLoader] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState(null);
  const handleFormSubmit = async (e, formData) => {
    e.preventDefault();
    setFormData(formData);
    setShowLoader(true);
    console.log(formData);
    try {
      const response = await strapiService.sendPledge({ data: formData });
      console.log(
        "🚀 ~ file: index.jsx ~ line 37 ~ submitDonation ~ response",
        response
      );
      alertService.alertMethod("success", "Donation request sent successfully");
      setShowSuccess(true);
    } catch (error) {
      console.error(error);
      alertService.alertMethod("error", "Donation request failed");
    } finally {
      setShowLoader(false);
    }
  };
  const downloadBadge = () => {
    const node = document.getElementById("my-badge");
    domtoimage.toBlob(node).then(function (blob) {
      var link = document.createElement("a");
      link.download = "my-web3ladies-pledge-badge.png";
      link.href = URL.createObjectURL(blob);
      link.click();
    });
  };

  const badgeDetails = {
    title: `${formData?.full_name}'s pledge`,
    description: "I took the pledge to support Web3Ladies",
    slug: "web3ladies-badge",
  };

  return (
    <>
      {showLoader && <AppLoader />}
      <Navbar />
      <div className="app-container">
        {showSuccess ? (
          <Success
            title={"Congratulations!"}
            description={"Here is your Web3Ladies pledge badge."}
            badgeDetails={badgeDetails}
          >
            <div className="pledge-badge" id="my-badge">
              <div className="hexagon">
                <h4 className="pb-20">
                  I{formData?.full_name ? ", " + formData?.full_name : ""}
                </h4>
                <h1 className="section-title">TOOK THE PLEGDE TO SUPPORT</h1>
              </div>
              <Vector className="icon" />
            </div>
            <Button
              variant={"clear"}
              color={"primary"}
              handleClick={downloadBadge}
              fullWidth
              hasIcon
            >
              <Download className="icon" />
              Download Badge
            </Button>
          </Success>
        ) : (
          <section className="pledge-section">
            <div className="container">
              <h1 className="section-title center">Take our pledge</h1>
              <PledgeForm
                content={content}
                handleFormSubmit={handleFormSubmit}
              />
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Pledge;

export async function getStaticProps() {
  try {
    const pledgePage = await strapiService.getPledgePageData();
    const pledge = pledgePage.data.attributes;
    const content = await markdownToHtml(pledge?.body || "");
    const title = pledge?.form_title || "";
    return {
      props: {
        content,
        title,
      },
    };
  } catch (error) {
    return {
      props: {
        content: null,
        title: null,
      },
    };
  }
}
