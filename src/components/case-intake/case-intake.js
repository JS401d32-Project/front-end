import React, { useState } from 'react';

import {
  transitions, positions, useAlert, Provider as AlertProvider, 
} from 'react-alert';

import AlertTemplate from 'react-alert-template-basic';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { addNewCase } from '../../store/actions/case-action';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

/**
 * CaseIntake components collects new data from users and save it to database
 * @visibleName CaseIntake
 */
const CaseIntake = (props) => {
  const [client, setClient] = useState({});
  const [caseStatus, setCaseStatus] = useState('');
  const [referralType, setReferralType] = useState('');
  const [legalPlan, setLegalPlan] = useState('');
  const [newCaseNotes, setNewCaseNotes] = useState('');

  const alert = useAlert();

  
  const clearState = () => {
    setClient({ });
    setCaseStatus('');
    setReferralType('');
    setLegalPlan('');
    setNewCaseNotes('');
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.addNewCase({
      client: {
        create: {
          lastName: client.lastName,
          firstName: client.firstName,
          SSN: client.SSN,
          birthDate: client.birthDate,
          homeAddress: client.homeAddress,
          homeAddress2: client.homeAddress2,
          homeCity: client.homeCity,
          homeState: client.homeState,
          homeZip: client.homeZip,
          workCompany: client.workCompany,
          workStreet: client.workStreet,
          workAddress2: client.workAddress2,
          workCity: client.workCity,
          workState: client.workState,
          workZip: client.workZip,
          emailMain: client.emailMain,
          emailBackup: client.emailBackup,
          primaryPhone: client.primaryPhone,
          secondaryPhone: client.secondaryPhone,
          mobilePhone: client.mobilePhone,
          fax: client.fax,

        },
      },
      status: caseStatus,
      referralType,
      legalPlan,
      caseNotes: {
        create: {
          title: 'Intake Notes',
          content: newCaseNotes,
        },
      },

    }, props.user.token)
      .then(() => alert.show('Success!'))
      .then(() => clearState());
  }

  function handleLegalPlanChange(event) {
    setLegalPlan(event.target.value);
  }

  
  function handleReferralChange(event) {
    setReferralType(event.target.value);
  }
  
  function handleStatusChange(event) {
    setCaseStatus(event.target.value);
  }


  return (
    <>
    <AlertProvider template={AlertTemplate} {...options}>

      <div className='container'>
        <h1> Case Intake </h1>
        <h3>Edit New Case </h3>
        <h4> -- Potential New -- </h4>

      <form onSubmit={handleSubmit}>
        <div id="contactName" onChange={(event) => setClient({ ...client, [event.target.name]: event.target.value })}>

        <input 
                    name="lastName"
                    type='text'
                    value={client.lastName}
                    placeholder='Last Name'
                />
                 <input 
                    name="firstName"
                    type='text'
                    value={client.firstName}
                    placeholder='First Name'
                />
                <input 
                    name="SSN"
                    type='text'
                    value={client.SSN}
                    placeholder='SSN'
                />
                <input 
                    name='birthDate'
                    type='text'
                    value={client.birthDate}
                    placeholder='Birthdate'
                />
             <input 
                    name='homeAddress'
                    type='text'
                    value={client.homeAddress}
                    placeholder='Home Street Address'
                />
                 <input 
                    name='homeAddress2'
                    type='text'
                    value={client.homeAddress2}
                    placeholder='Home Street Address 2'
                />
                <input 
                    name='homeCity'
                    type='text'
                    value={client.homeCity}
                    placeholder='Home City'
                />
                <input 
                    name='homeState'
                    type='text'
                    value={client.homeState}
                    placeholder='Home State'
                />
                <input 
                    name='homeZip'
                    type='text'
                    value={client.homeZip}
                    placeholder='Home Zip'
                />
                <input
                    name='workCompany'
                    type='text'
                    value={client.workCompany}
                    placeholder='Work Company Name'
                />
                <input 
                    name='workStreet'
                    type='text'
                    value={client.workStreet}
                    placeholder='Work Street Address'
                />
                <input 
                    name='workAddress2'
                    type='text'
                    value={client.workStreet2}
                    placeholder='Work Street Address 2'
                />
                <input 
                    name='workCity'
                    type='text'
                    value={client.workCity}
                    placeholder='Work City'
                />
                <input 
                    name='workState'
                    type='text'
                    value={client.workState}
                    placeholder='Work State'
                />
                <input
                    name='workZip'
                    type='text'
                    value={client.workZip}
                    placeholder='Work Zip'
                />
                 <input 
                    name='emailMain'
                    type='text'
                    value={client.emailMain}
                    placeholder='Main E-mail'
                />
                <input 
                    name='emailBackup'
                    type='text'
                    value={client.emailBackup}
                    placeholder='Backup E-mail'
                />
                <input 
                    name='primaryPhone'
                    type='text'
                    value={client.primaryPhone}
                    placeholder='Primary Phone'
                />
                <input 
                    name='secondaryPhone'
                    type='text'
                    value={client.secondaryPhone}
                    placeholder='Secondary Phone'
                />
                <input 
                    name='mobilePhone'
                    type='text'
                    value={client.mobilePhone}
                    placeholder='Mobile Phone'
                />
                <input 
                    name='fax'
                    type='text'
                    value={client.fax}
                    placeholder='Fax'
                />
        </div>

        <div className='caseInformation'>

        <label> Legal Plan
          <select value={legalPlan} onChange={handleLegalPlanChange}>
            <option value='default'>Default</option>
            <option value='none'>None</option>
            <option value='hyatt'>Hyatt</option>
            <option value='arag'>ARAG</option>
          </select>
        </label>

        <label> Referral
          <select value={referralType} onChange={handleReferralChange}>
            <option value='none'>No</option>
            <option value='yes'>Yes</option>
          </select>
        </label>

        <label> Current Status
          <select value={caseStatus} onChange={handleStatusChange}>
            <option value='unset'>Unset</option>
            <option value='open'>Open</option>
            <option value='interim'>Interim</option>
            <option value='closed'>Closed</option>
          </select>
        </label>

        </div>


        <div className="intakeNotes">
            <p>--intake Notes -- </p>
            
            <input 
            type = 'text'
            value={newCaseNotes}
            onChange={(event) => setNewCaseNotes(event.target.value)}
            placeholder='Intake notes'


            />

        </div>
        <button onClick={handleSubmit}> Save Data </button>
      </form>  
    </div>

    </AlertProvider>
    </>
  );
};

const mapStateToProps = (state) => ({
  caseIntake: state.caseIntake,
  user: state.user,
});
    
const mapDispatchToProps = (dispatch) => ({
  addNewCase: (data, token) => dispatch(addNewCase(data, token)),
});
    
CaseIntake.propTypes = {
  /**
   * CaseIntake label.
   */
  addNewCase: PropTypes.func,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseIntake);
