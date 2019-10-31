import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import DetailInfo from '../detail-info/detail-info';

class App extends Component {
  static _getPageScreen(props) {
    const {offers} = props;
    const regPathId = /\/offer\/([0-9]+)/;
    const idPath = Array.isArray(location.pathname.match(regPathId)) && location.pathname.match(regPathId)[1];

    switch (location.pathname) {
      case `/`:
        return <Main offers={offers} />;
      case `/offer/${idPath}`:
        const currentOffer = offers.find((offer) => offer.id === Number(idPath));
        return <DetailInfo offer={currentOffer} />;
    }

    return null;
  }

  render() {
    return <Fragment>{App._getPageScreen(this.props)}</Fragment>;
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        isPremium: PropTypes.bool.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.oneOf([`apartment`, `private room`, `house`, `hotel`]),
        coordinate: PropTypes.array.isRequired,
        photos: PropTypes.array.isRequired,
        features: PropTypes.array.isRequired,
        insideProperties: PropTypes.array.isRequired
      })
  )
};

export default App;
