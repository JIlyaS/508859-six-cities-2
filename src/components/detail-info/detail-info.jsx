import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ReviewsList from '../reviews-list/reviews-list';
import CommentForm from '../comment-form/comment-form';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import withCommentForm from '../../hocs/with-comment-form/with-comment-form';
import {getMapCoordinates, convertRating, getOtherCityOffers} from '../../utils';
import Operation from '../../operation/operation';

const CommentFormWrapped = withCommentForm(CommentForm);

class DetailInfo extends PureComponent {
  render() {
    if (!this.props.offers.length) {
      return null;
    }
    const {
      currentOffer: {
        isPremium,
        price,
        title,
        rating,
        photos,
        features,
        insideProperties,
        hostUser,
        city,
      },
      otherOffers,
      activeOfferCard,
      reviews,
      idPath,
    } = this.props;

    const coordinates = getMapCoordinates(otherOffers, activeOfferCard);
    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {photos.map((photo, id) => (
                  <div className="property__image-wrapper" key={`photo-${id}`}>
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
                    className="property__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
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
                  {features.map((feature, id) => (
                    <li
                      className="property__feature property__feature--entire"
                      key={`feature-${id}`}
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
                    {insideProperties.map((insideProperty, id) => (
                      <li
                        className="property__inside-item"
                        key={`inside-property-${id}`}
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
                  <CommentFormWrapped idHotel={idPath} />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                activeCityCoordinate={city.location}
                coordinates={coordinates}
                activeCoordinate={activeOfferCard.location}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <OfferList offers={otherOffers} isNearPlace />
            </section>
          </div>
        </main>
      </div>
    );
  }

  componentDidMount() {
    const {idPath, loadReviews} = this.props;
    loadReviews(idPath);
  }
}

DetailInfo.propTypes = {
  idPath: PropTypes.string.isRequired,
  currentOffer: PropTypes.shape({
    city: PropTypes.object.isRequired,
    isPremium: PropTypes.bool.isRequired,
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
  activeOfferCard: PropTypes.shape({
    id: PropTypes.string,
    location: PropTypes.object
  }),
  offers: PropTypes.array.isRequired,
  loadReviews: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentOffer: state.appReducer.offers.find((offer) => offer.id === `id${Number(ownProps.idPath)}`),
  otherOffers: getOtherCityOffers(ownProps.idPath, state.appReducer.offers),
  activeOfferCard: state.userReducer.activeOfferCard,
  offers: state.appReducer.offers,
  reviews: state.appReducer.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: (idHotel) => {
    dispatch(Operation.loadReviews(idHotel));
  },
});

export {DetailInfo};

export default connect(mapStateToProps, mapDispatchToProps)(DetailInfo);
