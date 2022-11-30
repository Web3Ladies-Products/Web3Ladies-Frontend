import React from "react";
import Button from "../buttons/Button";
import Img from "./Img";
import Modal from "./Modal";
import { ButtonsContainer, ModalImage } from "./ModalImage";

const GenericModal = ({
  type,
  title,
  description,
  image,
  buttonsArray,
  children,
  closeModal,
}) => {
  return (
    <Modal closeModal={closeModal} type={type}>
      {title && <h3>{title}</h3>}
      {image && (
        <ModalImage>
          <Img src={image.source} alt={image.alt} layout="fill" />
        </ModalImage>
      )}
      {description && <p>{description}</p>}
      {children && children}
      {buttonsArray && (
        <ButtonsContainer>
          {buttonsArray.map((button, index) => {
            return (
              <Button
                key={index}
                as={button.as && button.as}
                href={button.href && button.href}
                target={button.target && button.target}
                rel={button.rel && button.rel}
                variant={button.variant && button.variant}
                className={button.className && button.className}
                fullWidth={button.fullWidth && button.fullWidth}
                onClick={button.onClick && button.onClick}
              >
                {button.text}
                {button.children && button.children}
              </Button>
            );
          })}
        </ButtonsContainer>
      )}
    </Modal>
  );
};

export default GenericModal;
