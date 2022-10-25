import React from "react";
// import QRCodeStyling from "qr-code-styling";
import { WALLET_ADDRESS } from "../../lib/constants";
// import qrCode from "../../public/js/qr-code";

const QRCode = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const initTerminal = async () => {
      const { QRCodeStyling } = await import("qr-code-styling");
      const term = new QRCodeStyling({
        width: 300,
        height: 300,
        margin: 2,
        type: "svg",
        data: WALLET_ADDRESS,
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
          color: "#b072d2",
          type: "dot",
        },
      });
      console.log(
        "🚀 ~ file: QRCode.jsx ~ line 39 ~ initTerminal ~ term",
        term
      );
      return term;
    };
    let qrCode = initTerminal();
    console.log(
      "🚀 ~ file: QRCode.jsx ~ line 46 ~ React.useEffect ~ qrCode",
      qrCode
    );
    // qrCode.append(canvasRef.current);
  }, []);

  return (
    <div className="qr-code-container">{/* <div ref={canvasRef} /> */}</div>
  );
};

export default QRCode;
