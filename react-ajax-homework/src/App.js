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
  handleBack = () => {
    this.setState({
      logged: false
    })
  }
  getPokemon = async (index) => {
    try {

      
        const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + index + '/');

        const pokemonJS = await pokemon.json();

        
      
      return pokemonJS

    } catch (err) {
      // res.send(err)
    }
  }
  componentDidMount(){

    for(let i = 1; i < 152; i++) {
      this.getPokemon(i).then(async (pokemon) => {
        try {
          await this.state.pokemon.push(pokemon);
          this.setState({
            pokemon: this.state.pokemon
          })
        } catch (err) {
          
        }
        
      })
    }
  }
  render() {
    return (
      <div className="App">
        {!this.state.logged ? <MainContainer handleLogin={this.handleLogin} /> : <Pokemon handleBack={this.handleBack} pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default App;
