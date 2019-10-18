import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateCaseAction } from '../../store/actions/case-action';

/**
 * CaseForm is rendered in case component and it displays case details
 * @visibleName CaseForm
 */
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
    props.updateCase(data, props.currentCase.id, props.user.token);
  }

  return (
    <React.Fragment>
      <h3>Case Details</h3>
      <form>
        <h3>Title: {props.currentCase.title}</h3>
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
      <button className='submitButton' onClick={(event) => handleUpdate(event)}>
        Save Case Details
      </button>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateCase: (data, id, token) => dispatch(updateCaseAction(data, id, token)),
});

/**
   * CaseForm label.
   */
CaseForm.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseForm);
