import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './case.scss';

import CaseForm from './case-form/case-form';
import ClientContact from '../contact/contact-render';

import CaseContact from './case-contact/case-contact';

const API = process.env.REACT_APP_API;

function Case(props) {
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
    const routeAddress = window.location.pathname.split('/');
    const currentId = routeAddress[2];

    const options = {
      method: 'GET',
    };

    fetch(`${API}/case/${currentId}`, options)
      .then((result) => result.json())
      .then((data) => props.getCase(data[0]))
      .then(() => setReady(true));
  }, []);

  return (
    <>
      <div className='caseContainer'>
      {ready  
        ? <>
          <CaseForm /> 
          <h3>Client Information</h3>
          <ClientContact type='client'/>
          <br />
          {/* <h3>REUSABLE COMPONENT</h3> */}
          <h3>Attorneys</h3>
          <CaseContact type='staff-attorney'/>
          <h3>Assistants</h3>
          <CaseContact type='staff-assistants'/>
          <h3>Opposing Parties</h3>
          <CaseContact type='opposing-parties'/>
          <h3>Opposing Attorney</h3>
          <CaseContact type='opposing-attorney'/>
          <h3>Referring Parties</h3>
          <CaseContact type='referring-parties'/>
          <h3>Associated Contacts</h3>
          <CaseContact type='associated-contacts'/>
        </>
        : null}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
});

const mapDispatchToProps = (dispatch) => ({
  getCase: (data) => dispatch({
    type: 'CASE_FETCH',
    payload: data,
  }),
});

Case.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Case);
