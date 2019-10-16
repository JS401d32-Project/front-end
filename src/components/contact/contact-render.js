import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactActions from '../../store/actions/contacts-action';


const Contact = (props) => {
  const id = 'ck1sgh6tn003r0728x2jpmy52';
  useEffect(() => {
    props.fetchContact(id)
      .then(((results) => console.log(results)));
  }, []);

  // const client = {
  //   lastName: 'testing',
  //   firstName: 'testing2',
  //   email: 'test@gmail.com',
  // };

  return (
    <>
      <h3>Client Information</h3>
      {/*<p>{props.contact.lastName}</p>*/}
      {/*<p>{props.contact.firstName}</p>*/}
      {/*<p>{props.contact.email}</p>*/}
      <p></p>
      <p></p>
    </>
  );
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContact: () => dispatch(contactActions.fetchContact()),
});

Contact.propTypes = {
  fetchContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
