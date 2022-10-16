import React from "react";
import Success from "../../components/common/Success";
import Vector from "../../components/icons/Vector";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import markdownToHtml from "../../lib/markdownToHtml";
import { strapiService } from "../../services";
import PledgeForm from "./../../components/pledge/PledgeForm";
import domtoimage from "dom-to-image";
import Button from "../../components/buttons/Button";
import Download from "../../components/icons/Download";

const Pledge = ({ content }) => {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState(null);
  const handleFormSubmit = (e, formData) => {
    e.preventDefault();
    setFormData(formData);
    console.log("form submitted");
    setShowSuccess(true);
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
    return {
      props: {
        content,
      },
    };
  } catch (error) {
    return {
      props: {
        content: null,
      },
    };
  }
}
