import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import ReactTable from 'react-table';

// import CaseNote from './case-note/case-note';
// import Search from './search/search';
// import CaseIntakeForm from './case-intake-form/case-intake-form';
// import { getCaseAction, updateCaseAction } from '../../store/actions/case-action';
import CaseForm from './case-form/case-form';
import Staff from './case-staff/case-staff';
import OpposingAttorney from './case-opposing-attorney/case-opposing-attorney';
import OpposingParty from './case-opposing-party/case-opposing-party';
import RefferingPartys from './case-reffering-party/case-reffering-party.js';
import AssociatedContacts from './case-associated-contacts/case-associated-contacts';

// import { Route } from 'react-router-dom';

// TODO: Need to be able to get this from .env somehow?? Shows as undefined
// const API = process.env.API_URL;
const API = 'http://localhost:4000';
// const routeAddress = window.location.pref;
// console.log(routeAddress);

// const columns = [
//   {
//     Header: 'Date Created',
//     accessor: 'dateCreated',
//     headerStyle: { whiteSpace: 'unset' },
//     style: { whiteSpace: 'unset' },
//   },
//   {
//     Header: 'Title',
//     accessor: 'title',
//     headerStyle: { whiteSpace: 'unset' },
//     style: { whiteSpace: 'unset' },
//   },
// ];

function Case(props) {
  const [ready, setReady] = useState(false);
  // const [caseId, setCaseId] = useState('');
  // const [caseTitle, setCaseTitle] = useState('');
  // const [caseStatus, setCaseStatus] = useState('');
  // const [referralType, setReferralType] = useState('');
  // const [legalPlan, setLegalPlan] = useState('');
  // const [dates, setDates] = useState([]);
  // const [caseNotes, setCaseNotes] = useState([]);
  // const [client, setClient] = useState({});
  // const [attorney, setAttorney] = useState({});
  // const [paralegal, setParalegal] = useState({});
  // const [assistant, setAssistant] = useState({});
  // const [opposingParty, setOpposingParty] = useState({});
  // const [associatedContact, setAssociatedContact] = useState({});
  
  useEffect(() => {
    const options = {
      method: 'GET',
    };
    fetch(`${API}/case/CASEID-123456`, options)
      .then((result) => result.json())
      .then((data) => props.getCase(data[0]))
      .then(() => setReady(true));
  }, []);

  return (
    <>
      {ready  
        ? <>
          <CaseForm /> 
          <h3>Staff</h3>
          <Staff />
          <br />
          <h3>Opposing Party</h3>
          <OpposingParty />
          <br />
          <h3>Oposing Attorney</h3>
          <OpposingAttorney />
          <br />
          <h3>Reffering Party</h3>
          <RefferingPartys />
          <br />
          <h3>Associated Contacts</h3>
          <AssociatedContacts />
        </>
        : null}
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  // selectedCase: state.selectedCase,
});

const mapDispatchToProps = (dispatch) => ({
  getCase: (data) => dispatch({
    type: 'CASE_FETCH',
    payload: data,
  }),
  // updateCase: (data) => dispatch(updateCaseAction(data)),
});

Case.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Case);
