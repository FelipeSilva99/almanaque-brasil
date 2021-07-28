import React from 'react';
import styled from 'styled-components';

//Images
import dialogBox from '../../images/icons/dialogBox.svg';
import bento from '../../images/icons/bento.png';
import close from '../../images/icons/close.svg';

//Styled
const ContainerTip = styled.div`
  background: #70707073;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 1;

  @media (min-width: 1024px) { align-items: center; }
`;

const ContentTip = styled.div`
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
`;

const ContentInfo = styled.div`
  position: absolute;
  padding-top: 2rem;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ScrollTip  = styled.div`
  padding-top: 1rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

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
  top: -1rem;
  left: -3rem;
`;

function Tip({ text, handleModalTip }) {
  return (
    <ContainerTip>
        <ContentTip>
          <ContentInfoTip>
            <ImgDialogBox src={dialogBox} />
            <ContentInfo>
              <ScrollTip>
                {text?.map(item =>  <TextTip>{item}</TextTip>)}
              </ScrollTip>
              <img src={close} alt={"fechar"} onClick={handleModalTip} />
            </ContentInfo>
          </ContentInfoTip>
          <ImgBento src={bento} />
        </ContentTip>
      </ContainerTip>
  )
}

export default Tip;
