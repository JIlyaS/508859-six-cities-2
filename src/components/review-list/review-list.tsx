import * as React from 'react';

import ReviewItem from '../review-item/review-item';
import {MAX_REVIEWS} from '../../constants';
import {ReviewListProps} from '../../types/types';

const ReviewList: React.FunctionComponent<ReviewListProps> = (props) => {
  const {reviews} = props;
  const sortedReviews = (reviews.sort((prevReview, currReview) => currReview.dateTimestamp - prevReview.dateTimestamp)).slice(0, MAX_REVIEWS);
  return <ul className="reviews__list">
    {sortedReviews.map((review) => <ReviewItem review={review} key={`review${review.id}`}/>)}
  </ul>;
};

export default ReviewList;
