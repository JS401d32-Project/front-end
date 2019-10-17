import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CaseHawk from './components/case-hawk/case-hawk';
import LandingPage from './components/landing-page/landing-page';
import If from './If/if/If';

const App = (props) => {
  return (
    <React.Fragment>
      <If condition={props.id}>
        <CaseHawk />
      </If>
      <If condition={!props.id}>
        <LandingPage />
      </If>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  id: state.user.userID,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  id: PropTypes.string,
};
