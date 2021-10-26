import React from "react";
import * as S from "./styles";

//Component
import Header from '../../../components/header/index';

export default function Thanks() {
  return (
    <S.Container>
      <Header
        title='Precisa de ajuda?'
      />
      <S.Box>
        <S.Subtitle>Precisa de ajuda? Envie-nos um e-mail para:</S.Subtitle>
        <S.Email>ajuda.almanaque.app@precisaser.org</S.Email>
      </S.Box>
    </S.Container>
  )
}