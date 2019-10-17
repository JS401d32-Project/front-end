import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import './contact.scss';

import { connect } from 'react-redux';

import contactActions from '../../store/actions/contacts-action';

const Contacts = (props) => {
  const [contactLastName, setLastName] = useState('');
  const [contactFirstName, setFirstName] = useState('');
  const [contactSocialSecurity, setSocialSecurity] = useState('');
  const [contactBirthdate, setBirthdate] = useState('');
  const [contactHomeStreet, setHomeStreet] = useState('');
  const [contactHomeStreet2, setHomeStreet2] = useState('');
  const [contactHomeCity, setHomeCity] = useState('');
  const [contactHomeState, setHomeState] = useState('');
  const [contactHomeZip, setHomeZip] = useState('');
  const [contactWorkCompanyName, setWorkCompanyName] = useState('');
  const [contactWorkStreet, setWorkStreet] = useState('');
  const [contactWorkStreet2, setWorkStreet2] = useState('');
  const [contactWorkCity, setWorkCity] = useState('');
  const [contactWorkState, setWorkState] = useState('');
  const [contactWorkZip, setWorkZip] = useState('');
  const [contactEmailMain, setEmailMain] = useState('');
  const [contactEmailBackup, setEMailBackup] = useState('');
  const [contactPrimaryPhone, setPrimaryPhone] = useState('');
  const [contactSecondaryPhone, setSecondaryPhone] = useState('');
  const [contactMobilePhone, setMobilePhone] = useState('');
  const [contactFax, setFax] = useState('');
  const [contactComments, setComments] = useState('');


  useEffect(() => {
    props.fetchContacts()
      .then((result) => (result));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    props.addContact({
      lastName: contactLastName,
      firstName: contactFirstName, 
      socialSecurity: contactSocialSecurity,
      birthdate: contactBirthdate,
      homeStreet: contactHomeStreet,
      homeStreet2: contactHomeStreet2,
      homeCity: contactHomeCity,
      homeState: contactHomeState,
      homeZip: contactHomeZip,
      workCompanyName: contactWorkCompanyName,
      workStreet: contactWorkStreet,
      workStreet2: contactWorkStreet2,
      workCity: contactWorkCity,
      workState: contactWorkState,
      workZip: contactWorkZip,
      emailMain: contactEmailMain,
      emailBackup: contactEmailBackup,
      primaryPhone: contactPrimaryPhone, 
      secondaryPhone: contactSecondaryPhone,
      mobilePhone: contactMobilePhone,
      fax: contactFax,
      comments: contactComments,
    });
  }

  return (
    <>
        {/* <ul>
            {props.contacts.map((contact, _id) => (

         <li key={_id}>
           <p>Last Name: {contact.lastName}</p>
           <p>First Name: {contact.firstName}</p>
           <p> Phone Number: {contact.phoneNumber}</p>
           <p>E-Mail: {contact.eMail}</p>
           <p>SSN: {contact.socialSecurity}</p>
           <p>Birthdate: {contact.birthdate}</p>
           <p>Home Street Address: {contact.homeStreet}</p>
           <p>Home Street Address 2: {contact.homeStreet2}</p>
           <p>Home City: {contact.homeCity}</p>
           <p>Home State: {contact.homeState}</p>
           <p>Home Zip: {contact.homeZip}</p>
           <p>Company Name: {contact.workCompanyName}</p>
           <p>Work Street Address: {contact.workStreet}</p>
           <p>Work Street Address 2: {contact.workStreet2}</p>
           <p>Work City: {contact.workCity}</p>
           <p>Work State: {contact.workState}</p>
           <p>Work Zip: {contact.workZip}</p>
           <p>Main E-mail: {contact.emailMain}</p>  
           <p>Backup E-mail: {contact.emailBackup}</p>         
           <p>Primary Phone: {contact.primaryPhone}</p>
           <p>Secondary Phone: {contact.secondaryPhone}</p>
           <p>Mobile Phone: {contact.mobilePhone}</p>
           <p>Fax: {contact.fax}</p>
           <p>Contact Notes: {contact.comments}</p>
          </li>
            ))}

        </ul> */}
      <div className='container'>
        <h1> Add Contacts</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={contactLastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder='Last Name'
                />
                 <input 
                    type='text'
                    value={contactFirstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder='First Name'
                />
                <input 
                    type='text'
                    value={contactSocialSecurity}
                    onChange={(event) => setSocialSecurity(event.target.value)}
                    placeholder='SSN'
                />
                <input 
                    type='text'
                    value={contactBirthdate}
                    onChange={(event) => setBirthdate(event.target.value)}
                    placeholder='Birthdate'
                />
                <input 
                    type='text'
                    value={contactHomeStreet}
                    onChange={(event) => setHomeStreet(event.target.value)}
                    placeholder='Home Street Address'
                />
                 <input 
                    type='text'
                    value={contactHomeStreet2}
                    onChange={(event) => setHomeStreet2(event.target.value)}
                    placeholder='Home Street Address 2'
                />
                <input 
                    type='text'
                    value={contactHomeCity}
                    onChange={(event) => setHomeCity(event.target.value)}
                    placeholder='Home City'
                />
                <input 
                    type='text'
                    value={contactHomeState}
                    onChange={(event) => setHomeState(event.target.value)}
                    placeholder='Home State'
                />
                <input 
                    type='text'
                    value={contactHomeZip}
                    onChange={(event) => setHomeZip(event.target.value)}
                    placeholder='Home Zip'
                />
                <input 
                    type='text'
                    value={contactWorkCompanyName}
                    onChange={(event) => setWorkCompanyName(event.target.value)}
                    placeholder='Work Company Name'
                />
                <input 
                    type='text'
                    value={contactWorkStreet}
                    onChange={(event) => setWorkStreet(event.target.value)}
                    placeholder='Work Street Address'
                />
                <input 
                    type='text'
                    value={contactWorkStreet2}
                    onChange={(event) => setWorkStreet2(event.target.value)}
                    placeholder='Work Street Address 2'
                />
                <input 
                    type='text'
                    value={contactWorkCity}
                    onChange={(event) => setWorkCity(event.target.value)}
                    placeholder='Work City'
                />
                <input 
                    type='text'
                    value={contactWorkState}
                    onChange={(event) => setWorkState(event.target.value)}
                    placeholder='Work State'
                />
                <input 
                    type='text'
                    value={contactWorkZip}
                    onChange={(event) => setWorkZip(event.target.value)}
                    placeholder='Work Zip'
                />
                 <input 
                    type='text'
                    value={contactEmailMain}
                    onChange={(event) => setEmailMain(event.target.value)}
                    placeholder='Main E-mail'
                />
                <input 
                    type='text'
                    value={contactEmailBackup}
                    onChange={(event) => setEMailBackup(event.target.value)}
                    placeholder='Backup E-mail'
                />
                <input 
                    type='text'
                    value={contactPrimaryPhone}
                    onChange={(event) => setPrimaryPhone(event.target.value)}
                    placeholder='Primary Phone'
                />
                <input 
                    type='text'
                    value={contactSecondaryPhone}
                    onChange={(event) => setSecondaryPhone(event.target.value)}
                    placeholder='Secondary Phone'
                />
                <input 
                    type='text'
                    value={contactMobilePhone}
                    onChange={(event) => setMobilePhone(event.target.value)}
                    placeholder='Mobile Phone'
                />
                <input 
                    type='text'
                    value={contactFax}
                    onChange={(event) => setFax(event.target.value)}
                    placeholder='Fax'
                />
                <input 
                    type='text'
                    value={contactComments}
                    onChange={(event) => setComments(event.target.value)}
                    placeholder='Additional Comments'
                />
                <button type="submit">Add Contact</button>

            </form>
      </div>
    </>
            
  );
};


const mapStateToProps = (state) => ({
  contacts: state.contacts,
});
  
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactActions.fetchContacts()),
  addContact: (data) => dispatch(contactActions.addContact(data)),
});
  
Contacts.propTypes = {
  fetchContacts: PropTypes.func,
  addContact: PropTypes.func,
  contacts: PropTypes.array,
};


export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
