import * as React from 'react';
import {connect} from 'react-redux';

import ActionCreator from '../../action-creator/action-creator';
import {CityListProps} from '../../types/types';

const CityList: React.FunctionComponent<CityListProps> = (props) => {
  const {city, cities, onChangedCityClick} = props;
  return <ul className="locations__list tabs__list">
    {[...new Set(cities)].map((offerCity) => <li className="locations__item" key={`location-${offerCity}`}>
      <a
        className={`locations__item-link tabs__item ${city === offerCity && `tabs__item--active`}`}
        href="#"
        onClick={() => onChangedCityClick(offerCity)}
      >
        <span>{offerCity}</span>
      </a>
    </li>)}
  </ul>;
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    city: state.userReducer.city,
    cities: state.appReducer.offers.map((offer) => offer.city.name)
  });

const mapDispatchToProps = (dispatch) => ({
  onChangedCityClick: (city) => dispatch(ActionCreator.changeCity(city))
});

export {CityList};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
