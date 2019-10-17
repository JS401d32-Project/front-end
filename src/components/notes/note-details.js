import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './notes.css';
import noteActions from '../../store/actions/notes-action';

const Note = (props) => {
  const [noteStatus, setNoteStatus] = useState(false);
  useEffect(() => {
    props.fetchOneNote(props.id)
      .then(() => {
        setNoteStatus(true);
      });
  }, []);


  return (

    <>
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
    </>

  );
};

Note.propTypes = {
  id: PropTypes.string,
  fetchOneNote: PropTypes.func,
  notes: PropTypes.array,
  displayNote: PropTypes.object,
};

const mapStateToProps = (state) => ({
  notes: state.notes,
  displayNote: state.displayNote,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneNote: (id) => dispatch(noteActions.fetchOneNote(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Note);
