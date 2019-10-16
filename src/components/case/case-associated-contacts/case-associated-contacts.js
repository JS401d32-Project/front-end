import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// showing attorneys and assistants with an add button

const API = 'http://localhost:4000';

function AssociatedContact(props) {
  const [associatedContacts, setAssociatedContacts] = useState([]);

  useEffect(() => {
    setAssociatedContacts(props.currentCase.associatedContacts);
  });

  return (
    <>
      <ul>
        {associatedContacts.map((attorney) => {
          return <a href={`${API}/contact/${attorney.id}`} key={attorney.id}>{attorney.firstName + attorney.lastName}</a>;  
        })}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
});
  
  
AssociatedContact.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};
  
export default connect(mapStateToProps, null)(AssociatedContact);
