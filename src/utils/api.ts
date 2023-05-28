import { setReviews } from '../store/actions/actions';
import store from '../store/store';


export const fetchData = () => {
  const { selectedLanguage } = store.getState();

  const url = `http://localhost:3001/${selectedLanguage}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      store.dispatch(setReviews(data));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};
