import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './contact.scss';

import contactActions from '../../store/actions/contacts-action';

const Contact = (props) => {
  const [contactReady, setContactReady] = useState(false);
  const { id } = props.currentCase.client;

  useEffect(() => {
    props.fetchContact(id)
      .then(() => setContactReady(true));
  }, [contactReady]);

  return (
    <>
      <div className='container'>
      { contactReady
        ? <>
          <p>{props.contacts[0].firstName} {props.contacts[0].lastName}</p>
          <p>E-email: {props.contacts[0].email}</p>
        </>
        : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContact: (id) => dispatch(contactActions.fetchContact(id)),
});

Contact.propTypes = {
  currentCase: PropTypes.object,
  fetchContact: PropTypes.func,
  contacts: PropTypes.array,

};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
