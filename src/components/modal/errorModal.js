import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import Modal from "./modal"
import ImgFace from "../../images/Grupo2065.svg"

//Redux
import { getDataThunk } from '../../dataflow/thunks/thunk-thunks';
import { getTrailsThunk } from '../../dataflow/thunks/trails-thunk';

const mapStateToProps = state => ({
  trails: state.trails.data,
  thunk: state.thunk.data,
});

const mapDispatchToProps = dispatch => ({
  getTrailsThunk: () => dispatch(getTrailsThunk()),
  getDataThunk: () => dispatch(getDataThunk()),
});

const ErrorModal = (props) => {
  const content = {
    title: 'Opa! A aplicação parou.',
    text: [
      'Por favor, reinicie o aplicativo.',
      <img src={ImgFace} alt="Emoji triste" style={{ margin: '0 auto' }} />
    ]
  };

  // GET thunk
  // useEffect(() => {
  //   if (props?.thunks?.length > 5) return
  //   props.getDataThunk();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // // GET trails
  // useEffect(() => {
  //   if (props?.trails?.length > 5) return
  //   props.getTrailsThunk();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

    return(
      <Modal
        subtitle={content.title}
        data={content.text}
        background='#0000004d'
        balloonColor='#f3f3f3'
        margin='1.5rem auto 0'
        isError
      />
    );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorModal);
