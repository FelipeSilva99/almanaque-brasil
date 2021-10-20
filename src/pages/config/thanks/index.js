import React from "react";
import * as S from "./styles";

//Component
import Header from '../../../components/header/index';
//Images
import Gerdau from '../../../images/thanks/Gerdau.svg';
import Instituto from '../../../images/thanks/Instituto.svg';
import Holonomics from '../../../images/thanks/Holonomics.png';
import VaiNaWeb from '../../../images/thanks/VaiNaWeb.svg';

export default function Thanks() {
  return (
    <S.Container>
      <S.Box>
        <Header
          title='Agradecimentos'
        />
        <S.BoxTitle>
          <S.Subtitle>Agradecemos à comunidade de Miguel Burnier e a todas as pessoas que contribuíram para a realização do aplicativo Almanaque Miguel Burnier.</S.Subtitle>
        </S.BoxTitle>
        <S.BoxContainer>
          <S.ContainerImage>
            <S.BoxImage>
              <S.Img src={Instituto} alt='Logo Instituto' />
            </S.BoxImage>
            <S.BoxImage>
              <S.Img src={Holonomics} alt='Logo Holonomics' />
            </S.BoxImage>
            <S.BoxImage>
              <S.Img src={Gerdau} alt='Logo Gerdau' />
            </S.BoxImage>
            <S.BoxImage>
              <S.Img src={VaiNaWeb} alt='Logo Vai na Web' />
            </S.BoxImage>
          </S.ContainerImage>
        </S.BoxContainer>
      </S.Box>
    </S.Container>
  )
}