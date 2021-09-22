import React from 'react';
import styled from 'styled-components';

//Images
import dialogBox from '../../images/dialogBox/dialogBox.svg';
import iconElifas from '../../images/elifas/tip.svg';
import close from '../../images/icons/close.svg';

//Styled
const ContainerTip = styled.div`
  background: #70707073;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 1024px) { align-items: center; }
`;

const ContentTip = styled.div`
  /* margin: auto; */
  width: 100%;
  max-width: 340px;
`;

const ContentInfoTip = styled.div`
  position: relative;
  top: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ImgDialogBox = styled.img`
  width: 100%;
  transform: scaleX(-1);
`;

const ContentInfo = styled.div`
  position: absolute;
  margin-top: 2rem;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`;

const ScrollTip = styled.div`
  overflow-y: auto;
  height: 14rem;

  ::-webkit-scrollbar {
		width: 4px;
		height: 10px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 20px;
	}
	::-webkit-scrollbar-thumb {
		background: #ccc;
		border-radius: 13px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #ccc;
	}
`;

const TextTip = styled.p`
  padding-bottom: .8rem;
  color: #373737F2;
  line-height: 1.2rem;

  @media (max-width: 320px) { padding: ${props => props.padding && '1.5rem 0 .4rem 0 '}; }
`;

const ImgBento = styled.img`
  position: relative;
  right: -55%;
  bottom: -10px
`;

function Tip({ text, handleModalTip }) {
  return (
    <ContainerTip>
      <ContentTip>
        <ContentInfoTip>
          <ImgDialogBox src={dialogBox} />
          <ContentInfo>
            <ScrollTip>
              {text?.map(item => <TextTip>{item}</TextTip>)}
            </ScrollTip>
            <img src={close} alt={"fechar"} onClick={handleModalTip} />
          </ContentInfo>
        </ContentInfoTip>
        <ImgBento src={iconElifas} />
      </ContentTip>
    </ContainerTip>
  )
}

export default Tip;
