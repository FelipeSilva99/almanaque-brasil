import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//Component
import Header from '../../components/header/headerYellow';
import Footer from '../../components/footer/footerMenu';
import WelcomeModal from '../../components/modal/welcomeModal';
import TrunkInfoScreen from '../../components/thunk/trunkInfoScreen';

//Image
import home from '../../images/icons/menu/selectedHome.svg';
import elifas from '../../images/elifas.svg';
import dashboardTrail from '../../images/dashboardTrail.svg';
import thunk from '../../images/icons/menu/selectedThunk.svg';

//Redux
import { getDataThunk } from '../../dataflow/thunks/thunk-thunks';
import { setModal } from '../../dataflow/modules/modals-module';
import { getTrailsThunk } from '../../dataflow/thunks/trails-thunk';

const mapStateToProps = state => ({
  trails: state.trails.data,
  user: state.login.user,
  modals: state.modals,
  thunk: state.thunk.data,
  actionsBook: state.actionsBook
});

const mapDispatchToProps = dispatch => ({
  getTrailsThunk: () => dispatch(getTrailsThunk()),
  setModal: (modal) => { dispatch(setModal(modal)) },
  getDataThunk: () => {
    dispatch(getDataThunk());
  },
});

const Container = styled.div`
  padding-bottom: 1rem;
  min-height: 100vh;
  background: #F3F3F3;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 3.188rem 1rem 0;
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
  max-width: ${props => props.lastCard && '200px'};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 3px 10px #ccc;
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-size: ${props => props.backgroundSize};
  background-position-x: ${props => props.backgroundPositionX};
  background-position-y: ${props => props.backgroundPositionY};
  background-repeat: no-repeat;
  text-align: left;
  font-size: 1rem;
  transition: .2s ease-in-out;

  &:hover {
    box-shadow: 0 6px 10px rgba(0,0,0,0.20), 0 1px 10px rgba(0,0,0,0.10);
  }

  @media (max-width: 320px) {
    width: ${props => props.lastCard && '51%'};
    height: 7.5rem;
    background-size: ${props => props.backgroundSizeMob};
  }
  @media (min-width: 1024px) {
    margin-right: ${props => props.marginRight && '2rem'};
  }
`;

const ElifasSVG = styled.img`
  position: absolute;
  right: -1rem;
  bottom: 3rem;
  width: 12rem;

  @media (max-width: 320px) {
    right: -2rem;
  }
`;

const Dashboard = (props) => {
  const [modalThunk, setModalThunk] = useState({ isModal: false, data: undefined });
  const [showWelcomeModal, setWelcomeModal] = useState(true);

  // GET thunk
  useEffect(() => {
    if(trails?.length > 5) return 
    props.getDataThunk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // GET trails
  useEffect(() => {
    if(trails?.length > 5) return 
    props.getTrailsThunk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (route) => {
    props.history.push({ pathname: `/${route}` });
  }

  const trails = props?.trails;

  const handleCloseModal = () => {
    setWelcomeModal(!showWelcomeModal)
    props.setModal({ modal: 'welcomeModal', wasShowed: true })
  }

  const handleModalThunk = () => {
    const data = props.thunk.filter(
      (content) =>
        content.title === process.env.REACT_APP_WELCOME_MODAL_TRUNK_CONTENT_TITLE)[0];

    props.setModal({ modal: 'welcomeModal', wasShowed: !props.modals.welcomeModal.wasShowed })
    setModalThunk({ isModal: !modalThunk.isModal, data: data });
    setWelcomeModal(!showWelcomeModal)
  }

  const userName = () => {
    const name = props.user.name || '';
    const userName = name.includes(" ") ? name.split(" ") : name;
  
    if (Array.isArray(userName)) {
      const firstName = userName[0].length > 10 
      ? `${userName[0].slice(0,10)}...`
      : userName[0];

      const lastName = userName[userName.length - 1].length > 10 
      ? `${userName[userName.length - 1].slice(0,10)}...`
      : userName[userName.length - 1];

      return `${firstName} ${lastName}`
    } else {
      return name
    }
  };

  return (
    <Container>
      {!props.modals.welcomeModal.wasShowed && <WelcomeModal showThunk={() => handleModalThunk} handleClose={handleCloseModal} />}
      <Header
        isVisible
        initialLettersName={props?.user?.name && props?.user?.name[0] + props.user?.name[1]}
        text={`Oi, ${userName()}`}
        icon={home}
      />

      <Content>
        <Text paddingBottom>Qual atividade você quer fazer?</Text>
        {trails && (
          <>
            <Card
              backgroundImage={dashboardTrail}
              backgroundColor={'#eaedeb'}
              marginRight
              backgroundSize={'380px'}
              backgroundSizeMob={'295px'}
              backgroundPositionX={'100%'}
              backgroundPositionY={'100%'}
              onClick={() => handleClick('trilhas')}
            ><Text>Mapa das<br />trilhas</Text>
            </Card>

            <Card
              backgroundColor={"#f4de9b"}
              backgroundImage={thunk}
              backgroundSize={'160px'}
              backgroundSizeMob={'99px'}
              backgroundPositionX={'70px'}
              backgroundPositionY={'45px'}
              lastCard
              onClick={() => handleClick('bau')}
            ><Text>Baú</Text>
            </Card>
          </>
        )}
        {props.modals.welcomeModal.wasShowed && <ElifasSVG onClick={() => handleCloseModal()} src={elifas} />}
      </Content>
      {modalThunk?.isModal && <TrunkInfoScreen itemData={modalThunk?.data} onClick={handleModalThunk} />}
      <Footer screen='dashboard' />
    </Container>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
