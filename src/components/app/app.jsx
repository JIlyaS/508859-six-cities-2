import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer';

import Main from '../main/main';
import DetailInfo from '../detail-info/detail-info';
import {OFFER_PATH_EXT, MAX_NEARBY_OFFER} from '../../constants';

class App extends Component {
  static _getPageScreen(props) {
    const {offers, allOffers, city, changeCityClickHandler} = props;
    const idPath = Array.isArray(location.pathname.match(OFFER_PATH_EXT)) && location.pathname.match(OFFER_PATH_EXT)[1];
    switch (location.pathname) {
      case `/`:
        return <Main
          allOffers={allOffers}
          offers={offers}
          city={city}
          changeCityClickHandler={changeCityClickHandler}
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
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  allOffers: PropTypes.arrayOf(PropTypes.shape({}).isRequired)
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  changeCityClickHandler: (allOffers, city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(allOffers, city));
  }
});


export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
