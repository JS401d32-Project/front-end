import React, { useEffect } from 'react';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userActions from '../../store/actions/user-actions';
import If from '../if/If';

const OAuth = (props) => {
  useEffect(() => {
    const token = cookie.load('X-401d19-OAuth-token');
    const userName = cookie.load('userName');
    const userID = cookie.load('userID');
    const profile = { token, userName, userID };
    props.saveProfile(profile);
  }, []);

  const onLogout = () => {
    cookie.remove('X-401d19-OAuth-token');
    cookie.remove('userID');
    cookie.remove('userName');
    props.removeProfile();
  };

  return (
    <>
      <If condition={!props.id}>
        <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=profile+email&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Foauth&response_type=code&client_id=596229894893-3nfgsdoa4cmfvi6r1i6la8jucb5606df.apps.googleusercontent.com">Test Oauth</a>
      </If>
      <If condition={props.id}>
        <p>Hello, {props.userName}!</p>
        <button onClick={onLogout}>Logout</button>
      </If>
    </>
  );
};

OAuth.propTypes = {
  removeProfile: PropTypes.func,
  saveProfile: PropTypes.func,
  id: PropTypes.string,
  token: PropTypes.string,
  userName: PropTypes.string,
};

const mapStateToProps = (state) => ({
  token: state.user.token,
  id: state.user.userID,
  userName: state.user.userName,

});

const mapDispatchToProps = (dispatch) => ({
  saveProfile: (profile) => dispatch(userActions.saveProfile(profile)),
  removeProfile: () => dispatch(userActions.removeProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OAuth);
