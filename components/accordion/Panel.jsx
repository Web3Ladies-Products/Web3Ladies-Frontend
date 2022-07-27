import React from "react";

const Panel = ({
  label,
  content,
  activeTab,
  index,
  activateTab,
  children,
  hasActiveBackground,
  hasFullBorder,
  fullWidth,
}) => {
  const [height, setHeight] = React.useState(0);
  const [isActive, setIsActive] = React.useState(null);

  const panelInner = React.useRef(null);

  React.useEffect(() => {
    setIsActive(activeTab === index);
  }, [activeTab, index]);

  React.useEffect(() => {
    setTimeout(() => {
      const el = panelInner.current;
      setHeight(el.scrollHeight);
    }, 333);

    return () => {
      setHeight(0);
    };
  }, [panelInner]);

  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div>
      <div
        className={`panel ${hasFullBorder && "panel--has-border"}`}
        role="tabpanel"
        aria-expanded={isActive}
      >
        <button
          className={`panel__label ${
            isActive && hasActiveBackground && "panel__label--dark"
          }`}
          role="tab"
          onClick={activateTab}
        >
          {label}
        </button>
        <div
          className="panel__inner"
          ref={panelInner}
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p className={`panel__content ${fullWidth && "w-full"}`}>{content}</p>
          {children && <div className="panel__children">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default Panel;
