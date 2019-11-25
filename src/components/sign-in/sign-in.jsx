import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Operation from '../../operation/operation';

class SignIn extends PureComponent {

  constructor(props) {
    super(props);

    this._authFormSubmitHandler = this._authFormSubmitHandler.bind(this);
  }

  render() {
    const {email, password, addValueFormChangeHandler} = this.props;
    return <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={this._authFormSubmitHandler}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(evt) => addValueFormChangeHandler(evt, `email`)}
                required=""
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(evt) => addValueFormChangeHandler(evt, `password`)}
                required=""
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>;
  }

  _authFormSubmitHandler(evt) {
    evt.preventDefault();
    const {email, password, history, checkLogin} = this.props;
    if (email.length && password.length) {
      checkLogin(email, password);
      history.push(`/`);
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkLogin: (email, password) => {
    dispatch(Operation.checkLogin(email, password));
  }
});

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,
  checkLogin: PropTypes.func.isRequired,
  addValueFormChangeHandler: PropTypes.func.isRequired,
};

export {SignIn};

export default connect(null, mapDispatchToProps)(SignIn);
