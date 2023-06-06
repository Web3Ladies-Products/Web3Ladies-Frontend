import React from "react";
import styled from "styled-components";

const PhaseContent = ({ data }) => {
  const datum = React.useMemo(() => data, [data]);
  return (
    <DialogBox className="mentorship-phase-content">
      <h2>{datum?.title} </h2>
      <p>{datum.description} </p>
    </DialogBox>
  );
};

export default PhaseContent;

const DialogBox = styled.div`
position:relative;
// &:before {
//   // background-color: #cb3a2d;
//   border: 2px solid black;

//   top: 5px;
//   content: '';
//   display: block;
//   height: 40px;
//   left: 30%;
//   margin-left: -20px;
//   position: absolute;
//   -ms-transform: rotate(45deg);
//   -webkit-transform: rotate(45deg);
//   transform: rotate(45deg);
//   width: 40px;
//   z-index: 1;
}
`;
