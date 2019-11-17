import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Main from '../main/main';
import DetailInfo from '../detail-info/detail-info';
import {OFFER_PATH_EXT} from '../../constants';
import Operation from '../../operation/operation';

class App extends PureComponent {
  static _getPageScreen() {
    const idPath = Array.isArray(location.pathname.match(OFFER_PATH_EXT)) && location.pathname.match(OFFER_PATH_EXT)[1];
    switch (location.pathname) {
      case `/`:
        return <Main />;
      case `/offer/${idPath}`:
        return <DetailInfo idPath={idPath} />;
    }

    return null;
  }

  render() {
    return <Fragment>{App._getPageScreen()}</Fragment>;
  }

  componentDidMount() {
    const {loadOffers} = this.props;
    loadOffers();
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {});

const mapDispatchToProps = (dispatch) => ({
  loadOffers: () => {
    dispatch(Operation.loadOffers());
  }
});

App.propTypes = {
  loadOffers: PropTypes.func.isRequired,
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
