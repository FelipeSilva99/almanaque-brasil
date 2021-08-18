import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';

//Redux
import { signOut } from '../../dataflow/modules/signIn-modules';
import {
  selectedTrails,
} from '../../dataflow/modules/trails-module';

const mapStateToProps = state => ({
  trails: state.trails.data,
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  selectedTrails: (info) => {
    dispatch(selectedTrails(info));
  },

  signOut: () => {
    dispatch(signOut());
  },
});

const Container = styled.div`
  padding-bottom: 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const Content = styled.div`
  padding: 2.125rem 1rem 0;
`;

const Header = styled.div`
  padding: 2.375rem 1rem;
  background: #FFD000;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

const Text = styled.h1`
  padding-bottom: ${props => props.paddingBottom && '.5rem'};
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

const Button = styled.button`
  font-size: 1rem;
  font-weight: 900;
  color: #373737;
  position: absolute;
  bottom: 1rem;
`;

const Dashboard = (props) => {

  async function handleSignOut() {
    try {
      await Auth.signOut();
      localStorage.clear();
      props.signOut();
      props.history.push({ pathname: '/' })
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

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
          <Text>Baú</Text>
        </Card>
        <Card>
          <Text>Ranking</Text>
        </Card>
      </Row>
    )
  }

  const trails = props?.trails;

  return (
    <Container>
      <Header>
        <Text name>Oi, {props.user.name}</Text>
      </Header>
      <Content>
        <Text paddingBottom>Qual atividade fazer hoje?</Text>
        {trails && (
          <>
            {renderTrails()}
            {renderOptions()}
          </>
        )}
      </Content>
      <Button onClick={handleSignOut}>Sair</Button>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);