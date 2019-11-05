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
    const {offers, isNearPlace} = this.props;
    return <div className={isNearPlace ?
      `near-places__list places__list` :
      `cities__places-list places__list tabs__content`}
    >
      {offers.map((offer) => <OfferCard
        offerId={offer.id}
        offer={offer}
        key={offer.id}
        activeOfferMouseEnterHandler={this._activeOfferMouseEnterHandler}
        cardTitleClickHandler={this._cardTitleClickHandler}
        isNearPlace
      />)}
    </div>;
  }

  _cardTitleClickHandler(evt, offerId) {
    evt.preventDefault();
    location.replace(`/offer/${offerId}`);
  }

  _activeOfferMouseEnterHandler(activeOffer) {
    this.setState({activeOfferCard: activeOffer});
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isNearPlace: PropTypes.bool
};

OfferList.defaultProps = {
  isNearPlace: false
};

export default OfferList;
