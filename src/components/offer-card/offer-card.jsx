import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {firstUpperCase, convertRating} from '../../utils';
import {OfferCardImg} from '../../constants';

const OfferCard = (props) => {
  const {
    offer: {img, isPremium, isFavorite, price, title, type, rating},
    offerId,
    onActiveOfferMouseEnter,
    onDeactiveOfferMouseLeave,
    onFavoriteOfferClick,
    classCard,
    isFavoriteOffer,
  } = props;

  return <article
    className={`${classCard.card}card place-card`}
    onMouseEnter={() => onActiveOfferMouseEnter(props.offer)}
    onMouseLeave={onDeactiveOfferMouseLeave}
  >
    {!isFavoriteOffer && isPremium && <div className="place-card__mark">
      <span>Premium</span>
    </div>}
    <div className={`${classCard.wrapper}__image-wrapper place-card__image-wrapper`}>
      <a href="#">
        <img
          className="place-card__image"
          src={img}
          width={isFavoriteOffer ? OfferCardImg.SMALL_WIDTH : OfferCardImg.WIDTH}
          height={isFavoriteOffer ? OfferCardImg.SMALL_HEIGHT : OfferCardImg.HEIGHT}
          alt="Place image"
        />
      </a>
    </div>
    <div className={`${classCard.info} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`}
          type="button"
          onClick={() => onFavoriteOfferClick(offerId, isFavorite)}
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: convertRating(rating) + `%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offerId}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{firstUpperCase(type)}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`])
  }),
  offerId: PropTypes.number.isRequired,
  onActiveOfferMouseEnter: PropTypes.func,
  onDeactiveOfferMouseLeave: PropTypes.func,
  onFavoriteOfferClick: PropTypes.func.isRequired,
  classCard: PropTypes.shape({
    card: PropTypes.string.isRequired,
    wrapper: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  isFavoriteOffer: PropTypes.bool,
};

OfferCard.defaultProps = {
  isFavoriteOffer: false,
  onActiveOfferMouseEnter: () => {},
  onDeactiveOfferMouseLeave: () => {}
};

export default OfferCard;
