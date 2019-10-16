import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import contactActions from '../../store/actions/contacts-action';
import Notes from "../notes/homeNotes";

const Contacts = (props) => {
  const [contactLastName, setLastName] = useState('');
  const [contactFirstName, setFirstName] = useState('');
  const [contactPhoneNumber, setPhoneNumber] = useState('');
  const [contactEmail, setEMail] = useState('');

  
  useEffect(() => {
    props.fetchContacts();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    props.addContact({
      lastName: contactLastName,
      firstName: contactFirstName, 
      phoneNumber: contactPhoneNumber, 
      eMail: contactEmail,
    });
  }

  return (
    <>
        <ul>
            {props.contacts.map((contact, _id) => (

         <li key={_id}>
           <p>Last Name: {contact.lastName}</p>
           <p>First Name: {contact.firstName}</p>
           <p> Phone Number: {contact.phoneNumber}</p>
           <p>E-Mail: {contact.eMail}</p>
           </li>
            ))}

        </ul>

        <h1> Add Contacts</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={contactLastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder='last name'
                />
                 <input 
                    type='text'
                    value={contactFirstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder='first name'
                />
                 <input 
                    type='text'
                    value={contactPhoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder='Primary Phone'
                />
                 <input 
                    type='text'
                    value={contactEmail}
                    onChange={(event) => setEMail(event.target.value)}
                    placeholder='E-Mail'
                />
                <button type="submit">Add Contact</button>
                <footer id={'notes'}><Notes/></footer>
            </form>
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
