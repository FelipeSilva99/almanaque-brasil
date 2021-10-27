import React from "react";
import * as S from "./modalStyles";

import CloseBtn from "./closeModal";

// Elifas
import guideElifas from "../../images/elifas.svg";
import tipElifas from "../../images/elifas/tip.svg";
import okElifas from "../../images/elifas/ok.svg";

export default function Modal({
  handleCloseTutorial,
  handleModalTip,
  handleClick,
  isTutorial,
  isWelcome,
  isScore,
  showThunk,
  resetProgress,
  isTip,
  height,
  title,
  subtitle,
  color,
  data,
  background,
  btnContent,
  buttonBg,
  elifas,
  fontWeight,
  font,
  helpScreen
}) {
  const renderElifas = () => {
    switch (elifas) {
      case 'elifas':
        return <S.ImgElifas isTutorial={isTutorial} isWelcome src={guideElifas} />
      case 'ok':
        return <S.ImgElifas isTutorial={isTutorial} src={okElifas} />
      default:
        return <S.ImgElifas isTutorial={isTutorial} src={tipElifas} />
    }
  };

  return (
    <S.Container background={background}>
      <S.Content height={height}>
        <S.ContentInfo
          isTutorial={isTutorial}
          isTip={isTip}
          helpScreen={helpScreen}
        >
          {title && <S.Title>{title}</S.Title>}

          <S.TutorialBox>
            {subtitle && 
              <S.Subtitle color={color} fontWeight={fontWeight} font={font}>{subtitle}</S.Subtitle>}
            
            <S.Scroll isTutorial={isTutorial}>
              {isTutorial ? data[0].text.map(item => 
                <S.Text isTutorial={isTutorial}>{item}</S.Text>) 
                : data.map(item => 
                <S.Text isTip={isTip} isScore={isScore} helpScreen={helpScreen}>{item}</S.Text>)
              }
            </S.Scroll>
          </S.TutorialBox>

          <CloseBtn
            handleCloseTutorial={handleCloseTutorial}
            handleModalTip={handleModalTip}
            handleClick={handleClick}
            btnContent={btnContent}
            buttonBg={buttonBg}
            isWelcome={isWelcome}
            showThunk={showThunk}
            resetProgress={resetProgress}
          />
        </S.ContentInfo>
        
        {renderElifas()}
      </S.Content>
    </S.Container>
  );
}