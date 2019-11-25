import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import compose from 'recompose/compose';

import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import DetailInfo from '../detail-info/detail-info';
import withSignIn from '../../hocs/with-sign-in/with-sign-in';
import withPageLayout from '../../hocs/with-page-layout/with-page-layout';
import Operation from '../../operation/operation';
import {PageNames} from '../../constants';

const MainWrapped = compose(withPageLayout)(Main, PageNames.MAIN);
const SignInWrapped = compose(withSignIn, withPageLayout)(SignIn, PageNames.SIGN);
const DetailInfoWrapped = compose(withPageLayout)(DetailInfo, PageNames.DETAIL);

// const PrivateRoute = (({component: Component}, ...rest) => (
//   <Route
//     {...rest}
//     render={
//       (props) => props.isAuthorizationRequired ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// ));

class App extends PureComponent {

  render() {
    return <Switch>
      <Route path="/" component={MainWrapped} exact />
      <Route path="/login" component={SignInWrapped} exact />
      <Route path="/offer/:offerId" component={DetailInfoWrapped} exact />
    </Switch>;
  }

  componentDidMount() {
    const {loadOffers} = this.props;
    loadOffers();
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // isAuthorizationRequired: state.userReducer.isAuthorizationRequired
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => {
    dispatch(Operation.loadOffers());
  },
});

App.propTypes = {
  loadOffers: PropTypes.func.isRequired,
  // isAuthorizationRequired: PropTypes.bool.isRequired,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
