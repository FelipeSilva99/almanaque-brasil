import React, { useState } from "react";
import * as S from "./styles";

import Header from "../../components/header/index";
import Item from "../config/item";
import tutorialData from "../../components/modal/tutorialData";
import TutorialModal from "../../components/modal/tutorialModal";

export default function Tutorial() {
  const [game, setGame] = useState('');
  const [modal, setModal] = useState(false);

  const handleGame = (i) => {
    const games = tutorialData.map(item => item.game);

    setGame(games.filter((game, index) => index === i));
    setModal(modal ? false : true);
  };
  
  const handleCloseTutorial = () => {
    setModal(false);
  };

  return (
    <S.Container>
      <Header
        title='Tutorial'
      />
      <S.Content>
        {tutorialData.map((item, i) => (
          <Item
            key={i}
            title={item.game}
            handleClick={() => handleGame(i)}
          />
        ))}
        {modal !== false && 
          <TutorialModal
            screen={game}
            handleCloseTutorial={handleCloseTutorial}
          />
        }
      </S.Content>
    </S.Container>
  );
}