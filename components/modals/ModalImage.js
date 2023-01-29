import styled from "styled-components";

export const ModalImage = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 32px auto;
  overflow: hidden !important;
`;

export const EditModalImage = styled(ModalImage)`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "200px")};

  @media (max-width: 900px) {
    width: 55px;
    height: 55px;
  }
`;

export const EditModalImageIcon = styled(ModalImage)`
  width: ${(props) => (props.width ? props.width : "40px")};
  height: ${(props) => (props.height ? props.height : "40px")};

  @media (max-width: 900px) {
    width: ${(props) => (props.width ? "13px" : "27px")};
    height: ${(props) => (props.height ? "10px" : "27px")};
  }
`;

export const ModalImageShare = styled.div`
  position: relative;
  width: 128px;
  height: 128px;
  margin: 32px auto;
`;

export const ModalImageShareSocials = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: var(--gap, 16px);

  & > * {
    flex: 1;
    min-width: 0;
  }

  .ref-button {
    background-color: var(--clr-grey-25);
    border: 1px solid var(--clr-grey-100);
  }

  @media (max-width: 520px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
