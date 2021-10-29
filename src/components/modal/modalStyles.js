import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${props => props.background || '#ababab'};
  overflow: hidden;
  z-index: 5;

  @media (min-width: 1024px) { align-items: center; }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-width: 393px;
`;

export const ContentInfo = styled.div`
  position: relative;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: ${props => props.isTutorial ? '1rem 1.1rem' : '1.5rem 1rem 1.5rem'};
  width:  ${props => props.helpScreen ? '100%' : '91%'};
  letter-spacing: 1px;
  filter: drop-shadow(1px 4px 3px #999);
  border-radius: ${props => props.isTutorial ? '30px' : '20px'};
  background: #fff;

  img {
    cursor: pointer;
  }

  &:after {
    position: absolute;
    content: '';
    left: ${props => props.isTip ? '42%' : '51%'};
    bottom: ${props => props.isTutorial ? '-9%' : '-12%'};
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

export const TutorialBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 1.1em;
`;

export const Subtitle = styled.h1`
  margin: .5rem 0 ${props => props.isTutorial ? '2.5rem' : '.7rem'};
  text-align: center;
  font-size: ${props => props.font || '1.25em'};
  line-height: 1;
  font-weight: ${props => props.fontWeight || '900'};
  color: ${props => props.color || '#373737'};
`;

export const Scroll = styled.ol`
  padding-left: ${props => props.isTutorial ? '3.3rem' : '0'};
  list-style: none;
  counter-reset: count;

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

export const Text = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${props => props.helpScreen ? '1.25rem' : '1rem'};
  width: 90%;
  margin: ${props => props.margin || '.5rem 0 1.5rem'};
  font-weight: ${props => props.helpScreen  && '900'};
  line-height: 1.45;
  letter-spacing: 1.2px;
  counter-increment: count;

  &:nth-child(2) {
    ${props => props.isScore && 'color: #373737; font: 900 1.5em Nunito,sans-serif; justify-content: center;'}
  }

  ${props => props.isTutorial && '&:last-child { margin-bottom: 1.2rem; }'};

  &:before {
    ${props => props.isTutorial && 'content: counter(count) "°";'}
    position: absolute;
    left: -2.9rem;
    font-size: 2.15em;
    font-weight: 900;
    color: #373737;
  }
  
  @media (max-width: 425px) {
    padding: ${props => props.padding && '1.5rem 0 .4rem 0 '};
    font-size: .95em;
  }
`;

export const ImgElifas = styled.img`
  position: absolute;
  right: ${props => props.isWelcome ? '-11' : '0'}%;
  bottom: 0;
  width: ${props => props.isWelcome ? '14' : '11'}rem;

  @media (max-width: 425px) {
    right: ${props => props.isWelcome ? '-14%' : '0'};
  }
  
  @media (max-height: 600px) {
    width: ${props => props.isWelcome ? '12' : '9'}rem;
  }
`;