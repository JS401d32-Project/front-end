import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactActions from '../../store/actions/contacts-action';

const Contact = (props) => {
  const [contactReady, setContactReady] = useState(false);
  // let contactId = null;
  // if (props.type === 'client'){
  //   contactId = props.currentCase.client.id;
  // }
  // if (props.type === 'attorney'){
  //   console.log('SUB ID', props.name);
  //   contactId = props.name;
  // }
  const { id } = props.currentCase.client;

  useEffect(() => {
    props.fetchContact(id)
      .then(() => setContactReady(true));
  }, []);


  return (
    <>
      { contactReady
        ? <>
          <p>{props.contacts[0].lastName}</p>
          <p>{props.contacts[0].firstName}</p>
          <p>{props.contacts[0].email}</p>
        </>
        : null}
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
