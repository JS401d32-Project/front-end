import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import superagent from 'superagent';

import Search from './search/search';
import updateCaseAction from '../../store/actions/case-action'; 

const API = process.env.API_URL;

function Case({ updateCase }) {
  // const [caseId, setCaseId] = useState('');
  // const [caseTitle, setCaseTitle] = useState('');
  const [caseStatus, setCaseStatus] = useState('');
  const [referral, setReferral] = useState('');
  const [legalPlan, setLegalPlan] = useState('');
  // const [dates, setDates] = useState([]);
  // const [notes, setNotes] = useState([]);
  // const [client, setClient] = useState({});
  // const [attorney, setAttorney] = useState({});
  // const [paralegal, setParalegal] = useState({});
  // const [assistant, setAssistant] = useState({});
  // const [opposingParty, setOpposingParty] = useState({});
  // const [associatedContact, setAssociatedContact] = useState({});

  const caseTitle = 'Arroyo v Li';
  const notes = ['note 1', 'note 2', 'note go home'];

  function handleStatusChange(event) {
    setCaseStatus(event.target.value);
  }

  function handleReferralChange(event) {
    setReferral(event.target.value);
  }

  function handleLegalPlanChange(event) {
    setLegalPlan(event.target.value);
  }

  function handleUpdate(event, id) {
    event.preventDefault();
    const data = { id, caseStatus, referral, legalPlan };
    superagent.put(`${API}/case/${id}`)
      .send(data)
      .set('Accept', 'application/json')
      .then((results) => {
        updateCase(results.body);
      });
  }

  return (
    <>
      <h2>{caseTitle}: Case Map</h2>
      <p>Case Id: {caseId}</p>

      <form>
        <p>Case Title: {caseTitle}</p>
        <label> Current Status
          <select value={caseStatus} onChange={handleStatusChange}>
            <option value='unset'>Unset</option>
            <option value='in-progress'>In Progress</option>
            <option value='closed'>Closed</option>
          </select>
        </label>
        <label> Referral
          <select value={referral} onChange={handleReferralChange}>
            <option value='no'>No</option>
            <option value='yes'>Yes</option>
          </select>
        </label>
        <label> Legal Plan
          <select value={legalPlan} onChange={handleLegalPlanChange}>
            <option value='default'>Default</option>
            <option value='family'>Family</option>
            <option value='criminal'>Criminal</option>
          </select>
        </label>
      </form>

      <h5>Case Notes</h5>
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}

      <Search />

      <button onClick={(event) => handleUpdate(event, caseId)}>
        Save Changes
      </button>
    </>
  );
}

const mapStateToProps = (state) => ({
  cases: state.cases,
});

const mapDispatchToProps = (dispatch) => ({
  // getCase: (id) => dispatch(caseActions.fetchCaseAction(id)),
  updateCase: (data) => dispatch(updateCaseAction(data)),
});
  
Case.protoTypes = {
  updateCase: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Case);
