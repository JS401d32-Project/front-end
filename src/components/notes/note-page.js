import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const API = process.env.REACT_APP_API;

/**
 * Note component displays notes related to the case on the case page
 * @visibleName Note
 */
function Note(props) {
  useEffect(() => {
    const routeAddress = window.location.pathname.split('/');
    const currentId = routeAddress[2];

    const options = {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${props.user.token}`,
      }),
    };

    fetch(`${API}/note/${currentId}`, options)
      .then((result) => result.json());
  }, []);

  return (
    <>
      <div className='caseContainer'>
      <p>hi</p>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Note.propTypes = {
  /**
   * Note label.
   */
  user: PropTypes.object,
};

export default connect(mapStateToProps, null)(Note);
