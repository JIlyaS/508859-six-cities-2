import * as React from 'react';

import {WithSignInProps, WithSignInState} from '../../types/types';

const withSignIn = (Component) => {
  class WithSignIn extends React.PureComponent<WithSignInProps, WithSignInState> {
    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``
      };

      this.handleValueFormChange = this.handleValueFormChange.bind(this);
    }

    handleValueFormChange(evt, nameInput) {
      this.setState({[nameInput]: evt.target.value});
    }

    render() {
      const {email, password} = this.state;

      return <Component
        {...this.props}
        email={email}
        password={password}
        onValueFormChange={this.handleValueFormChange}
      />;
    }
  }

  return WithSignIn;
};

export default withSignIn;
