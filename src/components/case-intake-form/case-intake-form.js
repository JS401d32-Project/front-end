import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateInitialCaseAction } from '../../store/actions/case-action';

/**
 * CaseIntakeForm allows users to update cases (legalPlan, caseType, referralType)
 * @visibleName CaseIntakeForm
 */
function CaseIntakeForm(props) {
  const [legalPlan, setLegalPlan] = useState('none');
  const [caseType, setCaseType] = useState('none');
  const [referralType, setReferralType] = useState('none');


  function handleLegalPlanChange(event) {
    setLegalPlan(event.target.value);
    props.updateInitialCase({ legalPlan: event.target.value });
  }

  function handleCaseTypeChange(event) {
    setCaseType(event.target.value);
    props.updateInitialCase({ caseType: event.target.value });
  }

  function handleReferralChange(event) {
    setReferralType(event.target.value);
    props.updateInitialCase({ referralType: event.target.value });
  }

  return (
    <React.Fragment>
      <form>
        <label> Legal Plan
          <select value={legalPlan} onChange={handleLegalPlanChange}>
            <option value='none'>None</option>
            <option value='hyatt'>Hyatt</option>
            <option value='arag'>ARAG</option>
          </select>
        </label>
        <label> Case Type
          <select value={caseType} onChange={handleCaseTypeChange}>
            <option value='none'> -- select a case type -- </option>
            <option value='family'>Family</option>
            <option value='criminal'>Criminal</option>
            <option value='immigration'>Immigration</option>
          </select>
        </label>
        <label> Referral
          <select value={referralType} onChange={handleReferralChange}>
            <option value='none'>No</option>
            <option value='yes'>Yes</option>
          </select>
        </label>
      </form>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  initialCase: state.initialCase,
  currentCase: state.currentCase,
});

const mapDispatchToProps = (dispatch) => ({
  updateInitialCase: (data) => dispatch(updateInitialCaseAction(data)),
});

CaseIntakeForm.propTypes = {
  /**
   * CaseIntakeForm label.
   */
  props: PropTypes.object,
  updateInitialCase: PropTypes.func,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseIntakeForm);
