import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//Component
import Config from '../../pages/config';

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
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Container = styled.div`
  position: relative;
  padding: .7rem 0 0;
  width: 100%;
  max-width: 425px;
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
  font-weight: ${props => props.isSelected ? '900' : 'regular'};
`;

const Footer = ({ screen }) => {
  const history = useHistory();
  const [isModalConfig, setIsModalConfig] = useState(undefined);
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
      router: 'trails',
    },
    {
      img: trunk,
      imgSelected: selectedThunk,
      txt: 'Baú',
      router: 'trunk',
    },
    {
      img: settings,
      imgSelected: selectedSettings,
      txt: 'Config.',
      router: 'config',
    },
  ]);

  const handleRouter = (router) => {
    if (router === 'config') {
      setIsModalConfig(!isModalConfig);
    } else {
      history.push(`/${router}`);
      setIsModalConfig(false);
    }
  }
  
  return (
    <Alingment>
      <Container>
        {options.map((item, i) => {
          const isSelected = (isModalConfig && item.router === 'config') || (!isModalConfig && screen === item.router);
          return (
            <Content onClick={() => handleRouter(item.router)}>
              <img src={isSelected ? item.imgSelected : item.img} alt={item.txt} />
              <Text isSelected={isSelected}>{item.txt}</Text>
            </Content>
          )
        })}
        {isModalConfig && <Config />}
      </Container>
    </Alingment>
  );
}

export default Footer;
