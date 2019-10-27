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
  }

  render() {
    const {offers} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => <OfferCard
        offer={offer}
        key={id}
        activeOfferMouseEnterHandler={this._activeOfferMouseEnterHandler}
      />)}
    </div>;
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
  )
};

export default OfferList;
