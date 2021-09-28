import React from 'react';
import styled from 'styled-components';

//Component
import Button from '../buttons/button';

//Images
import iconElifas from '../../images/elifas/tip.svg';

//Styled
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #70707095;
	z-index: 3;
  @media (min-width: 1024px) { align-items: center; }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 380px;
	display: flex;
	align-items: center;

  @media(max-width: 375px) {padding-top: 2rem; align-items: flex-start;}
  @media(min-width: 1024px) {height: 80vh;}
`;

const ContentInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 3rem;
  width: 96%;
  filter: drop-shadow(1px 4px 3px #999);
  border-radius: 30px;
  background: #fff;

  img {
    cursor: pointer;
  }

  &:after {
    position: absolute;
    content: '';
    left: 51%;
    bottom: -9%;
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

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
	line-height: 1em;
  color: #373737;
	text-align: center;

  strong {
    font-size: 2.5rem;
    font-weight: 900;
  }
`;

const Text = styled.p`
  padding: 1.5rem 0;
	font-size: 1rem;
  line-height: 1.4;

  @media (max-width: 320px) { padding: ${props => props.padding && '1.5rem 0 .4rem 0 '}; }
`;

const ImgBento = styled.img`
  position: absolute;
  right: -3%;
  bottom: 0;
  width: 10rem;
`;

function activitiesCompletedModal({ history }) {
  const handleClick = () => {
    history.push('/trails');
  }

	return (
		<Container>
			<Content>
				<ContentInfo>
					<Title>Paranéns!</Title>
          <Text>Você concluiu a trilha, e conquistou:</Text>
          <Title>
              <strong>100</strong> pts
            </Title>
            <Text>
              vamos continuar nessa jornada de conhecimento?
            </Text>
          <Button handleClick={handleClick} margin='0'>escolher outra trilha</Button>
				</ContentInfo>
				<ImgBento src={iconElifas} />
			</Content>
		</Container>
	)
}

export default activitiesCompletedModal;