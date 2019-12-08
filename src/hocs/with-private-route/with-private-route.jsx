import React, {PureComponent} from 'react';
import {Route, Redirect} from 'react-router-dom';

const withPrivateRoute = (Component, isAuth, path) => {
  class WithPrivateRoute extends PureComponent {
    render() {
      return <Route
        {...this.props}
        render={
          (props) => isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect to={path} />
          )
        }
      />;
    }
  }

  WithPrivateRoute.propTypes = {};

  return WithPrivateRoute;
};

export default withPrivateRoute;
