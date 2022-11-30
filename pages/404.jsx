import React from "react";
import CustomError from "next/error";

const Custom404Error = ({ customPageTitle, redirectText }) => {
  return (
    <CustomError
      heading={` ${customPageTitle || "Page"} Not Found`}
      message={`The ${customPageTitle || "page"} you are looking for doesn’t
      exist or has been moved.`}
      redirectText={redirectText || "Go Home"}
    />
  );
};

export default Custom404Error;
