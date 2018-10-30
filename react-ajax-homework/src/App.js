import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer';
import Pokemon from './Pokemon';



const endPoint = 'https://pokeapi.co/api/v2/pokemon'

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      logged: false,
      pokemon: []
    }


  }
  handleLogin = (username, logged) => {
    this.setState({
      username: username,
      logged: logged
    })
  }
  getPokemon = async (req, res) => {
    try {
      const pokemon = await fetch(endPoint);
      const pokemonJS = await pokemon.json();

      return pokemonJS;

    } catch (err) {
      res.send(err)
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        {!this.state.logged ? <MainContainer handleLogin={this.handleLogin} /> : <Pokemon />}
      </div>
    );
  }
}

export default App;
