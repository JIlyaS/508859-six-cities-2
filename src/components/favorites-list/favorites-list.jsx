import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import PageLayout from '../page-layout/page-layout';
import Operation from '../../operation/operation';
import OfferCard from '../offer-card/offer-card';
import Preloader from '../preloader/preloader';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {getClassOfferCardName} from '../../utils';
import {OfferCardName} from '../../constants';

class FavoritesList extends PureComponent {

  constructor(props) {
    super(props);

    this.handleFavoriteOfferClick = this.handleFavoriteOfferClick.bind(this);
  }

  componentDidMount() {
    const {onLoadFavorites} = this.props;
    onLoadFavorites();
  }

  handleFavoriteOfferClick(offerId, isFavorite) {
    const {onChangeOfferFavorite} = this.props;
    const status = isFavorite === true ? 0 : 1;
    onChangeOfferFavorite(offerId, status);
  }

  render() {
    const {isFavoritesFetching, favoriteOffers} = this.props;
    const isFavoritesLoading = isFavoritesFetching && favoriteOffers.length === 0;

    const favoriteCities = [...new Set(favoriteOffers.map((offer) => offer.city.name))];
    const classCard = getClassOfferCardName(OfferCardName.FAVORITE_OFFER);

    if (isFavoritesLoading) {
      return <Preloader />;
    }

    return <PageLayout pageName="favorites">
      <Fragment>
        {
          !favoriteOffers.length ? <FavoritesEmpty /> : <main className="page__main page__main--favorites">
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
                          onFavoriteOfferClick={this.handleFavoriteOfferClick}
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
        }
        <footer className="footer container">
          <Link to="/" className="footer__logo-link">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </Fragment>
    </PageLayout>;
  }
}

FavoritesList.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  onLoadFavorites: PropTypes.func.isRequired,
  isFavoritesFetching: PropTypes.bool.isRequired,
  onChangeOfferFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favoriteOffers: state.appReducer.favorites,
  isFavoritesFetching: state.appReducer.isFavoritesFetching,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites: () => dispatch(Operation.loadFavorites()),
  onChangeOfferFavorite: (offerId, status) => dispatch(Operation.changeOfferFavorite(offerId, status)),
});

export {FavoritesList};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
