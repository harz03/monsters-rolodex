import { Component } from 'react';

class searchBox extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;
    return (
      <input
        className={className}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default searchBox;
