import React, {PureComponent} from 'react';

const withSignIn = (Component) => {
  class WithSignIn extends PureComponent {
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

  WithSignIn.propTypes = {};

  return WithSignIn;
};

export default withSignIn;
