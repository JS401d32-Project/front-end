import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateCaseAction } from '../../../store/actions/case-action.js';

function CaseForm(props) {
  const [caseStatus, setCaseStatus] = useState('');
  const [referralType, setReferralType] = useState('');
  const [legalPlan, setLegalPlan] = useState('');

  useEffect(() => {
    setCaseStatus(props.currentCase.status);
    setReferralType(props.currentCase.referralType);
    setLegalPlan(props.currentCase.legalPlan);
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
      status: caseStatus, referralType, legalPlan,
    };
    props.updateCase(data, props.currentCase.id);
  }

  return (
    <>
      <h3>Case Details</h3>
      <form>
        <p>Title: {props.currentCase.title}</p>
        <p>Id: {props.currentCase.caseId}</p>
        <label> Current Status
          <select value={caseStatus} onChange={handleStatusChange}>
            <option value='unset'>Unset</option>
            <option value='open'>Open</option>
            <option value='interim'>Interim</option>
            <option value='closed'>Closed</option>
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
            <option value='hyatt'>Hyatt</option>
            <option value='arag'>ARAG</option>
          </select>
        </label>
      </form>
      <button onClick={(event) => handleUpdate(event)}>
        Save Case Details
      </button>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
});

const mapDispatchToProps = (dispatch) => ({
  updateCase: (data, id) => dispatch(updateCaseAction(data, id)),
});

CaseForm.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseForm);
