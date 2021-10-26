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

export const Box = styled.div`
  padding: 1rem 0 .875rem;
  height: 100%;
  text-align-last: center;
`;

export const Subtitle = styled.p`
  color: #373737;
  font-size: 1rem;
  padding: 4.938rem 0 1.5rem; 
`;

export const Email = styled.h3`
  color: #373737;
  font-size: 1.25rem;
  font-weight: 900;
  word-break: break-word;

  @media (max-width: 400px) { font-size: 1rem; }
`;