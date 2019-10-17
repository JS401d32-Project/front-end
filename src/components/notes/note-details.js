import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './notes.scss';
import noteActions from '../../store/actions/notes-action';

/**
 * Note component get case details from back-end database and display them
 * @visibleName Note
 */
const Note = (props) => {
  const [noteStatus, setNoteStatus] = useState(false);

  useEffect(() => {
    props.fetchOneNote(props.id, props.user.token)
      .then(() => {
        setNoteStatus(true);
      });
  }, []);


  return (

    <React.Fragment>
    {noteStatus
      ? <ul>
              <li>Case Id: {props.displayNote.caseId}</li>
              <li>Title: {props.displayNote.title}</li>
              <li>Author: {props.displayNote.author}</li>
              <li>Date: {props.displayNote.dateCreated}</li>
              <li>Content: {props.displayNote.content}</li>
        </ul>
      : null
    } 
    </React.Fragment>

  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
  displayNote: state.displayNote,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneNote: (id, token) => dispatch(noteActions.fetchOneNote(id, token)),
});

Note.propTypes = {
  /**
   * Note label.
   */
  id: PropTypes.string,
  fetchOneNote: PropTypes.func,
  notes: PropTypes.array,
  displayNote: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
