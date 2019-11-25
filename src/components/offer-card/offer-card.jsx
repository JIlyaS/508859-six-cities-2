import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {firstUpperCase, convertRating} from '../../utils';

const OfferCard = (props) => {
  const {
    offer: {img, isPremium, isFavorite, price, title, type, rating},
    offerId,
    activeOfferMouseEnterHandler,
    deactiveOfferMouseLeaveHandler,
    changeFavoriteOfferClickHandler,
    isNearPlace
  } = props;

  return <article
    className={`${isNearPlace ? `near-places__` : `cities__place-`}card place-card`}
    onMouseEnter={() => activeOfferMouseEnterHandler(props.offer)}
    onMouseLeave={deactiveOfferMouseLeaveHandler}
  >
    {isPremium && <div className="place-card__mark">
      <span>Premium</span>
    </div>}
    <div className={`${isNearPlace ? `near-places` : `cities`}__image-wrapper place-card__image-wrapper`}>
      <a href="#">
        <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button ${isFavorite && `place-card__bookmark-button--active`} button`}
          type="button"
          onClick={() => changeFavoriteOfferClickHandler(offerId, isFavorite)}
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
  activeOfferMouseEnterHandler: PropTypes.func.isRequired,
  deactiveOfferMouseLeaveHandler: PropTypes.func.isRequired,
  changeFavoriteOfferClickHandler: PropTypes.func.isRequired,
  isNearPlace: PropTypes.bool
};

OfferCard.defaultProps = {
  isNearPlace: false
};

export default OfferCard;
