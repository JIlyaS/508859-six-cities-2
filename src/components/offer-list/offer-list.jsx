import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

class OfferList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOfferCard: {}
    };
    this._activeOfferMouseEnterHandler = this._activeOfferMouseEnterHandler.bind(this);
    this._cardTitleClickHandler = this._cardTitleClickHandler.bind(this);
  }

  render() {
    const {offers} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => <OfferCard
        offerId={id}
        offer={offer}
        key={id}
        activeOfferMouseEnterHandler={this._activeOfferMouseEnterHandler}
        cardTitleClickHandler={this._cardTitleClickHandler}
      />)}
    </div>;
  }

  _cardTitleClickHandler(evt, offerId) {
    evt.preventDefault();
    const {updatePathApp} = this.props;
    const newPath = `/offer/${offerId}`;
    history.pushState(null, null, newPath);
    updatePathApp(newPath, offerId);
  }

  _activeOfferMouseEnterHandler(activeOffer) {
    this.setState({activeOfferCard: activeOffer});
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        isPremium: PropTypes.bool.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.oneOf([`apartment`, `private room`, `house`, `hotel`])
      })
  ),
  updatePathApp: PropTypes.func.isRequired
};

export default OfferList;
