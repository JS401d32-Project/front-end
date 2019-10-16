import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import superagent from 'superagent';
import PropTypes from 'prop-types';

// import { getCaseAction, updateCaseAction } from '../../store/actions/case-action';

// TODO: Need to be able to get this from .env somehow?? Shows as undefined
// const API = process.env.API_URL;
// const API = 'http://localhost:4000';

function CaseNote(props) {
  const [caseId, setCaseId] = useState('');
  // const [caseTitle, setCaseTitle] = useState('');
  // const [caseStatus, setCaseStatus] = useState('');
  // const [referralType, setReferralType] = useState('');
  // const [legalPlan, setLegalPlan] = useState('');
  // // const [dates, setDates] = useState([]);
  const [caseNotes, setCaseNotes] = useState([]);
  // const [client, setClient] = useState({});
  // const [attorney, setAttorney] = useState({});
  // const [paralegal, setParalegal] = useState({});
  // const [assistant, setAssistant] = useState({});
  // const [opposingParty, setOpposingParty] = useState({});
  // const [associatedContact, setAssociatedContact] = useState({});

  const notes = ['note 1', 'note 2', 'note go home'];

  // useEffect(() => {
  //   // TODO: waiting on selectedCase to be in store
  //   superagent.get(`${API}/case/CASEID-123456`)
  //     .then((response) => {
  //       const result = response.body[0];
  //       props.getCase(result);
  //       setCaseId(result.id);
  //       setCaseTitle(result.title);
  //       setCaseStatus(result.status);
  //       setReferralType(result.referralType);
  //       setLegalPlan(result.legalPlan);
  //       // console.log(result.caseNotes);
  //       setCaseNotes(result.caseNotes);
  //     });
  // }, []);
  //
  // function handleStatusChange(event) {
  //   setCaseStatus(event.target.value);
  // }
  //
  // function handleReferralChange(event) {
  //   setReferralType(event.target.value);
  // }
  //
  // function handleLegalPlanChange(event) {
  //   setLegalPlan(event.target.value);
  // }
  //
  // function handleUpdate(event) {
  //   event.preventDefault();
  //   const data = {
  //     caseId, caseStatus, referralType, legalPlan,
  //   };
  //   // superagent.put(`${API}/case/${id}`)
  //   //   .send(data)
  //   //   .set('Accept', 'application/json')
  //   //   .then((results) => {
  //   //     props.updateCase(results.body);
  //   //   });
  //   props.updateCase(data);
  // }

  return (
    <>
      <h5>Case Notes</h5>
      {notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  cases: state.cases,
  currentCase: state.currentCase,
  // selectedCase: state.selectedCase,
});

const mapDispatchToProps = (dispatch) => ({
  // getCase: (data) => dispatch(getCaseAction(data)),
  // updateCase: (data) => dispatch(updateCaseAction(data)),
});

CaseNote.propTypes = {
  props: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseNote);
