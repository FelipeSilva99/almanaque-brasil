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
const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: .7rem 0 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: #FFFFFF;
`;

const Content = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: .75rem;
  font-weight: ${props => props.isSelected ? '900' : 'regular' };
`;

const Footer = () => {
  const history = useHistory();
  const [isSelected, setIsSelected] = useState(0);
  const [options] = useState([
    {
      img: home,
      imgSelected: selectedHome,
      txt: 'Home',
      history: 'dashboard',
    },
    {
      img: trail,
      imgSelected: selectedTrail,
      txt: 'Trilhas',
      history: 'trails',
    },
    {
      img: trunk,
      imgSelected: selectedThunk,
      txt: 'Baú',
      history: 'trunk',
    },
    {
      img: settings,
      imgSelected: selectedSettings,
      txt: 'Config.',
      history: 'home',
    },
  ]);

  const handleSelectedItem = (i, router) => {
    setIsSelected(i);
    // history.push(`/${router}`);
  }

  return (
    <Container>
      {options.map((item, i) => (
        <Content onClick={() => handleSelectedItem(i, item.router)}>
          <img src={i === isSelected ? item.imgSelected : item.img} />
          <Text isSelected={isSelected === i}>{item.txt}</Text>
        </Content>
      ))}
    </Container>
  );
}

export default Footer;
