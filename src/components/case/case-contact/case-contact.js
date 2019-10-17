import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import contactActions from '../../../store/actions/contacts-action';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function GenericContact(props) {
  const [currentContact, setCurrentContact] = useState([]);
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    if (props.type === 'staff-attorney') {
      setCurrentContact(props.currentCase.staffAttorneys);
    }
    if (props.type === 'staff-assistants') {
      setCurrentContact(props.currentCase.staffAssistants);
    }
    if (props.type === 'opposing-parties') {
      setCurrentContact(props.currentCase.opposingParties);
    }
    if (props.type === 'opposing-attorney') {
      setCurrentContact(props.currentCase.opposingAttorneys);
    }
    if (props.type === 'referring-parties') {
      setCurrentContact(props.currentCase.referringParties);
    }
    if (props.type === 'associated-contacts') {
      setCurrentContact(props.currentCase.associatedContacts);
    }
  }, [
    props.currentCase.staffAttorneys,
    props.currentCase.staffAssistants,
    props.currentCase.opposingParties,
    props.currentCase.opposingAttorneys,
    props.currentCase.referringParties,
    props.currentCase.associatedContacts,
  ]);

  function openModal(event, id) {
    props.fetchContact(id)
      .then(() => {
        setModalState(true);
      });
  }

  function closeModal() {
    setModalState(false);
  }

  return (
    <>
      <ul>
          { currentContact.length < 1
            ? <li> </li>
            : currentContact.map((party, i) => {
              return <li onClick={(event) => openModal(event, party.id)} key={i}>
                  {`${party.firstName} ${party.lastName}`}
                </li>;
            })
          }
      </ul>
      {
        modalState
          ? <Modal
            isOpen={modalState}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Opposing Attorney Modal"
          >
            <p>First Name: {props.contacts[props.contacts.length - 1].firstName}</p>
            <p>Last Name: {props.contacts[props.contacts.length - 1].lastName}</p>
            <p>Work Phone: {props.contacts[props.contacts.length - 1].workPhone}</p>
            <p>Cell Phone: {props.contacts[props.contacts.length - 1].cellPhone}</p>
            <p>Fax: {props.contacts[props.contacts.length - 1].fax}</p>
            <p>E-mail: {props.contacts[props.contacts.length - 1].emailMain}</p>
            <ul>Work Address:
              <li>{props.contacts[props.contacts.length - 1].workStreet}</li>
              <li>{props.contacts[props.contacts.length - 1].workStreet2}</li>
            </ul>
            <p>Comment: {props.contacts[props.contacts.length - 1].contactComment}</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
          : null
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContact: (id) => dispatch(contactActions.fetchContact(id)),
});

GenericContact.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
  fetchContact: PropTypes.func,
  contacts: PropTypes.array,
  type: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenericContact);
