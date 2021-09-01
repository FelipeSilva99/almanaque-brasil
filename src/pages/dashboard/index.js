import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';

//Component
import Header from '../../components/header/headerYellow';
import Footer from '../../components/footer/footerTrunk';

//Redux
import { signOut } from '../../dataflow/modules/signIn-modules';
import { selectedTrails } from '../../dataflow/modules/trails-module';
import { clearActionsBook } from '../../dataflow/modules/actionsBook-modules';

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

  clearActionsBook: () => {
    dispatch(clearActionsBook());
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

// const Header = styled.div`
//   padding: 2.375rem 1rem;
//   background: #FFD000;
//   border-bottom-left-radius: 24px;
//   border-bottom-right-radius: 24px;
// `;

const Text = styled.h1`
  padding-bottom: ${props => props.paddingBottom && '.5rem'};
  font-size: ${props => props.name ? '1.5rem' : '1.25rem'};
  font-weight: 900;
  color: #373737;
  text-decoration: none;
`;

const Card = styled.button`
  margin-bottom: 2rem;
  min-height: 150px;
  width: 100%;
  max-width: 330px;
  border-radius: 16px;
  padding: 16px;
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */
  background-color: #fff;

  &:hover{
    box-shadow: 0 6px 10px rgba(0,0,0,0.25), 0 1px 10px rgba(0,0,0,0.22);
  }

  @media (min-width: 1024px) {
    margin-right: ${props => props.marginRight && '2rem'};
  }
`;

const Button = styled.button`
  padding-left: 1rem;
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
      props.clearActionsBook();
      props.signOut();
      props.history.push({ pathname: '/' })
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const handleClick = (route) => {
    props.history.push({ pathname: `/${route}` });
  }

  const trails = props?.trails;

  return (
    <Container>
      <Header text={`Oi, ${props.user.name}`}/>
       <Content>
        <Text paddingBottom>Qual atividade vamos fazer hoje?</Text>
        {trails && (
          <>
            <Card marginRight onClick={() => handleClick('trails')}>
              <Text>Trilha</Text>
            </Card>
            <Card onClick={() => handleClick('trunk')}>
              <Text>Baú</Text>
            </Card>
          </>
        )}
      </Content>
      <Button onClick={handleSignOut}>Sair</Button>
      <Footer/>
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);