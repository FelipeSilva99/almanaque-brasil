import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//Component
import Header from '../../components/header/headerYellow';
import Footer from '../../components/footer/footerMenu';

//Image
import home from '../../images/icons/menu/selectedHome.svg';
import elifas from '../../images/elifas.svg';
import dashboardTrail from '../../images/dashboardTrail.svg';
import thunk from '../../images/icons/menu/selectedThunk.svg';

//Redux
import { getDataThunk } from '../../dataflow/thunks/thunk-thunks';

const mapStateToProps = state => ({
  trails: state.trails.data,
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  getDataThunk: () => {
    dispatch(getDataThunk());
  },
});

const Container = styled.div`
  padding-bottom: 1rem;
  min-height: 100vh;
  background: #F3F3F3;
  position: relative;
`;

const Content = styled.div`
  padding: 2.125rem 1rem 0;
`;

const Text = styled.h1`
  padding-bottom: ${props => props.paddingBottom && '.5rem'};
  font-size: ${props => props.name ? '1.5rem' : '1.25rem'};
  font-weight: 900;
  color: #373737;
  text-decoration: none;
`;

const Card = styled.button`
  margin-bottom: 2rem;
  width: 100%;
  height: 10rem;
  max-width: ${props => props.maxWidth};
  border-radius: 16px;
  padding: 16px;
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-size: ${props => props.backgroundSize};
  background-position-x: ${props => props.backgroundPositionX};
  background-position-y: ${props => props.backgroundPositionY};
  background-repeat: no-repeat;
  text-align: left;
  font-size: 1rem;
  &:hover{
    box-shadow: 0 6px 10px rgba(0,0,0,0.25), 0 1px 10px rgba(0,0,0,0.22);
  }

  @media (max-width: 320px) {
    height: 8rem;
  }
  @media (min-width: 1024px) {
    margin-right: ${props => props.marginRight && '2rem'};
  }
`;

const ElifasSVG = styled.img`
  position: absolute;
  right: 0px;
  bottom: 2.875rem;
`;

const Dashboard = (props) => {

  useEffect(() => {
		props.getDataThunk();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

  const handleClick = (route) => {
    props.history.push({ pathname: `/${route}` });
  }

  const trails = props?.trails;

  return (
    <Container>
      <Header
        initialLettersName={props.user.name[0] + props.user.name[1]}
        text={`Oi, ${props.user.name}`}
        icon={home} home
      />
       <Content>
        <Text paddingBottom>Qual atividade você quer fazer?</Text>
        {trails && (
          <>
            <Card 
              backgroundImage={dashboardTrail}
              backgroundColor={"#d5e2ff"}
              marginRight
              backgroundSize={'209px'}
              backgroundPositionX={'217px'}
              onClick={() => handleClick('trails')}
            ><Text>Mapa das<br/>trilhas</Text>
            </Card>

            <Card
              backgroundColor={"#f4de9b"}
              maxWidth={'220px'}
              backgroundImage={thunk}
              backgroundSize={'175px'}
              backgroundPositionX={'70px'}
              backgroundPositionY={'28px'}
              onClick={() => handleClick('trunk')}
            ><Text>Baú</Text>
            </Card>
          </>
        )}
      </Content>
      <ElifasSVG src={elifas}/>
      <Footer  screen='dashboard'/>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
