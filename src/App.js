import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CaseHawk from './components/case-hawk/case-hawk';
import LandingPage from './components/landing-page/landing-page';
import If from './components/if/If';

const App = (props) => {
  return (
    <>
      <If condition={props.id}>
        <CaseHawk />
      </If>
      <If condition={!props.id}>
        <LandingPage />
      </If>

    </>
  );
};

const mapStateToProps = (state) => ({
  id: state.user.userID,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  id: PropTypes.string,
};
