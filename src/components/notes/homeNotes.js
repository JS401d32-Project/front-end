import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './notes.css';
import noteActions from '../../store/actions/notes-action';
import Modal from './details-modal';

const Notes = (props) => {
  useEffect(() => {
    props.fetchNotes();
  }, []);
  

  return (


    <>
            <ul>
                {props.notes.map((notes, _id) => (

                    <li key={_id}>
                      <Modal  />
                        <p>{notes.title} </p>
                        <p>{notes.date}</p>
                        <p> {notes.type}</p>
                        <p>{notes.content}</p>

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
