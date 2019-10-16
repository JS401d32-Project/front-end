import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

// import CaseNote from './case-note/case-note';
import Search from './search/search';
import { getCaseAction, updateCaseAction } from '../../store/actions/case-action';
// import { Route } from 'react-router-dom';

// TODO: Need to be able to get this from .env somehow?? Shows as undefined
// const API = process.env.API_URL;
const API = 'http://localhost:4000';
// const routeAddress = window.location.pref;
// console.log(routeAddress);

const columns = [
  {
    Header: 'Date Created',
    accessor: 'dateCreated',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Title',
    accessor: 'title',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
];

function Case(props) {
  const [caseId, setCaseId] = useState('');
  const [caseTitle, setCaseTitle] = useState('');
  const [caseStatus, setCaseStatus] = useState('');
  const [referralType, setReferralType] = useState('');
  const [legalPlan, setLegalPlan] = useState('');
  // const [dates, setDates] = useState([]);
  const [caseNotes, setCaseNotes] = useState([]);
  // const [client, setClient] = useState({});
  // const [attorney, setAttorney] = useState({});
  // const [paralegal, setParalegal] = useState({});
  // const [assistant, setAssistant] = useState({});
  // const [opposingParty, setOpposingParty] = useState({});
  // const [associatedContact, setAssociatedContact] = useState({});
  
  useEffect(() => {
    // TODO: waiting on selectedCase to be in store
    // superagent.get(`${API}/case/CASEID-123456`)
    //   .then((response) => {
    //     const result = response.body[0];
    //     props.getCase(result);
    //     setCaseId(result.id);
    //     setCaseTitle(result.title);
    //     setCaseStatus(result.status);
    //     setReferralType(result.referralType);
    //     setLegalPlan(result.legalPlan);
    //     // console.log(result.caseNotes);
    //     setCaseNotes(result.caseNotes);
    //   });
    props.getCase('CASEID-123456');
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

      <div className="caseList" style={ { textAlign: 'center', padding: '50px' } }>
        <ReactTable
          // manual
          // minRows={0}
          // pageSize={1}
          data={caseNotes}
          columns={columns}
          // pages={0}
          // defaultPageSize={5}
          // showPagination={true}
        />
      </div>

      <Search />

    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  // selectedCase: state.selectedCase,
});

const mapDispatchToProps = (dispatch) => ({
  getCase: (id) => dispatch(getCaseAction(id)),
  updateCase: (data) => dispatch(updateCaseAction(data)),
});

Case.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Case);
