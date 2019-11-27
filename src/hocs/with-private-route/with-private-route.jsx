import React, {PureComponent} from 'react';
import {Route, Redirect} from 'react-router-dom';

const withPrivateRoute = (Component) => {
  class WithPrivateRoute extends PureComponent {
    render() {
      return <Route
        {...this.props}
        render={
          (props) => !props.isAuthorizationRequired ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />;
    }
  }

  WithPrivateRoute.propTypes = {};

  return WithPrivateRoute;
};

export default withPrivateRoute;
