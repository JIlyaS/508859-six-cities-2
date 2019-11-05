import React from 'react';
import PropTypes from 'prop-types';

const CityList = (props) => {
  const {allOffers, city, changeCityClickHandler} = props;
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
  allOffers: PropTypes.arrayOf(PropTypes.shape({})),
  changeCityClickHandler: PropTypes.func.isRequired
};

export default CityList;
