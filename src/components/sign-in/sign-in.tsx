import * as React from 'react';
import {connect} from 'react-redux';

import PageLayout from '../page-layout/page-layout';
import Operation from '../../operation/operation';
import {SignInProps} from '../../types/types';

class SignIn extends React.PureComponent<SignInProps, null> {

  constructor(props) {
    super(props);

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const {email, password, history, onCheckLogin} = this.props;
    if (email.length && password.length) {
      onCheckLogin(email, password);
      history.push(`/`);
    }
  }

  render() {
    const {email, password, onValueFormChange} = this.props;
    return <PageLayout pageName="sign">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={this._handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(evt) => onValueFormChange(evt, `email`)}
                  required
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
                  onChange={(evt) => onValueFormChange(evt, `password`)}
                  required
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
      </main>
    </PageLayout>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCheckLogin: (email, password) => {
    dispatch(Operation.checkLogin(email, password));
  }
});

export {SignIn};

export default connect(null, mapDispatchToProps)(SignIn);
