import React from "react";

const Badge = ({ badgeText, badgeBackground, badgeBorderColor, textColor }) => {
  return (
    <div
      className="badge"
      style={{
        background: badgeBackground && badgeBackground,
        color: textColor && textColor,
        border: badgeBorderColor && `1px solid ${badgeBorderColor}`,
      }}
    >
      {badgeText}
    </div>
  );
};

export default Badge;
