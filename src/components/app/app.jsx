import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import DetailInfo from '../detail-info/detail-info';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: `/`,
      offerId: -1
    };

    this._updatePathApp = this._updatePathApp.bind(this);
  }

  render() {
    return <Fragment>{this._getPageScreen(this.props)}</Fragment>;
  }

  _getPageScreen(props) {
    const {offers} = props;
    const {offerId} = this.state;
    switch (location.pathname) {
      case `/`:
        return <Main offers={offers} updatePathApp={this._updatePathApp} />;
      case `/offer/${offerId}`:
        const currentOffer = offers.find((offer) => offer.id === offerId);
        return <DetailInfo offer={currentOffer} />;
    }

    return null;
  }

  _updatePathApp(pathname, offerId) {
    this.setState({pathname, offerId});
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
        type: PropTypes.oneOf([`apartment`, `private room`, `house`, `hotel`])
      })
  )
};

export default App;
