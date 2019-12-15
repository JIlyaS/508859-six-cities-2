import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';

const withPrivateRoute = (Component, isAuth, path) => {
  class WithPrivateRoute extends React.PureComponent {
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

  return WithPrivateRoute;
};

export default withPrivateRoute;
