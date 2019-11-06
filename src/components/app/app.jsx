import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main';
import DetailInfo from '../detail-info/detail-info';
import {OFFER_PATH_EXT, MAX_NEARBY_OFFER} from '../../constants';

class App extends Component {
  static _getPageScreen(props) {
    const {allOffers} = props;
    const idPath = Array.isArray(location.pathname.match(OFFER_PATH_EXT)) && location.pathname.match(OFFER_PATH_EXT)[1];
    switch (location.pathname) {
      case `/`:
        return <Main
          allOffers={allOffers}
        />;
      case `/offer/${idPath}`:
        const currentOffer = allOffers.find((offer) => offer.id === `id${Number(idPath)}`);
        const otherOffers = allOffers.filter((offer) => offer.id !== currentOffer.id).slice(0, MAX_NEARBY_OFFER);
        return <DetailInfo offer={currentOffer} otherOffers={otherOffers} />;
    }

    return null;
  }

  render() {
    return <Fragment>{App._getPageScreen(this.props)}</Fragment>;
  }
}

App.propTypes = {
  allOffers: PropTypes.arrayOf(PropTypes.shape({}).isRequired)
};

export default App;
