import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/reducer';

const CityList = (props) => {
  const {city, allOffers, changeCityClickHandler} = props;
  const offerCityNames = allOffers.map((offer) => offer.city.name);
  return <ul className="locations__list tabs__list">
    {[...new Set(offerCityNames)].map((offerCity) => <li className="locations__item" key={`location-${offerCity}`}>
      <a
        className={`locations__item-link tabs__item ${city === offerCity && `tabs__item--active`}`}
        href="#"
        onClick={() => changeCityClickHandler(allOffers, offerCity)}
      >
        <span>{offerCity}</span>
      </a>
    </li>)}
  </ul>;
};

CityList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCityClickHandler: PropTypes.func.isRequired,
  allOffers: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  allOffers: state.allOffers
});

const mapDispatchToProps = (dispatch) => ({
  changeCityClickHandler: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  }
});

export {CityList};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
