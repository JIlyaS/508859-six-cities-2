import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReviewsList from '../review-list/review-list';
import CommentForm from '../comment-form/comment-form';
import Map from '../map/map';
import Preloader from '../preloader/preloader';
import OfferList from '../offer-list/offer-list';
import PageLayout from '../page-layout/page-layout';
import withCommentForm from '../../hocs/with-comment-form/with-comment-form';
import {getMapCoordinates, convertRating, getOtherCityOffers, getLocalStorageLogin} from '../../utils';
import Operation from '../../operation/operation';
import {OfferCardName} from '../../constants';

const CommentFormWrapped = withCommentForm(CommentForm);

class DetailInfo extends PureComponent {

  constructor(props) {
    super(props);

    this._changeFavoriteOfferClickHandler = this._changeFavoriteOfferClickHandler.bind(this);
  }

  render() {

    if (!this.props.offers.length) {
      return <Preloader />;
    }

    const {
      currentOffer: {
        id,
        isPremium,
        isFavorite,
        price,
        title,
        rating,
        photos,
        features,
        insideProperties,
        hostUser,
        city,
        location,
      },
      otherOffers,
      reviews,
      match: {
        params: {
          offerId
        }
      },
    } = this.props;

    const coordinates = getMapCoordinates(otherOffers, {id, location});
    const login = getLocalStorageLogin();

    return (
      <PageLayout pageName="detail">
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {photos.map((photo, index) => (
                  <div
                    className="property__image-wrapper"
                    key={`photo-${index}`}
                  >
                    <img
                      className="property__image"
                      src={`${photo}`}
                      alt="Photo studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button
                    className={`property__bookmark-button ${isFavorite &&
                      `property__bookmark-button--active`} button`}
                    type="button"
                    onClick={() =>
                      this._changeFavoriteOfferClickHandler(offerId, isFavorite)
                    }
                  >
                    <svg
                      className="place-card__bookmark-icon property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: convertRating(rating) + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rating}
                  </span>
                </div>
                <ul className="property__features">
                  {features.map((feature, index) => (
                    <li
                      className="property__feature property__feature--entire"
                      key={`feature-${index}`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {insideProperties.map((insideProperty, index) => (
                      <li
                        className="property__inside-item"
                        key={`inside-property-${index}`}
                      >
                        {insideProperty}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={`../${hostUser.avatar}`}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{hostUser.name}</span>
                    <span className="property__user-status">
                      {hostUser.status ? `pro` : ``}
                    </span>
                  </div>
                  <div className="property__description">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century. An independent House, strategically
                    located between Rembrand Square and National Opera, but
                    where the bustle of the city comes to rest in this alley
                    flowery and colorful.
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;{` `}
                    <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ReviewsList reviews={reviews} />
                  {login && <CommentFormWrapped idHotel={offerId} />}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                activeCityCoordinate={city.location}
                coordinates={coordinates}
                activeCoordinate={location}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <OfferList offers={otherOffers} classOfferCard={OfferCardName.DETAIL_OFFER} />
            </section>
          </div>
        </main>
      </PageLayout>
    );
  }

  componentDidMount() {
    const {match: {params: {offerId}}, loadReviews} = this.props;
    loadReviews(offerId);
  }

  _changeFavoriteOfferClickHandler(offerId, isFavorite) {
    const {changeOfferFavorite, getLogin} = this.props;
    getLogin();
    const login = getLocalStorageLogin();
    if (login) {
      const status = isFavorite === true ? 0 : 1;
      changeOfferFavorite(offerId, status);
    }
  }
}

DetailInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      offerId: PropTypes.string
    }).isRequired
  }).isRequired,
  currentOffer: PropTypes.shape({
    id: PropTypes.number,
    location: PropTypes.shape({
      coordinate: PropTypes.array,
      zoom: PropTypes.number
    }),
    city: PropTypes.object.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
    photos: PropTypes.array.isRequired,
    features: PropTypes.array.isRequired,
    insideProperties: PropTypes.array.isRequired,
    hostUser: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired
    }),
  }),
  otherOffers: PropTypes.array.isRequired,
  offers: PropTypes.array.isRequired,
  loadReviews: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
  changeOfferFavorite: PropTypes.func.isRequired,
  getLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentOffer: state.appReducer.offers.find((offer) => offer.id === Number(ownProps.match.params.offerId)),
  otherOffers: getOtherCityOffers(ownProps.match.params.offerId, state.appReducer.offers),
  offers: state.appReducer.offers,
  reviews: state.appReducer.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (idHotel) => dispatch(Operation.loadReviews(idHotel)),
  changeOfferFavorite: (offerId, status) => dispatch(Operation.changeOfferFavorite(offerId, status)),
  getLogin: () => dispatch(Operation.getLogin()),
});

export {DetailInfo};

export default connect(mapStateToProps, mapDispatchToProps)(DetailInfo);
