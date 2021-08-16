import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify'

//Redux
import {
  selectedTrails,
} from '../../dataflow/modules/trails-module';

const mapStateToProps = state => ({
  trails: state.trails.data
});

const mapDispatchToProps = dispatch => ({
  selectedTrails: (info) => {
    dispatch(selectedTrails(info));
  },
});


const Container = styled.div`
  padding: 1.875rem 1rem 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const Content = styled.div`
  padding-top: 0.5rem;
`;

const Header = styled.div`
  /* padding-left: 35px; */
  height: 10vh;
`;

const Text = styled.h1`
  font-size: ${props => props.name ? '1.5rem' : '1.25rem'};
  font-weight: 900;
  color: #373737;
  text-decoration: none;
`;

const Card = styled.button`
  min-height: 150px;
  width: ${props => props.width ? '100%' : '48%'};
  /* margin: 10px; */
  border-radius: 16px;
  padding: 16px;
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */
  background-color: #fff;

  &:hover{
    box-shadow: 0 6px 10px rgba(0,0,0,0.25), 0 1px 10px rgba(0,0,0,0.22);
  }
`;

const Row = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Dashboard = (props) => {

  const handleClick = () => {
    props.history.push({ pathname: '/trails' });
  }

  const renderTrails = () => (
    <Card width onClick={handleClick}>
      <Text>Trilha</Text>
    </Card>
  )

  const renderOptions = () => {
    return (
      <Row>
        <Card>
          <h2>Baú</h2>
        </Card>
        <Card>
          <h2>Ranking</h2>
        </Card>
      </Row>
    )
  }

  const trails = props?.trails;

  return (
    <Container>
      <Header><Text name>Olá Fulano!</Text></Header>
      <Text>Qual atividade fazer hoje?</Text>
      {trails && (
        <Content>
          {renderTrails()}
          {renderOptions()}
        </Content>
      )}
      <button onClick={() => {
        Auth.signOut()
      }}>sair</button>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);