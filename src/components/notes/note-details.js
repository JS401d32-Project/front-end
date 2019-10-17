import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './notes.css';
import noteActions from '../../store/actions/notes-action';

const Note = (props) => {
  const [noteStatus, setNoteStatus] = useState(false);

  useEffect(() => {
    props.fetchOneNote(props.id, props.user.token)
      .then(() => {
        setNoteStatus(true);
      });
  }, []);


  return (

    <>
    {noteStatus
      ? <ul>
              <li>{props.displayNote.caseId}</li>
              <li>{props.displayNote.title}</li>
              <li>{props.displayNote.author}</li>
              <li>{props.displayNote.dateCreated}</li>
              <li>{props.displayNote.content}</li>
        </ul>
      : null
    } 
    </>

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
  id: PropTypes.string,
  fetchOneNote: PropTypes.func,
  notes: PropTypes.array,
  displayNote: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
