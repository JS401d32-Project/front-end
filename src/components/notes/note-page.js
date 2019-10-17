import React, { useEffect } from 'react';

const API = process.env.REACT_APP_API;

export default function Note() {
  useEffect(() => {
    const routeAddress = window.location.pathname.split('/');
    const currentId = routeAddress[2];

    const options = {
      method: 'GET',
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
