import { Component } from 'react';
//Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchedMonsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users, searchedMonsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Monster'
          onChange={(event) => {
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name
                .toLowerCase()
                .includes(event.target.value.toLocaleLowerCase());
            });
            this.setState(() => {
              return { searchedMonsters: filteredMonsters };
            });
          }}
        />

        {this.state.searchedMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
