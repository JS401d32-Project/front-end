import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './contact.scss';

import contactActions from '../../store/actions/contacts-action';

const Contact = (props) => {
  const [contactReady, setContactReady] = useState(false);
  const { id } = props.currentCase.client;

  useEffect(() => {
    props.fetchContact(id, props.user.token)
      .then(() => setContactReady(true));
  }, [contactReady]);

  return (
    <React.Fragment>
      <div className='clientContainer'>

      { contactReady
        ? <React.Fragment>
          <p>{props.contacts[0].firstName} {props.contacts[0].lastName}</p>
          <ul>
            <li className='clientLI'>Home Address: {props.contacts[0].homeStreet}</li>
            <li className='clientLI'>Home Address 2: {props.contacts[0].homeStreet2}</li>
            <li className='clientLI'>Home City: {props.contacts[0].homeCity}</li>
            <li className='clientLI'>Home Zip: {props.contacts[0].homeZip}</li>
            <li className='clientLI'>Home State: {props.contacts[0].homeState}</li>
            <li className='clientLI'>Home Phone: {props.contacts[0].homePhone}</li>
            <li className='clientLI'>Cell Phone: {props.contacts[0].cellPhone}</li>
            <li className='clientLI'>Work Phone: {props.contacts[0].workPhone}</li>
            <li className='clientLI'>Work Address: {props.contacts[0].workStreet}</li>
            <li className='clientLI'>Work Address 2: {props.contacts[0].workStreet2}</li>
            <li className='clientLI'>E-mail: {props.contacts[0].emailMain}</li>
            <li className='clientLI'>E-mail 2: {props.contacts[0].emailBackup}</li>
            <li className='clientLI'>Fax: {props.contacts[0].fax}</li>
            <li className='clientLI'>SSN: {props.contacts[0].socialSecurity}</li>
            <li className='clientLI'>Comments: {props.contacts[0].contactComment}</li>
          </ul>
        </React.Fragment>
        : null}

      </div>
    </React.Fragment>
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
