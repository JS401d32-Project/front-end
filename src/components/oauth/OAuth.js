import React, { useEffect } from 'react';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userActions from '../../store/actions/user-actions';
import If from '../if/If';

const OAuth = (props) => {
  useEffect(() => {
    props.saveToken(cookie.load('X-401d19-OAuth-token'));
  }, []);

  const onLogout = () => {
    cookie.remove('X-401d19-OAuth-token');
    props.removeToken();
  };

  return (
    <>
      <If condition={!props.token}>
        <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=profile+email&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Foauth&response_type=code&client_id=596229894893-3nfgsdoa4cmfvi6r1i6la8jucb5606df.apps.googleusercontent.com">Test Oauth</a>
      </If>
      <If condition={props.token}>
        <p>{props.token}</p>
        <button onClick={onLogout}>Logout</button>
      </If>
    </>
  );
};

OAuth.propTypes = {
  removeToken: PropTypes.func,
  saveToken: PropTypes.func,
  token: PropTypes.string,
};

const mapStateToProps = (state) => ({
  token: state.users.token,
});

const mapDispatchToProps = (dispatch) => ({
  saveToken: (token) => dispatch(userActions.saveToken(token)),
  removeToken: () => dispatch(userActions.removeToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OAuth);
