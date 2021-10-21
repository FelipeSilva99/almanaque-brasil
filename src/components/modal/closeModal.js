import React from "react";
import styled from "styled-components";

const CloseBtn = styled.button`
  font: 900 1.5em 'Nunito';
  color: #373737;
  transform: scale(1,.9);
`;

export default function CloseModal({ handleCloseTutorial, handleModalTip }) {
  return <CloseBtn onClick={handleCloseTutorial || handleModalTip}>X</CloseBtn>
}