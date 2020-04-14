import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(respose => respose.json())
      .then(users => this.setState({ monsters: users }));

  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    })

  }

  render() {
    const { monsters, searchField } = this.state;

    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h2>Monster Rolodex</h2>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange} />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }


}

export default App;
