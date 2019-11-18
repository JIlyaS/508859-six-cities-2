import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ActionCreator from '../../action-creator/action-creator';

const CityList = (props) => {
  const {city, offers, cities, changeCityClickHandler} = props;
  return <ul className="locations__list tabs__list">
    {[...new Set(cities)].map((offerCity) => <li className="locations__item" key={`location-${offerCity}`}>
      <a
        className={`locations__item-link tabs__item ${city === offerCity && `tabs__item--active`}`}
        href="#"
        onClick={() => changeCityClickHandler(offers, offerCity)}
      >
        <span>{offerCity}</span>
      </a>
    </li>)}
  </ul>;
};

CityList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCityClickHandler: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    city: state.userActions.city,
    offers: state.appActions.offers,
    cities: state.appActions.offers.map((offer) => offer.city.name)
  });

const mapDispatchToProps = (dispatch) => ({
  changeCityClickHandler: (offers, city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(offers, city));
  }
});

export {CityList};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
