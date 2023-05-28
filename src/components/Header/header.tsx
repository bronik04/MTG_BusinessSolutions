import React, { ChangeEvent } from 'react';
import { HeaderProps, HeaderState } from '../../utils/types';

class Header extends React.Component<HeaderProps, HeaderState> {
  interval: NodeJS.Timeout | undefined;

  state: HeaderState = {
    currentTime: new Date().toLocaleTimeString(),
    selectedLanguage: 'ru',
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    this.setState({ selectedLanguage });
    this.props.onLanguageChange(selectedLanguage);
  };

  render() {

    const { selectedLanguage, currentTime } = this.state;

    return (
      <header className='header'>
        <div className='header__container'>
          <a href="#"
             className='logo'
             tabIndex={0}
          >
            Logo
          </a>
          <div className='header__control'>
            <select
              tabIndex={1}
              className='header__select'
              value={selectedLanguage}
              onChange={this.handleLanguageChange}
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <div className='header__clock'>{ currentTime }</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
