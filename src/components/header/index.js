import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// import {
//   createNewTrails
// } from '../../modules/trails-module';

// const mapStateToProps = state => ({
//   isTrails: state.trails.isTrails,
// });

// const mapDispatchToProps = dispatch => ({
//   createNewTrails: info => {
//     dispatch(createNewTrails(info));
//   },
// });

//Components
import Button from '../buttons/button';

// Styles
const Container = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Header = () => {
  return (
    <Container>
      <Back>{'<'}</Back>
      <Time>{'/||'}</Time>
    </Container>
  );
}

export default Header;