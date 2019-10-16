import React from 'react';
import { connect } from 'react-redux';
import './notes.css';
import noteActions from '../../store/actions/notes-action';

const Notes = (props) => {
  return (

    <>
            <ul>
                {props.notes.map((notes, _id) => (

                    <li key={_id}>
                        <p>{notes.date}</p>
                        <p>{notes.title}</p>
                        <p> {notes.author}</p>
                        <p>{notes.type}</p>
                    </li>
                ))}
            </ul>
    </>

  );
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(noteActions.fetchNotes()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Notes);
