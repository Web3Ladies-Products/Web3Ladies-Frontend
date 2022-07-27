import React from "react";

const Badge = ({ badgeText, badgeBackground, badgeBorderColor }) => {
  return (
    <div className="badge" style={{ background: badgeBackground,border:`1px solid ${badgeBorderColor}`}}>
      {badgeText}
    </div>
  );
};

export default Badge;
