import React, { useEffect } from 'react';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userActions from '../../store/actions/user-actions';

const OAuth = (props) => {
  useEffect(() => {
    props.saveToken(cookie.load('X-401d19-OAuth-token'));
  }, []);

  return (
    <>
      <p>{props.token}</p>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=profile+email&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Foauth&response_type=code&client_id=596229894893-3nfgsdoa4cmfvi6r1i6la8jucb5606df.apps.googleusercontent.com">Test Oauth</a>
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  saveToken: (token) => dispatch(userActions.saveToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OAuth);

OAuth.propTypes = {
  saveToken: PropTypes.func,
  token: PropTypes.string,
};
