import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  background: #F3F3F3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Subtitle = styled.p`
  color: #373737;
  font-size: 14px;
  line-height: 21px;
  padding: 5rem 0 4rem 0;
`;
export const Box = styled.div`
  width: 90%;
  height: 100%;
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 20rem;
`;
export const BoxImage = styled.div`
  /* width: 5rem; */
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 320px) {
    width: 9rem;
  }
`;