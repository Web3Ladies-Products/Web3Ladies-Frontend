import React from "react";

const Notification = ({ text }) => {
  return (
    <div className="cohort__notification">
      <p
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  );
};

export default Notification;
