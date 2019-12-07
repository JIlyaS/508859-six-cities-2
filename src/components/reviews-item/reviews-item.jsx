import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {convertRating} from '../../utils';

class ReviewsItem extends PureComponent {
  render() {
    const {review: {rating, date, comment, user: {avatar, name}, dateTime}} = this.props;
    return <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: convertRating(rating) + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{date}</time>
      </div>
    </li>;
  }
}

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  })
};

export default ReviewsItem;
