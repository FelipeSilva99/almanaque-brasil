import React from "react";

import Modal from "./modal";

export default function ActivitiesCompletedModal({ history, score }) {
  const handleClick = () => {
    history.push('/trilhas');
  };

  const content = {
    title: 'Parabéns!',
    text: [
      'Você concluiu a trilha, e conquistou:',
      `${score} pts`,
      'vamos continuar nessa jornada de conhecimento?'
    ],
    button: 'Escolher outra trilha'
  };

	return (
    <Modal
      subtitle={content.title}
      data={content.text}
      background='#ababab45'
      handleClick={handleClick}
      btnContent={content.button}
      buttonBg='#ffd000'
      noAbsolute
      isScore={true}
    />
	);
}