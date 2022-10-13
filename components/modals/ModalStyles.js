import styled from "styled-components";

export const IconContainer = styled.div`
  position: relative;
  min-width: var(--width, 16px);
  height: var(--height, 16px);
  cursor: pointer;
  margin: var(--margin, 0);
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ShareMessage = styled.div`
  border: 1px solid var(--clr-grey-200);
  background: var(--background-color);
  font-size: 16px;
  line-height: 24px;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 48px;
  word-break: break-word;
`;

export const ModalContainer = styled.section`
  max-width: ${(props) => (props.width ? props.width : "480px")};
  width: 100%;
  background: var(--primary-color-inverse);
  padding: 24px;
  border-radius: 32px;
  text-align: center;

  h3 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    margin-bottom: 8px;
    padding-top: 24px;
  }

  & > p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
  }
`;

export const ModalButtonStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  & > * {
    flex: 1;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const CancelInner = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--clr-grey-100);
  border-radius: 50%;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const CancelWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TwitterCancelWrapper = styled(CancelWrapper)`
  height: 10px;
`;

export const Backdrop = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.16);
  padding: 16px;
  z-index: 200;
  backdrop-filter: blur(4px);
`;
