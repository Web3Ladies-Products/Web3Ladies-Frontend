import Image from "next/image";
import React from "react";
import styled from "styled-components";

const AppLoader = () => {
  return (
    <AppLoaderContainer>
      <Image
        src="/assets/images/web3ladies-logo.svg"
        alt="Web3Ladies Logo"
        width={"300px"}
        height={"300px"}
      />
    </AppLoaderContainer>
  );
};

export default AppLoader;

const AppLoaderContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: #fff;
  opacity: 0.8;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  animation: bounce 1s infinite;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
