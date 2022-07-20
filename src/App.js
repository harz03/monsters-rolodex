import { Component } from 'react';
import CardList from './components/card-list/card-list.compontent';
import SearchBox from './components/search-box/search-box.component.jsx';
//Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

import './App.css';

class App extends Component {
  constructor() {
    super();
    // console.log('constructor');

    this.state = {
      monsters: [],
      searchString: '',
    };
  }
  OnSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };
  componentDidMount() {
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    // console.log('render');

    const { monsters, searchString } = this.state;
    const { OnSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    return (
      <div className='App'>
        <SearchBox
          className='search-box'
          onChangeHandler={OnSearchChange}
          placeholder='Search Monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
