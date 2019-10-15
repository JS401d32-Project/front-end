import React from 'react';

function runOauth() {
  return ({
    method: 'get',
    url: 'https://accounts.google.com/o/oauth2/v2/auth?scope=profile+email&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Foauth&client_id=596229894893-3nfgsdoa4cmfvi6r1i6la8jucb5606df.apps.googleusercontent.com',
  }).catch((error) => {
    console.log(error);
  }).then((response) => {
    console.log(response);
  });
}


function App() {
  return (
    <>
      <h1>Hello JS 401!</h1>
      <button onSubmit={runOauth}>Test Oauth</button>
    </>
  );
}

export default App;
