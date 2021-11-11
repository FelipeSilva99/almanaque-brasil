import React from "react"

import Modal from "./modal"

export default function OfflineModal({ handleCloseModal }) {
  const content = {
    title: 'Você está jogando off-line!',
    text: ['Você já atingiu o máximo de atividades sem internet. Caso queira continuar jogando, reative sua conexão.']
  };

  return (
    <Modal
      subtitle={content.title}
      data={content.text}
      handleClick={handleCloseModal}
      background='#0000004d'
      balloonColor='#f3f3f3'
    />
  );
}