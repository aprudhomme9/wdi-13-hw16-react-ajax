import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer';
import Pokemon from './Pokemon';



const endPoint = 'https://pokeapi.co/api/v2/pokemon/'

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
  getPokemon = async (index) => {
    try {

        const original = [];
      
        const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + index + '/');

        const pokemonJS = await pokemon.json();

        
      
      return pokemonJS

    } catch (err) {
      // res.send(err)
    }
  }
  componentDidMount(){

    for(let i = 1; i < 151; i++) {
      this.getPokemon(i).then(async (pokemon) => {
        try {
          await this.state.pokemon.push(pokemon);
        } catch (err) {
          
        }
        
    })
    }

    this.setState({
        pokemon: this.state.pokemon
      })
  }
  render() {
    console.log(this.state.pokemon);
    return (
      <div className="App">
        {!this.state.logged ? <MainContainer handleLogin={this.handleLogin} /> : <Pokemon pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default App;
