import { Component } from 'react';
//Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log('constructor');

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
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log('render');

    const { monsters, searchString } = this.state;
    const { OnSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Monster'
          onChange={OnSearchChange}
        />

        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
