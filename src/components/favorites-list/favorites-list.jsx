import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import PageLayout from '../page-layout/page-layout';
import Operation from '../../operation/operation';
import OfferCard from '../offer-card/offer-card';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {getClassOfferCardName} from '../../utils';
import {OfferCardNames} from '../../constants';

class FavoritesList extends PureComponent {
  constructor(props) {
    super(props);

    this._changeFavoriteOfferClickHandler = this._changeFavoriteOfferClickHandler.bind(this);
  }

  render() {
    const {favoriteOffers} = this.props;

    if (!favoriteOffers.length) {
      return <FavoritesEmpty />;
    }

    const favoriteCities = [...new Set(favoriteOffers.map((offer) => offer.city.name))];
    const classCard = getClassOfferCardName(OfferCardNames.FAVORITE_OFFER);

    return <PageLayout pageName="favorites">
      <Fragment>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoriteCities.map((city, index) => (
                  <li className="favorites__locations-items" key={`${city}-${index}`}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favoriteOffers.filter((offer) => offer.city.name === city).map((offer) => <OfferCard
                        offerId={offer.id}
                        offer={offer}
                        key={offer.id}
                        activeOfferMouseEnterHandler={() => {}}
                        deactiveOfferMouseLeaveHandler={() => {}}
                        changeFavoriteOfferClickHandler={this._changeFavoriteOfferClickHandler}
                        classCard={classCard}
                        isFavoriteOffer
                      />)}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link to="/" className="footer__logo-link">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </Fragment>
    </PageLayout>;
  }

  componentDidMount() {
    const {loadFavorites} = this.props;
    loadFavorites();
  }

  _changeFavoriteOfferClickHandler(offerId, isFavorite) {
    const {changeOfferFavorite} = this.props;
    const status = isFavorite === true ? 0 : 1;
    changeOfferFavorite(offerId, status);
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favoriteOffers: state.appReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites: () => dispatch(Operation.loadFavorites()),
  changeOfferFavorite: (offerId, status) => dispatch(Operation.changeOfferFavorite(offerId, status)),
});

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  loadFavorites: PropTypes.func.isRequired,
  changeOfferFavorite: PropTypes.func.isRequired,
};

export {FavoritesList};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
