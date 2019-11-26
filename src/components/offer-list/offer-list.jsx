import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ActionCreator from '../../action-creator/action-creator';
import OfferCard from '../offer-card/offer-card';
import Operation from '../../operation/operation';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this._changeFavoriteOfferClickHandler = this._changeFavoriteOfferClickHandler.bind(this);
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
        changeFavoriteOfferClickHandler={this._changeFavoriteOfferClickHandler}
        isNearPlace
      />)}
    </div>;
  }

  _changeFavoriteOfferClickHandler(offerId, isFavorite) {
    const {changeOfferFavorite, getLogin, login} = this.props;
    getLogin();
    if (login) {
      const status = isFavorite === true ? 0 : 1;
      changeOfferFavorite(offerId, status);
    }
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isNearPlace: PropTypes.bool,
  activeOfferMouseEnterHandler: PropTypes.func.isRequired,
  deactiveOfferMouseLeaveHandler: PropTypes.func.isRequired,
  changeOfferFavorite: PropTypes.func.isRequired,
  getLogin: PropTypes.func.isRequired,
  login: PropTypes.any,
};

OfferList.defaultProps = {
  isNearPlace: false
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeOfferCard: state.userReducer.activeOfferCard,
  login: state.appReducer.login
});

const mapDispatchToProps = (dispatch) => ({
  activeOfferMouseEnterHandler: (offerCard) => dispatch(ActionCreator.changeActiveCard(offerCard)),
  deactiveOfferMouseLeaveHandler: () => dispatch(ActionCreator.removeActiveCard()),
  changeOfferFavorite: (offerId, status) => dispatch(Operation.changeOfferFavorite(offerId, status)),
  getLogin: () => dispatch(Operation.getLogin()),
});

export {OfferList};

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
