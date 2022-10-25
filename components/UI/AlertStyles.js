import styled from "styled-components";

export const AlertStyles = styled.div`
  position: fixed;
  right: 20px;
  top: 85px;
  animation: FadeIn 5s ease-in-out;
  z-index: 500;

  .alert {
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 16px;
    margin-bottom: 16px;

    &.fade {
      animation: FadeOut 1s ease-in-out;
    }

    &.alert-success {
      background-color: var(--clr-state-3-50);
      color: var(--clr-state-3-900);
    }

    &.alert-danger {
      background-color: var(--clr-state-1-50);
      color: var(--clr-state-1-900);
    }

    &.alert-warning {
      background-color: var(--clr-state-2-50);
      color: var(--clr-state-2-900);
    }

    &.alert-neutral {
      background-color: var(--grey-50);
      color: var(--grey-900);
    }

    span {
      margin-left: 8px;
    }
  }

  @keyframes FadeIn {
    0% {
      transform: translateX(0);
      opacity: 0;
    }
    20% {
      transform: translateX(-40px);
      opacity: 1;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes FadeOut {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    25% {
      opacity: 0.75;
      transform: translateX(40px);
    }
    75% {
      opacity: 0.5;
      transform: translateX(60px);
    }
    100% {
      opacity: 0;
      transform: translateX(0px);
    }
  }
`;
