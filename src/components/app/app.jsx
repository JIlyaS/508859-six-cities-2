import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import ReactNotification from 'react-notifications-component';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import FavoritesList from '../favorites-list/favorites-list';
import DetailInfo from '../detail-info/detail-info';
import withSignIn from '../../hocs/with-sign-in/with-sign-in';
import Operation from '../../operation/operation';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route';
import ActionCreator from '../../action-creator/action-creator';
import '../../../node_modules/react-notifications-component/dist/theme.css';

class App extends PureComponent {

  render() {
    const {isAuthorizationRequired} = this.props;
    const SignInWrapped = withPrivateRoute(withSignIn(SignIn), isAuthorizationRequired, `/`);
    const FavoritesListWrapper = withPrivateRoute(FavoritesList, !isAuthorizationRequired, `/login`);

    return (
      <Fragment>
        <ReactNotification />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={SignInWrapped} exact />
          <Route path="/offer/:offerId" component={DetailInfo} exact />
          <Route path="/favorites" component={FavoritesListWrapper} exact />
        </Switch>
      </Fragment>
    );
  }

  componentDidMount() {
    const {loadOffers, requireAuthorization} = this.props;
    loadOffers();
    if (localStorage.getItem(`login`)) {
      requireAuthorization(false);
    }
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.userReducer.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => dispatch(Operation.loadOffers()),
  requireAuthorization: (auth) => dispatch(ActionCreator.requireAuthorization(auth)),
});

App.propTypes = {
  loadOffers: PropTypes.func.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
