import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import superagent from 'superagent';
import PropTypes from 'prop-types';

import Search from './search/search';
import { getCaseAction, updateCaseAction } from '../../store/actions/case-action';

// const API = process.env.API_URL;

function Case(props) {
  const [caseId, setCaseId] = useState('');
  const [caseTitle, setCaseTitle] = useState('');
  const [caseStatus, setCaseStatus] = useState('');
  const [referralType, setReferralType] = useState('');
  const [legalPlan, setLegalPlan] = useState('');
  // const [dates, setDates] = useState([]);
  // const [notes, setNotes] = useState([]);
  // const [client, setClient] = useState({});
  // const [attorney, setAttorney] = useState({});
  // const [paralegal, setParalegal] = useState({});
  // const [assistant, setAssistant] = useState({});
  // const [opposingParty, setOpposingParty] = useState({});
  // const [associatedContact, setAssociatedContact] = useState({});

  const notes = ['note 1', 'note 2', 'note go home'];
  const object = {
    caseId: '1234',
    caseTitle: 'Arroyo v Li',
    caseStatus: 'in-progress',
    referral: 'yes',
    legalPlan: 'default',
  };

  // const updateObject = {
  //   caseId: 1111,
  //   caseStatus: 'closed',
  //   referral: 'yes',
  //   legalPlan: 'family',
  // };

  useEffect(() => {
    // TODO: Waiting for the back-end to have case id route
    // superagent.get(`${API}/case/CASEID-123456`)
    //   .then((result) => {
    //     props.getCase(result.body);
    //     setCaseId(result.body.caseId);
    //     setCaseTitle(result.body.title);
    //     setCaseStatus(result.body.caseStatus);
    //     setReferralType(result.body.referralType);
    //     setLegalPlan(result.body.legalPlan);
    //   });
    props.getCase(object);
    setCaseId(object.caseId);
    setCaseTitle(object.caseTitle);
    setCaseStatus(object.caseStatus);
    setReferralType(object.referralType);
    setLegalPlan(object.legalPlan);
  }, []);

  function handleStatusChange(event) {
    setCaseStatus(event.target.value);
  }

  function handleReferralChange(event) {
    setReferralType(event.target.value);
  }

  function handleLegalPlanChange(event) {
    setLegalPlan(event.target.value);
  }

  function handleUpdate(event) {
    event.preventDefault();
    const data = {
      caseId, caseStatus, referralType, legalPlan,
    };
    // superagent.put(`${API}/case/${id}`)
    //   .send(data)
    //   .set('Accept', 'application/json')
    //   .then((results) => {
    //     props.updateCase(results.body);
    //   });
    props.updateCase(data);
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
            <option value='open'>Open</option>
          </select>
        </label>
        <label> Referral
          <select value={referralType} onChange={handleReferralChange}>
            <option value='none'>No</option>
            <option value='yes'>Yes</option>
          </select>
        </label>
        <label> Legal Plan
          <select value={legalPlan} onChange={handleLegalPlanChange}>
            <option value='default'>Default</option>
            <option value='none'>None</option>
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

      <button onClick={(event) => handleUpdate(event)}>
        Save Case Details
      </button>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  // selectedCase: state.selectedCase,
});

const mapDispatchToProps = (dispatch) => ({
  getCase: (data) => dispatch(getCaseAction(data)),
  updateCase: (data) => dispatch(updateCaseAction(data)),
});

Case.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Case);
