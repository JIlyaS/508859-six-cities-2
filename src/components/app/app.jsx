import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import FavoritesList from '../favorites-list/favorites-list';
import DetailInfo from '../detail-info/detail-info';
import withSignIn from '../../hocs/with-sign-in/with-sign-in';
import Operation from '../../operation/operation';
import withPrivateRoute from '../../hocs/with-private-route/with-private-route';
import ActionCreator from '../../action-creator/action-creator';

class App extends PureComponent {

  render() {
    const {isAuthorizationRequired} = this.props;
    const SignInWrapped = withPrivateRoute(withSignIn(SignIn), isAuthorizationRequired, `/`);
    const FavoritesListWrapper = withPrivateRoute(FavoritesList, !isAuthorizationRequired, `/login`);

    return (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={SignInWrapped} exact />
        <Route path="/offer/:offerId" component={DetailInfo} exact />
        <Route path="/favorites" component={FavoritesListWrapper} exact />
      </Switch>
    );
  }

  componentDidMount() {
    const {loadOffers, requireAuthorization} = this.props;
    loadOffers();
    if (localStorage.getItem(`login`)) {
      requireAuthorization();
    }
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.userReducer.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => dispatch(Operation.loadOffers()),
  requireAuthorization: () => dispatch(ActionCreator.requireAuthorization(false)),
});

App.propTypes = {
  loadOffers: PropTypes.func.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
