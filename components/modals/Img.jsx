import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Img = ({ src, alt, objectFit, sizes = "50vw", quality, ...props }) => {
  return (
    <ImgWrapper>
      <Image
        src={src}
        alt={alt}
        objectFit={objectFit}
        sizes={sizes}
        layout="fill"
        quality={quality}
        {...props}
      />
    </ImgWrapper>
  );
};

export default Img;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
