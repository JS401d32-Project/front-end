import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './notes.css';
import noteActions from '../../store/actions/notes-action';

const Note = (props) => {
  useEffect(() => {
    props.fetchOneNote();
  }, []);


  return (


    <>
            <ul>
                <li>{props.notes[0].title} </li>
                <li>{props.notes[0].date} </li>
                <li>{props.notes[0].type} </li>
                <li>{props.notes[0].content} </li>


            </ul>
    </>

  );
};

Note.propTypes = {
  fetchOneNote: PropTypes.func,
  notes: PropTypes.array,
};

const mapStateToProps = (state) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneNote: () => dispatch(noteActions.fetchOneNote()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Note);
