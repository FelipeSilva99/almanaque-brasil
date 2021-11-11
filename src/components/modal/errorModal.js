import React from 'react'

import Modal from "./modal"
import ImgFace from "../../images/Grupo2065.svg"

export default function ErrorModal() {
  const content = {
    title: 'Opa! A aplicação parou.',
    text: [
      'Por favor, reinicie o aplicativo.',
      <img src={ImgFace} alt="Emoji triste" style={{ margin: '0 auto' }} />
    ]
  };

  return (
    <Modal
      subtitle={content.title}
      data={content.text}
      background='#0000004d'
      balloonColor='#f3f3f3'
      margin='1.5rem auto 0'
      isError
    />
  );
}