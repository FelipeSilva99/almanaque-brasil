import React from 'react';
import styled from 'styled-components';

//Images
import iconElifas from '../../images/elifas/tip.svg';

//Styled
const ContainerTip = styled.div`
  background: #70707073;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #70707095;
  z-index: 1;

  @media (min-width: 1024px) { align-items: center; }
`;

const ContentTip = styled.div`
  position: relative;
  margin-top: 3rem;
  width: 100%;
  height: 93vh;
`;

const ContentInfoTip = styled.div`
  display: flex;
  justify-content: center;
  min-height: 60%;
`;

const ContentInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 1.5rem 1rem;
  width: 90%;
  filter: drop-shadow(1px 4px 3px #999);
  border-radius: 30px;
  background: #fff;

  &:after {
    position: absolute;
    content: '';
    left: 43%;
    bottom: -10%;
    display: block;
    width: 50px;
    height: 70px;
    border: 0px solid;
    background-color: transparent;
    border-bottom-left-radius: 100%;
    box-shadow: -34px -34px 0px 30px #fff;
    transform: rotate(5deg);
    z-index: -1;
  }
`;

const ScrollTip = styled.div`
  margin-bottom: .3rem;
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
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  line-height: 1.4;

  @media (max-width: 320px) { padding: ${props => props.padding && '1.5rem 0 .4rem 0 '}; }
`;

const ImgBento = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 11rem;
`;

const CloseBtn = styled.button`
  font: 900 1.2em 'Nunito';
  color: #ffd000;
  transform: scale(1,.9);
`;

function Tip({ text, handleModalTip }) {
  return (
    <ContainerTip>
      <ContentTip>
        <ContentInfoTip>
          <ContentInfo>
            <ScrollTip>
              {text?.map(item => <TextTip>{item}</TextTip>)}
            </ScrollTip>
          <CloseBtn onClick={handleModalTip}>X</CloseBtn>
          </ContentInfo>
        </ContentInfoTip>
        <ImgBento src={iconElifas} />
      </ContentTip>
    </ContainerTip>
  )
}

export default Tip;