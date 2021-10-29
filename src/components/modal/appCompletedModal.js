import React from "react";

import Modal from "./modal";

export default function AppCompletedModal({ handleCloseModal }) {
  const content = {
    title: 'Parabéns!',
    text: ['Você concluiu o aplicativo Almanaque Miguel Burnier. Agora você pode compartilhar todo esse conhecimento com seus amigos!']
  };

	return (
    <Modal
      subtitle={content.title}
      data={content.text}
      background='#ababab45'
      handleClick={handleCloseModal}
      elifas='ok'
    />
	);
}