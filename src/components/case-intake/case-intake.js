import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import caseActions from '../../store/actions/case-action';

const CaseIntake = (props) => {
  const [newCaseNotes, setNewCaseNotes] = useState({});
  const [newCaseClient, setNewCaseClient] = useState('');

  
  function handleSubmit(event) {
    event.preventDefault();
    props.addNewCase({
      newCaseClient: { newCaseClient }, 
      caseNotes: newCaseNotes,
    });
  }

  return (
    <>
        <h2> Case Intake </h2>
        <h3>Edit New Case </h3>
        <h4> -- Potential New -- </h4>

      <form onSubmit={handleSubmit}>
        <div id="contactName" onChange={(event) => setNewCaseClient(event.target.value)}>

        <input 
                    type='text'
                    value={newCaseClient.lastName}
                    placeholder='Last Name'
                />
                 <input 
                    type='text'
                    value={newCaseClient.firstName}
                    placeholder='First Name'
                />
                <input 
                    type='text'
                    value={newCaseClient.SSN}
                    placeholder='SSN'
                />
                <input 
                    type='text'
                    value={newCaseClient.birthDate}
                    placeholder='Birthdate'
                />
             <input 
                    type='text'
                    value={newCaseClient.homeAddress}
                    placeholder='Home Street Address'
                />
                 <input 
                    type='text'
                    value={newCaseClient.homeAddress2}
                    placeholder='Home Street Address 2'
                />
                <input 
                    type='text'
                    value={newCaseClient.homeCity}
                    placeholder='Home City'
                />
                <input 
                    type='text'
                    value={newCaseClient.homeState}
                    placeholder='Home State'
                />
                <input 
                    type='text'
                    value={newCaseClient.homeZip}
                    placeholder='Home Zip'
                />
                <input 
                    type='text'
                    value={newCaseClient.workCompany}
                    placeholder='Work Company Name'
                />
                <input 
                    type='text'
                    value={newCaseClient.workStreet}
                    placeholder='Work Street Address'
                />
                <input 
                    type='text'
                    value={newCaseClient.workStreet2}
                    placeholder='Work Street Address 2'
                />
                <input 
                    type='text'
                    value={newCaseClient.workCity}
                    placeholder='Work City'
                />
                <input 
                    type='text'
                    value={newCaseClient.workState}
                    placeholder='Work State'
                />
                <input 
                    type='text'
                    value={newCaseClient.workZip}
                    placeholder='Work Zip'
                />
                 <input 
                    type='text'
                    value={newCaseClient.emailMain}
                    placeholder='Main E-mail'
                />
                <input 
                    type='text'
                    value={newCaseClient.emailBackup}
                    placeholder='Backup E-mail'
                />
                <input 
                    type='text'
                    value={newCaseClient.primaryPhone}
                    placeholder='Primary Phone'
                />
                <input 
                    type='text'
                    value={newCaseClient.secondaryPhone}
                    placeholder='Secondary Phone'
                />
                <input 
                    type='text'
                    value={newCaseClient.mobilePhone}
                    placeholder='Mobile Phone'
                />
                <input 
                    type='text'
                    value={newCaseClient.fax}
                    placeholder='Fax'
                />
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
    </>
  );
};

const mapStateToProps = (state) => ({
  caseIntake: state.caseIntake,
});
    
const mapDispatchToProps = (dispatch) => ({
  addNewCase: (data) => dispatch(caseActions.addNewCase(data)),
});
    
CaseIntake.propTypes = {
  addNewCase: PropTypes.func,
};
  

export default connect(mapStateToProps, mapDispatchToProps)(CaseIntake);
