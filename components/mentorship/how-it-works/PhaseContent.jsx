import React from "react";

const PhaseContent = ({ data }) => {
  const datum = React.useMemo(() => data, [data]);
  return (
    <div className="mentorship-phase-content">
      <h2>{datum?.title} </h2>
      <p>{datum.description} </p>
    </div>
  );
};

export default PhaseContent;
