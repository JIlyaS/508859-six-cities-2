import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {getLocalStorageLogin} from '../../utils';
import {HeaderProps} from '../../types/types';

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const {isAuthorizationRequired, loginStore} = props;
  const login = loginStore || getLocalStorageLogin();
  const isAuth = !login || isAuthorizationRequired;
  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link
            to="/"
            className="header__logo-link header__logo-link--active"
          >
            <img
              className="header__logo"
              src="/img/logo.svg"
              alt="6 cities logo"
              width="81"
              height="41"
            />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              {isAuth ? (
                <Link
                  to="/login"
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__login">Sign in</span>
                </Link>
              ) : (
                <Link
                  to="/favorites"
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    {login && login.email}
                  </span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

Header.defaultProps = {
  loginStore: null
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.userReducer.isAuthorizationRequired,
  loginStore: state.appReducer.login,
});

export {Header};

export default connect(mapStateToProps)(Header);
