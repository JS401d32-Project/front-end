import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// showing attorneys and assistants with an add button

const API = 'http://localhost:4000';

function ReferringParties(props) {
  const [referringParties, setReferringParties] = useState([]);

  useEffect(() => {
    setReferringParties(props.currentCase.referringParties);
  }, [props.currentCase.referringParties]);

  return (
    <>
      <ul>
        {referringParties.map((party, i) => {
          return (
            <li key={i}>
              <a href={`${API}/contact/${party.id}`} key={party.id}>{`${party.firstName} ${party.lastName}`}</a>
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


ReferringParties.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};
  
export default connect(mapStateToProps, null)(ReferringParties);
