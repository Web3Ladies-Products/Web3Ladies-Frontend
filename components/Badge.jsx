import React from "react";

const Badge = ({ badgeText, badgeBackground }) => {
  return (
    <div className="badge" style={{ background: badgeBackground }}>
      {badgeText}
    </div>
  );
};

export default Badge;
