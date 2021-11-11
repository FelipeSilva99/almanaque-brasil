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
  isResend,
  isTutorial,
  isWelcome,
  isScore,
  showThunk,
  resetProgress,
  isTip,
  title,
  subtitle,
  bottom,
  margin,
  color,
  data,
  background,
  btnContent,
  buttonBg,
  elifas,
  noAbsolute,
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
      case 'none':
        return
      default:
        return <S.ImgElifas isTutorial={isTutorial} src={tipElifas} />
    }
  };

  return (
    <S.Container noAbsolute={noAbsolute} background={background}>
      <S.Content>
        <S.ContentInfo
          bottom={bottom}
          isTutorial={isTutorial}
          isResend={isResend}
          isTip={isTip}
          helpScreen={helpScreen}
        >
          {title && <S.Title>{title}</S.Title>}

          <S.TutorialBox>
            {subtitle && 
              <S.Subtitle
                color={color}
                fontWeight={fontWeight}
                font={font}
                isResend={isResend}
              >
                {subtitle}
              </S.Subtitle>
            }

            <S.Scroll isTutorial={isTutorial}>
              {isTutorial ? data[0].text.map(item => 
                <S.Text isTutorial={isTutorial}>{item}</S.Text>) 
                : data.map(item => 
                <S.Text
                  margin={margin}
                  isTip={isTip}
                  isWelcome={isWelcome}
                  isScore={isScore}
                  helpScreen={helpScreen}
                >{item}</S.Text>)
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
        
        {!isResend && renderElifas()}
      </S.Content>
    </S.Container>
  );
}