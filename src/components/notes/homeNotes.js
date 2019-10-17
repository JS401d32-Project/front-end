import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './notes.css';
import PropTypes from 'prop-types';
import noteActions from '../../store/actions/notes-action';
// import Modal from './details-modal';
import ReactTable from 'react-table';
import 'react-table/react-table.css';



const columns = [
  {
    Header: 'Date',
    accessor: 'dateCreated',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Title',
    accessor: 'title',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    // TODO put in the link to note details
  },
  {
    Header: 'Author',
    accessor: 'author',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },

];


const Notes = (props) => {
  useEffect(() => {
    props.fetchNotes();
  }, []);

  
  return (
    <>
    <div className="caseList" style={{ textAlign: 'center', padding: '50px' }}>
      <ReactTable
      manual
      minRows={0}
      pageSize={1}
      data={props.notes}
      columns={columns}
      pages={0}
      defaultPageSize={5}
      showPagination={true}
    /></div>
    </>
  );
};


const mapStateToProps = (state) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(noteActions.fetchNotes()),
});


Notes.propTypes = {
  fetchNotes: PropTypes.func,
  notes: PropTypes.array,
};


export default connect(mapStateToProps, mapDispatchToProps)(Notes);
