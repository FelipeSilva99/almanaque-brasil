import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//Images
import home from '../../images/icons/menu/home.svg';
import selectedHome from '../../images/icons/menu/selectedHome.svg';

import trail from '../../images/icons/menu/trail.svg';
import selectedTrail from '../../images/icons/menu/selectedTrail.svg';

import trunk from '../../images/icons/menu/thunk.svg';
import selectedThunk from '../../images/icons/menu/selectedThunk.svg';

import settings from '../../images/icons/menu/settings.svg';
import selectedSettings from '../../images/icons/menu/selectedSettings.svg';

// Styles
const Alingment = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Container = styled.div`
  position: relative;
  padding: .8rem 0 .2rem;
  width: 100%;
  max-width: 425px;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  box-shadow: 0 -5px 15px #00000020;
  border-radius: 45px 45px 0 0;
  background: #FFFFFF;
`;

const Content = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 3rem;
  transition: .2s;
`;

const Text = styled.p`
  font-size: .8rem;
  letter-spacing: ${props => props.isSelected && '.5px'};
  font-weight: ${props => props.isSelected ? '900' : '500'};
  padding-top: .1rem;
  padding-top: ${props => props.trunk && '.2rem'};
`;

const Footer = ({ screen }) => {
  const history = useHistory();
  const [options] = useState([
    {
      img: home,
      imgSelected: selectedHome,
      txt: 'Home',
      router: 'dashboard',
    },
    {
      img: trail,
      imgSelected: selectedTrail,
      txt: 'Trilhas',
      router: 'trilhas',
    },
    {
      img: trunk,
      imgSelected: selectedThunk,
      txt: 'Baú',
      router: 'bau',
    },
    {
      img: settings,
      imgSelected: selectedSettings,
      txt: 'Config.',
      router: 'config',
    },
  ]);

  const handleRouter = (router, i) => {
    history.push(`/${router}`);
  }
  
  return (
    <Alingment>
      <Container>
        {options.map((item, i) => {
          const isSelected = screen === item.router; 
          return (
            <Content onClick={() => handleRouter(item.router, i)} key={i}>
              <img src={isSelected ? item.imgSelected : item.img} alt={item.txt} />
              <Text isSelected={isSelected} trunk={item.txt ==='Baú'}>{item.txt}</Text>
            </Content>
          )
        })}
      </Container>
    </Alingment>
  );
}

export default Footer;
