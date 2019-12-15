import * as React from 'react';
import {connect} from 'react-redux';
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
import {AppProps} from '../../types/types';
import '../../../node_modules/react-notifications-component/dist/theme.css';

class App extends React.PureComponent<AppProps, null> {

  componentDidMount() {
    const {onOffersLoad, onAuthorizationRequire} = this.props;
    onOffersLoad();
    if (localStorage.getItem(`login`)) {
      onAuthorizationRequire(false);
    }
    if (!localStorage.getItem(`login`)) {
      onAuthorizationRequire(true);
    }
  }

  render() {
    const {isAuthorizationRequired} = this.props;
    const SignInWrapped = withPrivateRoute(withSignIn(SignIn), isAuthorizationRequired, `/`);
    const FavoritesListWrapper = withPrivateRoute(FavoritesList, !isAuthorizationRequired, `/login`);

    return (
      <React.Fragment>
        <ReactNotification />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={SignInWrapped} exact />
          <Route path="/offer/:offerId" component={DetailInfo} exact />
          <Route path="/favorites" component={FavoritesListWrapper} exact />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.userReducer.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  onOffersLoad: () => dispatch(Operation.loadOffers()),
  onAuthorizationRequire: (auth) => dispatch(ActionCreator.requireAuthorization(auth)),
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
