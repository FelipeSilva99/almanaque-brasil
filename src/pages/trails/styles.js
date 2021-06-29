import styled from 'styled-components';

export const Card = styled.button`
  min-height: 150px;
  margin: 10px;
  border-radius: 25px;
  padding: 25px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  > h1,h2 {
    text-decoration: none;
  }
  background-color: #fff;s

  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const Box = styled.div`
  min-height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
  height: 10vh;
  >h1{
    color: #F99D07;
  }
`;
