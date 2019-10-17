import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './contact.scss';
import CaseIntake from '../case-intake/case-intake';

import contactActions from '../../store/actions/contacts-action';

const Contact = (props) => {
  const [contactReady, setContactReady] = useState(false);
  const { id } = props.currentCase.client;

  useEffect(() => {
    props.fetchContact(id, props.user.token)
      .then(() => setContactReady(true));
  }, [contactReady]);

  return (
    <>
      <div className='container'>
        <CaseIntake />
      { contactReady
        ? <>
          <p>{props.contacts[0].firstName} {props.contacts[0].lastName}</p>
          <ul>
            <li>Home Address: {props.contacts[0].homeStreet}</li>
            <li>Home Address 2: {props.contacts[0].homeStreet2}</li>
            <li>Home City: {props.contacts[0].homeCity}</li>
            <li>Home Zip: {props.contacts[0].homeZip}</li>
            <li>Home State: {props.contacts[0].homeState}</li>
            <li>Home Phone: {props.contacts[0].homePhone}</li>
            <li>Cell Phone: {props.contacts[0].cellPhone}</li>
            <li>Work Phone: {props.contacts[0].workPhone}</li>
            <li>Work Address: {props.contacts[0].workStreet}</li>
            <li>Work Address 2: {props.contacts[0].workStreet2}</li>
            <li>E-mail: {props.contacts[0].emailMain}</li>
            <li>E-mail 2: {props.contacts[0].emailBackup}</li>
            <li>Fax: {props.contacts[0].fax}</li>
            <li>SSN: {props.contacts[0].socialSecurity}</li>
            <li>Comments: {props.contacts[0].contactComment}</li>
          </ul>
        </>
        : null}

      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  contacts: state.contacts,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContact: (id, token) => dispatch(contactActions.fetchContact(id, token)),
});

Contact.propTypes = {
  currentCase: PropTypes.object,
  fetchContact: PropTypes.func,
  contacts: PropTypes.array,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
