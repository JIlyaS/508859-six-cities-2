import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/reducer';

const CityList = (props) => {
  const {city, allOffers, cities, changeCityClickHandler} = props;
  return <ul className="locations__list tabs__list">
    {[...new Set(cities)].map((offerCity) => <li className="locations__item" key={`location-${offerCity}`}>
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
  allOffers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    city: state.city,
    offers: state.offers,
    allOffers: state.allOffers,
    cities: state.allOffers.map((offer) => offer.city.name)
  });

const mapDispatchToProps = (dispatch) => ({
  changeCityClickHandler: (allOffers, city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(allOffers, city));
  }
});

export {CityList};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
