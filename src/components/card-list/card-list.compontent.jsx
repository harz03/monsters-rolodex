import { Component } from 'react';
import './card-list.component.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.props);
    return (
      <div className='main-card-container'>
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className='card-container'>
              <img
                alt={`cat ${name}`}
                src={`https://robohash.org/${id}?set=set4&size=200x200`}
              />
              <h3>{name}</h3>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
