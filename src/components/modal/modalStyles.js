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
  width: 100%;
  height: ${props => props.height || '94vh'};
  max-width: 340px;
`;

export const ContentInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: ${props => props.isTutorial ? '.8rem 1.4rem 1rem' : '1.5rem 1rem 1.5rem'};
  width: 91%;
  letter-spacing: .5px;
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
  font-size: 1em;
`;

export const Subtitle = styled.h1`
  margin: .2rem 0 1.5rem;
  text-align: center;
  font-size: 1.4em;
  line-height: 1;
  font-weight: 900;
  color: ${props => props.color || '#373737'};
`;

export const Scroll = styled.ol`
  padding-left: ${props => props.isTutorial ? '2.7rem' : '0'};
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
  margin: ${props => props.isTip ? '1rem 0 5rem' : '0 0 1.6rem'};
  line-height: 1.35;
  counter-increment: count;

  &:nth-child(2) {
    ${props => props.isScore && 'color: #373737; font: 900 1.5em Nunito,sans-serif; justify-content: center;'}
  }

  ${props => props.isTutorial && '&:last-child { margin-bottom: 1.2rem; }'};

  &:before {
    ${props => props.isTutorial && 'content: counter(count) "°";'}
    position: absolute;
    left: -2.8rem;
    font-size: 2em;
    font-weight: 900;
    color: #373737;
  }
  
  @media (max-width: 425px) {
    padding: ${props => props.padding && '1.5rem 0 .4rem 0 '};
    font-size: .9em;
  }
`;

export const ImgElifas = styled.img`
  position: absolute;
  right: ${props => props.isWelcome ? '-25' : '-11'}%;
  bottom: 0;
  width: ${props => props.isWelcome ? '16' : '12'}rem;

  @media (max-width: 425px) {
    right: ${props => props.isWelcome ? '-14%' : '0'};
  }
  @media (max-height: 600px) {
    width: ${props => props.isTutorial ? '8' : '10'}rem;
    width: ${props => props.isWelcome && '13rem'};
  }
`;