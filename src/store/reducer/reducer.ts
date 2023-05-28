import { AppState, Action, SET_REVIEWS, SET_SELECTED_LANGUAGE } from '../../utils/types';

const initialState: AppState = {
  reviews: [],
  selectedLanguage: 'ru',
};

const reducer = (state = initialState, action: Action): AppState => {
  switch (action.type) {
    case SET_REVIEWS:
      return { ...state, reviews: action.payload };
    case SET_SELECTED_LANGUAGE:
      return { ...state, selectedLanguage: action.payload };
    default:
      return state;
  }
};

export default reducer;
