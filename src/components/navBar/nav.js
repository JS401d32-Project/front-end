import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userActions from '../../store/actions/user-actions';
import logo from '../../assets/logo.png';

const NavBar = (props) => {
  const onLogout = () => {
    cookie.remove('X-401d19-OAuth-token');
    cookie.remove('userID');
    cookie.remove('userName');
    props.removeProfile();
  };

  return (
    <React.Fragment>
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
          <img className='logo' src={logo} alt="Logo" />
          <div className="nav-title">
            CaseHawk
          </div>


        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
          </label>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts Intake</Link>
          <Link to="/caseIntake">Case Intake</Link>
          <Link to="/" onClick={onLogout}>Logout</Link>
        </div>
      </div>
    </React.Fragment>
  
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeProfile: () => dispatch(userActions.removeProfile()),
});

export default connect(null, mapDispatchToProps)(NavBar);

NavBar.propTypes = {
  removeProfile: PropTypes.func,
};
