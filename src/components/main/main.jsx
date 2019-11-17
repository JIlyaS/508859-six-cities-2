import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import SortList from '../sort-list/sort-list';
import MainEmpty from '../main-empty/main-empty';
import Header from '../header/header';
import withSortList from '../../hocs/with-sort-list/with-sort-list';
import {
  getMapCoordinates,
  sortOfferList,
  getActiveCityCoordinate
} from "../../utils";
import {getCurrectCityOffers} from '../../selectors/selectors';

const SortListWrapped = withSortList(SortList);

class Main extends PureComponent {
  render() {
    const {offers, city, activeSortName, activeOfferCard} = this.props;

    if (!offers.length) {
      return false;
    }
    const currectOffers = sortOfferList(offers, activeSortName);
    const coordinates = getMapCoordinates(currectOffers, activeOfferCard);
    const activeCityCoordinate = getActiveCityCoordinate(currectOffers, city);
    return (
      <div className="page page--gray page--main">
        <Header />
        <main
          className={`page__main page__main--index ${currectOffers.length ===
            0 && `page__main--index-empty`}`}
        >
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList />
            </section>
          </div>
          <div className="cities">
            {currectOffers.length ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {currectOffers.length} places to stay in {city}
                  </b>
                  <SortListWrapped />
                  <OfferList offers={currectOffers} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      activeCityCoordinate={activeCityCoordinate.coordinateCity}
                      coordinates={coordinates}
                      activeCoordinate={activeOfferCard.location}
                    />
                  </section>
                </div>
              </div>
            ) : (
              <MainEmpty />
            )}
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  city: PropTypes.string.isRequired,
  activeSortName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeOfferCard: PropTypes.shape({
    id: PropTypes.string,
    location: PropTypes.object,
  }),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.actionUser.city,
  offers: getCurrectCityOffers(state),
  activeSortName: state.actionUser.activeSortName,
  activeOfferCard: state.actionUser.activeOfferCard,
});

export {Main};

export default connect(mapStateToProps)(Main);
