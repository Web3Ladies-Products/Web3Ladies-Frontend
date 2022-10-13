import Image from "next/image";
import React from "react";
import { useCopy } from "../../hooks/useCopy";
import { PAYSTACK_LINK, WALLET_ADDRESS } from "../../lib/constants";
import Button from "../buttons/Button";
import BankTransferModal from "./modals/BankTransferModal";
import ThankYouModal from "./modals/ThankYouModal";
import QRCode from "./QRCode";

const PaymentMethod = () => {
  const { copyToClipBoard, copied } = useCopy();
  const [showBankTransferModal, setShowBankTransferModal] =
    React.useState(false);
  const [showThankYouModal, setShowThankYouModal] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("fiat");
  const tabs = [
    {
      name: "Fiat",
      key: "fiat",
    },
    {
      name: "Crypto",
      key: "crypto",
    },
  ];
  return (
    <>
      <h3>Choose a payment method</h3>
      <div className="flat-tabs">
        {tabs.map((tab, index) => (
          <div key={index} className="flat-tabs__tab">
            <Button
              className={`flat-tabs__tab-button ${
                tab.key === activeTab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.name}
            </Button>
          </div>
        ))}
      </div>
      {activeTab === "fiat" && (
        <div className="payment-method payment-method--fiat">
          <div
            className="card card--has-border"
            onClick={() => {
              setShowBankTransferModal(true);
            }}
          >
            <Image
              src={"/assets/images/bank.svg"}
              alt="bank"
              width={30}
              height={30}
            />
            <p>Bank Transfer</p>
          </div>
          <a
            target="_blank"
            href={PAYSTACK_LINK}
            rel="noopener noreferrer"
            className="card card--has-border"
          >
            <Image
              src={"/assets/images/paystack.svg"}
              alt="paystack"
              width={30}
              height={30}
            />
            <p>Pay with Paystack</p>
          </a>
        </div>
      )}
      {activeTab === "crypto" && (
        <div className="payment-method payment-method--crypto">
          <h4>Thank you for wanting to donate to our community</h4>
          <div className="qr">
            {/* <QRCode /> */}
            <h4>Scan QR code</h4>
            <p className="my-20">
              We accept ERC tokens (ETH, USDT etc) BEP20 tokens as well
            </p>
            <div
              className="qr__wallet-address"
              onClick={() => copyToClipBoard(WALLET_ADDRESS)}
            >
              <small>{WALLET_ADDRESS}</small>
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
          </div>
        </div>
      )}
      {showBankTransferModal && (
        <BankTransferModal
          openThankYou={() => {
            setShowThankYouModal(true);
            setShowBankTransferModal(false);
          }}
          closeModal={() => {
            setShowBankTransferModal(false);
          }}
        />
      )}
      {showThankYouModal && (
        <ThankYouModal closeModal={() => setShowThankYouModal(false)} />
      )}
    </>
  );
};

export default PaymentMethod;
