export interface AppState {
  reviews: Review[];
  selectedLanguage: string;
}

export interface Review {
  // id: number;
  name: string;
  review: string;
  date: string;
}

export interface HeaderProps {
  onLanguageChange: (selectedLanguage: string) => void;
}

export interface HeaderState {
  currentTime: string;
  selectedLanguage: string,
}

export interface MainProps {
  reviews: Review[];
}

export interface MainState {
  currentPage: number;
}

export interface ReviewListProps {
  reviews: Review[];
}

export interface ReviewItemProps {
  review: Review;
}

export interface PaginationProps {
  pageNumbers: number[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface Action {
  type: string;
  payload: any;
}

export const SET_REVIEWS = 'SET_REVIEWS';
export const SET_SELECTED_LANGUAGE = 'SET_SELECTED_LANGUAGE';
