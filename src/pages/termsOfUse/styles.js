import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 5.188rem;
  width: 100%;
  background: #F3F3F3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
export const Box = styled.div`
  padding-left: 1rem;
  width: 90%;
  height: 100%;
  max-width: 425px;
  margin-top: 50px;
`;
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  background: #F3F3F3;
  width: 100%;
  top: 0;
`;
export const TitleBar = styled.h1`
  color: #373737;
  font-weight: 900;
  font-size: 16px;
  text-align: center;
  padding: 10px;
`;
export const TermTitle = styled.h2`
  color: #373737;
  font-weight: 900;
  text-align: center;
  font-size: .875rem;
  padding: 2.313rem 0 2rem 0;
`;
export const Title = styled.h2`
  color: #373737;
  font-weight: 900;
  font-size: 14px;
  padding: 10px 0;
`;
export const Subtitle = styled.p`
  color: #373737;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  padding: 10px 0;
`;
export const BoxList = styled.ul`
  color: #373737;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-left: 17px;
`;