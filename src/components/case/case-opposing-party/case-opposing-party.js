import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// showing attorneys and assistants with an add button

const API = 'http://localhost:4000';

function OpposingPartys(props) {
  const [opposingPartys, setOpposingPartys] = useState([]);

  useEffect(() => {
    setOpposingPartys(props.currentCase.opposingPartys);
  });

  return (
    <>
      <ul>
        {opposingPartys.map((party) => {
          return <a href={`${API}/contact/${party.id}`} key={party.id}>{party.firstName + party.lastName}</a>;  
        })}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
});
  
  
OpposingPartys.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};
  
export default connect(mapStateToProps, null)(OpposingPartys);
