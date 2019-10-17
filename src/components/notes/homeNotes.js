import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './notes.scss';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import noteActions from '../../store/actions/notes-action';
import Modal from './details-modal';
import 'react-table/react-table.css';

const columns = [
  {
    Header: 'View Details',
    accessor: 'id',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    Cell: (e) => <Modal id={e.value}/>, // eslint-disable-line
  },
  {
    Header: 'Case ID',
    accessor: 'caseId',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
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
  },
  {
    Header: 'Author',
    accessor: 'author',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },

];


/**
 * Notes component displays all the notes
 * @visibleName Notes
 */
const Notes = (props) => {
  useEffect(() => {
    props.fetchNotes(props.user.token);
  }, []);

  
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};


const mapStateToProps = (state) => ({
  notes: state.notes,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: (token) => dispatch(noteActions.fetchNotes(token)),
});


Notes.propTypes = {
  /**
   * Notes label.
   */
  fetchNotes: PropTypes.func,
  notes: PropTypes.array,
  user: PropTypes.object,
};


export default connect(mapStateToProps, mapDispatchToProps)(Notes);
