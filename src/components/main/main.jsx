import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import PageLayout from '../page-layout/page-layout';
import CityList from '../city-list/city-list';
import SortList from '../sort-list/sort-list';
import MainEmpty from '../main-empty/main-empty';
import Preloader from '../preloader/preloader';
import withSortList from '../../hocs/with-sort-list/with-sort-list';
import {
  getMapCoordinates,
  getActiveCityCoordinate,
  sortOfferList
} from "../../utils";
import {getCurrentCityOffers} from '../../selectors/selectors';
import {OfferCardName} from '../../constants';

const SortListWrapped = withSortList(SortList);

const Main = (props) => {
  const {offers, city, isOffersFetching, activeSortName, activeOfferCard} = props;
  const isOffersLoading = isOffersFetching && offers.length === 0;

  const currentOffers = sortOfferList(offers, activeSortName);
  const coordinates = getMapCoordinates(currentOffers, activeOfferCard);
  const activeCityCoordinate = getActiveCityCoordinate(currentOffers);

  if (isOffersLoading) {
    return <Preloader />;
  }

  return (
    <PageLayout pageName="main">
      <main
        className={`page__main page__main--index ${currentOffers.length ===
          0 && `page__main--index-empty`}`}
      >
        <Fragment><h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList />
            </section>
          </div>
          <div className="cities">
            {currentOffers.length ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {currentOffers.length} places to stay in {city}
                  </b>
                  <SortListWrapped />
                  <OfferList offers={currentOffers} classOfferCard={OfferCardName.MAIN_OFFER} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      activeCityCoordinate={activeCityCoordinate.cityCoordinates}
                      coordinates={coordinates}
                      activeCoordinate={activeOfferCard.location}
                      city={city}
                    />
                  </section>
                </div>
              </div>
            ) : (
              <MainEmpty />
            )}
          </div>
        </Fragment>
      </main>
    </PageLayout>
  );
};

Main.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  activeOfferCard: PropTypes.shape({
    id: PropTypes.number,
    location: PropTypes.object,
  }).isRequired,
  isOffersFetching: PropTypes.bool.isRequired,
  activeSortName: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.userReducer.city,
  offers: getCurrentCityOffers(state),
  isOffersFetching: state.appReducer.isOffersFetching,
  activeOfferCard: state.userReducer.activeOfferCard,
  activeSortName: state.userReducer.activeSortName,
});

export {Main};

export default connect(mapStateToProps)(Main);
