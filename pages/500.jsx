import React from "react";
import CustomError from "next/error";

const Custom500Error = ({ redirectText }) => {
  return (
    <CustomError
      heading={`Oops! Something went wrong`}
      message={`Please try again or contact our admins <br></br>on social for support.`}
      redirectText={redirectText || "Go Home"}
    />
  );
};

export default Custom500Error;
