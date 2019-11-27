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
import {PageNames} from '../../constants';

const SignInWrapped = withSignIn(SignIn, PageNames.SIGN);

class App extends PureComponent {

  render() {
    return (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={SignInWrapped} exact />
        <Route path="/offer/:offerId" component={DetailInfo} exact />
        <Route path="/favorites" component={withPrivateRoute(FavoritesList)} exact />
      </Switch>
    );
  }

  componentDidMount() {
    const {loadOffers} = this.props;
    loadOffers();
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => {
    dispatch(Operation.loadOffers());
  },
});

App.propTypes = {
  loadOffers: PropTypes.func.isRequired,
};

export {App};

export default connect(null, mapDispatchToProps)(App);
