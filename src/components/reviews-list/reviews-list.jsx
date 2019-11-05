import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../reviews-item/reviews-item';

const ReviewsList = (props) => {
  const {reviews} = props;
  return <ul className="reviews__list">
    {reviews.map((review) => <ReviewItem review={review} key={review.id}/>)}
  </ul>;
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default ReviewsList;
