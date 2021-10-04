// import React, { useState, useEffect, Children } from 'react';
// import styled from 'styled-components';
// import { shuffle } from '../../utils'

// // Component
// import Header from '../../components/header';
// import ContainerButton from '../../components/buttons/containerButton';
// import WrongAnswer from '../../components/activities/wrongAnswer';
// import SplashScreen from './splashScreen';
// import ScoreScreen from '../../components/activities/scoreScreen';
// import Tutorial from '../../components/modal/tutorialModal';
// import { chancesAtActivity } from '../../utils/statistics';

// //Images
// import logo from '../../images/logo/ifTurnsOn.svg';

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   background-color: #f3f3f3;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const Content = styled.div`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 85%;
//   background: ${props => !props.isCorrectAnswer && '#fff'};
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: space-between;
//   border-top-left-radius: 24px;
//   border-top-right-radius: 24px;

//   @media (max-width: 320px) {
//     overflow: auto;
//     padding-top: .5rem;
//     height: ${props => props.isCorrectAnswer ? '100%' : '85%'} ;
//   }
// `

// const ContentBox = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const ContentInfo = styled.div`
//   margin-bottom: 1.5rem;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-radius: 8px;
//   user-select: none;
//   background-color: ${props => (props.isCorrectAnswer && 'none') || props.backgroundColor};
  
//   img {
//     border-radius: 8px;
//     opacity: ${props => (props.isCorrectAnswer && '1') || props.opacity}
//   }
// `

// const Text = styled.div`
//   width: 7rem;
//   min-height: 80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: .875rem;
//   color: #373737;
//   font-weight: 900;
//   border-radius: 8px;
//   box-shadow: ${props => props.isCorrectAnswer ? 'none' : '0 3px 6px #00000029'};
// `

// const TextCorrectAnswer = styled.h1`
//   padding-bottom: 2rem;
//   font-size: .9375rem;
//   color: #373737;
//   font-weight: 900;
//   text-align: center;
// `

// const Box = styled.div`
//   padding: 0 3rem;
//   display: flex;
//   width: 100%;
//   flex-direction: row;
//   justify-content:  ${props => props.isCorrectAnswer ? 'space-evenly' : 'space-between'};

//   @media (max-width: 320px) {
//     padding: 0 2rem;
//   }
//   @media (min-width: 768px) {
//     padding: 0 4rem;
//   }
// `;

// function Layout({ useActivitie, handlerNextActivitie, registerAction, actionsBook, children }) {
//   const [activitie, setActivitie] = useState(undefined);
//   const [isModalTip, setIsModalTip] = useState(undefined);
//   const [isLoading, setIsLoading] = useState(true)
//   const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
//   const [chances, setChances] = useState(null);
//   const [isDone, setIsDone] = useState(undefined);
//   const [isCorrectAnswer, setIsCorrectAnswer] = useState(undefined);
//   const [isModalCorrectAnswer, setIsModalCorrectAnswer] = useState(false);
//   const [isError, setIsError] = useState(undefined);
//   const [isTutorial, setIsTutorial] = useState(undefined);

//   useEffect(() => {
//     setActivitie(useActivitie);
//   }, []);

//   useEffect(() => {
//     if (useActivitie.trailId === 0) {
//       setIsTutorial(true);
//     }
//   }, []);

//   const handleChancesAtActivity = () => {
//     const { synced, pendingSync } = actionsBook;
//     const useChancesAtActivity = chancesAtActivity(useActivitie.id, [...synced, ...pendingSync]);

//     if (useChancesAtActivity === 0) {
//       setIsDone(true);
//       return
//     }
//     setChances(useChancesAtActivity);
//   }

//   useEffect(() => {
//     handleChancesAtActivity();
//   }, [actionsBook]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!!useActivitie) setIsLoading(false)
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, [useActivitie]);

//   const handleModalTip = () => {
//     setIsModalTip(!isModalTip)
//   }

//   useEffect(() => {
//     if (!handleChancesAtActivity) {
//       if (modalWrongAnswer) {
//         registerAction({
//           activityId: useActivitie.id,
//           trailId: useActivitie.trailId,
//           success: false,
//           timestamp: Date.now(),
//           score: 0,
//           books: false,
//         })
//       }

//       if (isModalCorrectAnswer) {
//         const point = chances === 3 ? 10 : chances === 2 ? 8 : chances === 1 ? 5 : 0;

//         registerAction({
//           activityId: useActivitie.id,
//           trailId: useActivitie.trailId,
//           success: true,
//           timestamp: Date.now(),
//           score: point,
//           books: false,
//         })
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isModalCorrectAnswer, modalWrongAnswer]);


//   const handleContinue = () => {
//     handleModalCorrectAnswer();
//     setIsCorrectAnswer(true);
//   }

//   const handleCloseTutorial = () => {
//     setIsTutorial(false);
//   }

//   const handleModalCorrectAnswer = () => {
//     setIsModalCorrectAnswer(!isModalCorrectAnswer);
//   }

//   const handleSubmit = () => {
//     // const isError = pairs.filter(item => item.backgroundColor === "#fff").length > 0;

//     // if (selectedItems.length < pairs.length || isError) {
//     //   setIsError(true);
//     //   return;
//     // }
//     // if (isCorrectAnswer) {
//     //   handlerNextActivitie(activitie.id);
//     // } else if (isCorrect()) {
//     //   handleCorrectAnswer();
//     //   handleModalCorrectAnswer();
//     // } else {
//     //   setModalWrongAnswer(true);
//     //   setChances(chances - 1);
//     // }
//   }


//   const handleWrongAnswer = () => {
//     setModalWrongAnswer(false);
//   }

//   const showModalAnswer = () => {
//     // setModalWrongAnswer(false);
//     // setIsCorrectAnswer(true);
//     // handleCorrectAnswer()
//   }

//   return (
//     isLoading ? <SplashScreen activitieLogo={logo} /> : (
//       <Container>
//         {!isCorrectAnswer && (
//           <Header
//             title={activitie.name}
//             tips={activitie.tips}
//             isSelectedTips={isModalTip}
//             handleModalTip={handleModalTip}
//           />
//         )}
//         <Content isCorrectAnswer={isCorrectAnswer}>
//           {children}
          
//         </Content>
//         {modalWrongAnswer && <WrongAnswer chances={chances} handleClick={handleWrongAnswer} handleShowAnswer={showModalAnswer} />}
//         {isModalCorrectAnswer && <ScoreScreen chances={chances} handleClick={handleContinue} />}
//         {isTutorial && <Tutorial screen={activitie?.name} handleCloseTutorial={handleCloseTutorial} />}
//       </Container>
//     )
//   )
// }

// export default Layout;
