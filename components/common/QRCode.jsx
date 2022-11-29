import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import styled from "styled-components";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  margin: 2,
  image: "/assets/images/web3ladies-logo.svg",
  backgroundOptions: {
    color: "#e9ebee",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  },
  dotsOptions: {
    color: "#000000",
    type: "dots",
  },
  cornersSquareOptions: {
    color: "#000000",
    type: "dot",
  },
  cornersDotOptions: {
    color: "#000000",
    type: "dot",
  },
});

const QRCodeBorderLeft = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;

  &::before,
  &::after {
    border-color: #d6d2fd;
    border-width: 2px;
    content: "";
    display: block;
    height: 24px;
    pointer-events: none;
    position: absolute;
    width: 24px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
  }

  &::after {
    top: 0;
    border-top-left-radius: 12px;
    border-right: none;
    border-bottom: none;
  }

  &::before {
    bottom: 0;
    border-bottom-left-radius: 12px;
    border-right: none;
    border-top: none;
  }
`;

const QRCodeBorderRight = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;

  &::before,
  &::after {
    border-color: #d6d2fd;
    border-width: 2px;
    content: "";
    display: block;
    height: 24px;
    pointer-events: none;
    position: absolute;
    width: 24px;
    border-right-style: solid;
    right: 0;
  }

  &::after {
    top: 0;
    border-top-right-radius: 12px;
    border-left: none;
    border-bottom: none;
    border-top-style: solid;
  }

  &::before {
    bottom: 0;
    border-bottom-right-radius: 12px;
    border-left: none;
    border-top: none;
    border-bottom-style: solid;
  }
`;

const QRCode = ({ address }) => {
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: address,
    });
  }, [address]);

  return (
    <QRWrapper style={{ width: "340px", height: "340px" }}>
      <QRCodeBorderLeft />
      <div ref={ref} />
      <QRCodeBorderRight />
    </QRWrapper>
  );
};

export default QRCode;

const QRWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 1.5rem 0;
`;
