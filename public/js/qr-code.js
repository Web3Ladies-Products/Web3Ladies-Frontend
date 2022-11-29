import QRCodeStyling from "qr-code-styling";

const qrCode = new QRCodeStyling({
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

export default qrCode;
