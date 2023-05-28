import {
  Action,
  Review,
  SET_REVIEWS,
  SET_SELECTED_LANGUAGE
} from '../../utils/types';

export const setReviews = (reviews: Review[]): Action => ({
  type: SET_REVIEWS,
  payload: reviews,
});

export const setSelectedLanguage = (language: string): Action => ({
  type: SET_SELECTED_LANGUAGE,
  payload: language,
});
