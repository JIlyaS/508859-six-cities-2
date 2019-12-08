import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';
import {MAX_REVIEWS} from '../../constants';

const ReviewList = (props) => {
  const {reviews} = props;
  const sortedReviews = (reviews.sort((prevReview, currReview) => currReview.dateTimestamp - prevReview.dateTimestamp)).slice(0, MAX_REVIEWS);
  return <ul className="reviews__list">
    {sortedReviews.map((review) => <ReviewItem review={review} key={`review${review.id}`}/>)}
  </ul>;
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired
};

export default ReviewList;
