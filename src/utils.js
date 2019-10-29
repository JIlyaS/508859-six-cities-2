import {RATING_PERSENT, MAX_RATING_COUNT} from './constants';

export const firstUpperCase = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

export const convertRating = (rating) => {
  return rating * RATING_PERSENT / MAX_RATING_COUNT;
};
