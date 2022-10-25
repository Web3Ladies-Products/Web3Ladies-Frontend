import React from "react";
import Image from "next/image";

const GenericModal = ({ modalDetails, closeModal }) => {
  return (
    <>
      <div
        className="modal--overlay modal--overlay__show"
        tabindex="-1"
        style={{
          "background-color": modalDetails?.style
            ? "#fbfbfb"
            : "rgba(0, 0, 0, 0.6)",
        }}
      ></div>
      <div className="popup-modal--container">
        <Image
          src={
            modalDetails?.image
              ? modalDetails?.image
              : "/assets/images/success-check-gif.gif"
          }
          alt="success-check"
          width={modalDetails?.style ? "100%" : "100%"}
          height={modalDetails?.style ? "100%" : "100%"}
        />
        <div className="text">
          <h4 className="title">{modalDetails?.title}</h4>
          <p className="{ description: modalDetails?.title, title: !modalDetails?.title }">
            {modalDetails?.description}
          </p>
        </div>
        {/* !modalDetails?.proceedButton */}
        <button className="primary full-100" onClick={closeModal()}>
          Dismiss
        </button>
        {/* modalDetails?.proceedButton */}
        <button
          className={`primary full-100${
            modalDetails?.proceedButton?.style === "danger" && "danger-btn"
          }`}
          onClick={confirm(true)}
        >
          {modalDetails?.proceedButton?.text}
        </button>
        {/* "modalDetails?.proceedButton && modalDetails?.showCancel" */}
        <button
          className={`secondary full-100 ${
            modalDetails?.proceedButton?.style === "danger"
              ? "primary primary__transparent"
              : "clear"
          } `}
          onClick={closeModal()}
        >
          {modalDetails?.cancelText ? modalDetails?.cancelText : "Cancel"}
        </button>
        {/* modalDetails?.viewDetails" */}
        <button
          onClick="confirm(true)"
          className="popup-modal--view-details clear full-100"
        >
          View Transaction Details
        </button>
      </div>
    </>
  );
};

export default GenericModal;
