import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import contactActions from '../../store/actions/contacts-action';


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

/**
 * GenericContact is a reusable component to display all the related contacts to the case
 * @visibleName GenericContact
 */

function GenericContact(props) {
  const [currentContact, setCurrentContact] = useState([]);
  const [modalState, setModalState] = useState(false);

  /**
   * It checks the type of the contact and then gets the contact data from the store
   */

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

  /**
   * It creates a pop-up screen displaying details of specific contact
   */

  function openModal(event, id) {
    props.fetchContact(id, props.user.token)
      .then(() => {
        setModalState(true);
      });
  }

  /**
   * It closes the pop-up screen with details of specific contact
   */

  function closeModal() {
    setModalState(false);
  }

  return (
    <React.Fragment>
      <ul>
          { currentContact.length < 1
            ? <li> </li>
            : currentContact.map((party, i) => {
              return <li className='contact' onClick={(event) => openModal(event, party.id)} key={i}>
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
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  contacts: state.contacts,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContact: (id, token) => dispatch(contactActions.fetchContact(id, token)),
});

GenericContact.propTypes = {
  /**
   * GenericContact label.
   */
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
  fetchContact: PropTypes.func,
  contacts: PropTypes.array,
  type: PropTypes.string,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenericContact);
