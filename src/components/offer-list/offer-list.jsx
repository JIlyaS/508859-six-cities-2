import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ActionCreator from '../../action-creator/action-creator';
import OfferCard from '../offer-card/offer-card';
import Operation from '../../operation/operation';
import {getClassOfferCardName, getLocalStorageLogin} from '../../utils';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this._changeFavoriteOfferClickHandler = this._changeFavoriteOfferClickHandler.bind(this);
  }

  render() {
    const {offers, classOfferCard, activeOfferMouseEnterHandler, deactiveOfferMouseLeaveHandler} = this.props;
    const classCard = getClassOfferCardName(classOfferCard);
    return <div className={classCard.list}>
      {offers.map((offer) => <OfferCard
        offerId={offer.id}
        offer={offer}
        key={offer.id}
        activeOfferMouseEnterHandler={activeOfferMouseEnterHandler}
        deactiveOfferMouseLeaveHandler={deactiveOfferMouseLeaveHandler}
        changeFavoriteOfferClickHandler={this._changeFavoriteOfferClickHandler}
        classCard={classCard}
      />)}
    </div>;
  }

  _changeFavoriteOfferClickHandler(offerId, isFavorite) {
    const {changeOfferFavorite, getLogin} = this.props;
    getLogin();
    const login = getLocalStorageLogin();
    if (login) {
      const status = isFavorite === true ? 0 : 1;
      changeOfferFavorite(offerId, status);
    }
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeOfferMouseEnterHandler: PropTypes.func.isRequired,
  deactiveOfferMouseLeaveHandler: PropTypes.func.isRequired,
  changeOfferFavorite: PropTypes.func.isRequired,
  getLogin: PropTypes.func.isRequired,
  classOfferCard: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeOfferCard: state.userReducer.activeOfferCard,
});

const mapDispatchToProps = (dispatch) => ({
  activeOfferMouseEnterHandler: (offerCard) => dispatch(ActionCreator.changeActiveCard(offerCard)),
  deactiveOfferMouseLeaveHandler: () => dispatch(ActionCreator.removeActiveCard()),
  changeOfferFavorite: (offerId, status) => dispatch(Operation.changeOfferFavorite(offerId, status)),
  getLogin: () => dispatch(Operation.getLogin()),
});

export {OfferList};

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
