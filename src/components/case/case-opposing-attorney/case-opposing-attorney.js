import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// showing attorneys and assistants with an add button

const API = 'http://localhost:4000';

function OpposingAttorneys(props) {
  const [opposingAttorneys, setOpposingAttorneys] = useState([]);

  useEffect(() => {
    setOpposingAttorneys(props.currentCase.opposingAttorneys);
  }, [props.currentCase.opposingAttorneys]);

  return (
    <>
      <ul>
        {opposingAttorneys.map((attorney, i) => {
          return (
            <li key={i}>
              <a href={`${API}/contact/${attorney.id}`} key={attorney.id}>{`${attorney.firstName} ${attorney.lastName}`}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
});
  
  
OpposingAttorneys.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};
  
export default connect(mapStateToProps, null)(OpposingAttorneys);
