import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  background-color: #fff;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 375px) {
    height: 100%;
  }
`;

const Layout = (props) => {
  return (
    <Container>
      {/* <button
        onClick={handlerNextActivitie}
      >próxima questão</button> */}
    </Container>
  );
}

export default Layout;