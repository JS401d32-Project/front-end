import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// showing attorneys and assistants with an add button

const API = 'http://localhost:4000';

function Staff(props) {
  const [attorneys, setAttorneys] = useState([]);
  const [assistants, setAssistants] = useState([]);

  useEffect(() => {
    //   setCaseId(props.currentCase.caseId);
    setAttorneys(props.currentCase.staffAttorneys);
    setAssistants(props.currentCase.staffAssistants);
  });

  return (
    <>
      <h5>Attorneys</h5>
      <ul>
        {attorneys.map((attorney) => {
          return <a href={`${API}/contact/${attorney.id}`} key={attorney.id}>{attorney.firstName + attorney.lastName}</a>;  
        })}
      </ul>
      <h5>Asistants</h5> 
      <ul>
        {assistants.map((assistant) => {
          return <a href={`${API}/contact/${assistant.id}`} key={assistant.id}>{assistant.firstName + assistant.lastName}</a>;  
        })}
      </ul> 
    </>
  );
}

const mapStateToProps = (state) => ({
  currentCase: state.currentCase,
  // selectedCase: state.selectedCase,
});
  
// const mapDispatchToProps = (dispatch) => ({
//   getCase: (id) => dispatch(getCaseAction(id)),
//   updateCase: (data) => dispatch(updateCaseAction(data)),
// });
  
Staff.propTypes = {
  props: PropTypes.object,
  getCase: PropTypes.func,
  currentCase: PropTypes.object,
  updateCase: PropTypes.func,
};
  
export default connect(mapStateToProps, null)(Staff);
