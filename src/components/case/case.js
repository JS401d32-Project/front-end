import React, { useState, useReducer } from 'react';
// import { connect } from 'react-redux';
// import Contact from '../contact/contact'; //TODO: check other team

function Case() {
  // const [caseId, setCaseId] = useState('');
  // const [caseTitle, setCaseTitle] = useState('');
  // const [caseStatus, setCaseStatus] = useState('');
  // const [referral, setReferral] = useState('');
  // const [legalPlan, setLegalPlan] = useState('');
  // // const [dates, setDates] = useState([]);
  // const [notes, setNotes] = useState([]);
  // const [client, setClient] = useState({});
  // const [attorney, setAttorney] = useState({});
  // const [paralegal, setParalegal] = useState({});
  // const [assistant, setAssistant] = useState({});
  // const [opposingParty, setOpposingParty] = useState({});
  // const [associatedContact, setAssociatedContact] = useState({});

  const caseTitle = 'TESTING TITLE';
  const caseStatus = 'in-progress';
  const referral = 'yes';
  const legalPlan = 'default';
  const notes = ['note 1', 'note 2', 'note go home'];

  return (
    <>
      <h1>{caseTitle}: Case Map</h1>

      <form>
        <p>Case Title: {caseTitle}</p>
        <label> Current Status
          <select value={caseStatus}>
            <option value='unset'>Unset</option>
            <option value='in-progress'>In Progress</option>
            <option value='closed'>Closed</option>
          </select>
        </label>
        <label> Referral
          <select value={referral}>
            <option value='no'>No</option>
            <option value='yes'>Yes</option>
          </select>
        </label>
        <label> Legal Plan
          <select value={legalPlan}>
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
    </>
  );
}

export default Case;
