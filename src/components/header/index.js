import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  position: fixed;
  /* margin-top: 2rem; */
  width: inherit;
  height: 10vh;
  min-height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Back = styled.p`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 0;
  color: #272727;
`;

const Time = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 0;
  color: #272727;
`;

const Header = ({ children }) => {
  return (
    <Container>
      <Back>{'<'}</Back>
      {children}
      <Time>{'/||'}</Time>
    </Container>
  );
}

export default Header;