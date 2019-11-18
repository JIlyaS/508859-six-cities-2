import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ActionCreator from '../../action-creator/action-creator';
import OfferCard from '../offer-card/offer-card';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this._cardTitleClickHandler = this._cardTitleClickHandler.bind(this);
  }

  render() {
    const {offers, isNearPlace, activeOfferMouseEnterHandler, deactiveOfferMouseLeaveHandler} = this.props;
    return <div className={isNearPlace ?
      `near-places__list places__list` :
      `cities__places-list places__list tabs__content`}
    >
      {offers.map((offer) => <OfferCard
        offerId={offer.id}
        offer={offer}
        key={offer.id}
        activeOfferMouseEnterHandler={activeOfferMouseEnterHandler}
        deactiveOfferMouseLeaveHandler={deactiveOfferMouseLeaveHandler}
        cardTitleClickHandler={this._cardTitleClickHandler}
        isNearPlace
      />)}
    </div>;
  }

  _cardTitleClickHandler(evt, offerId) {
    evt.preventDefault();
    location.replace(`/offer/${offerId}`);
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isNearPlace: PropTypes.bool,
  activeOfferMouseEnterHandler: PropTypes.func.isRequired,
  deactiveOfferMouseLeaveHandler: PropTypes.func.isRequired
};

OfferList.defaultProps = {
  isNearPlace: false
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeOfferCard: state.userActions.activeOfferCard
});

const mapDispatchToProps = (dispatch) => ({
  activeOfferMouseEnterHandler: (offerCard) => dispatch(ActionCreator.changeActiveCard(offerCard)),
  deactiveOfferMouseLeaveHandler: () => dispatch(ActionCreator.removeActiveCard())
});

export {OfferList};

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
