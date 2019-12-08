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

    this.handleFavoriteOfferClick = this.handleFavoriteOfferClick.bind(this);
  }

  handleFavoriteOfferClick(offerId, isFavorite) {
    const {onChangeOfferFavorite, onGetLogin} = this.props;
    onGetLogin();
    const login = getLocalStorageLogin();
    if (login) {
      const status = isFavorite === true ? 0 : 1;
      onChangeOfferFavorite(offerId, status);
    }
  }

  render() {
    const {offers, classOfferCard, onActiveOfferMouseEnter, onDeactiveOfferMouseLeave} = this.props;
    const classCard = getClassOfferCardName(classOfferCard);
    return <div className={classCard.list}>
      {offers.map((offer) => <OfferCard
        offerId={offer.id}
        offer={offer}
        key={offer.id}
        onActiveOfferMouseEnter={onActiveOfferMouseEnter}
        onDeactiveOfferMouseLeave={onDeactiveOfferMouseLeave}
        onFavoriteOfferClick={this.handleFavoriteOfferClick}
        classCard={classCard}
      />)}
    </div>;
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  onActiveOfferMouseEnter: PropTypes.func.isRequired,
  onDeactiveOfferMouseLeave: PropTypes.func.isRequired,
  onChangeOfferFavorite: PropTypes.func.isRequired,
  onGetLogin: PropTypes.func.isRequired,
  classOfferCard: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeOfferCard: state.userReducer.activeOfferCard,
});

const mapDispatchToProps = (dispatch) => ({
  onActiveOfferMouseEnter: (offerCard) => dispatch(ActionCreator.changeActiveCard(offerCard)),
  onDeactiveOfferMouseLeave: () => dispatch(ActionCreator.removeActiveCard()),
  onChangeOfferFavorite: (offerId, status) => dispatch(Operation.changeOfferFavorite(offerId, status)),
  onGetLogin: () => dispatch(Operation.getLogin()),
});

export {OfferList};

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
