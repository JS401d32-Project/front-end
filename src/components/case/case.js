import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './case.scss';

import CaseForm from '../case-form/case-form';

import ClientContact from '../contact/contact-render';

import CaseContact from '../case-contact/case-contact';

const API = process.env.REACT_APP_API;

/**
 * This gets data from back-end database and display them wtih CaseForm and CaseContact components
 * @visibleName Case
 */
function Case(props) {
  const [ready, setReady] = useState(false);
  
  /**
   * this will fetch data from back-end database and then sent it back to front-end
   */
  useEffect(() => {
    const routeAddress = window.location.pathname.split('/');
    const currentId = routeAddress[2];

    const options = {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${props.user.token}`,
      }),
    };

    fetch(`${API}/case/${currentId}`, options)
      // .then((result) => console.log(result))
      .then((result) => result.json())
      .then((data) => props.getCase(data[0]))
      .then(() => setReady(true));
  }, []);

  return (
    <React.Fragment>
      <div className='caseContainer'>
      {ready  
        ? <React.Fragment>
          <div className='caseHeader'>
            <h1>Case Details</h1>
            <h3>Case ID: {props.currentCase.caseId}</h3>
          </div>
          <div className='caseFormContainer'>

            <CaseForm />
            <hr className="style2" />
          </div>
          <div className='caseClientContainer'>
            <h3>Client Information</h3>
            <ClientContact type='client'/>
          </div>
          <div className='caseContactsContainer'>
            <h3>Contacts</h3>
            <h4>Attorneys</h4>
            <CaseContact className='contact' type='staff-attorney'/>
            <h4>Assistants</h4>
            <CaseContact type='staff-assistants'/>
            <h4>Opposing Parties</h4>
            <CaseContact type='opposing-parties'/>
            <h4>Opposing Attorney</h4>
            <CaseContact type='opposing-attorney'/>
            <h4>Referring Parties</h4>
            <CaseContact type='referring-parties'/>
            <h4>Associated Contacts</h4>
            <CaseContact type='associated-contacts'/>
          </div>
        </React.Fragment>
        : null}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getCase: (data) => dispatch({
    type: 'CASE_FETCH',
    payload: data,
  }),
});

Case.propTypes = {
  /**
   * Case label.
   */
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Case);
