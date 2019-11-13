import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import SortList from '../sort-list/sort-list';
import MainEmpty from '../main-empty/main-empty';
import withSortList from '../../hocs/with-sort-list/with-sort-list';
import {getMapCoordinates, sortOfferList} from '../../utils';

const SortListWrapped = withSortList(SortList);

class Main extends PureComponent {
  render() {
    const {offers, city, activeOfferCard} = this.props;
    const coordinates = getMapCoordinates(offers, activeOfferCard);
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img
                    className="header__logo"
                    src="/img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main
          className={`page__main page__main--index ${offers.length === 0 && `page__main--index-empty`}`}
        >
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList />
            </section>
          </div>
          <div className="cities">
            {offers.length ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {offers.length} places to stay in {city}
                  </b>
                  <SortListWrapped />
                  <OfferList offers={offers} />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      coordinates={coordinates}
                      activeCoordinate={activeOfferCard.coordinate}
                    />
                  </section>
                </div>
              </div>
            ) : <MainEmpty />}
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeOfferCard: PropTypes.shape({
    id: PropTypes.string,
    coordinate: PropTypes.array
  })
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: sortOfferList(state.offers, state.activeSortName),
  activeOfferCard: state.activeOfferCard
});

export {Main};

export default connect(mapStateToProps)(Main);
