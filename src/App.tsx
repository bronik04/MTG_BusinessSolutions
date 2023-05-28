import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header/header';
import Main from './components/Main/main';
import { setSelectedLanguage } from './store/actions/actions';
import store from './store/store';
import { fetchData } from './utils/api';

class App extends React.Component {
  componentDidMount() {
    fetchData()
  }

  handleLanguageChange = (selectedLanguage: string) => {
    store.dispatch(setSelectedLanguage(selectedLanguage));
    fetchData();
  };

  render() {
    return (
      <Provider store={store}>
        <Header onLanguageChange={this.handleLanguageChange}/>
        <Main/>
      </Provider>
    );
  }
}

export default App;
