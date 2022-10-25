import React from "react";
import Close from "../icons/Close";
import Img from "./Img";
import {
  Backdrop,
  CancelInner,
  ModalContainer,
  ModalHeader,
  IconContainer,
} from "./ModalStyles";

const Modal = ({ children, closeModal, style, type }) => {
  let width;
  switch (type) {
    case "small":
      width = "400px";
      break;

    case "medium":
      width = "507px";
      break;

    case "large":
      width = "700px";
      break;

    default:
      width = "507px";
      break;
  }

  return (
    <Backdrop onClick={closeModal}>
      <ModalContainer
        style={style}
        onClick={(e) => {
          e.stopPropagation();
        }}
        width={width}
      >
        <ModalHeader>
          <Close handleClick={closeModal} />
        </ModalHeader>

        {children}
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
