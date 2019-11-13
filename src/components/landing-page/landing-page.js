import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import userActions from '../../store/actions/user-actions';
import logo from '../../assets/logo.png';
import './landing-page.scss';


/**
 * LandingPage component displays logo of the company
 * @visibleName LandingPage
 */
const LandingPage = (props) => {
  useEffect(() => {
    const token = cookie.load('X-401d19-OAuth-token');
    const userName = cookie.load('userName');
    const userID = cookie.load('userID');
    const profile = { token, userName, userID };
    props.saveProfile(profile);
  }, []);

  return (
    <React.Fragment>
      <div className='landingContainer'>
      <img className='bigLogo' src={logo} alt="Logo" />
      <h1>Case Hawk</h1>
        <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=profile+email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcontacts&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Foauth&response_type=code&client_id=1086380523568-m9kkuoerb8fumhvm1150knoat9ddmfl2.apps.googleusercontent.com">Login with Google</a>
      </div>
    </React.Fragment>
  );
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

LandingPage.propTypes = {
  /**
   * LandingPage label.
   */
  removeProfile: PropTypes.func,
  saveProfile: PropTypes.func,
  id: PropTypes.string,
  token: PropTypes.string,
  userName: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
