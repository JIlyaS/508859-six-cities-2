import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import DetailInfo from '../detail-info/detail-info';
import withSignIn from '../../hocs/with-sign-in/with-sign-in';
import {OFFER_PATH_EXT} from '../../constants';
import Operation from '../../operation/operation';

const SignInWrapped = withSignIn(SignIn);

class App extends PureComponent {
  static _getPageScreen(props) {
    const {isAuthorizationRequired} = props;
    const idPath = Array.isArray(location.pathname.match(OFFER_PATH_EXT)) && location.pathname.match(OFFER_PATH_EXT)[1];
    switch (location.pathname) {
      case `/`:
        if (isAuthorizationRequired) {
          return <SignInWrapped />;
        }
        return <Main />;
      case `/offer/${idPath}`:
        return <DetailInfo idPath={idPath} />;
    }

    return null;
  }

  render() {
    return <Fragment>{App._getPageScreen(this.props)}</Fragment>;
  }

  componentDidMount() {
    const {loadOffers} = this.props;
    loadOffers();
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.actionUser.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => {
    dispatch(Operation.loadOffers());
  },
});

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  loadOffers: PropTypes.func.isRequired,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
