import { Component } from 'react';
import './search-box.style.css';

class searchBox extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default searchBox;
