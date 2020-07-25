import React, {Component} from 'react';
import './App.css';
import Cardlist from './Cardlist';
import Searchbar from './Searchbar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      characters: [],
      searchbar: ''
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => {
      return response.json()
    })
    .then(data => { 
      this.setState({characters: data.results}) 
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchbar: event.target.value });
  }

  render() {
    const { characters, searchbar } = this.state;
    const filteredChar = characters.filter(character => character.name.toLowerCase().includes(searchbar.toLowerCase()));

    if(this.state.characters.length === 0) {
      return (
        <h1 className="center">Loading</h1>
      );
    }else{
      return (
        <div className="App">
          <h1>Rick and Morty</h1>
          <Searchbar searchChange={this.onSearchChange}/>
          <Cardlist characters={filteredChar}/>
        </div>
      );
    }
  }
}

export default App;