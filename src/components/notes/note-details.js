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
      ? 
             <ul>
              {props.displayNote.caseId}
              {props.displayNote.title}
              {props.displayNote.author}
              {props.displayNote.dateCreated}
              {props.displayNote.content}
              hi
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
