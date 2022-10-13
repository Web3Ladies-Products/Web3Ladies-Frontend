import { useRouter } from "next/router";
import React from "react";
import GenericModal from "../../modals/GenericModal";

const ThankYouModal = ({ closeModal }) => {
  const router = useRouter();
  return (
    <GenericModal
      type="large"
      buttonsArray={[
        {
          text: "Take our plegde",
          variant: "primary",
          onClick: () => {
            router.push("/pledge");
            closeModal();
          },
        },
      ]}
      closeModal={() => {
        closeModal();
      }}
    >
      <h1 className="section-title">Thank you!</h1>
      <p className="my-20">
        We will notify you as soon as we confirm <br /> receipt of funds.
      </p>
      <p className="my-20">
        <span className="primary-color semibold">1000 persons </span>
        have taken the Web3Ladies pledge. Join them!
      </p>
    </GenericModal>
  );
};

export default ThankYouModal;
