import React from "react";

import Modal from "./modal";

export default function ResetMapAlert({ handleResetProgress, handleCloseModal }) {
  const content = {
    title: 'Atenção!',
    text: [
      'Tem certeza que quer reiniciar seu mapa?',
      'Ao fazer isso você irá apagar tudo que fez até o momento. Você iniciará tudo de novo.'
    ],
    button: 'Reiniciar'
  };

  return (
    <Modal
      subtitle={content.title}
      color="#fb6c76"
      data={content.text}
      background='#ababab45'
      resetProgress={handleResetProgress}
      handleClick={handleCloseModal}
      btnContent={content.button}
      buttonBg='#ffd000'
      elifas='tip'
      isWelcome={true}
    />
  );
}