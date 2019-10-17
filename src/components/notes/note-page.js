import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const API = process.env.REACT_APP_API;

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
      .then((result) => result.json())
      .then((data) => console.log(data));
    // .then(() => setReady(true));
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

export default connect(mapStateToProps, null)(Note);
