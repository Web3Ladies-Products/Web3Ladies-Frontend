import Image from "next/image";
import React from "react";
import { useCopy } from "../../../hooks/useCopy";
import {
  BANK_ACCOUNT_NAME,
  BANK_ACCOUNT_NUMBER,
  BANK_NAME,
} from "../../../lib/constants";
import GenericModal from "../../modals/GenericModal";

const BankTransferModal = ({ closeModal, openThankYou }) => {
  const { copyToClipBoard, copied } = useCopy();
  return (
    <GenericModal
      title="Thank you for wanting to donate to our community"
      buttonsArray={[
        {
          text: "I have sent the funds",
          variant: "outline",
          onClick: () => openThankYou(),
        },
      ]}
      closeModal={() => {
        closeModal();
      }}
    >
      <div className="card">
        <div className="card__body background">
          <div
            className="qr__wallet-address justify-content-center"
            onClick={() => copyToClipBoard(BANK_ACCOUNT_NUMBER)}
          >
            <h3>{BANK_ACCOUNT_NUMBER}</h3>
            <span className="link">
              {copied ? (
                <Image
                  src="/assets/images/check-line.svg"
                  width={12}
                  height={12}
                  alt="copy"
                />
              ) : (
                <Image
                  src="/assets/images/link.svg"
                  width={12}
                  height={12}
                  alt="copy"
                />
              )}
            </span>
          </div>
          <p>{BANK_ACCOUNT_NAME}</p>
          <h3>{BANK_NAME}</h3>
        </div>
      </div>
    </GenericModal>
  );
};

export default BankTransferModal;
